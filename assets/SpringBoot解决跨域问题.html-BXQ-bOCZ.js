import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-DCsLG_oX.js";const o={},p=t(`<h1 id="springboot解决跨域问题" tabindex="-1"><a class="header-anchor" href="#springboot解决跨域问题"><span>SpringBoot解决跨域问题</span></a></h1><h2 id="_1、添加注解-crossorigin" tabindex="-1"><a class="header-anchor" href="#_1、添加注解-crossorigin"><span>1、添加注解@CrossOrigin</span></a></h2><p>在controller层中添加此注解即可</p><h2 id="_2-统一处理" tabindex="-1"><a class="header-anchor" href="#_2-统一处理"><span>2.统一处理</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>cors<span class="token punctuation">.</span></span><span class="token class-name">CorsConfiguration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>cors<span class="token punctuation">.</span></span><span class="token class-name">UrlBasedCorsConfigurationSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>filter<span class="token punctuation">.</span></span><span class="token class-name">CorsFilter</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">// 当前跨域请求最大有效时长。这里默认1天</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token constant">MAX_AGE</span> <span class="token operator">=</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">CorsFilter</span> <span class="token function">corsFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UrlBasedCorsConfigurationSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UrlBasedCorsConfigurationSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CorsConfiguration</span> corsConfiguration <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CorsConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        corsConfiguration<span class="token punctuation">.</span><span class="token function">addAllowedOrigin</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 设置访问源地址</span>
        corsConfiguration<span class="token punctuation">.</span><span class="token function">addAllowedHeader</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 设置访问源请求头</span>
        corsConfiguration<span class="token punctuation">.</span><span class="token function">addAllowedMethod</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3 设置访问源请求方法</span>
        corsConfiguration<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token constant">MAX_AGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        source<span class="token punctuation">.</span><span class="token function">registerCorsConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span> corsConfiguration<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4 对接口配置跨域设置</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CorsFilter</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、跟2差不多" tabindex="-1"><a class="header-anchor" href="#_3、跟2差不多"><span>3、跟2差不多</span></a></h2>`,6),e=[p];function c(i,l){return s(),a("div",null,e)}const k=n(o,[["render",c],["__file","SpringBoot解决跨域问题.html.vue"]]),d=JSON.parse('{"path":"/posts/%E5%90%8E%E7%AB%AF/%E5%AE%9E%E6%88%98/SpringBoot%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.html","title":"SpringBoot解决跨域问题","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-12T00:00:00.000Z","category":["后端"],"tag":["SpringBoot","跨域","实战"],"star":true,"sticky":true,"description":"SpringBoot解决跨域问题 1、添加注解@CrossOrigin 在controller层中添加此注解即可 2.统一处理 3、跟2差不多","head":[["meta",{"property":"og:url","content":"https://swx08.github.io/vuepress/posts/%E5%90%8E%E7%AB%AF/%E5%AE%9E%E6%88%98/SpringBoot%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"文学博客"}],["meta",{"property":"og:title","content":"SpringBoot解决跨域问题"}],["meta",{"property":"og:description","content":"SpringBoot解决跨域问题 1、添加注解@CrossOrigin 在controller层中添加此注解即可 2.统一处理 3、跟2差不多"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"sixkey"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"跨域"}],["meta",{"property":"article:tag","content":"实战"}],["meta",{"property":"article:published_time","content":"2022-01-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot解决跨域问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"sixkey\\",\\"url\\":\\"https://swx08.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1、添加注解@CrossOrigin","slug":"_1、添加注解-crossorigin","link":"#_1、添加注解-crossorigin","children":[]},{"level":2,"title":"2.统一处理","slug":"_2-统一处理","link":"#_2-统一处理","children":[]},{"level":2,"title":"3、跟2差不多","slug":"_3、跟2差不多","link":"#_3、跟2差不多","children":[]}],"git":{},"readingTime":{"minutes":0.54,"words":163},"filePathRelative":"posts/后端/实战/SpringBoot解决跨域问题.md","localizedDate":"2022年1月12日","excerpt":"\\n<h2>1、添加注解@CrossOrigin</h2>\\n<p>在controller层中添加此注解即可</p>\\n<h2>2.统一处理</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token punctuation\\">.</span>context<span class=\\"token punctuation\\">.</span>annotation<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">Bean</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token punctuation\\">.</span>context<span class=\\"token punctuation\\">.</span>annotation<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">Configuration</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token punctuation\\">.</span>web<span class=\\"token punctuation\\">.</span>cors<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">CorsConfiguration</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token punctuation\\">.</span>web<span class=\\"token punctuation\\">.</span>cors<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">UrlBasedCorsConfigurationSource</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token punctuation\\">.</span>web<span class=\\"token punctuation\\">.</span>filter<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">CorsFilter</span></span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token annotation punctuation\\">@Configuration</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">CorsConfig</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token comment\\">// 当前跨域请求最大有效时长。这里默认1天</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">long</span> <span class=\\"token constant\\">MAX_AGE</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">24</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">60</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">60</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Bean</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">CorsFilter</span> <span class=\\"token function\\">corsFilter</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">UrlBasedCorsConfigurationSource</span> source <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">UrlBasedCorsConfigurationSource</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">CorsConfiguration</span> corsConfiguration <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">CorsConfiguration</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        corsConfiguration<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addAllowedOrigin</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 1 设置访问源地址</span>\\n        corsConfiguration<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addAllowedHeader</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 2 设置访问源请求头</span>\\n        corsConfiguration<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addAllowedMethod</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 3 设置访问源请求方法</span>\\n        corsConfiguration<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setMaxAge</span><span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">MAX_AGE</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        source<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">registerCorsConfiguration</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/**\\"</span><span class=\\"token punctuation\\">,</span> corsConfiguration<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 4 对接口配置跨域设置</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">CorsFilter</span><span class=\\"token punctuation\\">(</span>source<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};
