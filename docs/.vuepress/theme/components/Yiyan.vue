<template>
  <div class="hitokoto-container">
    <div class="hitokoto-card">
      <p class="hitokoto-text">{{ hitokotoText }}</p>
      <p class="hitokoto-detail" v-if="showDetail && hitokoto.from">
        --- <span>{{ hitokoto.from }}</span>
        <span v-if="hitokoto.from_who"> by:{{ hitokoto.from_who }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface HitokotoResponse {
  hitokoto: string;
  type?: string;
  from?: string;
  from_who?: string;
  creator?: string;
  uuid?: string;
  [key: string]: any;
}

interface Props {
  apiUrl?: string;
  params?: Record<string, string | number | Array<string>>;
  showDetail?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  apiUrl: 'https://v1.hitokoto.cn',
  params: () => ({}),
  showDetail: true
});

const hitokoto = ref<HitokotoResponse>({ hitokoto: '', from: '', from_who: '' });
const hitokotoText = ref<string>('');
const DEFAULT_TEXT = '时光不染,回忆不淡°';

const fetchData = async () => {
  try {
    const response: AxiosResponse<HitokotoResponse> = await axios.get(props.apiUrl, {
      params: props.params,
      timeout: 1000
    });
    hitokoto.value = response.data;
    hitokotoText.value = response.data.hitokoto;
  } catch (error) {
    if (axios.isAxiosError(error) && (error.code === 'ECONNABORTED' || error.message.includes('timeout'))) {
      hitokoto.value = { hitokoto: DEFAULT_TEXT, from: '', from_who: '' };
      hitokotoText.value = DEFAULT_TEXT;
    } else {
      console.error('Failed to fetch Hitokoto:', error);
    }
  }
};

onMounted(fetchData);
watch(() => props.params, fetchData, { deep: true });

</script>

<style scoped>
.hitokoto-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hitokoto-card {
  padding: 1rem;
  border-radius: 1rem;
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */
  text-align: end;
  min-width: 60%
}

.hitokoto-text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: start;
}

.hitokoto-detail {
  font-size: 1rem;
}
</style>
