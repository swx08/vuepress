import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-DCsLG_oX.js";const e={},p=t(`<h1 id="策略模式实现文件上传" tabindex="-1"><a class="header-anchor" href="#策略模式实现文件上传"><span>策略模式实现文件上传</span></a></h1><h2 id="_1、策略模式介绍" tabindex="-1"><a class="header-anchor" href="#_1、策略模式介绍"><span>1、策略模式介绍</span></a></h2><p><strong>策略模式（Strategy Design Pattern）</strong>，定义一堆算法类，并将每个算法分别封装起来，让它们可以互相替换，被封装起来的算法具有独立性外部不可改变其特性。</p><p>策略模式可以使算法的变化独立于使用它们的客户端（这里的客户端代指使用算法的代码）。</p><p><strong>策略模式的应用场景</strong> 策略模式最常见的应用场景是，利用它来避免冗长的 if-else 或 switch 分支判断。不过，它的作用还不止如此。它也可以像模板模式那样，提供框架的扩展点等等。</p><p>当我们需要多个功能相似的类，并且需要它们之间可以灵活切换时，就非常适合使用策略模式。</p><p><strong>策略模式的构成</strong> 策略类的定义比较简单，需要定义以下两种角色：</p><ul><li>抽象策略接口类：定义了策略类需要实现的方法规范。</li><li>策略实现类：继承自抽象策略接口，为具体策略类。</li><li>当有多个策略时，可以通过简单工厂封装所有的策略，使调用更加易用：</li></ul><p>策略工厂类：一般来说，通过一个策略工厂，将一群功能相同的策略封装起来，调用更加方便。 通过一个文件处理的例子来说明；有一个文件处理的通用类，可以处理excel、txt、exe文件。 面对不同类型的文件，返回具体对应的文件处理类，也就是具体的策略类。</p><h2 id="_2、实战" tabindex="-1"><a class="header-anchor" href="#_2、实战"><span>2、实战</span></a></h2><p><strong>说明：使用策略模式从系统配置文件中切换文件上传方式：①、阿里云oss上传；②、Minio文件上传</strong></p><h3 id="_1、导入依赖" tabindex="-1"><a class="header-anchor" href="#_1、导入依赖"><span>①、导入依赖</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependencies<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
      <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>web<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>确保在使用<span class="token annotation punctuation">@ConfigurationProperties</span>注解时，可以优雅的读取配置信息<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
      <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>configuration<span class="token operator">-</span>processor<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>热部署工具<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
      <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>devtools<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>scope<span class="token punctuation">&gt;</span></span>runtime<span class="token operator">&lt;</span><span class="token operator">/</span>scope<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>optional<span class="token punctuation">&gt;</span></span><span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>optional<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
      <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>projectlombok<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>lombok<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>optional<span class="token punctuation">&gt;</span></span><span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>optional<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
      <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>com<span class="token punctuation">.</span>alibaba<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>fastjson<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">2.0</span><span class="token number">.21</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>   阿里云oss依赖     <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
      <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>com<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>oss<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>aliyun<span class="token operator">-</span>sdk<span class="token operator">-</span>oss<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">3.10</span><span class="token number">.2</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>  日期工具栏依赖  <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
      <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>joda<span class="token operator">-</span>time<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>joda<span class="token operator">-</span>time<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">2.9</span><span class="token number">.9</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>minio依赖<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
      <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>io<span class="token punctuation">.</span>minio<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>minio<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
      <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">8.4</span><span class="token number">.3</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>dependencies<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、配置文件" tabindex="-1"><a class="header-anchor" href="#_2、配置文件"><span>②、配置文件</span></a></h3><p><strong>特别说明：这里默认读者会使用阿里云oss和分布式文件存储Minio上传文件</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">servlet</span><span class="token punctuation">:</span>
    <span class="token key atrule">multipart</span><span class="token punctuation">:</span>
      <span class="token key atrule">max-file-size</span><span class="token punctuation">:</span> 100MB
      <span class="token key atrule">max-request-size</span><span class="token punctuation">:</span> 100MB

