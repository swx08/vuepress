import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-DCsLG_oX.js";const t={},p=e(`<h1 id="策略模式实现多种支付" tabindex="-1"><a class="header-anchor" href="#策略模式实现多种支付"><span>策略模式实现多种支付</span></a></h1><p>最近开发完成的项目中使用到了<strong>策略模式</strong>，实现多种支付方式，避免了后期支付方式if-else代码的冗余，也有利于后期支付的一个扩展。同时这个项目非常适合于做毕设，想了解这个项目的同学可以联系我QQ：<strong>3808898981</strong></p><p><strong>前台首页</strong></p><img src="https://ice.frostsky.com/2024/03/19/e6466dcfd4190c03c8634635e14b5831.png" alt="前台首页" style="zoom:50%;"><p><strong>后台管理员</strong></p><img src="https://ice.frostsky.com/2024/03/19/6443a37348b59cd12ff0e8cb512a3b21.png" alt="后台管理员端" style="zoom:50%;"><p><strong>后台商户端</strong></p><img src="https://ice.frostsky.com/2024/03/19/100ba6575d4378e8c3f11f7583e76001.png" alt="商户管理端" style="zoom:50%;"><h1 id="什么是策略模式呢" tabindex="-1"><a class="header-anchor" href="#什么是策略模式呢"><span>什么是策略模式呢？</span></a></h1><p><strong>策略模式（Strategy Design Pattern）</strong>，定义一堆算法类，并将每个算法分别封装起来，让它们可以互相替换，被封装起来的算法具有独立性外部不可改变其特性。</p><p>策略模式可以使算法的变化独立于使用它们的客户端（这里的客户端代指使用算法的代码）。</p><p><strong>策略模式的应用场景</strong> 策略模式最常见的应用场景是，利用它来避免冗长的 if-else 或 switch 分支判断。不过，它的作用还不止如此。它也可以像模板模式那样，提供框架的扩展点等等。</p><p>当我们需要多个功能相似的类，并且需要它们之间可以灵活切换时，就非常适合使用策略模式。</p><p><strong>策略模式的构成</strong> 策略类的定义比较简单，需要定义以下两种角色：</p><ul><li>抽象策略接口类：定义了策略类需要实现的方法规范。</li><li>策略实现类：继承自抽象策略接口，为具体策略类。</li><li>当有多个策略时，可以通过简单工厂封装所有的策略，使调用更加易用：</li></ul><p>策略工厂类：一般来说，通过一个策略工厂，将一群功能相同的策略封装起来，调用更加方便。 通过一个文件处理的例子来说明；有一个文件处理的通用类，可以处理excel、txt、exe文件。 面对不同类型的文件，返回具体对应的文件处理类，也就是具体的策略类。</p><h1 id="实战" tabindex="-1"><a class="header-anchor" href="#实战"><span>实战</span></a></h1><blockquote><p><strong>支付实体类</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: @weixueshi
 * @Create: 2023/12/31 - 11:03
 * @Version: v1.0
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pay</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 订单号
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> orderId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 商品名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 商品金额
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> price<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 支付方式
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> paymentType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>定义一个顶级支付接口</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PayStrategy</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 支付接口
     * <span class="token keyword">@param</span> <span class="token parameter">pay</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Response</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">Pay</span> pay<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>定义两个具体实现类：支付宝和微信支付</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: @weixueshi
 * @Create: 2024/3/14 - 14:48
 * @Version: v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 支付宝支付具体实现
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AlipayStrategyImpl</span>  <span class="token keyword">implements</span> <span class="token class-name">PayStrategy</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Response</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">Pay</span> pay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//支付的具体处理逻辑</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;我是支付宝支付------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Response</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * @Author: @weixueshi
 * @Create: 2024/3/14 - 14:49
 * @Version: v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 微信支付具体实现
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WechatPayStrategyImpl</span> <span class="token keyword">implements</span> <span class="token class-name">PayStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Response</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">Pay</span> pay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//支付的具体处理逻辑</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;我是微信支付------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Response</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>定义一个调用支付的服务类</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: @weixueshi
 * @Create: 2024/3/14 - 14:50
 * @Version: v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 创建支付服务类，根据用户选择的支付方式创建对应的策略对象并执行支付操作：
 */</span>
