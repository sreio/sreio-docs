<template>
  <div class="cust-datetime">
    {{ dateTimeString }}
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 格式化数字，保证两位显示
 */
function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n)
}

// 响应式日期时间字符串
const dateTimeString = ref<string>('----:--:-- --:--:--')
let timerId: number | null = null

/**
 * 更新日期时间的函数，格式：YYYY-MM-DD HH:mm:ss
 */
function updateDateTime() {
  const now = new Date()
  const year = now.getFullYear()
  const month = pad(now.getMonth() + 1)
  const day = pad(now.getDate())
  const hours = pad(now.getHours())
  const minutes = pad(now.getMinutes())
  const seconds = pad(now.getSeconds())
  dateTimeString.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

onMounted(() => {
  updateDateTime() // 立即初始化一次
  timerId = window.setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (timerId !== null) {
    clearInterval(timerId)
  }
})
</script>

<style scoped>
.cust-datetime {
  /* font-size: 1.5rem; */
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  /* color: #333; */
  text-align: end;
}
</style>
