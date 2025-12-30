import{_ as n,c as a,e,o as i}from"./app-DWByWgeb.js";const l={};function p(r,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>服务提供器是所有 Laravel 应用程序引导中心。你的应用程序自定义的服务、第三方资源包提供的服务以及 Laravel 的所有核心服务都是通过服务提供器进行注册(register)和引导(boot)的。</p><p>拿一个Laravel框架自带的服务提供器来举例子</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>class BroadcastServiceProvider extends ServiceProvider</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    protected $defer = true;</span></span>
<span class="line"><span>    public function register()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;app-&gt;singleton(BroadcastManager::class, function ($app) {</span></span>
<span class="line"><span>            return new BroadcastManager($app);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        $this-&gt;app-&gt;singleton(BroadcasterContract::class, function ($app) {</span></span>
<span class="line"><span>            return $app-&gt;make(BroadcastManager::class)-&gt;connection();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        //将BroadcastingFactory::class设置为BroadcastManager::class的别名</span></span>
<span class="line"><span>        $this-&gt;app-&gt;alias(</span></span>
<span class="line"><span>            BroadcastManager::class, BroadcastingFactory::class</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public function provides()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return [</span></span>
<span class="line"><span>            BroadcastManager::class,</span></span>
<span class="line"><span>            BroadcastingFactory::class,</span></span>
<span class="line"><span>            BroadcasterContract::class,</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务提供器<code>BroadcastServiceProvider</code>的<code>register</code>中， 为<code>BroadcastingFactory</code>的类名绑定了类实现BroadcastManager，这样就能通过服务容器来make出通过<code>BroadcastingFactory::class</code>绑定的服务<code>BroadcastManger</code>对象供应用程序使用了。</p><p>本文主要时来梳理一下laravel是如何注册、和初始化这些服务的，关于如何编写自己的服务提供器，可以参考<a href="https://d.laravel-china.org/docs/5.5/providers#deferred-providers" target="_blank" rel="noopener noreferrer">官方文档</a></p><h2 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap"><span>BootStrap</span></a></h2><p>首先laravel注册和引导应用需要的服务是发生在寻找路由处理客户端请求之前的Bootstrap阶段的，在框架的入口文件里我们可以看到，框架在实例化了<code>Application</code>对象后从服务容器中解析出了<code>HTTP Kernel</code>对象</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>$kernel = $app-&gt;make(Illuminate\\Contracts\\Http\\Kernel::class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$response = $kernel-&gt;handle(</span></span>
<span class="line"><span>    $request = Illuminate\\Http\\Request::capture()</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Kernel处理请求时会先让请求通过中间件然后在发送请求给路由对应的控制器方法， 在这之前有一个BootStrap阶段来引导启动Laravel应用程序，如下面代码所示。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public function handle($request)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>    $response = $this-&gt;sendRequestThroughRouter($request);</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    return $response;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>protected function sendRequestThroughRouter($request)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    $this-&gt;app-&gt;instance(&#39;request&#39;, $request);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Facade::clearResolvedInstance(&#39;request&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $this-&gt;bootstrap();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return (new Pipeline($this-&gt;app))</span></span>
<span class="line"><span>                    -&gt;send($request)</span></span>
<span class="line"><span>                    -&gt;through($this-&gt;app-&gt;shouldSkipMiddleware() ? [] : $this-&gt;middleware)</span></span>
<span class="line"><span>                    -&gt;then($this-&gt;dispatchToRouter());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>//引导启动Laravel应用程序</span></span>
<span class="line"><span>public function bootstrap()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (! $this-&gt;app-&gt;hasBeenBootstrapped()) {</span></span>
<span class="line"><span>	/**依次执行$bootstrappers中每一个bootstrapper的bootstrap()函数</span></span>
<span class="line"><span>        $bootstrappers = [</span></span>
<span class="line"><span>             &#39;Illuminate\\Foundation\\Bootstrap\\DetectEnvironment&#39;,</span></span>
<span class="line"><span>             &#39;Illuminate\\Foundation\\Bootstrap\\LoadConfiguration&#39;,</span></span>
<span class="line"><span>             &#39;Illuminate\\Foundation\\Bootstrap\\ConfigureLogging&#39;,</span></span>
<span class="line"><span>             &#39;Illuminate\\Foundation\\Bootstrap\\HandleExceptions&#39;,</span></span>
<span class="line"><span>             &#39;Illuminate\\Foundation\\Bootstrap\\RegisterFacades&#39;,</span></span>
<span class="line"><span>             &#39;Illuminate\\Foundation\\Bootstrap\\RegisterProviders&#39;,</span></span>
<span class="line"><span>             &#39;Illuminate\\Foundation\\Bootstrap\\BootProviders&#39;,</span></span>
<span class="line"><span>            ];*/</span></span>
<span class="line"><span>            $this-&gt;app-&gt;bootstrapWith($this-&gt;bootstrappers());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面bootstrap中会分别执行每一个bootstrapper的bootstrap方法来引导启动应用程序的各个部分</p><pre><code>1. DetectEnvironment  检查环境
2. LoadConfiguration  加载应用配置
3. ConfigureLogging   配置日至
4. HandleException    注册异常处理的Handler
5. RegisterFacades    注册Facades 
6. RegisterProviders  注册Providers 
7. BootProviders      启动Providers
</code></pre><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>namespace Illuminate\\Foundation;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Application extends Container implements ...</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function bootstrapWith(array $bootstrappers)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;hasBeenBootstrapped = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        foreach ($bootstrappers as $bootstrapper) {</span></span>
<span class="line"><span>            $this[&#39;events&#39;]-&gt;fire(&#39;bootstrapping: &#39;.$bootstrapper, [$this]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            $this-&gt;make($bootstrapper)-&gt;bootstrap($this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            $this[&#39;events&#39;]-&gt;fire(&#39;bootstrapped: &#39;.$bootstrapper, [$this]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动应用程序的最后两部就是注册服务提供这和启动提供者，如果对前面几个阶段具体时怎么实现的可以参考<a href="https://segmentfault.com/a/1190000006946685#articleHeader5" target="_blank" rel="noopener noreferrer">这篇文章</a>。在这里我们主要关注服务提供器的注册和启动。</p><p>先来看注册服务提供器，服务提供器的注册由类 <code>\\Illuminate\\Foundation\\Bootstrap\\RegisterProviders::class</code> 负责，该类用于加载所有服务提供器的 register 函数，并保存延迟加载的服务的信息，以便实现延迟加载。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>class RegisterProviders</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function bootstrap(Application $app)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //调用了Application的registerConfiguredProviders()</span></span>
<span class="line"><span>        $app-&gt;registerConfiguredProviders();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function registerConfiguredProviders()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        (new ProviderRepository($this, new Filesystem, $this-&gt;getCachedServicesPath()))</span></span>
<span class="line"><span>                    -&gt;load($this-&gt;config[&#39;app.providers&#39;]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public function getCachedServicesPath()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;bootstrapPath().&#39;/cache/services.php&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，所有服务提供器都在配置文件 app.php 文件的 providers 数组中。类 ProviderRepository 负责所有的服务加载功能：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>    class ProviderRepository</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public function load(array $providers)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            $manifest = $this-&gt;loadManifest();</span></span>
<span class="line"><span>            if ($this-&gt;shouldRecompile($manifest, $providers)) {</span></span>
<span class="line"><span>                $manifest = $this-&gt;compileManifest($providers);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            foreach ($manifest[&#39;when&#39;] as $provider =&gt; $events) {</span></span>
<span class="line"><span>                $this-&gt;registerLoadEvents($provider, $events);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            foreach ($manifest[&#39;eager&#39;] as $provider) {</span></span>
<span class="line"><span>                $this-&gt;app-&gt;register($provider);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            $this-&gt;app-&gt;addDeferredServices($manifest[&#39;deferred&#39;]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>loadManifest()</code>会加载服务提供器缓存文件<code>services.php</code>，如果框架是第一次启动时没有这个文件的，或者是缓存文件中的providers数组项与<code>config/app.php</code>里的providers数组项不一致都会编译生成<code>services.php</code>。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>    //判断是否需要编译生成services文件</span></span>
<span class="line"><span>    public function shouldRecompile($manifest, $providers)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return is_null($manifest) || $manifest[&#39;providers&#39;] != $providers;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //编译生成文件的具体过程</span></span>
<span class="line"><span>    protected function compileManifest($providers)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $manifest = $this-&gt;freshManifest($providers);</span></span>
<span class="line"><span>        foreach ($providers as $provider) {</span></span>
<span class="line"><span>            $instance = $this-&gt;createProvider($provider);</span></span>
<span class="line"><span>            if ($instance-&gt;isDeferred()) {</span></span>
<span class="line"><span>                foreach ($instance-&gt;provides() as $service) {</span></span>
<span class="line"><span>                    $manifest[&#39;deferred&#39;][$service] = $provider;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                $manifest[&#39;when&#39;][$provider] = $instance-&gt;when();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else {</span></span>
<span class="line"><span>                $manifest[&#39;eager&#39;][] = $provider;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return $this-&gt;writeManifest($manifest);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    protected function freshManifest(array $providers)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return [&#39;providers&#39; =&gt; $providers, &#39;eager&#39; =&gt; [], &#39;deferred&#39; =&gt; []];</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>缓存文件中 providers 放入了所有自定义和框架核心的服务。</li><li>如果服务提供器是需要立即注册的，那么将会放入缓存文件中 eager 数组中。</li><li>如果服务提供器是延迟加载的，那么其函数 provides() 通常会提供服务别名，这个服务别名通常是向服务容器中注册的别名，别名将会放入缓存文件的 deferred 数组中，与真正要注册的服务提供器组成一个键值对。</li><li>延迟加载如果由 event 事件激活，那么可以在 when 函数中写入事件类，并写入缓存文件的 when 数组中。</li></ul><p>生成的缓存文件内容如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>    array (</span></span>
<span class="line"><span>	    &#39;providers&#39; =&gt; </span></span>
<span class="line"><span>	    array (</span></span>
<span class="line"><span>	      0 =&gt; &#39;Illuminate\\\\Auth\\\\AuthServiceProvider&#39;,</span></span>
<span class="line"><span>	      1 =&gt; &#39;Illuminate\\\\Broadcasting\\\\BroadcastServiceProvider&#39;,</span></span>
<span class="line"><span>	      ...</span></span>
<span class="line"><span>	    ),</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>    	&#39;eager&#39; =&gt; </span></span>
<span class="line"><span>    	array (</span></span>
<span class="line"><span>          0 =&gt; &#39;Illuminate\\\\Auth\\\\AuthServiceProvider&#39;,</span></span>
<span class="line"><span>          1 =&gt; &#39;Illuminate\\\\Cookie\\\\CookieServiceProvider&#39;,</span></span>
<span class="line"><span>          ...</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        &#39;deferred&#39; =&gt; </span></span>
<span class="line"><span>        array (</span></span>
<span class="line"><span>          &#39;Illuminate\\\\Broadcasting\\\\BroadcastManager&#39; =&gt; &#39;Illuminate\\\\Broadcasting\\\\BroadcastServiceProvider&#39;,</span></span>
<span class="line"><span>          &#39;Illuminate\\\\Contracts\\\\Broadcasting\\\\Factory&#39; =&gt; &#39;Illuminate\\\\Broadcasting\\\\BroadcastServiceProvider&#39;,</span></span>
<span class="line"><span>          ...</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        &#39;when&#39; =&gt; </span></span>
<span class="line"><span>        array (</span></span>
<span class="line"><span>          &#39;Illuminate\\\\Broadcasting\\\\BroadcastServiceProvider&#39; =&gt; </span></span>
<span class="line"><span>          array (</span></span>
<span class="line"><span>          ),</span></span>
<span class="line"><span>          ...</span></span>
<span class="line"><span>    )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件触发时注册延迟服务提供器" tabindex="-1"><a class="header-anchor" href="#事件触发时注册延迟服务提供器"><span>事件触发时注册延迟服务提供器</span></a></h2><p>延迟服务提供器除了利用 IOC 容器解析服务方式激活，还可以利用 Event 事件来激活：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>    protected function registerLoadEvents($provider, array $events)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (count($events) &lt; 1) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $this-&gt;app-&gt;make(&#39;events&#39;)-&gt;listen($events, function () use ($provider) {</span></span>
<span class="line"><span>            $this-&gt;app-&gt;register($provider);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="即时注册服务提供器" tabindex="-1"><a class="header-anchor" href="#即时注册服务提供器"><span>即时注册服务提供器</span></a></h2><p>需要即时注册的服务提供器的register方法由Application的register方法里来调用：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>    class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public function register($provider, $options = [], $force = false)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (($registered = $this-&gt;getProvider($provider)) &amp;&amp; ! $force) {</span></span>
<span class="line"><span>                return $registered;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (is_string($provider)) {</span></span>
<span class="line"><span>                $provider = $this-&gt;resolveProvider($provider);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (method_exists($provider, &#39;register&#39;)) {</span></span>
<span class="line"><span>                $provider-&gt;register();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            $this-&gt;markAsRegistered($provider);</span></span>
<span class="line"><span>            if ($this-&gt;booted) {</span></span>
<span class="line"><span>                $this-&gt;bootProvider($provider);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return $provider;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        public function getProvider($provider)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            $name = is_string($provider) ? $provider : get_class($provider);</span></span>
<span class="line"><span>            return Arr::first($this-&gt;serviceProviders, function ($value) use ($name) {</span></span>
<span class="line"><span>    	        return $value instanceof $name;</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>    	}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        public function resolveProvider($provider)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            eturn new $provider($this);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        protected function markAsRegistered($provider)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            //这个属性在稍后booting服务时会用到</span></span>
<span class="line"><span>            $this-&gt;serviceProviders[] = $provider;</span></span>
<span class="line"><span>            $this-&gt;loadedProviders[get_class($provider)] = true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        protected function bootProvider(ServiceProvider $provider)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (method_exists($provider, &#39;boot&#39;)) {</span></span>
<span class="line"><span>                return $this-&gt;call([$provider, &#39;boot&#39;]);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，服务提供器的注册过程：</p><ul><li>判断当前服务提供器是否被注册过，如注册过直接返回对象</li><li>解析服务提供器</li><li>调用服务提供器的 register 函数</li><li>标记当前服务提供器已经注册完毕</li><li>若框架已经加载注册完毕所有的服务容器，那么就启动服务提供器的 boot 函数，该函数由于是 call 调用，所以支持依赖注入。</li></ul><h2 id="服务解析时注册延迟服务提供器" tabindex="-1"><a class="header-anchor" href="#服务解析时注册延迟服务提供器"><span>服务解析时注册延迟服务提供器</span></a></h2><p>延迟服务提供器首先需要添加到 Application 中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>    public function addDeferredServices(array $services)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;deferredServices = array_merge($this-&gt;deferredServices, $services);</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们之前说过，延迟服务提供器的激活注册有两种方法：事件与服务解析。</p><p>当特定的事件被激发后，就会调用 Application 的 register 函数，进而调用服务提供器的 register 函数，实现服务的注册。</p><p>当利用 Ioc 容器解析服务名时，例如解析服务名 BroadcastingFactory：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>class BroadcastServiceProvider extends ServiceProvider</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    protected $defer = true;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>    public function provides()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return [</span></span>
<span class="line"><span>            BroadcastManager::class,</span></span>
<span class="line"><span>            BroadcastingFactory::class,</span></span>
<span class="line"><span>            BroadcasterContract::class,</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Application的make方法里会通过别名BroadcastingFactory查找是否有对应的延迟注册的服务提供器，如果有的话那么 就先通过registerDeferredProvider方法注册服务提供器。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function make($abstract)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $abstract = $this-&gt;getAlias($abstract);</span></span>
<span class="line"><span>        if (isset($this-&gt;deferredServices[$abstract])) {</span></span>
<span class="line"><span>            $this-&gt;loadDeferredProvider($abstract);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return parent::make($abstract);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function loadDeferredProvider($service)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (! isset($this-&gt;deferredServices[$service])) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      	$provider = $this-&gt;deferredServices[$service];</span></span>
<span class="line"><span>        if (! isset($this-&gt;loadedProviders[$provider])) {</span></span>
<span class="line"><span>            $this-&gt;registerDeferredProvider($provider, $service);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由 deferredServices 数组可以得知，BroadcastingFactory 为延迟服务，接着程序会利用函数 loadDeferredProvider 来加载延迟服务提供器，调用服务提供器的 register 函数，若当前的框架还未注册完全部服务。那么将会放入服务启动的回调函数中，以待服务启动时调用：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public function registerDeferredProvider($provider, $service = null)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if ($service) {</span></span>
<span class="line"><span>        unset($this-&gt;deferredServices[$service]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    $this-&gt;register($instance = new $provider($this));</span></span>
<span class="line"><span>    if (! $this-&gt;booted) {</span></span>
<span class="line"><span>        $this-&gt;booting(function () use ($instance) {</span></span>
<span class="line"><span>            $this-&gt;bootProvider($instance);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还是拿服务提供器BroadcastServiceProvider来举例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>class BroadcastServiceProvider extends ServiceProvider</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    protected $defer = true;</span></span>
<span class="line"><span>    public function register()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;app-&gt;singleton(BroadcastManager::class, function ($app) {</span></span>
<span class="line"><span>            return new BroadcastManager($app);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        $this-&gt;app-&gt;singleton(BroadcasterContract::class, function ($app) {</span></span>
<span class="line"><span>            return $app-&gt;make(BroadcastManager::class)-&gt;connection();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        //将BroadcastingFactory::class设置为BroadcastManager::class的别名</span></span>
<span class="line"><span>        $this-&gt;app-&gt;alias(</span></span>
<span class="line"><span>            BroadcastManager::class, BroadcastingFactory::class</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public function provides()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return [</span></span>
<span class="line"><span>            BroadcastManager::class,</span></span>
<span class="line"><span>            BroadcastingFactory::class,</span></span>
<span class="line"><span>            BroadcasterContract::class,</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数 register 为类 <code>BroadcastingFactory</code> 向 [服务容器][1]绑定了特定的实现类 <code>BroadcastManager</code>，<code>Application</code>中的 <code>make</code> 函数里执行<code>parent::make($abstract)</code> 通过服务容器的make就会正确的解析出服务 <code>BroadcastingFactory</code>。</p><p>因此函数 <code>provides()</code> 返回的元素一定都是 <code>register()</code> 向 [服务容器][2]中绑定的类名或者别名。这样当我们利用App::make() 解析这些类名的时候，[服务容器][3]才会根据服务提供器的 register() 函数中绑定的实现类，正确解析出服务功能。</p><h2 id="启动application" tabindex="-1"><a class="header-anchor" href="#启动application"><span>启动Application</span></a></h2><p>Application的启动由类 <code>\\Illuminate\\Foundation\\Bootstrap\\BootProviders</code> 负责：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>class BootProviders</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function bootstrap(Application $app)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $app-&gt;boot();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function boot()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if ($this-&gt;booted) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $this-&gt;fireAppCallbacks($this-&gt;bootingCallbacks);</span></span>
<span class="line"><span>        array_walk($this-&gt;serviceProviders, function ($p) {</span></span>
<span class="line"><span>            $this-&gt;bootProvider($p);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        $this-&gt;booted = true;</span></span>
<span class="line"><span>        $this-&gt;fireAppCallbacks($this-&gt;bootedCallbacks);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    protected function bootProvider(ServiceProvider $provider)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (method_exists($provider, &#39;boot&#39;)) {</span></span>
<span class="line"><span>            return $this-&gt;call([$provider, &#39;boot&#39;]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引导应用Application的serviceProviders属性中记录的所有服务提供器，就是依次调用这些服务提供器的boot方法，引导完成后<code>$this-&gt;booted = true</code> 就代表应用<code>Application</code>正式启动了，可以开始处理请求了。这里额外说一句，之所以等到所有服务提供器都注册完后再来进行引导是因为有可能在一个服务提供器的boot方法里调用了其他服务提供器注册的服务，所以需要等到所有即时注册的服务提供器都register完成后再来boot。</p><blockquote><p>本文转载自github</p><p>原文链接：https://github.com/kevinyan815/Learning_Laravel_Kernel/blob/master/articles/ServiceProvider.md</p></blockquote>`,52)]))}const c=n(l,[["render",p]]),t=JSON.parse('{"path":"/php/ejib8yw4/","title":"附录十一：ServiceProvider类的注册和引导","lang":"zh-CN","frontmatter":{"title":"附录十一：ServiceProvider类的注册和引导","createTime":"2025/07/08 10:34:24","permalink":"/php/ejib8yw4/","description":"服务提供器是所有 Laravel 应用程序引导中心。你的应用程序自定义的服务、第三方资源包提供的服务以及 Laravel 的所有核心服务都是通过服务提供器进行注册(register)和引导(boot)的。 拿一个Laravel框架自带的服务提供器来举例子 在服务提供器BroadcastServiceProvider的register中， 为Broadc...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"附录十一：ServiceProvider类的注册和引导\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-12-29T16:03:14.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://docs.sreio.com/php/ejib8yw4/"}],["meta",{"property":"og:site_name","content":"Sreio Docs"}],["meta",{"property":"og:title","content":"附录十一：ServiceProvider类的注册和引导"}],["meta",{"property":"og:description","content":"服务提供器是所有 Laravel 应用程序引导中心。你的应用程序自定义的服务、第三方资源包提供的服务以及 Laravel 的所有核心服务都是通过服务提供器进行注册(register)和引导(boot)的。 拿一个Laravel框架自带的服务提供器来举例子 在服务提供器BroadcastServiceProvider的register中， 为Broadc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-29T16:03:14.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-29T16:03:14.000Z"}]]},"readingTime":{"minutes":8.24,"words":2472},"git":{"createdTime":1751942180000,"updatedTime":1767024194000,"contributors":[{"name":"sreio","username":"sreio","email":"ingwei@163.com","commits":4,"avatar":"https://avatars.githubusercontent.com/sreio?v=4","url":"https://github.com/sreio"}],"changelog":[{"hash":"6dd596b6752ea1c49be57e00b1b0c941c0324a5d","time":1767024194000,"email":"ingwei@163.com","author":"sreio","message":"feat: Add new documentation across Go, PHP, Docker, Linux, Database, Middleware, and Fundamentals, while removing some old images and files."},{"hash":"0b7d61f08c563d6514d6336c56fa0848a69e46eb","time":1752024036000,"email":"ingwei@163.com","author":"sreio","message":"README"},{"hash":"a16a3f8c5e99bfa6f2a99f497d8114454ed414e3","time":1751962383000,"email":"ingwei@163.com","author":"sreio","message":"rename"},{"hash":"7d36c2822e978ef31a2cebd3a69e67c3b9a172e9","time":1751942180000,"email":"ingwei@163.com","author":"sreio","message":"php"}]},"autoDesc":true,"filePathRelative":"languages/php/4.穿透Laravel/22.附录十一：ServiceProvider类的注册和引导/README.md","headers":[]}');export{c as comp,t as data};