<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">&quot;payService&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PayService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">PayStrategy</span><span class="token punctuation">&gt;</span></span> payStrategyMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">PayStrategy</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">PayService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将支付宝和微信支付策略对象放入Map中</span>
        payStrategyMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;alipay&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">AlipayStrategyImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        payStrategyMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;wechat&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">WechatPayStrategyImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Response</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">Pay</span> pay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 根据用户选择的支付方式获取对应的策略对象</span>
        <span class="token class-name">PayStrategy</span> payStrategy <span class="token operator">=</span> payStrategyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>pay<span class="token punctuation">.</span><span class="token function">getPaymentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>payStrategy <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token string">&quot;支付方式不支持&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 执行支付操作</span>
        <span class="token keyword">return</span> payStrategy<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span>pay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>最后在controller层调用支付</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@CrossOrigin</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderPayController</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">PayService</span> payService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 支付接口
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/common&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Response</span> <span class="token function">commonPay</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Pay</span> pay<span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;{}支付请求进来了-----------&quot;</span><span class="token punctuation">,</span>pay<span class="token punctuation">.</span><span class="token function">getPaymentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> payService<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span>pay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>到此使用策略模式实现多种支付就已完成！</strong></p>`,29),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","策略模式实现多种支付.html.vue"]]),v=JSON.parse('{"path":"/posts/%E5%90%8E%E7%AB%AF/%E5%AE%9E%E6%88%98/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E5%AE%9E%E7%8E%B0%E5%A4%9A%E7%A7%8D%E6%94%AF%E4%BB%98.html","title":"策略模式实现多种支付","lang":"zh-CN","frontmatter":{"tag":["设计模式","SpringBoot","策略模式"],"category":["后端"],"date":"2024-03-19T00:00:00.000Z","star":true,"sticky":true,"description":"策略模式实现多种支付 最近开发完成的项目中使用到了策略模式，实现多种支付方式，避免了后期支付方式if-else代码的冗余，也有利于后期支付的一个扩展。同时这个项目非常适合于做毕设，想了解这个项目的同学可以联系我QQ：3808898981 前台首页 前台首页 后台管理员 后台管理员端 后台商户端 商户管理端 什么是策略模式呢？ 策略模式（Strategy...","head":[["meta",{"property":"og:url","content":"https://swx08.github.io/vuepress/posts/%E5%90%8E%E7%AB%AF/%E5%AE%9E%E6%88%98/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E5%AE%9E%E7%8E%B0%E5%A4%9A%E7%A7%8D%E6%94%AF%E4%BB%98.html"}],["meta",{"property":"og:site_name","content":"文学博客"}],["meta",{"property":"og:title","content":"策略模式实现多种支付"}],["meta",{"property":"og:description","content":"策略模式实现多种支付 最近开发完成的项目中使用到了策略模式，实现多种支付方式，避免了后期支付方式if-else代码的冗余，也有利于后期支付的一个扩展。同时这个项目非常适合于做毕设，想了解这个项目的同学可以联系我QQ：3808898981 前台首页 前台首页 后台管理员 后台管理员端 后台商户端 商户管理端 什么是策略模式呢？ 策略模式（Strategy..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"sixkey"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"策略模式"}],["meta",{"property":"article:published_time","content":"2024-03-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"策略模式实现多种支付\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"sixkey\\",\\"url\\":\\"https://swx08.github.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":3.41,"words":1024},"filePathRelative":"posts/后端/实战/策略模式实现多种支付.md","localizedDate":"2024年3月19日","excerpt":"\\n<p>最近开发完成的项目中使用到了<strong>策略模式</strong>，实现多种支付方式，避免了后期支付方式if-else代码的冗余，也有利于后期支付的一个扩展。同时这个项目非常适合于做毕设，想了解这个项目的同学可以联系我QQ：<strong>3808898981</strong></p>\\n<p><strong>前台首页</strong></p>\\n<img src=\\"https://ice.frostsky.com/2024/03/19/e6466dcfd4190c03c8634635e14b5831.png\\" alt=\\"前台首页\\" style=\\"zoom:50%;\\">\\n<p><strong>后台管理员</strong></p>","autoDesc":true}');export{d as comp,v as data};