<span class="token key atrule">application</span><span class="token punctuation">:</span>
  <span class="token key atrule">store</span><span class="token punctuation">:</span>
    <span class="token key atrule">oss</span><span class="token punctuation">:</span>
      <span class="token key atrule">endpoint</span><span class="token punctuation">:</span> oss<span class="token punctuation">-</span>cn<span class="token punctuation">-</span>beijing.aliyuncs.com
      <span class="token key atrule">accessKey</span><span class="token punctuation">:</span> LTAI5tGSrnxxxxxxxxxxxxxx
      <span class="token key atrule">secretKey</span><span class="token punctuation">:</span> sXW8K7HPD9xxxxxxxxxxxxxxx
      <span class="token key atrule">bucketname</span><span class="token punctuation">:</span> sixkey
    <span class="token key atrule">minio</span><span class="token punctuation">:</span>
      <span class="token key atrule">endpoint</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">9000</span>
      <span class="token key atrule">accessKey</span><span class="token punctuation">:</span> minioadmin
      <span class="token key atrule">secretKey</span><span class="token punctuation">:</span> minioadmin
      <span class="token key atrule">bucketName</span><span class="token punctuation">:</span> test

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>项目模块</strong></p></blockquote><figure><img src="https://pic.imgdb.cn/item/64b958bb1ddac507cc0935b6.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>读取配置文件中的值</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span><span class="token string">&quot;application.store&quot;</span><span class="token punctuation">)</span> <span class="token comment">//获取配置文件中的配置信息</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectStoreProperties</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">ConfigEntity</span> oss<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">ConfigEntity</span> minio<span class="token punctuation">;</span>

    <span class="token comment">//静态内部类</span>
    <span class="token annotation punctuation">@Getter</span>
    <span class="token annotation punctuation">@Setter</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ConfigEntity</span><span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> endpoint<span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token class-name">String</span> accessKey<span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token class-name">String</span> secretKey<span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token class-name">String</span> bucketname<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、定义一个文件上传的顶级接口" tabindex="-1"><a class="header-anchor" href="#_3、定义一个文件上传的顶级接口"><span>③、定义一个文件上传的顶级接口</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//文件上传顶级接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UploadStrategy</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 上传文件
     * <span class="token keyword">@param</span> <span class="token parameter">file</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">String</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、文件上传抽象类" tabindex="-1"><a class="header-anchor" href="#_4、文件上传抽象类"><span>④、文件上传抽象类</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 文件上传执行抽象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractUploadStrategyImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UploadStrategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//region 初始化</span>
            <span class="token function">initClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> fileRelativePath<span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                fileRelativePath <span class="token operator">=</span> <span class="token function">executeUpload</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//endregion</span>
            <span class="token comment">//返回图片访问路径url</span>
            <span class="token keyword">return</span> <span class="token function">getPublicNetworkAccessUrl</span><span class="token punctuation">(</span>fileRelativePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;文件上传失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 初始化客户端
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">initClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 检查文件是否已经存在（文件MD5值唯一）
     *
     * <span class="token keyword">@param</span> <span class="token parameter">fileRelativePath</span> 文件相对路径
     * <span class="token keyword">@return</span> true 已经存在  false 不存在
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">boolean</span> <span class="token function">checkFileIsExisted</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileRelativePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 执行上传操作
     *
     * <span class="token keyword">@param</span> <span class="token parameter">file</span>             文件
     * <span class="token keyword">@param</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span> io异常信息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">executeUpload</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServerException</span><span class="token punctuation">,</span> <span class="token class-name">InsufficientDataException</span><span class="token punctuation">,</span> <span class="token class-name">ErrorResponseException</span><span class="token punctuation">,</span> <span class="token class-name">NoSuchAlgorithmException</span><span class="token punctuation">,</span> <span class="token class-name">InvalidKeyException</span><span class="token punctuation">,</span> <span class="token class-name">InvalidResponseException</span><span class="token punctuation">,</span> <span class="token class-name">XmlParserException</span><span class="token punctuation">,</span> <span class="token class-name">InternalException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取公网访问路径
     *
     * <span class="token keyword">@param</span> <span class="token parameter">fileRelativePath</span> 文件相对路径
     * <span class="token keyword">@return</span> 公网访问绝对路径
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">getPublicNetworkAccessUrl</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileRelativePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、阿里云和minio上传实现类" tabindex="-1"><a class="header-anchor" href="#_5、阿里云和minio上传实现类"><span>⑤、阿里云和Minio上传实现类</span></a></h3><p><strong>Minio实现类</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:OssUploadStrategyImpl
 * Package:com.strategy.strategy.impl
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/7/16 - 22:16
 * @Version:v1.0
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">&quot;MinioUploadServiceImpl&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinioUploadStrategyImpl</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractUploadStrategyImpl</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 构造器注入配置文件bean
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ObjectStoreProperties</span> properties<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 当前类的属性
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">MinioClient</span> minioClient<span class="token punctuation">;</span>


    <span class="token comment">//初始化Minio对象</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minioClient <span class="token operator">=</span> <span class="token class-name">MinioClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">endpoint</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getMinio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEndpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">credentials</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getMinio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAccessKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                             properties<span class="token punctuation">.</span><span class="token function">getMinio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSecretKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;OssClient Init Success...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">checkFileIsExisted</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileRelativePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//Minio方式上传逻辑</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">executeUpload</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;File Upload Starts...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> fileName <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//必须写出\\\\.这是转义，将文件名2.jpg从.开始分割成 2 和 jpg</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> split <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>split<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//防止文件重名：添加系统时间：文件名为：2_37598375837.jpg</span>
            <span class="token comment">//方式1：</span>
            <span class="token comment">//fileName = split[0] + &quot;_&quot; + System.currentTimeMillis() + &quot;.&quot; + split[1];</span>
            <span class="token comment">//方式2：</span>
            <span class="token comment">// 完善1、 --&gt; 在文件名中添加唯一值</span>
            <span class="token class-name">String</span> uuid <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fileName <span class="token operator">=</span> uuid <span class="token operator">+</span> split<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> split<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// 完善2、 --&gt; 把文件按照日期分类</span>
            <span class="token class-name">String</span> datePath <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy/MM/dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 拼接时间 yyyy/MM/dd/filename</span>
            fileName <span class="token operator">=</span> datePath <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> fileName<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fileName <span class="token operator">=</span> fileName <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">InputStream</span> in <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//开始上传</span>
            in <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            minioClient<span class="token punctuation">.</span><span class="token function">putObject</span><span class="token punctuation">(</span><span class="token class-name">PutObjectArgs</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">bucket</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getMinio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBucketname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>in<span class="token punctuation">,</span> in<span class="token punctuation">.</span><span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">contentType</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getContentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">//关闭流</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>in <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        fileName <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getMinio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEndpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> properties<span class="token punctuation">.</span><span class="token function">getMinio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBucketname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> fileName<span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;File Upload Finish...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//最后文件返回路径：http://localhost:9000/test/2023/07/20/06a415a221804ceebe8048d015c97f9a1.jpg</span>
        <span class="token keyword">return</span> fileName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//返回文件访问公网地址</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPublicNetworkAccessUrl</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileRelativePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> fileRelativePath<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>阿里云实现类</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:OssUploadStrategyImpl
 * Package:com.strategy.strategy.impl
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/7/16 - 22:16
 * @Version:v1.0
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">&quot;ossUploadServiceImpl&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OssUploadStrategyImpl</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractUploadStrategyImpl</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 构造器注入bean
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ObjectStoreProperties</span> properties<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 当前类的属性
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">OSS</span> ossClient<span class="token punctuation">;</span>

    <span class="token comment">//初始化ossClient对象</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ossClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OSSClientBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getOss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEndpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> properties<span class="token punctuation">.</span><span class="token function">getOss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAccessKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> properties<span class="token punctuation">.</span><span class="token function">getOss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSecretKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;OssClient Init Success...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">checkFileIsExisted</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileRelativePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ossClient<span class="token punctuation">.</span><span class="token function">doesObjectExist</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getOss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBucketname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fileRelativePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//阿里云文件上传逻辑</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">executeUpload</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;File Upload Starts...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取文件原始名称</span>
        <span class="token class-name">String</span> filename <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 完善1、 --&gt; 在文件名中添加唯一值</span>
        <span class="token class-name">String</span> uuid <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filename <span class="token operator">=</span> uuid <span class="token operator">+</span> filename<span class="token punctuation">;</span>
        <span class="token comment">// 完善2、 --&gt; 把文件按照日期分类</span>
        <span class="token class-name">String</span> datePath <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy/MM/dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 拼接时间 yyyy/MM/dd/filename</span>
        filename <span class="token operator">=</span> datePath <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> filename<span class="token punctuation">;</span>
        ossClient<span class="token punctuation">.</span><span class="token function">putObject</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getOss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBucketname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> filename<span class="token punctuation">,</span> file<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;File Upload Finish...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> filename<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//返回文件访问公网地址</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPublicNetworkAccessUrl</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileRelativePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;https://&quot;</span><span class="token operator">+</span>properties<span class="token punctuation">.</span><span class="token function">getOss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBucketname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;.&quot;</span><span class="token operator">+</span>properties<span class="token punctuation">.</span><span class="token function">getOss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEndpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;/&quot;</span><span class="token operator">+</span>fileRelativePath<span class="token punctuation">;</span>
        <span class="token keyword">return</span> url<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、执行文件上传上下文" tabindex="-1"><a class="header-anchor" href="#_6、执行文件上传上下文"><span>⑥、执行文件上传上下文</span></a></h3><p><strong>说明：好好理解Map的value的值为接口时的作用</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:UploadStrategyContext
 * Package:com.strategy.strategy.context
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/7/16 - 22:25
 * @Version:v1.0
 */</span>
<span class="token comment">//文件上传上下问实现</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UploadStrategyContext</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    当Map集合的Value为接口类型时，Spring会自动对Map集合进行注入。
    其中map集合的key为接口对应实现类的BeanName
    其中map集合的vlaue为接口对应实现类的实例
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">UploadStrategy</span><span class="token punctuation">&gt;</span></span> uploadStrategyMap<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 执行上传策略
     *
     * <span class="token keyword">@param</span> <span class="token parameter">file</span>     文件
     * <span class="token keyword">@param</span>
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">String</span></span><span class="token punctuation">}</span> 文件上传全路径
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">executeUploadStrategy</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">,</span> <span class="token class-name">String</span> uploadServiceName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行特点的上传策略</span>
        <span class="token keyword">return</span> uploadStrategyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>uploadServiceName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、指定上传方式" tabindex="-1"><a class="header-anchor" href="#_7、指定上传方式"><span>⑦、指定上传方式</span></a></h3><p><strong>一般配置在数据库中进行动态切换，这里为了测试方便，直接定义成常量</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * ClassName:SystemConfig
 * Package:com.strategy.config
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/7/20 - 23:24
 * @Version:v1.0
 */</span>
<span class="token comment">//获取实际项目中的系统配置，为了方便测试，直接定义为常量</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SystemConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">//Minio上传方式</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">MINIO_STRATEGY</span> <span class="token operator">=</span> <span class="token string">&quot;MinioUploadServiceImpl&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">//阿里云上传方式</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">OSS_STRATEGY</span> <span class="token operator">=</span> <span class="token string">&quot;ossUploadServiceImpl&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、测试接口" tabindex="-1"><a class="header-anchor" href="#_8、测试接口"><span>⑧、测试接口</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:UploadController
 * Package:com.strategy.controller
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/7/16 - 22:29
 * @Version:v1.0
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UploadController</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UploadStrategyContext</span> uploadStrategyContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//指定上传文件以及上传方式。</span>
        <span class="token keyword">return</span> uploadStrategyContext<span class="token punctuation">.</span><span class="token function">executeUploadStrategy</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token class-name">SystemConfig</span><span class="token punctuation">.</span><span class="token constant">MINIO_STRATEGY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、测试返回展示" tabindex="-1"><a class="header-anchor" href="#_9、测试返回展示"><span>⑨、测试返回展示</span></a></h3><p><strong>Minio方式展示</strong></p><figure><img src="https://pic.imgdb.cn/item/64b95bd91ddac507cc1575ef.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>直接在浏览器中复制访问即可</strong></p><p><strong>阿里云展示</strong></p><figure><img src="https://pic.imgdb.cn/item/64b95c511ddac507cc176197.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>策略模式上传文件到此结束！</strong></p>`,44),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","策略模式实现文件上传.html.vue"]]),d=JSON.parse('{"path":"/posts/%E5%90%8E%E7%AB%AF/%E5%AE%9E%E6%88%98/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E5%AE%9E%E7%8E%B0%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html","title":"策略模式实现文件上传","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-12T00:00:00.000Z","category":["后端"],"tag":["策略模式实现","SpringBoot","实战"],"star":true,"sticky":true,"description":"策略模式实现文件上传 1、策略模式介绍 策略模式（Strategy Design Pattern），定义一堆算法类，并将每个算法分别封装起来，让它们可以互相替换，被封装起来的算法具有独立性外部不可改变其特性。 策略模式可以使算法的变化独立于使用它们的客户端（这里的客户端代指使用算法的代码）。 策略模式的应用场景 策略模式最常见的应用场景是，利用它来避免...","head":[["meta",{"property":"og:url","content":"https://swx08.github.io/vuepress/posts/%E5%90%8E%E7%AB%AF/%E5%AE%9E%E6%88%98/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E5%AE%9E%E7%8E%B0%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html"}],["meta",{"property":"og:site_name","content":"文学博客"}],["meta",{"property":"og:title","content":"策略模式实现文件上传"}],["meta",{"property":"og:description","content":"策略模式实现文件上传 1、策略模式介绍 策略模式（Strategy Design Pattern），定义一堆算法类，并将每个算法分别封装起来，让它们可以互相替换，被封装起来的算法具有独立性外部不可改变其特性。 策略模式可以使算法的变化独立于使用它们的客户端（这里的客户端代指使用算法的代码）。 策略模式的应用场景 策略模式最常见的应用场景是，利用它来避免..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.imgdb.cn/item/64b958bb1ddac507cc0935b6.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"策略模式实现文件上传"}],["meta",{"property":"article:author","content":"sixkey"}],["meta",{"property":"article:tag","content":"策略模式实现"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"实战"}],["meta",{"property":"article:published_time","content":"2022-01-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"策略模式实现文件上传\\",\\"image\\":[\\"https://pic.imgdb.cn/item/64b958bb1ddac507cc0935b6.jpg\\",\\"https://pic.imgdb.cn/item/64b95bd91ddac507cc1575ef.jpg\\",\\"https://pic.imgdb.cn/item/64b95c511ddac507cc176197.jpg\\"],\\"datePublished\\":\\"2022-01-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"sixkey\\",\\"url\\":\\"https://swx08.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1、策略模式介绍","slug":"_1、策略模式介绍","link":"#_1、策略模式介绍","children":[]},{"level":2,"title":"2、实战","slug":"_2、实战","link":"#_2、实战","children":[{"level":3,"title":"①、导入依赖","slug":"_1、导入依赖","link":"#_1、导入依赖","children":[]},{"level":3,"title":"②、配置文件","slug":"_2、配置文件","link":"#_2、配置文件","children":[]},{"level":3,"title":"③、定义一个文件上传的顶级接口","slug":"_3、定义一个文件上传的顶级接口","link":"#_3、定义一个文件上传的顶级接口","children":[]},{"level":3,"title":"④、文件上传抽象类","slug":"_4、文件上传抽象类","link":"#_4、文件上传抽象类","children":[]},{"level":3,"title":"⑤、阿里云和Minio上传实现类","slug":"_5、阿里云和minio上传实现类","link":"#_5、阿里云和minio上传实现类","children":[]},{"level":3,"title":"⑥、执行文件上传上下文","slug":"_6、执行文件上传上下文","link":"#_6、执行文件上传上下文","children":[]},{"level":3,"title":"⑦、指定上传方式","slug":"_7、指定上传方式","link":"#_7、指定上传方式","children":[]},{"level":3,"title":"⑧、测试接口","slug":"_8、测试接口","link":"#_8、测试接口","children":[]},{"level":3,"title":"⑨、测试返回展示","slug":"_9、测试返回展示","link":"#_9、测试返回展示","children":[]}]}],"git":{},"readingTime":{"minutes":6.45,"words":1936},"filePathRelative":"posts/后端/实战/策略模式实现文件上传.md","localizedDate":"2022年1月12日","excerpt":"\\n<h2>1、策略模式介绍</h2>\\n<p><strong>策略模式（Strategy Design Pattern）</strong>，定义一堆算法类，并将每个算法分别封装起来，让它们可以互相替换，被封装起来的算法具有独立性外部不可改变其特性。</p>\\n<p>策略模式可以使算法的变化独立于使用它们的客户端（这里的客户端代指使用算法的代码）。</p>\\n<p><strong>策略模式的应用场景</strong>\\n策略模式最常见的应用场景是，利用它来避免冗长的 if-else 或 switch 分支判断。不过，它的作用还不止如此。它也可以像模板模式那样，提供框架的扩展点等等。</p>\\n<p>当我们需要多个功能相似的类，并且需要它们之间可以灵活切换时，就非常适合使用策略模式。</p>","autoDesc":true}');export{k as comp,d as data};
