import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as c,c as o,b as n,e as a,a as t}from"./app-DCsLG_oX.js";const l={},i=t('<h1 id="java设计模式" tabindex="-1"><a class="header-anchor" href="#java设计模式"><span>Java设计模式</span></a></h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><strong>特别说明：部分模式解释来自菜鸟教程</strong></p><p>设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。</p><p>设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。</p><h3 id="_1、什么是-gof-四人帮-全拼-gang-of-four" tabindex="-1"><a class="header-anchor" href="#_1、什么是-gof-四人帮-全拼-gang-of-four"><span>1、什么是 GOF（四人帮，全拼 Gang of Four）？</span></a></h3><p>在 1994 年，由 Erich Gamma、Richard Helm、Ralph Johnson 和 John Vlissides 四人合著出版了一本名为 Design Patterns - Elements of Reusable Object-Oriented Software（中文译名：设计模式 - 可复用的面向对象软件元素） 的书，该书首次提到了软件开发中设计模式的概念。</p><p>四位作者合称 GOF（四人帮，全拼 Gang of Four）。他们所提出的设计模式主要是基于以下的面向对象设计原则。</p><ul><li>对接口编程而不是对实现编程。</li><li>优先使用对象组合而不是继承。</li></ul><h3 id="_2、设计模式的使用" tabindex="-1"><a class="header-anchor" href="#_2、设计模式的使用"><span>2、设计模式的使用</span></a></h3><p>设计模式在软件开发中的两个主要用途。</p><h3 id="_3、开发人员的共同平台" tabindex="-1"><a class="header-anchor" href="#_3、开发人员的共同平台"><span>3、开发人员的共同平台</span></a></h3><p>设计模式提供了一个标准的术语系统，且具体到特定的情景。例如，单例设计模式意味着使用单个对象，这样所有熟悉单例设计模式的开发人员都能使用单个对象，并且可以通过这种方式告诉对方，程序使用的是单例模式。</p><h3 id="_4、最佳的实践" tabindex="-1"><a class="header-anchor" href="#_4、最佳的实践"><span>4、最佳的实践</span></a></h3><p>设计模式已经经历了很长一段时间的发展，它们提供了软件开发过程中面临的一般问题的最佳解决方案。学习这些模式有助于经验不足的开发人员通过一种简单快捷的方式来学习软件设计。</p><h3 id="_5、设计模式的类型" tabindex="-1"><a class="header-anchor" href="#_5、设计模式的类型"><span>5、设计模式的类型</span></a></h3><p>根据设计模式的参考书 Design Patterns - Elements of Reusable Object-Oriented Software（中文译名：设计模式 - 可复用的面向对象软件元素） 中所提到的，总共有 23 种设计模式。这些模式可以分为三大类：创建型模式（Creational Patterns）、结构型模式（Structural Patterns）、行为型模式（Behavioral Patterns）。当然，我们还会讨论另一类设计模式：J2EE 设计模式。</p><table><thead><tr><th>序号</th><th>模式 &amp; 描述</th><th>包括</th></tr></thead><tbody><tr><td>1</td><td><strong>创建型模式</strong><br>这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。</td><td>工厂模式（Factory Pattern）<br>抽象工厂模式（Abstract Factory Pattern）<br>单例模式（Singleton Pattern）<br>建造者模式（Builder Pattern）<br>原型模式（Prototype Pattern）</td></tr><tr><td>2</td><td><strong>结构型模式</strong><br>这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。</td><td>适配器模式（Adapter Pattern）<br>桥接模式（Bridge Pattern）<br>过滤器模式（Filter、Criteria Pattern）<br>组合模式（Composite Pattern）<br>装饰器模式（Decorator Pattern）<br>外观模式（Facade Pattern）<br>享元模式（Flyweight Pattern）<br>代理模式（Proxy Pattern）</td></tr><tr><td>3</td><td><strong>行为型模式</strong><br>这些设计模式特别关注对象之间的通信。</td><td>责任链模式（Chain of Responsibility Pattern）<br>命令模式（Command Pattern）<br>解释器模式（Interpreter Pattern）<br>迭代器模式（Iterator Pattern）<br>中介者模式（Mediator Pattern）<br>备忘录模式（Memento Pattern）<br>观察者模式（Observer Pattern）<br>状态模式（State Pattern）<br>空对象模式（Null Object Pattern）<br>策略模式（Strategy Pattern）<br>模板模式（Template Pattern）<br>访问者模式（Visitor Pattern）</td></tr><tr><td>4</td><td><strong>J2EE 模式</strong><br>这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。</td><td>MVC 模式（MVC Pattern）<br>业务代表模式（Business Delegate Pattern）<br>组合实体模式（Composite Entity Pattern）<br>数据访问对象模式（Data Access Object Pattern）<br>前端控制器模式（Front Controller Pattern）<br>拦截过滤器模式（Intercepting Filter Pattern）<br>服务定位器模式（Service Locator Pattern）<br>传输对象模式（Transfer Object Pattern）</td></tr></tbody></table><h3 id="_6、设计模式的七大原则" tabindex="-1"><a class="header-anchor" href="#_6、设计模式的七大原则"><span>6、设计模式的七大原则</span></a></h3><p><strong>1、开闭原则（Open Close Principle）</strong></p><p>开闭原则的意思是：<strong>对扩展开放，对修改关闭</strong>。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用接口和抽象类，后面的具体设计中我们会提到这点。</p><p><strong>2、里氏代换原则（Liskov Substitution Principle）</strong></p><p>里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。LSP 是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。</p><p><strong>3、依赖倒转原则（Dependence Inversion Principle）</strong></p><p>这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体。</p><p><strong>4、接口隔离原则（Interface Segregation Principle）</strong></p><p>这个原则的意思是：使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。</p><p><strong>5、迪米特法则，又称最少知道原则（Demeter Principle）</strong></p><p>最少知道原则是指：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。</p><p><strong>6、合成复用原则（Composite Reuse Principle）</strong></p><p>合成复用原则是指：尽量使用合成/聚合的方式，而不是使用继承。</p><p><strong>7、单一职责原则</strong></p><p>控制类的粒度大小、将对象解耦、提高其内聚性。</p><h2 id="创建型模式" tabindex="-1"><a class="header-anchor" href="#创建型模式"><span>创建型模式</span></a></h2><h3 id="一、工厂模式" tabindex="-1"><a class="header-anchor" href="#一、工厂模式"><span>一、工厂模式</span></a></h3><p>工厂模式（Factory Pattern）是 Java 中最常用的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。</p><p>在工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。</p><h4 id="_1、介绍" tabindex="-1"><a class="header-anchor" href="#_1、介绍"><span>1、介绍</span></a></h4><p>**意图：**定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。</p><p>**主要解决：**主要解决接口选择的问题。</p><p>**何时使用：**我们明确地计划不同条件下创建不同实例时。</p><p>**如何解决：**让其子类实现工厂接口，返回的也是一个抽象的产品。</p><p>**关键代码：**创建过程在其子类执行。</p><p><strong>优点：</strong> 1、一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。</p><p>**缺点：**每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。</p><p><strong>使用场景：</strong> 1、日志记录器：记录可能记录到本地硬盘、系统事件、远程服务器等，用户可以选择记录日志到什么地方。 2、数据库访问，当用户不知道最后系统采用哪一类数据库，以及数据库可能有变化时。 3、设计一个连接服务器的框架，需要三个协议，&quot;POP3&quot;、&quot;IMAP&quot;、&quot;HTTP&quot;，可以把这三个作为产品类，共同实现一个接口。</p><p>**注意事项：**作为一种创建类模式，在任何需要生成复杂对象的地方，都可以使用工厂方法模式。有一点需要注意的地方就是复杂对象适合使用工厂模式，而简单对象，特别是只需要通过 new 就可以完成创建的对象，无需使用工厂模式。如果使用工厂模式，就需要引入一个工厂类，会增加系统的复杂度。</p><h4 id="_2、核心本质" tabindex="-1"><a class="header-anchor" href="#_2、核心本质"><span>2、核心本质</span></a></h4><ul><li>实例化对象不用new，用工厂方法代替</li><li>将选择实现类，创建对象统一管理和控制。从而将调用者跟我们的实现类解耦。</li></ul><h4 id="_3、两种模式" tabindex="-1"><a class="header-anchor" href="#_3、两种模式"><span>3、两种模式</span></a></h4><h5 id="_1、简单工厂模式" tabindex="-1"><a class="header-anchor" href="#_1、简单工厂模式"><span>①、简单工厂模式</span></a></h5><ul><li>简单工厂模式（静态工厂模式） <ul><li>用来生产同一等级结构中的任意产品(对于增加新的产品，需要扩展已有代码)</li></ul></li></ul>',52),u={href:"https://imgse.com/i/ppOg4at",target:"_blank",rel:"noopener noreferrer"},d=n("img",{src:"https://s1.ax1x.com/2023/04/11/ppOg4at.md.jpg",alt:"简单工厂模式",style:{zoom:"50%"}},null,-1),k=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 汽车接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 五菱汽车类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wuling</span> <span class="token keyword">implements</span> <span class="token class-name">Car</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;五菱宏光&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 特斯拉汽车类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tesla</span> <span class="token keyword">implements</span> <span class="token class-name">Car</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;特斯拉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 汽车工厂类
 */</span>
<span class="token comment">//静态工厂模式</span>
<span class="token comment">//增加一个的新的产品，如果不修改代码，无法做到！</span>
<span class="token comment">//没有遵循开闭原则</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CarFactory</span> <span class="token punctuation">{</span>
    <span class="token comment">//造车方法createCar(String car)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Car</span> <span class="token function">createCar</span><span class="token punctuation">(</span><span class="token class-name">String</span> car<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;五菱宏光&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Wuling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>car<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;特斯拉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Tesla</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 客户消费类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//缺点：实例化对象要new</span>
<span class="token comment">//        Wuling car1 = new Wuling();</span>
<span class="token comment">//        Tesla car2 = new Tesla();</span>

        <span class="token comment">//方法1：简单工厂模式</span>
        <span class="token class-name">Car</span> car1 <span class="token operator">=</span> <span class="token class-name">CarFactory</span><span class="token punctuation">.</span><span class="token function">createCar</span><span class="token punctuation">(</span><span class="token string">&quot;五菱宏光&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Car</span> car2 <span class="token operator">=</span> <span class="token class-name">CarFactory</span><span class="token punctuation">.</span><span class="token function">createCar</span><span class="token punctuation">(</span><span class="token string">&quot;特斯拉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        car1<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        car2<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单工厂模式虽然不满足开闭原则，但是实际中用得较多。</p><h5 id="_2、工厂方法模式" tabindex="-1"><a class="header-anchor" href="#_2、工厂方法模式"><span>②、工厂方法模式</span></a></h5><ul><li>工厂方法模式 <ul><li>用来生产同一等级结构中的固定产品(支持增加任意产品)</li></ul></li></ul>`,8),r={href:"https://imgse.com/i/ppOgRrd",target:"_blank",rel:"noopener noreferrer"},v=n("img",{src:"https://s1.ax1x.com/2023/04/11/ppOgRrd.md.jpg",alt:"工厂方法模式",style:{zoom:"50%"}},null,-1),m=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 汽车接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 五菱汽车类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wuling</span> <span class="token keyword">implements</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;五菱宏光&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 特斯拉汽车类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tesla</span> <span class="token keyword">implements</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;特斯拉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 工厂方法模式
 */</span>
<span class="token comment">//车工厂</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CarFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">Car</span> <span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 五菱宏光车工厂
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WulingFactory</span> <span class="token keyword">implements</span> <span class="token class-name">CarFactory</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Wuling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 特斯拉车工厂
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TeslaFactory</span> <span class="token keyword">implements</span> <span class="token class-name">CarFactory</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Tesla</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 客户消费类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Car</span> car1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WulingFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Car</span> car2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TeslaFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        car1<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        car2<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工厂方法模式虽然满足开闭原则，但是很明显如果需要新增一个产品如大众，就需要扩展一套大众的代码</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 大众汽车类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dazhon</span> <span class="token keyword">implements</span> <span class="token class-name">Car</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;大众&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 大众汽车工厂类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DazhonFactory</span> <span class="token keyword">implements</span> <span class="token class-name">CarFactory</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Dazhon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 客户消费类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Car</span> car1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WulingFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Car</span> car2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TeslaFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Car</span> car3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DazhonFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        car1<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        car2<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        car3<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：简单工厂模式和工厂方法模式比较</p><p>结构复杂度：简单工厂模式完胜</p><p>代码复杂度：简单工厂模式完胜</p><p>编程复杂度：简单工厂模式完胜</p><p>管理上的复杂度：简单工厂模式完胜</p><p>根据设计原则：工厂方法模式！</p><p>根据实际业务：简单工厂模式！</p><h3 id="二、抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#二、抽象工厂模式"><span>二、抽象工厂模式</span></a></h3><p>抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。</p><p>在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。</p><h4 id="_1、介绍-1" tabindex="-1"><a class="header-anchor" href="#_1、介绍-1"><span>1、介绍</span></a></h4><p>**意图：**提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。</p><p>**主要解决：**主要解决接口选择的问题。</p><p>**何时使用：**系统的产品有多于一个的产品族，而系统只消费其中某一族的产品。</p><p>**如何解决：**在一个产品族里面，定义多个产品。</p><p>**关键代码：**在一个工厂里聚合多个同类产品。</p><p>**优点：**当一个产品族中的多个对象被设计成一起工作时，它能保证客户端始终只使用同一个产品族中的对象。</p><p>**缺点：**产品族扩展非常困难，要增加一个系列的某一产品，既要在抽象的 Creator 里加代码，又要在具体的里面加代码。</p><p><strong>使用场景：</strong> 1、QQ 换皮肤，一整套一起换。 2、生成不同操作系统的程序。</p><p>**注意事项：**产品族难扩展，产品等级易扩展。</p><ul><li>抽象工厂模式 <ul><li>围绕一个超级工厂创建其他工厂，该超级工厂又称为其他工厂的工厂。</li></ul></li></ul>`,32),b={href:"https://imgse.com/i/ppOg5IP",target:"_blank",rel:"noopener noreferrer"},g=n("img",{src:"https://s1.ax1x.com/2023/04/11/ppOg5IP.jpg",alt:"抽象工厂模式",style:{zoom:"50%"}},null,-1),y=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 手机产品接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PhoneProduct</span> <span class="token punctuation">{</span>
    <span class="token comment">//开机</span>
    <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//关机</span>
    <span class="token keyword">void</span> <span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//打电话</span>
    <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//发消息</span>
    <span class="token keyword">void</span> <span class="token function">sendSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 路由器产品接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RouterProduct</span> <span class="token punctuation">{</span>
    <span class="token comment">//开机</span>
    <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//关机</span>
    <span class="token keyword">void</span> <span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//开wifi</span>
    <span class="token keyword">void</span> <span class="token function">openWifi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置参数</span>
    <span class="token keyword">void</span> <span class="token function">setIng</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小米产商的产品族：小米手机和小米路由器</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 小米手机产品
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XiaomiPhone</span> <span class="token keyword">implements</span> <span class="token class-name">PhoneProduct</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;小米手机开机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;小米手机关机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;小米手机打电话&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;小米手机发消息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 小米路由器产品
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XiaomiRouter</span> <span class="token keyword">implements</span> <span class="token class-name">RouterProduct</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;小米路由器开机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;小米路由器关机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openWifi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;打开小米路由器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setIng</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;设置小米路由器参数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>华为产商的产品族：华为手机和华为路由器</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 华为手机产品
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HuaWeiPhone</span> <span class="token keyword">implements</span> <span class="token class-name">PhoneProduct</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;华为手机开机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;华为手机关机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;华为手机打电话&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;华为手机发消息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 华为路由器产品
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HuaWeiRouter</span> <span class="token keyword">implements</span> <span class="token class-name">RouterProduct</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;华为路由器开机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;华为路由器关机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openWifi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;打开华为路由器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setIng</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;设置华为路由器参数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义一个抽象工厂类：定义生产手机产品和生产路由器产品两个接口，让各大产商的工厂类分别去实现其接口。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 抽象产品工厂类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ProductFactory</span> <span class="token punctuation">{</span>
    <span class="token comment">//生产手机产品</span>
    <span class="token class-name">PhoneProduct</span> <span class="token function">createPhoneProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//生产路由器产品</span>
    <span class="token class-name">RouterProduct</span> <span class="token function">createRouterProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小米工厂类实现抽象工厂类去生产小米手机产品和小米路由器产品</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 小米手机工厂类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XiaomiFactory</span> <span class="token keyword">implements</span> <span class="token class-name">ProductFactory</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">PhoneProduct</span> <span class="token function">createPhoneProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">XiaomiPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">RouterProduct</span> <span class="token function">createRouterProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">XiaomiRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>华为工厂类实现抽象工厂类去生产华为手机产品和华为路由器产品</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 华为手机工厂类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HuaWeiFactory</span> <span class="token keyword">implements</span> <span class="token class-name">ProductFactory</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">PhoneProduct</span> <span class="token function">createPhoneProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HuaWeiPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">RouterProduct</span> <span class="token function">createRouterProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HuaWeiRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后供客户端消费者去使用</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 客户消费者类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===========小米手机产品=============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PhoneProduct</span> xiaoPhone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XiaomiFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createPhoneProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xiaoPhone<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xiaoPhone<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xiaoPhone<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xiaoPhone<span class="token punctuation">.</span><span class="token function">sendSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===========小米路由器产品=============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RouterProduct</span> xiaoRouter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XiaomiFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createRouterProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xiaoRouter<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xiaoRouter<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xiaoRouter<span class="token punctuation">.</span><span class="token function">openWifi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xiaoRouter<span class="token punctuation">.</span><span class="token function">setIng</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===========华为手机产品=============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PhoneProduct</span> huaWeiPhone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HuaWeiFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createPhoneProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        huaWeiPhone<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        huaWeiPhone<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        huaWeiPhone<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        huaWeiPhone<span class="token punctuation">.</span><span class="token function">sendSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===========华为路由器产品=============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RouterProduct</span> huaWeiRouter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HuaWeiFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createRouterProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        huaWeiRouter<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        huaWeiRouter<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        huaWeiRouter<span class="token punctuation">.</span><span class="token function">openWifi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        huaWeiRouter<span class="token punctuation">.</span><span class="token function">setIng</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、单例模式" tabindex="-1"><a class="header-anchor" href="#三、单例模式"><span>三、单例模式</span></a></h3><p>单例模式（Singleton Pattern）是 Java 中最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。</p><p>这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。</p><p><strong>注意：</strong></p><ul><li>1、单例类只能有一个实例。</li><li>2、单例类必须自己创建自己的唯一实例。</li><li>3、单例类必须给所有其他对象提供这一实例。</li></ul><h4 id="_1、介绍-2" tabindex="-1"><a class="header-anchor" href="#_1、介绍-2"><span>1、介绍</span></a></h4><p>**意图：**保证一个类仅有一个实例，并提供一个访问它的全局访问点。</p><p>**主要解决：**一个全局使用的类频繁地创建与销毁。</p><p>**何时使用：**当您想控制实例数目，节省系统资源的时候。</p><p>**如何解决：**判断系统是否已经有这个单例，如果有则返回，如果没有则创建。</p><p>**关键代码：**构造函数是私有的。</p><p><strong>应用实例：</strong></p><ul><li>1、一个班级只有一个班主任。</li><li>2、Windows 是多进程多线程的，在操作一个文件的时候，就不可避免地出现多个进程或线程同时操作一个文件的现象，所以所有文件的处理必须通过唯一的实例来进行。</li><li>3、一些设备管理器常常设计为单例模式，比如一个电脑有两台打印机，在输出的时候就要处理不能两台打印机打印同一个文件。</li></ul><p><strong>优点：</strong></p><ul><li>1、在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）。</li><li>2、避免对资源的多重占用（比如写文件操作）。</li></ul><p>**缺点：**没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。</p><p><strong>使用场景：</strong></p><ul><li>1、要求生产唯一序列号。</li><li>2、WEB 中的计数器，不用每次刷新都在数据库里加一次，用单例先缓存起来。</li><li>3、创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。</li></ul><p>**注意事项：**getInstance() 方法中需要使用同步锁 synchronized (Singleton.class) 防止多线程同时进入造成 instance 被多次实例化。</p><h4 id="_2、单例模式的六种实现方式" tabindex="-1"><a class="header-anchor" href="#_2、单例模式的六种实现方式"><span>2、单例模式的六种实现方式</span></a></h4><h5 id="_1、懒汉式-线程不安全" tabindex="-1"><a class="header-anchor" href="#_1、懒汉式-线程不安全"><span>①、懒汉式，线程不安全</span></a></h5><p>**是否 Lazy 初始化：**是</p><p>**是否多线程安全：**否</p><p>**实现难度：**易</p><p>**描述：**这种方式是最基本的实现方式，这种实现最大的问题就是不支持多线程。因为没有加锁 synchronized，所以严格意义上它并不算单例模式。 这种方式 lazy loading 很明显，不要求线程安全，在多线程不能正常工作。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 懒汉式，线程不安全
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> lazy1 <span class="token punctuation">{</span>
    <span class="token comment">//私有化构造器</span>
    <span class="token keyword">private</span> <span class="token function">lazy1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> lazy1 instance<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> lazy1 <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">lazy1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;懒汉式，线程不安全&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//测试</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lazy1 instance1 <span class="token operator">=</span> lazy1<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instance1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、懒汉式-线程安全" tabindex="-1"><a class="header-anchor" href="#_2、懒汉式-线程安全"><span>②、懒汉式，线程安全</span></a></h5><p>**是否 Lazy 初始化：**是</p><p>**是否多线程安全：**是</p><p>**实现难度：**易</p><p>**描述：**这种方式具备很好的 lazy loading，能够在多线程中很好的工作，但是，效率很低，99% 情况下不需要同步。 优点：第一次调用才初始化，避免内存浪费。 缺点：必须加锁 synchronized 才能保证单例，但加锁会影响效率。 getInstance() 的性能对应用程序不是很关键（该方法使用不太频繁）。</p><p>同步方法加锁实现</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 懒汉式，线程安全
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> lazy2 <span class="token punctuation">{</span>
    <span class="token comment">//私有化构造器</span>
    <span class="token keyword">private</span> <span class="token function">lazy2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> lazy2 instance<span class="token punctuation">;</span>

    <span class="token comment">//同步方法加锁</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> lazy2 <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">lazy2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;懒汉式，线程安全&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">//测试</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lazy2 instance1 <span class="token operator">=</span> lazy2<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instance1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、饿汉式" tabindex="-1"><a class="header-anchor" href="#_3、饿汉式"><span>③、饿汉式</span></a></h5><p>**是否 Lazy 初始化：**否</p><p>**是否多线程安全：**是</p><p>**实现难度：**易</p><p>**描述：**这种方式比较常用，但容易产生垃圾对象。 优点：没有加锁，执行效率会提高。 缺点：类加载时就初始化，浪费内存。 它基于 classloader 机制避免了多线程的同步问题，不过，instance 在类装载时就实例化，虽然导致类装载的原因有很多种，在单例模式中大多数都是调用 getInstance 方法， 但是也不能确定有其他的方式（或者其他的静态方法）导致类装载，这时候初始化 instance 显然没有达到 lazy loading 的效果。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 饿汉式(本身就是线程安全的)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HungryMan</span> <span class="token punctuation">{</span>
    <span class="token comment">//私有化构造器</span>
    <span class="token keyword">private</span> <span class="token class-name">HungryMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//因为是饿汉式，所以一上来就new了实例对象</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">HungryMan</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HungryMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HungryMan</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;饿汉式(本身就是线程安全的)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//测试</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HungryMan</span> instance1 <span class="token operator">=</span> <span class="token class-name">HungryMan</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instance1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、双检锁-双重校验锁" tabindex="-1"><a class="header-anchor" href="#_4、双检锁-双重校验锁"><span>④、双检锁/双重校验锁</span></a></h5><p><strong>双检锁/双重校验锁（DCL，即 double-checked locking）</strong></p><p>**JDK 版本：**JDK1.5 起</p><p>**是否 Lazy 初始化：**是</p><p>**是否多线程安全：**是</p><p>**实现难度：**较复杂</p><p>**描述：**这种方式采用双锁机制，安全且在多线程情况下能保持高性能。 getInstance() 的性能对应用程序很关键。</p>`,62),w={href:"https://blog.csdn.net/u012723673/article/details/80682208?ydreferer=aHR0cHM6Ly9jbi5iaW5nLmNvbS8%3D",target:"_blank",rel:"noopener noreferrer"},h=n("strong",null,"volatile关键字作用具体详情",-1),f=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 懒汉式双检锁/双重校验锁
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DCLSingle</span> <span class="token punctuation">{</span>
    <span class="token comment">//私有化构造器</span>
    <span class="token keyword">private</span> <span class="token class-name">DCLSingle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//第一次加锁：使用volatile关键字</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">DCLSingle</span> instance<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DCLSingle</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//第二次加锁：同步代码块加锁</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">DCLSingle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DCLSingle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;双检锁/双重校验锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//测试</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DCLSingle</span> instance1 <span class="token operator">=</span> <span class="token class-name">DCLSingle</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instance1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5、登记式-静态内部类" tabindex="-1"><a class="header-anchor" href="#_5、登记式-静态内部类"><span>⑤、登记式/静态内部类</span></a></h5><p>**是否 Lazy 初始化：**是</p><p>**是否多线程安全：**是</p><p>**实现难度：**一般</p><p>**描述：**这种方式能达到双检锁方式一样的功效，但实现更简单。对静态域使用延迟初始化，应使用这种方式而不是双检锁方式。这种方式只适用于静态域的情况，双检锁方式可在实例域需要延迟初始化时使用。 这种方式同样利用了 classloader 机制来保证初始化 instance 时只有一个线程，它跟第 3 种方式不同的是：第 3 种方式只要 Singleton 类被装载了，那么 instance 就会被实例化（没有达到 lazy loading 效果），而这种方式是 Singleton 类被装载了，instance 不一定被初始化。因为 SingletonHolder 类没有被主动使用，只有通过显式调用 getInstance 方法时，才会显式装载 SingletonHolder 类，从而实例化 instance。想象一下，如果实例化 instance 很消耗资源，所以想让它延迟加载，另外一方面，又不希望在 Singleton 类加载时就实例化，因为不能确保 Singleton 类还可能在其他的地方被主动使用从而被加载，那么这个时候实例化 instance 显然是不合适的。这个时候，这种方式相比第 3 种方式就显得很合理。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 登记式/静态内部类(饿汉式)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InnerSingle</span> <span class="token punctuation">{</span>
    <span class="token comment">//在内部类里面实例化对象</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingleHandler</span><span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">InnerSingle</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InnerSingle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//私有化构造器</span>
    <span class="token keyword">private</span> <span class="token class-name">InnerSingle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">InnerSingle</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SingleHandler</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;登记式/静态内部类(饿汉式)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//测试</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InnerSingle</span> instance <span class="token operator">=</span> <span class="token class-name">InnerSingle</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instance<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6、枚举" tabindex="-1"><a class="header-anchor" href="#_6、枚举"><span>⑥、枚举</span></a></h5><p>**JDK 版本：**JDK1.5 起</p><p>**是否 Lazy 初始化：**否</p><p>**是否多线程安全：**是</p><p>**实现难度：**易</p><p>**描述：**这种实现方式还没有被广泛采用，但这是实现单例模式的最佳方法。它更简洁，自动支持序列化机制，绝对防止多次实例化。 这种方式是 Effective Java 作者 Josh Bloch 提倡的方式，它不仅能避免多线程同步问题，而且还自动支持序列化机制，防止反序列化重新创建新的对象，绝对防止多次实例化。不过，由于 JDK1.5 之后才加入 enum 特性，用这种方式写不免让人感觉生疏，在实际工作中，也很少用。 不能通过 reflection attack 来调用私有构造方法。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 枚举
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">EnumSingle</span> <span class="token punctuation">{</span>
    <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token comment">//测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;枚举&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//测试</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">EnumSingle</span> instance <span class="token operator">=</span> <span class="token class-name">EnumSingle</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
        instance<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7、经验之谈" tabindex="-1"><a class="header-anchor" href="#_7、经验之谈"><span>⑦、经验之谈</span></a></h5><p>一般情况下，不建议使用第 1 种和第 2 种懒汉方式，建议使用第 3 种饿汉方式。只有在要明确实现 lazy loading 效果时，才会使用第 5 种登记方式。如果涉及到反序列化创建对象时，可以尝试使用第 6 种枚举方式。如果有其他特殊的需求，可以考虑使用第 4 种双检锁方式。</p><h3 id="四、建造者模式" tabindex="-1"><a class="header-anchor" href="#四、建造者模式"><span>四、建造者模式</span></a></h3><p>建造者模式（Builder Pattern）使用多个简单的对象一步一步构建成一个复杂的对象。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。</p><p>一个 Builder 类会一步一步构造最终的对象。该 Builder 类是独立于其他对象的。</p><h4 id="_1、介绍-3" tabindex="-1"><a class="header-anchor" href="#_1、介绍-3"><span>1、介绍</span></a></h4><p>**意图：**将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。</p><p>**主要解决：**主要解决在软件系统中，有时候面临着&quot;一个复杂对象&quot;的创建工作，其通常由各个部分的子对象用一定的算法构成；由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法却相对稳定。</p><p>**何时使用：**一些基本部件不会变，而其组合经常变化的时候。</p><p>**如何解决：**将变与不变分离开。</p><p>**关键代码：**建造者：创建和提供实例，导演：管理建造出来的实例的依赖关系。</p><p><strong>应用实例：</strong> 1、去肯德基，汉堡、可乐、薯条、炸鸡翅等是不变的，而其组合是经常变化的，生成出所谓的&quot;套餐&quot;。 2、JAVA 中的 StringBuilder。</p><p><strong>优点：</strong> 1、建造者独立，易扩展。 2、便于控制细节风险。</p><p><strong>缺点：</strong> 1、产品必须有共同点，范围有限制。 2、如内部变化复杂，会有很多的建造类。</p><p><strong>使用场景：</strong> 1、需要生成的对象具有复杂的内部结构。 2、需要生成的对象内部属性本身相互依赖。</p><p>**注意事项：**与工厂模式的区别是：建造者模式更加关注与零件装配的顺序。</p><h4 id="_2、有指挥者模式" tabindex="-1"><a class="header-anchor" href="#_2、有指挥者模式"><span>2、有指挥者模式</span></a></h4>`,31),j={href:"https://imgse.com/i/ppOghVI",target:"_blank",rel:"noopener noreferrer"},_=n("img",{src:"https://s1.ax1x.com/2023/04/11/ppOghVI.md.jpg",alt:"有指挥者模式",style:{zoom:"50%"}},null,-1),q=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 抽象的建造者
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
    <span class="token comment">//一下是四个建造步骤</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">buildA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//地基</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">buildB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//钢筋工程</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">buildC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//铺电线</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">buildD</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//粉刷</span>

    <span class="token comment">//得到具体的抽象的成品：房子</span>
    <span class="token keyword">abstract</span> <span class="token class-name">Product</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体的建造者：工人
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Worker</span> <span class="token keyword">extends</span> <span class="token class-name">Builder</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Product</span> product<span class="token punctuation">;</span>
    <span class="token comment">//注意：工人创建产品</span>
    <span class="token keyword">public</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">buildA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        product<span class="token punctuation">.</span><span class="token function">setBuildA</span><span class="token punctuation">(</span><span class="token string">&quot;地基&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;地基&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">buildB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        product<span class="token punctuation">.</span><span class="token function">setBuildA</span><span class="token punctuation">(</span><span class="token string">&quot;钢筋工程&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;钢筋工程&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">buildC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        product<span class="token punctuation">.</span><span class="token function">setBuildC</span><span class="token punctuation">(</span><span class="token string">&quot;铺电线&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;铺电线&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">buildD</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        product<span class="token punctuation">.</span><span class="token function">setBuildD</span><span class="token punctuation">(</span><span class="token string">&quot;粉刷&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;粉刷&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">Product</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> product<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *具体的产品：房子
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> buildA<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> buildB<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> buildC<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> buildD<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBuildA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> buildA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBuildA</span><span class="token punctuation">(</span><span class="token class-name">String</span> buildA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>buildA <span class="token operator">=</span> buildA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBuildB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> buildB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBuildB</span><span class="token punctuation">(</span><span class="token class-name">String</span> buildB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>buildB <span class="token operator">=</span> buildB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBuildC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> buildC<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBuildC</span><span class="token punctuation">(</span><span class="token class-name">String</span> buildC<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>buildC <span class="token operator">=</span> buildC<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBuildD</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> buildD<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBuildD</span><span class="token punctuation">(</span><span class="token class-name">String</span> buildD<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>buildD <span class="token operator">=</span> buildD<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Product{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;buildA=&#39;&quot;</span> <span class="token operator">+</span> buildA <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, buildB=&#39;&quot;</span> <span class="token operator">+</span> buildB <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, buildC=&#39;&quot;</span> <span class="token operator">+</span> buildC <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, buildD=&#39;&quot;</span> <span class="token operator">+</span> buildD <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 指挥者：核心，负责指挥如何构建一个工程？工程如何构建 由它决定
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Director</span> <span class="token punctuation">{</span>
    <span class="token comment">//指挥工人按照顺序建房子</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">buildProduct</span><span class="token punctuation">(</span><span class="token class-name">Builder</span> builder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">buildA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildD</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Director</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> director<span class="token punctuation">.</span><span class="token function">buildProduct</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),x={href:"https://imgse.com/i/ppOgWqA",target:"_blank",rel:"noopener noreferrer"},S=n("img",{src:"https://s1.ax1x.com/2023/04/11/ppOgWqA.jpg",alt:"无指挥者模式",style:{zoom:"50%"}},null,-1),C=t(`<h4 id="_3、无指挥者模式" tabindex="-1"><a class="header-anchor" href="#_3、无指挥者模式"><span>3、无指挥者模式</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 抽象建造类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token class-name">Builder</span> <span class="token function">buildA</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//可乐</span>
    <span class="token keyword">abstract</span> <span class="token class-name">Builder</span> <span class="token function">buildB</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//汉堡</span>
    <span class="token keyword">abstract</span> <span class="token class-name">Builder</span> <span class="token function">buildC</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//薯条</span>
    <span class="token keyword">abstract</span> <span class="token class-name">Builder</span> <span class="token function">buildD</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//甜点</span>
    <span class="token comment">//得到抽象的成品：套餐</span>
    <span class="token keyword">abstract</span> <span class="token class-name">Product</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *具体的建造者，因为无指挥者，所以客户就充当着指挥者的作用
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token keyword">extends</span> <span class="token class-name">Builder</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Product</span> product<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">Builder</span> <span class="token function">buildA</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        product<span class="token punctuation">.</span><span class="token function">setBuildA</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">Builder</span> <span class="token function">buildB</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        product<span class="token punctuation">.</span><span class="token function">setBuildB</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">Builder</span> <span class="token function">buildC</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        product<span class="token punctuation">.</span><span class="token function">setBuildC</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">Builder</span> <span class="token function">buildD</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        product<span class="token punctuation">.</span><span class="token function">setBuildD</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">Product</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> product<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体的产品：套餐
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> buildA <span class="token operator">=</span> <span class="token string">&quot;可乐&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> buildB <span class="token operator">=</span> <span class="token string">&quot;汉堡&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> buildC <span class="token operator">=</span> <span class="token string">&quot;薯条&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> buildD <span class="token operator">=</span> <span class="token string">&quot;甜点&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBuildA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> buildA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBuildA</span><span class="token punctuation">(</span><span class="token class-name">String</span> buildA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>buildA <span class="token operator">=</span> buildA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBuildB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> buildB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBuildB</span><span class="token punctuation">(</span><span class="token class-name">String</span> buildB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>buildB <span class="token operator">=</span> buildB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBuildC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> buildC<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBuildC</span><span class="token punctuation">(</span><span class="token class-name">String</span> buildC<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>buildC <span class="token operator">=</span> buildC<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBuildD</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> buildD<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBuildD</span><span class="token punctuation">(</span><span class="token class-name">String</span> buildD<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>buildD <span class="token operator">=</span> buildD<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Product{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;buildA=&#39;&quot;</span> <span class="token operator">+</span> buildA <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, buildB=&#39;&quot;</span> <span class="token operator">+</span> buildB <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, buildC=&#39;&quot;</span> <span class="token operator">+</span> buildC <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, buildD=&#39;&quot;</span> <span class="token operator">+</span> buildD <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Client</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        Product product = client.getProduct();</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">buildA</span><span class="token punctuation">(</span><span class="token string">&quot;全家桶&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">buildB</span><span class="token punctuation">(</span><span class="token string">&quot;鸡翅&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">buildC</span><span class="token punctuation">(</span><span class="token string">&quot;鸭脖&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">buildD</span><span class="token punctuation">(</span><span class="token string">&quot;鸡腿&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、原型模式" tabindex="-1"><a class="header-anchor" href="#五、原型模式"><span>五、原型模式</span></a></h3><p>原型模式（Prototype Pattern）是用于创建重复的对象，同时又能保证性能。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式之一。</p><p>这种模式是实现了一个原型接口，该接口用于创建当前对象的克隆。当直接创建对象的代价比较大时，则采用这种模式。例如，一个对象需要在一个高代价的数据库操作之后被创建。我们可以缓存该对象，在下一个请求时返回它的克隆，在需要的时候更新数据库，以此来减少数据库调用。</p><h4 id="_1、介绍-4" tabindex="-1"><a class="header-anchor" href="#_1、介绍-4"><span>1、介绍</span></a></h4><p>**意图：**用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。</p><p>**主要解决：**在运行期建立和删除原型。</p><p><strong>何时使用：</strong> 1、当一个系统应该独立于它的产品创建，构成和表示时。 2、当要实例化的类是在运行时刻指定时，例如，通过动态装载。 3、为了避免创建一个与产品类层次平行的工厂类层次时。 4、当一个类的实例只能有几个不同状态组合中的一种时。建立相应数目的原型并克隆它们可能比每次用合适的状态手工实例化该类更方便一些。</p><p>**如何解决：**利用已有的一个原型对象，快速地生成和原型对象一样的实例。</p><p><strong>关键代码：</strong> 1、实现克隆操作，在 JAVA 实现 Cloneable 接口，重写 clone()，在 .NET 中可以使用 Object 类的 MemberwiseClone() 方法来实现对象的浅拷贝或通过序列化的方式来实现深拷贝。 2、原型模式同样用于隔离类对象的使用者和具体类型（易变类）之间的耦合关系，它同样要求这些&quot;易变类&quot;拥有稳定的接口。</p><p><strong>应用实例：</strong> 1、细胞分裂。 2、JAVA 中的 Object clone() 方法。</p><p><strong>优点：</strong> 1、性能提高。 2、逃避构造函数的约束。</p><p><strong>缺点：</strong> 1、配备克隆方法需要对类的功能进行通盘考虑，这对于全新的类不是很难，但对于已有的类不一定很容易，特别当一个类引用不支持串行化的间接对象，或者引用含有循环结构的时候。 2、必须实现 Cloneable 接口。</p><p><strong>使用场景：</strong> 1、资源优化场景。 2、类初始化需要消化非常多的资源，这个资源包括数据、硬件资源等。 3、性能和安全要求的场景。 4、通过 new 产生一个对象需要非常繁琐的数据准备或访问权限，则可以使用原型模式。 5、一个对象多个修改者的场景。 6、一个对象需要提供给其他对象访问，而且各个调用者可能都需要修改其值时，可以考虑使用原型模式拷贝多个对象供调用者使用。 7、在实际项目中，原型模式很少单独出现，一般是和工厂方法模式一起出现，通过 clone 的方法创建一个对象，然后由工厂方法提供给调用者。原型模式已经与 Java 融为浑然一体，大家可以随手拿来使用。</p><p>**注意事项：**与通过对一个类进行实例化来构造新对象不同的是，原型模式是通过拷贝一个现有对象生成新对象的。浅拷贝实现 Cloneable，重写，深拷贝是通过实现 Serializable 读取二进制流。</p><p>原来我们创建对象时是new出来的，使用原型模式就是通过clone方法克隆一份对象</p><h4 id="_2、两种克隆" tabindex="-1"><a class="header-anchor" href="#_2、两种克隆"><span>2、两种克隆</span></a></h4><h5 id="_1、浅克隆" tabindex="-1"><a class="header-anchor" href="#_1、浅克隆"><span>①、浅克隆</span></a></h5><blockquote><p>当我们修改了Date的值，V1的Date值和V2的Date值不一样 这样就实现了V2Date的值是指向了V1Date值的。</p></blockquote>`,23),P={href:"https://imgse.com/i/ppjrtWF",target:"_blank",rel:"noopener noreferrer"},D=n("img",{src:"https://s1.ax1x.com/2023/04/13/ppjrtWF.md.jpg",alt:"浅克隆",style:{zoom:"50%"}},null,-1),O=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 视频类
 * 1、实现一个接口：cloneable
 * 2、重写clone方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Video</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> date<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Video</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Video</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Date</span> date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>date <span class="token operator">=</span> date<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> date<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDate</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>date <span class="token operator">=</span> date<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Video{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, date=&quot;</span> <span class="token operator">+</span> date <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 客户端克隆
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Clone</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token comment">//原型对象</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Video</span> v1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Video</span><span class="token punctuation">(</span><span class="token string">&quot;sixkey learning java&quot;</span><span class="token punctuation">,</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//浅克隆</span>
        <span class="token comment">//以前如果我们需要其他的Video对象v2</span>
        <span class="token comment">//Video v2 = new Video(&quot;sixkey learning java&quot;, date);</span>
        <span class="token comment">//现在，我们通过clone方式克隆出一个新对象</span>
        <span class="token class-name">Video</span> v2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Video</span><span class="token punctuation">)</span> v1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//克隆出来的对象和原来是一模一样的</span>

        <span class="token comment">//输出结果是一样的</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>v1 <span class="token operator">+</span> <span class="token string">&quot;    &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;v1.hashCode-&gt;&quot;</span> <span class="token operator">+</span> v1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>v2 <span class="token operator">+</span> <span class="token string">&quot;    &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;v2.hashCode-&gt;&quot;</span> <span class="token operator">+</span> v2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;============================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//但是当我们修改了Date的值，V1的Date值和V2的Date值还是一样</span>
        <span class="token comment">//说明V2的Date值是指向了V1的Date值的。</span>
        date<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">12345645</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>v1 <span class="token operator">+</span> <span class="token string">&quot;    &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;v1.hashCode-&gt;&quot;</span> <span class="token operator">+</span> v1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>v2 <span class="token operator">+</span> <span class="token string">&quot;    &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;v2.hashCode-&gt;&quot;</span> <span class="token operator">+</span> v2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、深克隆" tabindex="-1"><a class="header-anchor" href="#_2、深克隆"><span>②、深克隆</span></a></h5><blockquote><p>当我们修改了Date的值，V1的Date值和V2的Date值不一样 这样就实现了V2Date的值是指向了自己的。</p></blockquote>`,4),R={href:"https://imgse.com/i/ppjrNz4",target:"_blank",rel:"noopener noreferrer"},A=n("img",{src:"https://s1.ax1x.com/2023/04/13/ppjrNz4.md.jpg",alt:"ppjrNz4.md.jpg",style:{zoom:"50%"}},null,-1),B=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 视频类
 * 1、实现一个接口：cloneable
 * 2、重写clone方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Video</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> date<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Video</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Video</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Date</span> date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>date <span class="token operator">=</span> date<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> date<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDate</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>date <span class="token operator">=</span> date<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> clone <span class="token operator">=</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//实现深克隆</span>
        <span class="token class-name">Video</span> v <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Video</span><span class="token punctuation">)</span> clone<span class="token punctuation">;</span>
        <span class="token comment">//将这个对象的属性也克隆</span>
        v<span class="token punctuation">.</span>date <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> clone<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Video{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, date=&quot;</span> <span class="token operator">+</span> date <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 客户端克隆
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Clone</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token comment">//原型对象</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Video</span> v1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Video</span><span class="token punctuation">(</span><span class="token string">&quot;sixkey learning java&quot;</span><span class="token punctuation">,</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//深克隆</span>
        <span class="token comment">//以前如果我们需要其他的Video对象v2</span>
        <span class="token comment">//Video v2 = new Video(&quot;sixkey learning java&quot;, date);</span>
        <span class="token comment">//现在，我们通过clone方式克隆出一个新对象</span>
        <span class="token class-name">Video</span> v2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Video</span><span class="token punctuation">)</span> v1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//克隆出来的对象和原来是一模一样的</span>

        <span class="token comment">//输出结果是一样的</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>v1 <span class="token operator">+</span> <span class="token string">&quot;    &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;v1.hashCode-&gt;&quot;</span> <span class="token operator">+</span> v1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>v2 <span class="token operator">+</span> <span class="token string">&quot;    &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;v2.hashCode-&gt;&quot;</span> <span class="token operator">+</span> v2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;============================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//但是当我们修改了Date的值，V1Date值和V2Date值不一样</span>
        <span class="token comment">//说明V2Date值是指向了自己的Date值。</span>
        date<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">12345645</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>v1 <span class="token operator">+</span> <span class="token string">&quot;    &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;v1.hashCode-&gt;&quot;</span> <span class="token operator">+</span> v1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>v2 <span class="token operator">+</span> <span class="token string">&quot;    &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;v2.hashCode-&gt;&quot;</span> <span class="token operator">+</span> v2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构性模式" tabindex="-1"><a class="header-anchor" href="#结构性模式"><span>结构性模式</span></a></h2><h3 id="一、适配器模式" tabindex="-1"><a class="header-anchor" href="#一、适配器模式"><span>一、适配器模式</span></a></h3><p>适配器模式（Adapter Pattern）是作为两个不兼容的接口之间的桥梁。这种类型的设计模式属于结构型模式，它结合了两个独立接口的功能。</p><p>这种模式涉及到一个单一的类，该类负责加入独立的或不兼容的接口功能。举个真实的例子，读卡器是作为内存卡和笔记本之间的适配器。您将内存卡插入读卡器，再将读卡器插入笔记本，这样就可以通过笔记本来读取内存卡。</p><p>我们通过下面的实例来演示适配器模式的使用。其中，音频播放器设备只能播放 mp3 文件，通过使用一个更高级的音频播放器来播放 vlc 和 mp4 文件。</p><h4 id="_1、介绍-5" tabindex="-1"><a class="header-anchor" href="#_1、介绍-5"><span>1、介绍</span></a></h4><p>**意图：**将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</p><p>**主要解决：**主要解决在软件系统中，常常要将一些&quot;现存的对象&quot;放到新的环境中，而新环境要求的接口是现对象不能满足的。</p><p><strong>何时使用：</strong> 1、系统需要使用现有的类，而此类的接口不符合系统的需要。 2、想要建立一个可以重复使用的类，用于与一些彼此之间没有太大关联的一些类，包括一些可能在将来引进的类一起工作，这些源类不一定有一致的接口。 3、通过接口转换，将一个类插入另一个类系中。（比如老虎和飞禽，现在多了一个飞虎，在不增加实体的需求下，增加一个适配器，在里面包容一个虎对象，实现飞的接口。）</p><p>**如何解决：**继承或依赖（推荐）。</p><p>**关键代码：**适配器继承或依赖已有的对象，实现想要的目标接口。</p><p><strong>应用实例：</strong> 1、美国电器 110V，中国 220V，就要有一个适配器将 110V 转化为 220V。 2、JAVA JDK 1.1 提供了 Enumeration 接口，而在 1.2 中提供了 Iterator 接口，想要使用 1.2 的 JDK，则要将以前系统的 Enumeration 接口转化为 Iterator 接口，这时就需要适配器模式。 3、在 LINUX 上运行 WINDOWS 程序。 4、JAVA 中的 jdbc。</p><p><strong>优点：</strong> 1、可以让任何两个没有关联的类一起运行。 2、提高了类的复用。 3、增加了类的透明度。 4、灵活性好。</p><p><strong>缺点：</strong> 1、过多地使用适配器，会让系统非常零乱，不易整体进行把握。比如，明明看到调用的是 A 接口，其实内部被适配成了 B 接口的实现，一个系统如果太多出现这种情况，无异于一场灾难。因此如果不是很有必要，可以不使用适配器，而是直接对系统进行重构。 2.由于 JAVA 至多继承一个类，所以至多只能适配一个适配者类，而且目标类必须是抽象类。</p><p>**使用场景：**有动机地修改一个正常运行的系统的接口，这时应该考虑使用适配器模式。</p><p>**注意事项：**适配器不是在详细设计时添加的，而是解决正在服役的项目的问题。</p><h4 id="_2、两种适配器" tabindex="-1"><a class="header-anchor" href="#_2、两种适配器"><span>2、两种适配器</span></a></h4><h5 id="_1、类适配器" tabindex="-1"><a class="header-anchor" href="#_1、类适配器"><span>①、类适配器</span></a></h5>`,20),M={href:"https://imgse.com/i/ppxZ2rR",target:"_blank",rel:"noopener noreferrer"},z=n("img",{src:"https://s1.ax1x.com/2023/04/13/ppxZ2rR.md.jpg",alt:"ppxZ2rR.md.jpg",style:{zoom:"50%"}},null,-1),I=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 要求被适配的实体类：网线
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adaptee</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;网线可以上网！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 适配器接口(转换器):用来处理适配请求
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">NetToUsb</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 继承方式(单继承，有局限性)
 * 具体的适配器类：这是类适配器的写法(转换器的实现)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token keyword">extends</span> <span class="token class-name">Adaptee</span> <span class="token keyword">implements</span> <span class="token class-name">NetToUsb</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 客户端类：想上网，但是网线接口接不上，需要一个适配器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">network</span><span class="token punctuation">(</span><span class="token class-name">NetToUsb</span> adapter<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//上网的方法:具体实现</span>
        adapter<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Computer</span> computer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//电脑</span>
        <span class="token class-name">NetToUsb</span> netToUsb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//适配器(转换器)</span>
        <span class="token class-name">Adaptee</span> adaptee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//网线</span>

        computer<span class="token punctuation">.</span><span class="token function">network</span><span class="token punctuation">(</span>netToUsb<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、对象适配器" tabindex="-1"><a class="header-anchor" href="#_2、对象适配器"><span>②、对象适配器</span></a></h5>`,5),V={href:"https://imgse.com/i/ppxZRq1",target:"_blank",rel:"noopener noreferrer"},L=n("img",{src:"https://s1.ax1x.com/2023/04/13/ppxZRq1.md.jpg",alt:"ppxZRq1.md.jpg",style:{zoom:"50%"}},null,-1),F=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 要求被适配的类：网线
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adaptee</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;网线可以上网！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 适配器接口:用来处理适配请求
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">NetToUsb</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 对象适配器：组合方式
 * 具体的适配器类：这是类适配器的写法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token keyword">implements</span> <span class="token class-name">NetToUsb</span> <span class="token punctuation">{</span>
    <span class="token comment">//将要求被适配的类：网线组合进来</span>
    <span class="token keyword">private</span> <span class="token class-name">Adaptee</span> adaptee<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span><span class="token class-name">Adaptee</span> adaptee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>adaptee <span class="token operator">=</span> adaptee<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        adaptee<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 客户端类：想上网，但是网线接口接不上，需要一个适配器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">network</span><span class="token punctuation">(</span><span class="token class-name">NetToUsb</span> adapter<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//上网的方法:具体实现</span>
        adapter<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Computer</span> computer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//电脑</span>
        <span class="token class-name">Adaptee</span> adaptee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//网线</span>
        <span class="token class-name">Adapter</span> adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span>adaptee<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//适配器(转换器)</span>

        computer<span class="token punctuation">.</span><span class="token function">network</span><span class="token punctuation">(</span>adapter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、桥接模式" tabindex="-1"><a class="header-anchor" href="#二、桥接模式"><span>二、桥接模式</span></a></h3><p>桥接（Bridge）是用于把抽象化与实现化解耦，使得二者可以独立变化。这种类型的设计模式属于结构型模式，它通过提供抽象化和实现化之间的桥接结构，来实现二者的解耦。</p><p>这种模式涉及到一个作为桥接的接口，使得实体类的功能独立于接口实现类。这两种类型的类可被结构化改变而互不影响。</p><p>我们通过下面的实例来演示桥接模式（Bridge Pattern）的用法。其中，可以使用相同的抽象类方法但是不同的桥接实现类，来画出不同颜色的圆。</p><h4 id="_1、介绍-6" tabindex="-1"><a class="header-anchor" href="#_1、介绍-6"><span>1、介绍</span></a></h4><p>**意图：**将抽象部分与实现部分分离，使它们都可以独立的变化。</p><p>**主要解决：**在有多种可能会变化的情况下，用继承会造成类爆炸问题，扩展起来不灵活。</p><p>**何时使用：**实现系统可能有多个角度分类，每一种角度都可能变化。</p><p>**如何解决：**把这种多角度分类分离出来，让它们独立变化，减少它们之间耦合。</p><p>**关键代码：**抽象类依赖实现类。</p><p><strong>应用实例：</strong> 1、猪八戒从天蓬元帅转世投胎到猪，转世投胎的机制将尘世划分为两个等级，即：灵魂和肉体，前者相当于抽象化，后者相当于实现化。生灵通过功能的委派，调用肉体对象的功能，使得生灵可以动态地选择。 2、墙上的开关，可以看到的开关是抽象的，不用管里面具体怎么实现的。</p><p><strong>优点：</strong> 1、抽象和实现的分离。 2、优秀的扩展能力。 3、实现细节对客户透明。</p><p>**缺点：**桥接模式的引入会增加系统的理解与设计难度，由于聚合关联关系建立在抽象层，要求开发者针对抽象进行设计与编程。</p><p><strong>使用场景：</strong> 1、如果一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性，避免在两个层次之间建立静态的继承联系，通过桥接模式可以使它们在抽象层建立一个关联关系。 2、对于那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统，桥接模式尤为适用。 3、一个类存在两个独立变化的维度，且这两个维度都需要进行扩展。</p><p>**注意事项：**对于两个独立变化的维度，使用桥接模式再适合不过了。</p>`,19),W={href:"https://imgse.com/i/p9VYgL8",target:"_blank",rel:"noopener noreferrer"},E=n("img",{src:"https://s1.ax1x.com/2023/04/22/p9VYgL8.md.jpg",alt:"桥接模式",tabindex:"0",loading:"lazy"},null,-1),N=n("figcaption",null,"桥接模式",-1),T=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 品牌接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Brand</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 联想品牌
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Lenovo</span> <span class="token keyword">implements</span> <span class="token class-name">Brand</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;联想&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 苹果品牌
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Apple</span> <span class="token keyword">implements</span> <span class="token class-name">Brand</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;苹果&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 电脑抽象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token comment">//组合品牌---桥接的最好体现。</span>
    <span class="token keyword">protected</span> <span class="token class-name">Brand</span> brand<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token class-name">Brand</span> brand<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//电脑自带品牌</span>
        brand<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//桌面电脑</span>
<span class="token keyword">class</span> desktop <span class="token keyword">extends</span> <span class="token class-name">Computer</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token function">desktop</span><span class="token punctuation">(</span><span class="token class-name">Brand</span> brand<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;台式机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//笔记本</span>
<span class="token keyword">class</span> laptop <span class="token keyword">extends</span> <span class="token class-name">Computer</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token function">laptop</span><span class="token punctuation">(</span><span class="token class-name">Brand</span> brand<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;笔记本&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//联想品牌的笔记本电脑</span>
        <span class="token class-name">Computer</span> computer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">laptop</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Lenovo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computer1<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//苹果品牌的台式机电脑</span>
        <span class="token class-name">Computer</span> computer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">desktop</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Apple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computer2<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出结果:</span>
        <span class="token comment">//联想笔记本</span>
        <span class="token comment">//苹果台式机</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、代理模式" tabindex="-1"><a class="header-anchor" href="#三、代理模式"><span>三、代理模式</span></a></h3><p>在代理模式（Proxy Pattern）中，一个类代表另一个类的功能。这种类型的设计模式属于结构型模式。</p><p>在代理模式中，我们创建具有现有对象的对象，以便向外界提供功能接口。</p><h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h4><p>**意图：**为其他对象提供一种代理以控制对这个对象的访问。</p><p>**主要解决：**在直接访问对象时带来的问题，比如说：要访问的对象在远程的机器上。在面向对象系统中，有些对象由于某些原因（比如对象创建开销很大，或者某些操作需要安全控制，或者需要进程外的访问），直接访问会给使用者或者系统结构带来很多麻烦，我们可以在访问此对象时加上一个对此对象的访问层。</p><p>**何时使用：**想在访问一个类时做一些控制。</p><p>**如何解决：**增加中间层。</p><p>**关键代码：**实现与被代理类组合。</p><p><strong>应用实例：</strong> 1、Windows 里面的快捷方式。 2、猪八戒去找高翠兰结果是孙悟空变的，可以这样理解：把高翠兰的外貌抽象出来，高翠兰本人和孙悟空都实现了这个接口，猪八戒访问高翠兰的时候看不出来这个是孙悟空，所以说孙悟空是高翠兰代理类。 3、买火车票不一定在火车站买，也可以去代售点。 4、一张支票或银行存单是账户中资金的代理。支票在市场交易中用来代替现金，并提供对签发人账号上资金的控制。 5、spring aop。</p><p><strong>优点：</strong> 1、职责清晰。 2、高扩展性。 3、智能化。</p><p><strong>缺点：</strong> 1、一个真实角色就会产生一个代理角色；代码量就会翻倍，开发效率会变低。 2、实现代理模式需要额外的工作，有些代理模式的实现非常复杂。</p><p>**使用场景：**按职责来划分，通常有以下使用场景： 1、远程代理。 2、虚拟代理。 3、Copy-on-Write 代理。 4、保护（Protect or Access）代理。 5、Cache代理。 6、防火墙（Firewall）代理。 7、同步化（Synchronization）代理。 8、智能引用（Smart Reference）代理。</p><p><strong>注意事项：</strong> 1、和适配器模式的区别：适配器模式主要改变所考虑对象的接口，而代理模式不能改变所代理类的接口。 2、和装饰器模式的区别：装饰器模式为了增强功能，而代理模式是为了加以控制。</p><h4 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理"><span>静态代理</span></a></h4><h5 id="_1、角色分析" tabindex="-1"><a class="header-anchor" href="#_1、角色分析"><span>1、角色分析</span></a></h5><ul><li>抽象角色(租房)：一般会使用接口或者抽象类来解决。</li><li>真实角色：被代理的角色(房东)。</li><li>代理角色：代理真实角色，代理真实角色后，我们一般会做一些附属操作。</li><li>真实角色(客户)：访问代理对象的人。</li></ul>`,22),U={href:"https://imgse.com/i/p9VYWdg",target:"_blank",rel:"noopener noreferrer"},H=n("img",{src:"https://s1.ax1x.com/2023/04/22/p9VYWdg.md.jpg",alt:"静态代理",style:{zoom:"150%"}},null,-1),J=t(`<p>抽象角色(接口):说白了就是需要做的业务</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 租房接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>
    <span class="token comment">//出租房子方法</span>
    <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真实角色：被代理的角色(房东)。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 房东
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Host</span> <span class="token keyword">implements</span> <span class="token class-name">Rent</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;房东出租房子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理角色（中介）</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 代理角色(中介)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Proxy</span> <span class="token keyword">implements</span> <span class="token class-name">Rent</span><span class="token punctuation">{</span>
    <span class="token comment">//组合房东</span>
    <span class="token keyword">private</span> <span class="token class-name">Host</span> host<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token class-name">Host</span> host<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>host <span class="token operator">=</span> host<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//代理房东出租房子</span>
        host<span class="token punctuation">.</span><span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//额外干其他事情</span>
        <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">heTong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//中介可以额外干其他事情</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中介带你看房子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">heTong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;签租赁合同&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真实角色(客户)</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 客户、租房子的人
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//方式1、直接找房东租房子</span>
        <span class="token class-name">Host</span> host <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Host</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//host.rent();</span>
        <span class="token comment">//方式2、通过中介租房子,但是呢，代理角色一般会有其他附属操作。</span>
        <span class="token class-name">Proxy</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//你不用面对房东，直接找中介租房即可。</span>
        proxy<span class="token punctuation">.</span><span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出结果：</span>
        <span class="token comment">//房东出租房子</span>
        <span class="token comment">//中介带你看房子</span>
        <span class="token comment">//签租赁合同</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、加深理解" tabindex="-1"><a class="header-anchor" href="#_2、加深理解"><span>2、加深理解</span></a></h5><p>业务需求</p><blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>业务需求，在原有的增删改查功能代码之上实现日志功能，不改动原有代码。
代码直接加在代理角色类中，这样就不用改动原有代码了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,11),Y={href:"https://imgse.com/i/p9VYReS",target:"_blank",rel:"noopener noreferrer"},Q=n("img",{src:"https://s1.ax1x.com/2023/04/22/p9VYReS.md.jpg",alt:"p9VYReS.md.jpg",style:{zoom:"80%"}},null,-1),Z=t(`<p>抽象角色(接口)</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 抽象角色(接口)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 真实角色
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;add方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;delete方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;update方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;query方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真实角色</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 真实角色
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;add方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;delete方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;update方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;query方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理角色</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 代理角色
 * 业务需求，在原有的增删改查功能代码之上加入日志，不改动原有代码。
 * 代码直接加在代理角色类中，这样就不用改动原有代码了。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceProxy</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span><span class="token punctuation">{</span>
    <span class="token comment">//组合抽象角色</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserService</span><span class="token punctuation">(</span><span class="token class-name">UserService</span> userService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;delete&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;update&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;query&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">String</span> meg<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用了&quot;</span> <span class="token operator">+</span> meg <span class="token operator">+</span> <span class="token string">&quot;方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//使用代理模式</span>
        <span class="token class-name">UserServiceProxy</span> userServiceProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userServiceProxy<span class="token punctuation">.</span><span class="token function">setUserService</span><span class="token punctuation">(</span>userService<span class="token punctuation">)</span><span class="token punctuation">;</span>
        userServiceProxy<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理"><span>动态代理</span></a></h4><h5 id="_1、介绍-7" tabindex="-1"><a class="header-anchor" href="#_1、介绍-7"><span>1、介绍</span></a></h5><ul><li>动态代理的代理角色和静态代理的代理角色一样。</li><li>动态代理的代理类是动态生成的，不是像静态代理一样直接把代理类Proxy写好。</li><li>需要了解两个类：Proxy(类)、 InvocationHandler(接口)</li></ul><p><strong>public interface InvocationHandler</strong></p><p><code>InvocationHandler</code>是由代理实例的<em>调用处理程序</em>实现的<em>接口</em> 。</p><p>每个代理实例都有一个关联的调用处理程序。 当在代理实例上调用方法时，方法调用将被编码并分派到其调用处理程序的<code>invoke</code>方法。</p><h5 id="_2、动态代理实例" tabindex="-1"><a class="header-anchor" href="#_2、动态代理实例"><span>2、动态代理实例</span></a></h5>`,15),G={href:"https://imgse.com/i/p9VYfoQ",target:"_blank",rel:"noopener noreferrer"},X=n("img",{src:"https://s1.ax1x.com/2023/04/22/p9VYfoQ.md.jpg",alt:"动态代理",style:{zoom:"150%"}},null,-1),K=t(`<p><strong>实例1</strong></p><p>抽象角色(接口):说白了就是需要做的业务</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 租房接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>
    <span class="token comment">//出租房子方法</span>
    <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真实角色：被代理的角色(房东)。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 房东(真实角色)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Host</span> <span class="token keyword">implements</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;房东出租房子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态生成代理类</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 等会儿我们会使用这个类，自动生成代理类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    <span class="token comment">//被代理接口</span>
    <span class="token keyword">private</span> <span class="token class-name">Rent</span> rent<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRent</span><span class="token punctuation">(</span><span class="token class-name">Rent</span> rent<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rent <span class="token operator">=</span> rent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//生成得到代理类</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//当前类加载器</span>
                                      rent<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//被代理接口</span>
                                    <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//InvocationHandler对象</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//处理代理实例，并返回结果</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span>
                         <span class="token class-name">Method</span> method<span class="token punctuation">,</span>
                         <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token comment">//动态代理的实质，就是使用反射机制实现</span>
        <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> invoke <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>rent<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> invoke<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//代理类的额外附属工作</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中介带你看房子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;收中介费&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//真实角色房东</span>
        <span class="token class-name">Host</span> host <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Host</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//代理角色，现在没有</span>
        <span class="token class-name">ProxyInvocationHandler</span> pih <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyInvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pih<span class="token punctuation">.</span><span class="token function">setRent</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//得到代理类(中介)，中介替房东执行rent().</span>
        <span class="token class-name">Rent</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Rent</span><span class="token punctuation">)</span> pih<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出结果</span>
        <span class="token comment">//中介带你看房子</span>
        <span class="token comment">//收中介费</span>
        <span class="token comment">//房东出租房子</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例2</strong></p><p>业务需求</p><blockquote><p>业务需求，在原有的增删改查功能代码之上实现日志功能，不改动原有代码。 代码直接加在自动生成代理类的invoke方法中，这样就不用改动原有代码了。</p></blockquote><p>抽象角色(接口)</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 抽象角色(接口)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真实角色</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 真实角色
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;add方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;delete方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;update方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;query方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理角色</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 等会儿我们会使用这个类，自动生成代理类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    <span class="token comment">//被代理的接口</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserService</span><span class="token punctuation">(</span><span class="token class-name">UserService</span> userService<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//自动生成代理类</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                      userService<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                      <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//处理代理类，并返回结果</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token comment">//动态代理实质就是反射机制实现</span>
        <span class="token function">log</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//使用反射获取执行方法的名称</span>
        <span class="token class-name">Object</span> invoke <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>userService<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> invoke<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//日志输出</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">String</span> meg<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行了&quot;</span> <span class="token operator">+</span> meg <span class="token operator">+</span> <span class="token string">&quot;方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//真实角色</span>
        <span class="token class-name">UserServiceImpl</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//代理类，现在没有</span>
        <span class="token class-name">ProxyInvocationHandler</span> pih <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyInvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pih<span class="token punctuation">.</span><span class="token function">setUserService</span><span class="token punctuation">(</span>userService<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//得到代理类</span>
        <span class="token class-name">UserService</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserService</span><span class="token punctuation">)</span> pih<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出结果</span>
        <span class="token comment">//执行了query方法</span>
        <span class="token comment">//query方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、动态代理工具包" tabindex="-1"><a class="header-anchor" href="#_3、动态代理工具包"><span>3、动态代理工具包</span></a></h5><p><strong>工具包的用法就是我们只需要设置被代理类的对象即可，会自动生成代理类对象。</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 万能自动生成代理类工具包
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    <span class="token comment">//被代理接口</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTarget</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//生成代理类</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                      target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                      <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//处理代理实例，并返回结果</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token comment">//动态代理</span>
        <span class="token class-name">Object</span> invoke <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> invoke<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//真实角色</span>
        <span class="token class-name">Host</span> host <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Host</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//代理类，现在还没有,设置被代理类的对象</span>
        <span class="token class-name">ProxyInvocationHandler</span> pih <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyInvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pih<span class="token punctuation">.</span><span class="token function">setTarget</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//得到代理类</span>
        <span class="token class-name">Rent</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Rent</span><span class="token punctuation">)</span> pih<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//真实角色</span>
        <span class="token class-name">UserServiceImpl</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//代理类，现在还没有，设置被代理类的对象</span>
        pih<span class="token punctuation">.</span><span class="token function">setTarget</span><span class="token punctuation">(</span>userService<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//得到代理类</span>
        <span class="token class-name">UserService</span> proxy1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserService</span><span class="token punctuation">)</span> pih<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、装饰器模式" tabindex="-1"><a class="header-anchor" href="#四、装饰器模式"><span>四、装饰器模式</span></a></h3><p>装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。</p><p>这种模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供了额外的功能。</p><p>我们通过下面的实例来演示装饰器模式的用法。其中，我们将把一个形状装饰上不同的颜色，同时又不改变形状类。</p><h4 id="_1、介绍-8" tabindex="-1"><a class="header-anchor" href="#_1、介绍-8"><span>1、介绍</span></a></h4><p>**意图：**动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。</p><p>**主要解决：**一般的，我们为了扩展一个类经常使用继承方式实现，由于继承为类引入静态特征，并且随着扩展功能的增多，子类会很膨胀。</p><p>**何时使用：**在不想增加很多子类的情况下扩展类。</p><p>**如何解决：**将具体功能职责划分，同时继承装饰者模式。</p><p><strong>关键代码：</strong> 1、Component 类充当抽象角色，不应该具体实现。 2、修饰类引用和继承 Component 类，具体扩展类重写父类方法。</p><p><strong>应用实例：</strong> 1、孙悟空有 72 变，当他变成&quot;庙宇&quot;后，他的根本还是一只猴子，但是他又有了庙宇的功能。 2、不论一幅画有没有画框都可以挂在墙上，但是通常都是有画框的，并且实际上是画框被挂在墙上。在挂在墙上之前，画可以被蒙上玻璃，装到框子里；这时画、玻璃和画框形成了一个物体。</p><p>**优点：**装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。</p><p>**缺点：**多层装饰比较复杂。</p><p><strong>使用场景：</strong> 1、扩展一个类的功能。 2、动态增加功能，动态撤销。</p><p>**注意事项：**可代替继承。</p><blockquote><p>引出问题</p></blockquote>`,41),$={href:"https://imgse.com/i/p9yR2wQ",target:"_blank",rel:"noopener noreferrer"},nn=n("img",{src:"https://s1.ax1x.com/2023/05/12/p9yR2wQ.jpg",alt:"p9yR2wQ.jpg",tabindex:"0",loading:"lazy"},null,-1),sn=n("figcaption",null,"p9yR2wQ.jpg",-1),an=n("blockquote",null,[n("p",null,"问题解决")],-1),tn={href:"https://imgse.com/i/p9yRgeg",target:"_blank",rel:"noopener noreferrer"},pn=n("img",{src:"https://s1.ax1x.com/2023/05/12/p9yRgeg.md.jpg",alt:"p9yRgeg.md.jpg",tabindex:"0",loading:"lazy"},null,-1),en=n("figcaption",null,"p9yRgeg.md.jpg",-1),cn={href:"https://imgse.com/i/p9yRyy8",target:"_blank",rel:"noopener noreferrer"},on=n("img",{src:"https://s1.ax1x.com/2023/05/12/p9yRyy8.md.jpg",alt:"p9yRyy8.md.jpg",tabindex:"0",loading:"lazy"},null,-1),ln=n("figcaption",null,"p9yRyy8.md.jpg",-1),un=n("p",null,[n("strong",null,"解决了当我们新增一种单品咖啡时继承带来的类爆炸问题")],-1),dn=n("blockquote",null,[n("p",null,"UML图")],-1),kn={href:"https://imgse.com/i/p9yR6OS",target:"_blank",rel:"noopener noreferrer"},rn=n("img",{src:"https://s1.ax1x.com/2023/05/12/p9yR6OS.png",alt:"p9yR6OS.png",tabindex:"0",loading:"lazy"},null,-1),vn=n("figcaption",null,"p9yR6OS.png",-1),mn=t(`<p><strong>主要分为两类：装饰者和被装饰者；装饰者就是被附加的职责。</strong></p><p><strong>被装饰者</strong>：具体的饮料——咖啡</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 被装饰者：抽象类：饮料
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Drink</span> <span class="token punctuation">{</span>
    <span class="token comment">//描述</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>
    <span class="token comment">//价格</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> price <span class="token operator">=</span> <span class="token number">0.0f</span><span class="token punctuation">;</span>

    <span class="token comment">//计算费用抽象方法，有子类来实现</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">float</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">float</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 饮料的具体子类：单品咖啡
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Coffee</span> <span class="token keyword">extends</span> <span class="token class-name">Drink</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 因为是单品咖啡，所以直接返回父类的价格即可。
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 咖啡的具体子类：美式咖啡
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LongBlack</span> <span class="token keyword">extends</span> <span class="token class-name">Coffee</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">LongBlack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&quot;美式咖啡--LongBlack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">5.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>装饰者</strong>：具体的调料品—–牛奶、豆浆…</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 装饰者 ： 调料
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Decorator</span> <span class="token keyword">extends</span> <span class="token class-name">Drink</span><span class="token punctuation">{</span>
    <span class="token comment">//装饰者模式的核心就是继承了被装饰者的同时组合了被装饰者</span>
    <span class="token keyword">private</span> <span class="token class-name">Drink</span> drink<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Decorator</span><span class="token punctuation">(</span><span class="token class-name">Drink</span> drink<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>drink <span class="token operator">=</span> drink<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//费用 = 具体调料  + 具体饮料</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//调料品 + 饮料 的费用</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> drink<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&amp;&amp;&quot;</span> <span class="token operator">+</span> drink<span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 装饰者的具体子类：牛奶调料品
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Milk</span> <span class="token keyword">extends</span> <span class="token class-name">Decorator</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Milk</span><span class="token punctuation">(</span><span class="token class-name">Drink</span> drink<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>drink<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&quot;牛奶调料品&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">3.5f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 下单者：客户
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//装饰者模式下的订单：2份巧克力 + 1份牛奶的美式咖啡。</span>
        <span class="token class-name">Drink</span> longBlack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LongBlack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;单品美式咖啡费用：&quot;</span> <span class="token operator">+</span> longBlack<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//加入一份牛奶</span>
        longBlack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Milk</span><span class="token punctuation">(</span>longBlack<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;加入一份牛奶后的美式咖啡费用：&quot;</span> <span class="token operator">+</span> longBlack<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//加入1份巧克力</span>
        longBlack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chocolate</span><span class="token punctuation">(</span>longBlack<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;加入1份巧克力和一份牛奶后的美式咖啡费用：&quot;</span> <span class="token operator">+</span> longBlack<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//输出结果</span>
单品美式咖啡费用：<span class="token number">5.0</span>
加入一份牛奶后的美式咖啡费用：<span class="token number">8.5</span>
加入<span class="token number">1</span>份巧克力和一份牛奶后的美式咖啡费用：<span class="token number">11.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方便之处就在：当商家需要添加一个中式咖啡品种时，只需直接继承被装饰者抽象类Drink即可与装饰者调料品有联系。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 中式咖啡
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Descf</span> <span class="token keyword">extends</span> <span class="token class-name">Coffee</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Descf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&quot;中式咖啡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">6.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 下单者：客户
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//中式咖啡加豆浆再加牛奶</span>
        <span class="token class-name">Drink</span> descf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Descf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//加入一份豆浆</span>
        descf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Soy</span><span class="token punctuation">(</span>descf<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//加入一份牛奶</span>
        descf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Milk</span><span class="token punctuation">(</span>descf<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;加入一份豆浆、一份牛奶的中式咖啡价格为：&quot;</span> <span class="token operator">+</span> descf<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出结果</span>
加入一份豆浆、一份牛奶的中式咖啡价格为：<span class="token number">12.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、装饰者模式jdk应用" tabindex="-1"><a class="header-anchor" href="#_2、装饰者模式jdk应用"><span>2、装饰者模式JDK应用</span></a></h4>`,15),bn={href:"https://imgse.com/i/p9yXQFx",target:"_blank",rel:"noopener noreferrer"},gn=n("img",{src:"https://s1.ax1x.com/2023/05/12/p9yXQFx.md.jpg",alt:"装饰者模式",tabindex:"0",loading:"lazy"},null,-1),yn=n("figcaption",null,"装饰者模式",-1),wn=t('<h3 id="五、组合模式" tabindex="-1"><a class="header-anchor" href="#五、组合模式"><span>五、组合模式</span></a></h3><p>组合模式（Composite Pattern），又叫<strong>部分-整体模式</strong>，是用于把一组相似的对象当作一个单一的对象。组合模式依据树形结构来组合对象，用来表示<strong>部分以及整体层次</strong>。这种类型的设计模式属于结构型模式，它创建了对象组的树形结构。</p><p>这种模式创建了一个包含自己对象组的类。该类提供了修改相同对象组的方式。</p><h4 id="_1、介绍-9" tabindex="-1"><a class="header-anchor" href="#_1、介绍-9"><span>1、介绍</span></a></h4><p>**意图：**将对象组合成树形结构以表示&quot;部分-整体&quot;的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。</p><p>**主要解决：**它在我们树型结构的问题中，模糊了简单元素和复杂元素的概念，客户程序可以像处理简单元素一样来处理复杂元素，从而使得客户程序与复杂元素的内部结构解耦。</p><p><strong>何时使用：</strong> 1、您想表示对象的部分-整体层次结构（树形结构）。 2、您希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象。</p><p>**如何解决：**树枝和叶子实现统一接口，树枝内部组合该接口。</p><p>**关键代码：**树枝内部组合该接口，并且含有内部属性 List，里面放 Component。</p><p><strong>优点：</strong> 1、高层模块调用简单。 2、节点自由增加。</p><p>**缺点：**在使用组合模式时，其叶子和树枝的声明都是实现类，而不是接口，违反了依赖倒置原则。</p><p>**使用场景：**部分、整体场景，如树形菜单，文件、文件夹的管理。</p><p>**注意事项：**定义时为具体类。</p><blockquote><p>问题引出</p></blockquote>',14),hn={href:"https://imgse.com/i/p96SdRx",target:"_blank",rel:"noopener noreferrer"},fn=n("img",{src:"https://s1.ax1x.com/2023/05/12/p96SdRx.md.jpg",alt:"p96SdRx.md.jpg",tabindex:"0",loading:"lazy"},null,-1),jn=n("figcaption",null,"p96SdRx.md.jpg",-1),_n=n("blockquote",null,[n("p",null,"问题解决")],-1),qn={href:"https://imgse.com/i/p96SaJ1",target:"_blank",rel:"noopener noreferrer"},xn=n("img",{src:"https://s1.ax1x.com/2023/05/12/p96SaJ1.md.jpg",alt:"p96SaJ1.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Sn=n("figcaption",null,"p96SaJ1.md.jpg",-1),Cn={href:"https://imgse.com/i/p96Swz6",target:"_blank",rel:"noopener noreferrer"},Pn=n("img",{src:"https://s1.ax1x.com/2023/05/12/p96Swz6.md.jpg",alt:"p96Swz6.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Dn=n("figcaption",null,"p96Swz6.md.jpg",-1),On=n("p",null,[n("strong",null,"UML图")],-1),Rn={href:"https://imgse.com/i/p96pESx",target:"_blank",rel:"noopener noreferrer"},An=n("img",{src:"https://s1.ax1x.com/2023/05/13/p96pESx.md.jpg",alt:"p96pESx.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Bn=n("figcaption",null,"p96pESx.md.jpg",-1),Mn=t(`<p><strong>核心代码实现</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 组合模式
 * 组织机构可以是抽象类或者接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">OrganziationComponent</span> <span class="token punctuation">{</span>
    <span class="token comment">//名称</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">//描述</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">OrganziationComponent</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//添加方法，叶子结点子类不用实现</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">OrganziationComponent</span> organziationComponent<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//默认实现</span>
        <span class="token keyword">throw</span>  <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//删除方法，叶子结点子类不用实现</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">OrganziationComponent</span> organziationComponent<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//默认实现</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//打印方法,所有子类都需实现</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * University是学校，这是管理者,可以管理学院college
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">University</span> <span class="token keyword">extends</span> <span class="token class-name">OrganziationComponent</span><span class="token punctuation">{</span>
    <span class="token comment">//组合模式核心：聚合OrganziationComponent</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrganziationComponent</span><span class="token punctuation">&gt;</span></span> organziationComponents <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">University</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//重写add方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">OrganziationComponent</span> organziationComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        organziationComponents<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>organziationComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//重写remove方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">OrganziationComponent</span> organziationComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        organziationComponents<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>organziationComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//打印出当前学校的名称以及学校下的学院名称</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//打印学校名称</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------&quot;</span> <span class="token operator">+</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//打印学院名称</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">OrganziationComponent</span> organziationComponent <span class="token operator">:</span> organziationComponents<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            organziationComponent<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * College是学院，这是管理者,可以管理专业major
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">College</span> <span class="token keyword">extends</span> <span class="token class-name">OrganziationComponent</span><span class="token punctuation">{</span>
    <span class="token comment">//组合模式核心：聚合OrganziationComponent</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrganziationComponent</span><span class="token punctuation">&gt;</span></span> organziationComponents <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">College</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//重写add方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">OrganziationComponent</span> organziationComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//将来业务中，College 和 University的add方法不一定完全一样。</span>
        organziationComponents<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>organziationComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//重写remove方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">OrganziationComponent</span> organziationComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        organziationComponents<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>organziationComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//打印出当前学校的名称以及学校下的学院名称</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//打印学校名称</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------&quot;</span> <span class="token operator">+</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//打印学院名称</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">OrganziationComponent</span> organziationComponent <span class="token operator">:</span> organziationComponents<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            organziationComponent<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Major是专业，这是叶子结点，下面不再有分支。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Major</span> <span class="token keyword">extends</span> <span class="token class-name">OrganziationComponent</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Major</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//不再重写add和remove方法，因为它是叶子结点。</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========&quot;</span> <span class="token operator">+</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;==========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//从大到小创建对象  学校</span>
        <span class="token class-name">OrganziationComponent</span> university <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">University</span><span class="token punctuation">(</span><span class="token string">&quot;清华大学&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中国顶级大学&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//学院</span>
        <span class="token class-name">OrganziationComponent</span> computerCollege <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">College</span><span class="token punctuation">(</span><span class="token string">&quot;信息工程学院&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;信息工程学院&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">OrganziationComponent</span> maCollege <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">College</span><span class="token punctuation">(</span><span class="token string">&quot;马克思主义学院&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;马克思主义学院&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//专业</span>
        computerCollege<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Major</span><span class="token punctuation">(</span><span class="token string">&quot;计算机科学与技术&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;很不错&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computerCollege<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Major</span><span class="token punctuation">(</span><span class="token string">&quot;软件工程&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;明年就不招咯&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computerCollege<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Major</span><span class="token punctuation">(</span><span class="token string">&quot;信管&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;可以&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        maCollege<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Major</span><span class="token punctuation">(</span><span class="token string">&quot;马克思主义&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;难学&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        maCollege<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Major</span><span class="token punctuation">(</span><span class="token string">&quot;毛概&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;不错&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将学院加入到学校中去</span>
        university<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>computerCollege<span class="token punctuation">)</span><span class="token punctuation">;</span>
        university<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>maCollege<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//打印学校、学院、专业</span>
        university<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出结果</span>
        <span class="token comment">// ---------------清华大学-----------------</span>
        <span class="token comment">//---------------信息工程学院-----------------</span>
        <span class="token comment">//==========计算机科学与技术==========</span>
        <span class="token comment">//==========软件工程==========</span>
        <span class="token comment">//==========信管==========</span>
        <span class="token comment">//---------------马克思主义学院-----------------</span>
        <span class="token comment">//==========马克思主义==========</span>
        <span class="token comment">//==========毛概==========</span>
        computerCollege<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出结果</span>
        <span class="token comment">// ---------------信息工程学院-----------------</span>
        <span class="token comment">//==========计算机科学与技术==========</span>
        <span class="token comment">//==========软件工程==========</span>
        <span class="token comment">//==========信管==========</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、外观模式" tabindex="-1"><a class="header-anchor" href="#六、外观模式"><span>六、外观模式</span></a></h3><p>外观模式（Facade Pattern）隐藏系统的复杂性，并向客户端提供了一个客户端可以访问系统的接口。这种类型的设计模式属于结构型模式，它向现有的系统添加一个接口，来隐藏系统的复杂性。</p><p>这种模式涉及到一个单一的类，该类提供了客户端请求的简化方法和对现有系统类方法的委托调用。</p><h4 id="_1、介绍-10" tabindex="-1"><a class="header-anchor" href="#_1、介绍-10"><span>1、介绍</span></a></h4><p>**意图：**为子系统中的一组接口提供一个一致的界面，外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。</p><p>**主要解决：**降低访问复杂系统的内部子系统时的复杂度，简化客户端之间的接口。</p><p><strong>何时使用：</strong> 1、客户端不需要知道系统内部的复杂联系，整个系统只需提供一个&quot;接待员&quot;即可。 2、定义系统的入口。</p><p>**如何解决：**客户端不与系统耦合，外观类与系统耦合。</p><p>**关键代码：**在客户端和复杂系统之间再加一层，这一层将调用顺序、依赖关系等处理好。</p><p><strong>应用实例：</strong> 1、去医院看病，可能要去挂号、门诊、划价、取药，让患者或患者家属觉得很复杂，如果有提供接待人员，只让接待人员来处理，就很方便。 2、JAVA 的三层开发模式。</p><p><strong>优点：</strong> 1、减少系统相互依赖。 2、提高灵活性。 3、提高了安全性。</p><p>**缺点：**不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。</p><p><strong>使用场景：</strong> 1、为复杂的模块或子系统提供外界访问的模块。 2、子系统相对独立。 3、预防低水平人员带来的风险。</p><p>**注意事项：**在层次化结构中，可以使用外观模式定义系统中每一层的入口。</p><blockquote><p>引出问题</p></blockquote>`,22),zn={href:"https://imgse.com/i/p96VC7V",target:"_blank",rel:"noopener noreferrer"},In=n("img",{src:"https://s1.ax1x.com/2023/05/13/p96VC7V.md.jpg",alt:"p96VC7V.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Vn=n("figcaption",null,"p96VC7V.md.jpg",-1),Ln=n("blockquote",null,[n("p",null,"分析问题")],-1),Fn={href:"https://imgse.com/i/p96VFtU",target:"_blank",rel:"noopener noreferrer"},Wn=n("img",{src:"https://s1.ax1x.com/2023/05/13/p96VFtU.md.jpg",alt:"p96VFtU.md.jpg",tabindex:"0",loading:"lazy"},null,-1),En=n("figcaption",null,"p96VFtU.md.jpg",-1),Nn=n("blockquote",null,[n("p",null,"外观模式原理图")],-1),Tn={href:"https://imgse.com/i/p96VikT",target:"_blank",rel:"noopener noreferrer"},Un=n("img",{src:"https://s1.ax1x.com/2023/05/13/p96VikT.md.jpg",alt:"p96VikT.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Hn=n("figcaption",null,"p96VikT.md.jpg",-1),Jn=n("blockquote",null,[n("p",null,"UML图")],-1),Yn={href:"https://imgse.com/i/p96V900",target:"_blank",rel:"noopener noreferrer"},Qn=n("img",{src:"https://s1.ax1x.com/2023/05/13/p96V900.md.jpg",alt:"p96V900.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Zn=n("figcaption",null,"p96V900.md.jpg",-1),Gn=t(`<p><strong>核心代码</strong>：主要是定义一个高层接口，让客户端直接调用高层接口即可。</p><p>高层接口：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 外观模式
 * 家庭影院：高层接口，被client直接调用
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HomeMoveFacade</span> <span class="token punctuation">{</span>
    <span class="token comment">//核心：聚合各个子系统</span>
    <span class="token keyword">private</span> <span class="token class-name">DVDPlayer</span> dvdPlayer<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Popcorn</span> popcorn<span class="token punctuation">;</span>
    <span class="token keyword">private</span>  <span class="token class-name">Projector</span> projector<span class="token punctuation">;</span>

    <span class="token comment">//初始化子系统</span>
    <span class="token keyword">public</span> <span class="token class-name">HomeMoveFacade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dvdPlayer <span class="token operator">=</span> <span class="token class-name">DVDPlayer</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>popcorn <span class="token operator">=</span> <span class="token class-name">Popcorn</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>projector <span class="token operator">=</span> <span class="token class-name">Projector</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//做准备工作</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//dvd开机</span>
        dvdPlayer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//爆米花机开机</span>
        popcorn<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//投影仪开机</span>
        projector<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//开始进行工作</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//dvd播放</span>
        dvdPlayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//爆米花机工作</span>
        popcorn<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//投影仪开始聚焦</span>
        projector<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//暂停</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        dvdPlayer<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        popcorn<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        projector<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//关机</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//dvd播放关机</span>
        dvdPlayer<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//爆米花机关机</span>
        popcorn<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//投影仪关机</span>
        projector<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子系统：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * DVD子系统
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DVDPlayer</span> <span class="token punctuation">{</span>
    <span class="token comment">//采用饿汉式单例模式</span>
    <span class="token keyword">private</span> <span class="token class-name">DVDPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">DVDPlayer</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DVDPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DVDPlayer</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//开机方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DVD 开机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//关机方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DVD 关机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//播放方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DVD 播放...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//结束方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DVD 暂停...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 爆米花机子系统
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Popcorn</span> <span class="token punctuation">{</span>
    <span class="token comment">//采用饿汉式单例模式</span>
    <span class="token keyword">private</span> <span class="token class-name">Popcorn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Popcorn</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Popcorn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Popcorn</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//开机方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;爆米花机 开机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//关机方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;爆米花机 关机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;爆米花机 工作...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//赞停</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;爆米花机 暂停&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 投影仪子系统
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Projector</span> <span class="token punctuation">{</span>
    <span class="token comment">//采用饿汉式单例模式</span>
    <span class="token keyword">private</span> <span class="token class-name">Projector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Projector</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Projector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Projector</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//开机方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;投影仪 开机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//关机方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;投影仪 关机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//聚焦方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;投影仪 聚焦....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//结束</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;投影仪 聚焦暂停&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HomeMoveFacade</span> homeMoveFacade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HomeMoveFacade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//子系统开机工作</span>
        homeMoveFacade<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//子系统开始工作</span>
        homeMoveFacade<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//子系统暂停工作</span>
        homeMoveFacade<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//子系统关机</span>
        homeMoveFacade<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//输出结果</span>
        <span class="token comment">//DVD 开机</span>
        <span class="token comment">//爆米花机 开机</span>
        <span class="token comment">//投影仪 开机</span>
        <span class="token comment">//--------------------------</span>
        <span class="token comment">//DVD 播放...</span>
        <span class="token comment">//爆米花机 工作...</span>
        <span class="token comment">//投影仪 聚焦....</span>
        <span class="token comment">//--------------------------</span>
        <span class="token comment">//DVD 暂停...</span>
        <span class="token comment">//爆米花机 暂停</span>
        <span class="token comment">//投影仪 聚焦暂停</span>
        <span class="token comment">//--------------------------</span>
        <span class="token comment">//DVD 关机</span>
        <span class="token comment">//爆米花机 关机</span>
        <span class="token comment">//投影仪 关机</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、外观模式细节" tabindex="-1"><a class="header-anchor" href="#_2、外观模式细节"><span>2、外观模式细节</span></a></h4><p>外观模式的注意事项和细节</p><ul><li><p>外观模式外屏蔽了子系统的细节，因此外观模式降低了客户端对子系统使用的复杂性</p></li><li><p>外观模式对客户端与子系统的耦合关系，让子系统内部的模块更易维护和扩展</p></li><li><p>通过合理的使用外观模式，可以帮我们更好的划分访问的层次</p></li><li><p>当系统需要进行分层设计时，可以考虑使用Facade模式</p></li><li><p>在维护一个遗留的大型系统时，可能这个系统已经变得非常难以维护和扩展，此时可以考虑为新系统开发一个Facade类，来提供遗留系统的比较清晰简单的接口，让新系统与Facade类交互，提高复用性</p></li><li><p>不能过多的或者不合理的使用外观模式，使用外观模式好，还是直接调用模块好。要以让系统有层次，利于维护为目的。</p></li></ul><h3 id="七、享元模式" tabindex="-1"><a class="header-anchor" href="#七、享元模式"><span>七、享元模式</span></a></h3><p>享元模式（Flyweight Pattern）主要用于减少创建对象的数量，以减少内存占用和提高性能。这种类型的设计模式属于结构型模式，它提供了减少对象数量从而改善应用所需的对象结构的方式。</p><p>享元模式尝试重用现有的同类对象，如果未找到匹配的对象，则创建新对象。我们将通过创建 5 个对象来画出 20 个分布于不同位置的圆来演示这种模式。由于只有 5 种可用的颜色，所以 color 属性被用来检查现有的 <em>Circle</em> 对象。</p><h4 id="_1、介绍-11" tabindex="-1"><a class="header-anchor" href="#_1、介绍-11"><span>1、介绍</span></a></h4><p>**意图：**运用共享技术有效地支持大量细粒度的对象。</p><p>**主要解决：**在有大量对象时，有可能会造成内存溢出，我们把其中共同的部分抽象出来，如果有相同的业务请求，直接返回在内存中已有的对象，避免重新创建。</p><p><strong>何时使用：</strong> 1、系统中有大量对象。 2、这些对象消耗大量内存。 3、这些对象的状态大部分可以外部化。 4、这些对象可以按照内蕴状态分为很多组，当把外蕴对象从对象中剔除出来时，每一组对象都可以用一个对象来代替。 5、系统不依赖于这些对象身份，这些对象是不可分辨的。</p><p>**如何解决：**用唯一标识码判断，如果在内存中有，则返回这个唯一标识码所标识的对象。</p><p>**关键代码：**用 HashMap 存储这些对象。</p><p><strong>应用实例：</strong> 1、JAVA 中的 String，如果有则返回，如果没有则创建一个字符串保存在字符串缓存池里面。 2、数据库的连接池。</p><p>**优点：**大大减少对象的创建，降低系统的内存，使效率提高。</p><p>**缺点：**提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会造成系统的混乱。</p><p><strong>使用场景：</strong> 1、系统有大量相似对象。 2、需要缓冲池的场景。</p><p><strong>注意事项：</strong> 1、注意划分外部状态和内部状态，否则可能会引起线程安全问题。 2、这些类必须有一个工厂对象加以控制。</p><blockquote><p>问题引出</p></blockquote>`,27),Xn={href:"https://imgse.com/i/p96Mfsg",target:"_blank",rel:"noopener noreferrer"},Kn=n("img",{src:"https://s1.ax1x.com/2023/05/13/p96Mfsg.md.jpg",alt:"p96Mfsg.md.jpg",tabindex:"0",loading:"lazy"},null,-1),$n=n("figcaption",null,"p96Mfsg.md.jpg",-1),ns=n("blockquote",null,[n("p",null,"享元模式原理图")],-1),ss={href:"https://imgse.com/i/p96MhLQ",target:"_blank",rel:"noopener noreferrer"},as=n("img",{src:"https://s1.ax1x.com/2023/05/13/p96MhLQ.md.jpg",alt:"p96MhLQ.md.jpg",tabindex:"0",loading:"lazy"},null,-1),ts=n("figcaption",null,"p96MhLQ.md.jpg",-1),ps=t('<h4 id="_2、内部状态和外部状态" tabindex="-1"><a class="header-anchor" href="#_2、内部状态和外部状态"><span>2、内部状态和外部状态</span></a></h4><p>比如围棋、五子棋、跳棋，它们都有大量的棋子对象，围棋和五子棋只有黑白两色，跳棋颜色多一点，所以棋子颜色就是棋子的内部状态；而各个棋子之间的差别就是位置的不同，当我们落子后，落子颜色是定的，但位置是变化的，所以棋子坐标就是棋子的外部状态</p><ul><li><p>享元模式提出了两个要求：细粒度和共享对象。这里就涉及到内部状态和外部状态了，即将对象的信息分为两个部分：内部状态和外部状态</p></li><li><p>内部状态指对象共享出来的信息，存储在享元对象内部且不会随环境的改变而改变</p></li><li><p>外部状态指对象得以依赖的一个标记，是随环境改变而改变的、不可共享的状态。</p></li><li><p>举个例子：围棋理论上有361个空位可以放棋子，每盘棋都有可能有两三百个棋子对象产生，因为内存空间有限，一台服务器很难支持更多的玩家玩围棋游戏，如果用享元模式来处理棋子，那么棋子对象就可以减少到只有两个实例，这样就很好的解决了对象的开销问题</p></li></ul><blockquote><p>UML图</p></blockquote>',4),es={href:"https://imgse.com/i/p96M5Zj",target:"_blank",rel:"noopener noreferrer"},cs=n("img",{src:"https://s1.ax1x.com/2023/05/13/p96M5Zj.md.jpg",alt:"p96M5Zj.md.jpg",tabindex:"0",loading:"lazy"},null,-1),os=n("figcaption",null,"p96M5Zj.md.jpg",-1),ls=t(`<p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 网站的抽象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">WebSite</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体的网站
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcrrentWebSite</span> <span class="token keyword">extends</span> <span class="token class-name">WebSite</span><span class="token punctuation">{</span>

    <span class="token comment">//网站类型</span>
    <span class="token comment">//共享部分，这是内部状态</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> type <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ConcrrentWebSite</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;网站的发布类型为：&quot;</span> <span class="token operator">+</span> type <span class="token operator">+</span> <span class="token string">&quot;。&quot;</span><span class="token operator">+</span> user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;在使用中...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 享元模式
 * 生成网站的工厂，充当一个池的作用，根据需求返回具体的网站
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebSiteFactory</span> <span class="token punctuation">{</span>
    <span class="token comment">//集合，充当池的作用</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">ConcrrentWebSite</span><span class="token punctuation">&gt;</span></span> pools <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//根据网站的类型，返回一个网站，如果没有就创建一个网站，并放到池中，并返回。</span>
    <span class="token keyword">public</span> <span class="token class-name">WebSite</span> <span class="token function">getWebSite</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//如果没有就创建一个网站，并放到池中</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>pools<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pools<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">ConcrrentWebSite</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">WebSite</span><span class="token punctuation">)</span> pools<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取网站分类的总数(池中有几个)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">WebSiteCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> pools<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 网站使用者，这是外部状态
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建网站工厂</span>
        <span class="token class-name">WebSiteFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSiteFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//以新闻类型发布网站</span>
        <span class="token class-name">WebSite</span> webSite <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getWebSite</span><span class="token punctuation">(</span><span class="token string">&quot;新闻&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        webSite<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//以博客类型发布网站</span>
        <span class="token class-name">WebSite</span> webSite1 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getWebSite</span><span class="token punctuation">(</span><span class="token string">&quot;博客&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        webSite1<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;smith&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//以博客类型发布网站</span>
        <span class="token class-name">WebSite</span> webSite2 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getWebSite</span><span class="token punctuation">(</span><span class="token string">&quot;博客&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        webSite2<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;jack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//以博客类型发布网站</span>
        <span class="token class-name">WebSite</span> webSite3 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getWebSite</span><span class="token punctuation">(</span><span class="token string">&quot;博客&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        webSite3<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;king&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//以博客类型发布网站</span>
        <span class="token class-name">WebSite</span> webSite4 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getWebSite</span><span class="token punctuation">(</span><span class="token string">&quot;博客&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        webSite4<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;swx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//返回网站分类个数</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;网站的分类共：&quot;</span> <span class="token operator">+</span> <span class="token class-name"><span class="token namespace">factory<span class="token punctuation">.</span></span>WebSiteCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;种&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//输出结果网站的发布类型为：新闻。tom在使用中...</span>
        <span class="token comment">//网站的发布类型为：博客。smith在使用中...</span>
        <span class="token comment">//网站的发布类型为：博客。jack在使用中...</span>
        <span class="token comment">//网站的发布类型为：博客。king在使用中...</span>
        <span class="token comment">//网站的发布类型为：博客。swx在使用中...</span>
        <span class="token comment">//网站的分类共：2种</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、享元模式的注意事项和细节" tabindex="-1"><a class="header-anchor" href="#_3、享元模式的注意事项和细节"><span>3、享元模式的注意事项和细节</span></a></h4><ul><li><p>在享元模式这样理解，“享”就表示共享，“元”表示对象</p></li><li><p>系统中有大量对象，这些对象消耗大量内存，并且对象的状态大部分可以外部化时，我们就可以考虑选用享元模式</p></li><li><p>用唯一标识码判断，如果在内存中有，则返回这个唯一标识码所标识的对象，用HashMap/HashTable存储</p></li><li><p>享元模式大大减少了对象的创建，降低了程序内存的占用，提高效率</p></li><li><p>享元模式提高了系统的复杂度。需要分离出内部状态和外部状态，而外部状态具有固化特性，不应该随着内部状态的改变而改变，这是我们使用享元模式需要注意的地方.</p></li><li><p>使用享元模式时，注意划分内部状态和外部状态，并且需要有一个工厂类加以控制。</p></li><li><p>享元模式经典的应用场景是需要缓冲池的场景，比如 String常量池、数据库连接池</p></li></ul><h2 id="行为型模式" tabindex="-1"><a class="header-anchor" href="#行为型模式"><span>行为型模式</span></a></h2><h3 id="一、命令模式" tabindex="-1"><a class="header-anchor" href="#一、命令模式"><span>一、命令模式</span></a></h3><p>命令模式（Command Pattern）是一种数据驱动的设计模式，它属于行为型模式。请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。</p><h4 id="_1、介绍-12" tabindex="-1"><a class="header-anchor" href="#_1、介绍-12"><span>1、介绍</span></a></h4><p>**意图：**将一个请求封装成一个对象，从而使您可以用不同的请求对客户进行参数化。</p><p>**主要解决：**在软件系统中，行为请求者与行为实现者通常是一种紧耦合的关系，但某些场合，比如需要对行为进行记录、撤销或重做、事务等处理时，这种无法抵御变化的紧耦合的设计就不太合适。</p><p>**何时使用：**在某些场合，比如要对行为进行&quot;记录、撤销/重做、事务&quot;等处理，这种无法抵御变化的紧耦合是不合适的。在这种情况下，如何将&quot;行为请求者&quot;与&quot;行为实现者&quot;解耦？将一组行为抽象为对象，可以实现二者之间的松耦合。</p><p>**如何解决：**通过调用者调用接受者执行命令，顺序：调用者→命令→接受者。</p><p>**关键代码：**定义三个角色：1、received 真正的命令执行对象 2、Command 3、invoker 使用命令对象的入口</p><p>**应用实例：**struts 1 中的 action 核心控制器 ActionServlet 只有一个，相当于 Invoker，而模型层的类会随着不同的应用有不同的模型类，相当于具体的 Command。</p><p><strong>优点：</strong> 1、降低了系统耦合度。 2、新的命令可以很容易添加到系统中去。</p><p>**缺点：**使用命令模式可能会导致某些系统有过多的具体命令类。</p><p>**使用场景：**认为是命令的地方都可以使用命令模式，比如： 1、GUI 中每一个按钮都是一条命令。 2、模拟 CMD。</p><p>**注意事项：**系统需要支持命令的撤销(Undo)操作和恢复(Redo)操作，也可以考虑使用命令模式，见命令模式的扩展。</p><p>命令模式结构示意图:</p><p><strong>基本介绍</strong></p><ul><li><p>命令模式(Command Pattern)：在软件设计中，我们经常需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是哪个，我们只需在程序运行时指定具体的请求接收者即可，此时，可以使用命令模式来进行设计</p></li><li><p>命名模式使得请求发送者与请求接收者消除彼此之间的耦合，让对象之间的调用关系更加灵活，实现解耦。</p></li><li><p>在命名模式中，会将一个请求封装为一个对象，以便使用不同参数来表示不同的请求（即命名），同时命令模式也支持可撤销的操作通俗易懂的理解：将军发布命令，士兵去执行。其中有几个角色：将军（命令发布者）、士兵（命令的具体执行者）、命令（连接将军和士兵）。</p></li><li><p>Invoker是调用者（将军），Receiver是被调用者（士兵），MyCommand是命令，实现了Command接口，持有接收对象</p></li></ul><blockquote><p>引出问题</p></blockquote>`,27),is={href:"https://imgse.com/i/p9cYZQI",target:"_blank",rel:"noopener noreferrer"},us=n("img",{src:"https://s1.ax1x.com/2023/05/14/p9cYZQI.md.jpg",alt:"p9cYZQI.md.jpg",tabindex:"0",loading:"lazy"},null,-1),ds=n("figcaption",null,"p9cYZQI.md.jpg",-1),ks=n("blockquote",null,[n("p",null,"命令模式原理图")],-1),rs={href:"https://imgse.com/i/p9cYAWd",target:"_blank",rel:"noopener noreferrer"},vs=n("img",{src:"https://s1.ax1x.com/2023/05/14/p9cYAWd.md.jpg",alt:"p9cYAWd.md.jpg",tabindex:"0",loading:"lazy"},null,-1),ms=n("figcaption",null,"p9cYAWd.md.jpg",-1),bs=n("blockquote",null,[n("p",null,"解决问题")],-1),gs={href:"https://imgse.com/i/p9cYFFe",target:"_blank",rel:"noopener noreferrer"},ys=n("img",{src:"https://s1.ax1x.com/2023/05/14/p9cYFFe.jpg",alt:"p9cYFFe.jpg",tabindex:"0",loading:"lazy"},null,-1),ws=n("figcaption",null,"p9cYFFe.jpg",-1),hs=n("blockquote",null,[n("p",null,"UML图")],-1),fs={href:"https://imgse.com/i/p9cYVSA",target:"_blank",rel:"noopener noreferrer"},js=n("img",{src:"https://s1.ax1x.com/2023/05/14/p9cYVSA.md.jpg",alt:"p9cYVSA.md.jpg",tabindex:"0",loading:"lazy"},null,-1),_s=n("figcaption",null,"p9cYVSA.md.jpg",-1),qs=t(`<p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 命令执行者：电灯
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LightReceiver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; 电灯打开了....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;电灯关闭了....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 所有的命令都在这个接口中
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token comment">//执行操作</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//撤销操作</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 打开电灯命令
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LightOnCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span><span class="token punctuation">{</span>

    <span class="token comment">//聚合电灯，实际操作由电灯完成</span>
    <span class="token class-name">LightReceiver</span> lightReceiver<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LightOnCommand</span><span class="token punctuation">(</span><span class="token class-name">LightReceiver</span> lightReceiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lightReceiver <span class="token operator">=</span> lightReceiver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//电灯打开操作</span>
        lightReceiver<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//撤销操作</span>
        lightReceiver<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 关闭电灯命令
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LightOffCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span><span class="token punctuation">{</span>

    <span class="token comment">//聚合电灯，实际操作由电灯完成</span>
    <span class="token class-name">LightReceiver</span> lightReceiver<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LightOffCommand</span><span class="token punctuation">(</span><span class="token class-name">LightReceiver</span> lightReceiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lightReceiver <span class="token operator">=</span> lightReceiver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//电灯关闭操作</span>
        lightReceiver<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//撤销操作</span>
        lightReceiver<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 命令调用者
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RemoteController</span> <span class="token punctuation">{</span>
    <span class="token comment">//打开和关闭按钮的数组</span>
    <span class="token class-name">Command</span><span class="token punctuation">[</span><span class="token punctuation">]</span> onCommands<span class="token punctuation">;</span>
    <span class="token class-name">Command</span><span class="token punctuation">[</span><span class="token punctuation">]</span> offCommands<span class="token punctuation">;</span>

    <span class="token comment">//执行撤销的命令</span>
    <span class="token class-name">Command</span> undoCommand<span class="token punctuation">;</span>

    <span class="token comment">//初始化命令</span>
    <span class="token keyword">public</span> <span class="token class-name">RemoteController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        onCommands <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        offCommands <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">//初始化命令，刚开始时，执行空命令</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            onCommands<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            offCommands<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//给按钮设置你需要的命令</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCommand</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">,</span><span class="token class-name">Command</span> onCommand<span class="token punctuation">,</span><span class="token class-name">Command</span> offCommand<span class="token punctuation">)</span><span class="token punctuation">{</span>
        onCommands<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> onCommand<span class="token punctuation">;</span>
        offCommands<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> offCommand<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//按下开按钮</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onButtonWasPushed</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//找到你按下的开的按钮，并调用对应方法</span>
        onCommands<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//记录日志，便于撤销</span>
        undoCommand <span class="token operator">=</span> onCommands<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//按下关按钮</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">offButtonWasPushed</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//找到你按下的关的按钮，并调用对应方法</span>
        offCommands<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//记录日志，便于撤销</span>
        undoCommand <span class="token operator">=</span> offCommands<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//按下撤销命令</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undoButtonWasPushed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//执行撤销操作</span>
        undoCommand<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//使用命令模式，完成通过遥控器，对电灯的操作</span>

        <span class="token comment">//创建电灯的对象(接收者，命令执行者)</span>
        <span class="token class-name">LightReceiver</span> lightReceiver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LightReceiver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//创建电灯相关的命令</span>
        <span class="token class-name">LightOnCommand</span> lightOnCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LightOnCommand</span><span class="token punctuation">(</span>lightReceiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LightOffCommand</span> lightOffCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LightOffCommand</span><span class="token punctuation">(</span>lightReceiver<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//需要一个遥控器,初始化空命令</span>
        <span class="token class-name">RemoteController</span> remoteController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RemoteController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//通过命令对电灯进行控制</span>
        remoteController<span class="token punctuation">.</span><span class="token function">setCommand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>lightOnCommand<span class="token punctuation">,</span>lightOffCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------按下灯的开按钮---------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        remoteController<span class="token punctuation">.</span><span class="token function">onButtonWasPushed</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------按下灯的关按钮---------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        remoteController<span class="token punctuation">.</span><span class="token function">offButtonWasPushed</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------按下灯的撤销按钮---------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        remoteController<span class="token punctuation">.</span><span class="token function">undoButtonWasPushed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//输出结果</span>
        <span class="token comment">//--------按下灯的开按钮---------</span>
        <span class="token comment">// 电灯打开了....</span>
        <span class="token comment">//--------按下灯的关按钮---------</span>
        <span class="token comment">//电灯关闭了....</span>
        <span class="token comment">//--------按下灯的撤销按钮---------</span>
        <span class="token comment">// 电灯打开了....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、命令模式的注意事项和细节" tabindex="-1"><a class="header-anchor" href="#_2、命令模式的注意事项和细节"><span>2、命令模式的注意事项和细节</span></a></h4><ul><li><p>将发起请求的对象与执行请求的对象解耦。发起请求的对象是调用者，调用者只要调用命令对象的execute(）方法就可以让接收者工作，而不必知道具体的接收者对象是谁、是如何实现的，命令对象会负责让接收者执行请求的动作，也就是说：”请求发起者”和“请求执行者”之间的解耦是通过命令对象实现的，命令对象起到了纽带桥梁的作用。</p></li><li><p>容易设计一个命令队列。只要把命令对象放到列队，就可以多线程的执行命令</p></li><li><p>容易实现对请求的撤销和重做</p></li><li><p>命令模式不足：可能导致某些系统有过多的具体命令类，增加了系统的复杂度，这点在在使用的时候要注意</p></li><li><p>空命令也是一种设计模式，它为我们省去了判空的操作。在上面的实例中，如果没有用空命令，我们每按下一个按键都要判空，这给我们编码带来一定的麻烦。6)命令模式经典的应用场景：界面的一个按钮都是一条命令、模拟CMD（DOS命令）订单的撤销/恢复、触发-反馈机制</p></li></ul><h3 id="二、观察者模式" tabindex="-1"><a class="header-anchor" href="#二、观察者模式"><span>二、观察者模式</span></a></h3><p>当对象间存在一对多关系时，则使用观察者模式（Observer Pattern）。比如，当一个对象被修改时，则会自动通知依赖它的对象。观察者模式属于行为型模式。</p><h4 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1"><span>介绍</span></a></h4><p>**意图：**定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。</p><p>**主要解决：**一个对象状态改变给其他对象通知的问题，而且要考虑到易用和低耦合，保证高度的协作。</p><p>**何时使用：**一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。</p><p>**如何解决：**使用面向对象技术，可以将这种依赖关系弱化。</p><p>**关键代码：**在抽象类里有一个 ArrayList 存放观察者们。</p><p><strong>应用实例：</strong> 1、拍卖的时候，拍卖师观察最高标价，然后通知给其他竞价者竞价。 2、西游记里面悟空请求菩萨降服红孩儿，菩萨洒了一地水招来一个老乌龟，这个乌龟就是观察者，他观察菩萨洒水这个动作。</p><p><strong>优点：</strong> 1、观察者和被观察者是抽象耦合的。 2、建立一套触发机制。</p><p><strong>缺点：</strong> 1、如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。 2、如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。 3、观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。</p><p><strong>使用场景：</strong></p><ul><li>一个抽象模型有两个方面，其中一个方面依赖于另一个方面。将这些方面封装在独立的对象中使它们可以各自独立地改变和复用。</li><li>一个对象的改变将导致其他一个或多个对象也发生改变，而不知道具体有多少对象将发生改变，可以降低对象之间的耦合度。</li><li>一个对象必须通知其他对象，而并不知道这些对象是谁。</li><li>需要在系统中创建一个触发链，A对象的行为将影响B对象，B对象的行为将影响C对象……，可以使用观察者模式创建一种链式触发机制。</li></ul><p><strong>注意事项：</strong> 1、JAVA 中已经有了对观察者模式的支持类。 2、避免循环引用。 3、如果顺序执行，某一观察者错误会导致系统卡壳，一般采用异步方式。</p><blockquote><p>引出问题</p></blockquote>`,25),xs={href:"https://imgse.com/i/p9gEJTP",target:"_blank",rel:"noopener noreferrer"},Ss=n("img",{src:"https://s1.ax1x.com/2023/05/14/p9gEJTP.md.jpg",alt:"p9gEJTP.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Cs=n("figcaption",null,"p9gEJTP.md.jpg",-1),Ps=n("blockquote",null,[n("p",null,"观察者模式原理图")],-1),Ds={href:"https://imgse.com/i/p9gE8eI",target:"_blank",rel:"noopener noreferrer"},Os=n("img",{src:"https://s1.ax1x.com/2023/05/14/p9gE8eI.md.jpg",alt:"p9gE8eI.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Rs=n("figcaption",null,"p9gE8eI.md.jpg",-1),As={href:"https://imgse.com/i/p9gE1OA",target:"_blank",rel:"noopener noreferrer"},Bs=n("img",{src:"https://s1.ax1x.com/2023/05/14/p9gE1OA.md.jpg",alt:"p9gE1OA.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Ms=n("figcaption",null,"p9gE1OA.md.jpg",-1),zs=n("blockquote",null,[n("p",null,"UML图")],-1),Is={href:"https://imgse.com/i/p9gEGwt",target:"_blank",rel:"noopener noreferrer"},Vs=n("img",{src:"https://s1.ax1x.com/2023/05/14/p9gEGwt.md.jpg",alt:"p9gEGwt.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Ls=n("figcaption",null,"p9gEGwt.md.jpg",-1),Fs=t(`<p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 操作观察者
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token comment">//注册观察者</span>
    <span class="token keyword">void</span> <span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//删除观察者</span>
    <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//通知天气更新方法</span>
    <span class="token keyword">void</span> <span class="token function">notifyObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 类是核心
 * 1. 包含最新的天气情况信息
 * 2. 含有 观察者集合，使用ArrayList管理
 * 3. 当数据有更新时，就主动调用ArrayList,通知观察者(接入方)看到最新信息
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeatherData</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span><span class="token punctuation">{</span>
    <span class="token comment">//温度</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>
    <span class="token comment">//气压</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>
    <span class="token comment">//湿度</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> altitude<span class="token punctuation">;</span>
    <span class="token comment">//观察者数组</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span> observers<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        observers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">,</span> <span class="token keyword">float</span> altitude<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>altitude <span class="token operator">=</span> altitude<span class="token punctuation">;</span>
        <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//更新数据方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">notifyObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        observers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>observers<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            observers<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//遍历观察者，推送更新数据</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> observers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            observers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>temperature<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>pressure<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>altitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 观察者接口，由具体观察者实现
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token comment">//天气更新方法</span>
    <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span><span class="token keyword">float</span> pressure<span class="token punctuation">,</span><span class="token keyword">float</span> altitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体的观察者
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CurrentConditions</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
    <span class="token comment">//温度</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>
    <span class="token comment">//气压</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>
    <span class="token comment">//湿度</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> altitude<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">,</span> <span class="token keyword">float</span> altitude<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>altitude <span class="token operator">=</span> altitude<span class="token punctuation">;</span>
        <span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;今天的天气温度为：&quot;</span> <span class="token operator">+</span> temperature <span class="token operator">+</span> <span class="token string">&quot;********&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;今天的气压为：&quot;</span> <span class="token operator">+</span> pressure <span class="token operator">+</span> <span class="token string">&quot;********&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;今天的天气湿度为：&quot;</span> <span class="token operator">+</span> altitude <span class="token operator">+</span> <span class="token string">&quot;********&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">WeatherData</span> weatherData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CurrentConditions</span> currentConditions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CurrentConditions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherData<span class="token punctuation">.</span><span class="token function">registerObserver</span><span class="token punctuation">(</span>currentConditions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherData<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token number">23f</span><span class="token punctuation">,</span><span class="token number">45f</span><span class="token punctuation">,</span><span class="token number">12.4f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出结果</span>
        <span class="token comment">//今天的天气温度为：23.0********</span>
        <span class="token comment">//今天的气压为：45.0********</span>
        <span class="token comment">//今天的天气湿度为：12.4********</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、职责链模式" tabindex="-1"><a class="header-anchor" href="#三、职责链模式"><span>三、职责链模式</span></a></h3><p>顾名思义，责任链模式（Chain of Responsibility Pattern）为请求创建了一个接收者对象的链。这种模式给予请求的类型，对请求的发送者和接收者进行解耦。这种类型的设计模式属于行为型模式。</p><p>在这种模式中，通常每个接收者都包含对另一个接收者的引用。如果一个对象不能处理该请求，那么它会把相同的请求传给下一个接收者，依此类推。</p><h4 id="_1、介绍-13" tabindex="-1"><a class="header-anchor" href="#_1、介绍-13"><span>1、介绍</span></a></h4><p>**意图：**避免请求发送者与接收者耦合在一起，让多个对象都有可能接收请求，将这些对象连接成一条链，并且沿着这条链传递请求，直到有对象处理它为止。</p><p>**主要解决：**职责链上的处理者负责处理请求，客户只需要将请求发送到职责链上即可，无须关心请求的处理细节和请求的传递，所以职责链将请求的发送者和请求的处理者解耦了。</p><p>**何时使用：**在处理消息的时候以过滤很多道。</p><p>**如何解决：**拦截的类都实现统一接口。</p><p>**关键代码：**Handler 里面聚合它自己，在 HandlerRequest 里判断是否合适，如果没达到条件则向下传递，向谁传递之前 set 进去。</p><p><strong>应用实例：</strong> 1、红楼梦中的&quot;击鼓传花&quot;。 2、JS 中的事件冒泡。 3、JAVA WEB 中 Apache Tomcat 对 Encoding 的处理，Struts2 的拦截器，jsp servlet 的 Filter。</p><p><strong>优点：</strong> 1、降低耦合度。它将请求的发送者和接收者解耦。 2、简化了对象。使得对象不需要知道链的结构。 3、增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任。 4、增加新的请求处理类很方便。</p><p><strong>缺点：</strong> 1、不能保证请求一定被接收。 2、系统性能将受到一定影响，而且在进行代码调试时不太方便，可能会造成循环调用。 3、可能不容易观察运行时的特征，有碍于除错。</p><p><strong>使用场景：</strong> 1、有多个对象可以处理同一个请求，具体哪个对象处理该请求由运行时刻自动确定。 2、在不明确指定接收者的情况下，向多个对象中的一个提交一个请求。 3、可动态指定一组对象处理请求。</p><p>**注意事项：**在 JAVA WEB 中遇到很多应用。</p><blockquote><p>引出问题</p></blockquote>`,22),Ws={href:"https://imgse.com/i/p9gely4",target:"_blank",rel:"noopener noreferrer"},Es=n("img",{src:"https://s1.ax1x.com/2023/05/15/p9gely4.jpg",alt:"p9gely4.jpg",tabindex:"0",loading:"lazy"},null,-1),Ns=n("figcaption",null,"p9gely4.jpg",-1),Ts=n("blockquote",null,[n("p",null,"UML图")],-1),Us={href:"https://imgse.com/i/p9geQlF",target:"_blank",rel:"noopener noreferrer"},Hs=n("img",{src:"https://s1.ax1x.com/2023/05/15/p9geQlF.md.jpg",alt:"p9geQlF.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Js=n("figcaption",null,"p9geQlF.md.jpg",-1),Ys=t(`<ul><li><p>对原理类图的说明-即(职责链模式的角色及职责)Approver：抽象的处理者，定义了一个处理请求的接口，同时含义另外Handler</p></li><li><p>系主任、院长…是具体的处理者，处理它自己负责的请求，可以访问它的后继者（即下一个处理者)，如果可以处理当前请求，则处理，否则就将该请求交个后继者去处理，从而形成一个职责链3)</p></li><li><p>PurchaseRequest，含义很多属性，表示一个请求</p></li></ul><p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 请求
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PurchaseRequest</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> type <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//请求类型</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> price <span class="token operator">=</span> <span class="token number">0.0f</span><span class="token punctuation">;</span> <span class="token comment">//处理金额</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//请求id</span>

    <span class="token keyword">public</span> <span class="token class-name">PurchaseRequest</span><span class="token punctuation">(</span><span class="token keyword">int</span> type<span class="token punctuation">,</span> <span class="token keyword">float</span> price<span class="token punctuation">,</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 请求处理类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Approver</span> <span class="token punctuation">{</span>
    <span class="token comment">//下一个处理类</span>
    <span class="token class-name">Approver</span> approver<span class="token punctuation">;</span>
    <span class="token comment">//名称</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Approver</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//下一个处理者</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApprover</span><span class="token punctuation">(</span><span class="token class-name">Approver</span> approver<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>approver <span class="token operator">=</span> approver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//处理审批请求的方法，得到一个请求，处理由子类完成，此方法设计成抽象</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PurchaseRequest</span> purchaseRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体处理请求审批类之一：系主任
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DepartMateApprover</span> <span class="token keyword">extends</span> <span class="token class-name">Approver</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">DepartMateApprover</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PurchaseRequest</span> purchaseRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果自己可以处理则自己处理</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>purchaseRequest<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请求编号为：&quot;</span> <span class="token operator">+</span> purchaseRequest<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;的请求被&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;处理了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不能则交给下个审批人处理</span>
            approver<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>purchaseRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体处理请求审批类之一：院长
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CollegeApprover</span> <span class="token keyword">extends</span> <span class="token class-name">Approver</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">CollegeApprover</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PurchaseRequest</span> purchaseRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果自己可以处理则自己处理</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>purchaseRequest<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5000</span> <span class="token operator">&amp;&amp;</span> purchaseRequest<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请求编号为：&quot;</span> <span class="token operator">+</span> purchaseRequest<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;的请求被&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;处理了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不能则交给下个审批人处理</span>
            approver<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>purchaseRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体处理请求审批类之一：副校长
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ViceSchoolMasterApprover</span> <span class="token keyword">extends</span> <span class="token class-name">Approver</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">ViceSchoolMasterApprover</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PurchaseRequest</span> purchaseRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果自己可以处理则自己处理</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>purchaseRequest<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">10000</span> <span class="token operator">&amp;&amp;</span> purchaseRequest<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请求编号为：&quot;</span> <span class="token operator">+</span> purchaseRequest<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;的请求被&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;处理了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不能则交给下个审批人处理</span>
            approver<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>purchaseRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体处理请求审批类之一：校长
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SchoolMasterApprover</span> <span class="token keyword">extends</span> <span class="token class-name">Approver</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">SchoolMasterApprover</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PurchaseRequest</span> purchaseRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果自己可以处理则自己处理</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>purchaseRequest<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请求编号为：&quot;</span> <span class="token operator">+</span> purchaseRequest<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;的请求被&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;处理了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不能则交给下个审批人处理</span>
            approver<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>purchaseRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建请求</span>
        <span class="token class-name">PurchaseRequest</span> purchaseRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PurchaseRequest</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1200</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//创建相应的审批人</span>
        <span class="token class-name">DepartMateApprover</span> departMateApprover <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DepartMateApprover</span><span class="token punctuation">(</span><span class="token string">&quot;张主任&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CollegeApprover</span> collegeApprover <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CollegeApprover</span><span class="token punctuation">(</span><span class="token string">&quot;李院长&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ViceSchoolMasterApprover</span> viceSchoolMasterApprover <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ViceSchoolMasterApprover</span><span class="token punctuation">(</span><span class="token string">&quot;普副校长&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SchoolMasterApprover</span> schoolMasterApprover <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SchoolMasterApprover</span><span class="token punctuation">(</span><span class="token string">&quot;石校长&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//需要将各个审批级别的审批人设置好(处理人构成环状)</span>
        departMateApprover<span class="token punctuation">.</span><span class="token function">setApprover</span><span class="token punctuation">(</span>collegeApprover<span class="token punctuation">)</span><span class="token punctuation">;</span>
        collegeApprover<span class="token punctuation">.</span><span class="token function">setApprover</span><span class="token punctuation">(</span>viceSchoolMasterApprover<span class="token punctuation">)</span><span class="token punctuation">;</span>
        viceSchoolMasterApprover<span class="token punctuation">.</span><span class="token function">setApprover</span><span class="token punctuation">(</span>schoolMasterApprover<span class="token punctuation">)</span><span class="token punctuation">;</span>
        schoolMasterApprover<span class="token punctuation">.</span><span class="token function">setApprover</span><span class="token punctuation">(</span>departMateApprover<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//测试,从级别低的开始审批</span>
        departMateApprover<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>purchaseRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//输出结果</span>
        <span class="token comment">//请求编号为：1的请求被张主任处理了</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、职责链模式的注意事项和细节" tabindex="-1"><a class="header-anchor" href="#_2、职责链模式的注意事项和细节"><span>2、职责链模式的注意事项和细节</span></a></h4><ul><li><p>将请求和处理分开，实现解耦，提高系统的灵活性</p></li><li><p>简化了对象，使对象不需要知道链的结构</p></li><li><p>性能会受到影响，特别是在链比较长的时候，因此需控制链中最大节点数量，一般通过在Handler中设置一个最大节点数量，在setNext()方法中判断是否已经超过阀值，超过则不允许该链建立，避免出现超长链无意识地破坏系统性能</p></li><li><p>调试不方便。采用了类似递归的方式，调试时逻辑可能比较复杂</p></li><li><p>最佳应用场景：有多个对象可以处理同一个请求时，比如：多级请求、请假/加薪等审批流程、Java Web中Tomcat对Encoding的处理、拦截器</p></li></ul><h3 id="四、策略模式" tabindex="-1"><a class="header-anchor" href="#四、策略模式"><span>四、策略模式</span></a></h3><p>在策略模式（Strategy Pattern）中，一个类的行为或其算法可以在运行时更改。这种类型的设计模式属于行为型模式。</p><p>在策略模式中，我们创建表示各种策略的对象和一个行为随着策略对象改变而改变的 context 对象。策略对象改变 context 对象的执行算法。</p><h4 id="_1、介绍-14" tabindex="-1"><a class="header-anchor" href="#_1、介绍-14"><span>1、介绍</span></a></h4><p>**意图：**定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。</p><p>**主要解决：**在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护。</p><p>**何时使用：**一个系统有许多许多类，而区分它们的只是他们直接的行为。</p><p>**如何解决：**将这些算法封装成一个一个的类，任意地替换。</p><p>**关键代码：**实现同一个接口。</p><p><strong>应用实例：</strong> 1、诸葛亮的锦囊妙计，每一个锦囊就是一个策略。 2、旅行的出游方式，选择骑自行车、坐汽车，每一种旅行方式都是一个策略。 3、JAVA AWT 中的 LayoutManager。</p><p><strong>优点：</strong> 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。</p><p><strong>缺点：</strong> 1、策略类会增多。 2、所有策略类都需要对外暴露。</p><p><strong>使用场景：</strong> 1、如果在一个系统里面有许多类，它们之间的区别仅在于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。 2、一个系统需要动态地在几种算法中选择一种。 3、如果一个对象有很多的行为，如果不用恰当的模式，这些行为就只好使用多重的条件选择语句来实现。</p><p>**注意事项：**如果一个系统的策略多于四个，就需要考虑使用混合模式，解决策略类膨胀的问题。</p><blockquote><p>引出问题</p></blockquote>`,27),Qs={href:"https://imgse.com/i/p928I1A",target:"_blank",rel:"noopener noreferrer"},Zs=n("img",{src:"https://s1.ax1x.com/2023/05/15/p928I1A.md.jpg",alt:"p928I1A.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Gs=n("figcaption",null,"p928I1A.md.jpg",-1),Xs=n("blockquote",null,[n("p",null,"问题解决")],-1),Ks={href:"https://imgse.com/i/p928TXt",target:"_blank",rel:"noopener noreferrer"},$s=n("img",{src:"https://s1.ax1x.com/2023/05/15/p928TXt.md.jpg",alt:"p928TXt.md.jpg",tabindex:"0",loading:"lazy"},null,-1),na=n("figcaption",null,"p928TXt.md.jpg",-1),sa=n("blockquote",null,[n("p",null,"UML图")],-1),aa={href:"https://imgse.com/i/p928o6I",target:"_blank",rel:"noopener noreferrer"},ta=n("img",{src:"https://s1.ax1x.com/2023/05/15/p928o6I.md.jpg",alt:"p928o6I.md.jpg",style:{zoom:"200%"}},null,-1),pa=t(`<p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 算法的提供者：鸭子飞翔的接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">FlyBehavior</span> <span class="token punctuation">{</span>
    <span class="token comment">//飞翔技术咋样由具体子类实现</span>
    <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体子类：飞翔技术高超
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GoodFlyBehavior</span> <span class="token keyword">implements</span> <span class="token class-name">FlyBehavior</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;飞翔技术高超~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体子类：不会飞翔
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NoFlyBehavior</span> <span class="token keyword">implements</span> <span class="token class-name">FlyBehavior</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不会飞翔~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:GoodFlyBehavior
 * Package:Strategy
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/5/15 - 22:00
 * @Version:v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 具体子类：飞翔技术一般
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BadFlyBehavior</span> <span class="token keyword">implements</span> <span class="token class-name">FlyBehavior</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;飞翔技术一般~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:Duck
 * Package:Strategy
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/5/15 - 22:06
 * @Version:v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 算法的使用者：鸭子类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Duck</span> <span class="token punctuation">{</span>
    <span class="token comment">//属性，策略接口</span>
    <span class="token class-name">FlyBehavior</span> flyBehavior<span class="token punctuation">;</span>
    <span class="token comment">//可以添加其他策略接口</span>

    <span class="token doc-comment comment">/**
     * 显示鸭子信息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//动态设置某个对象的飞翔行为</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFlyBehavior</span><span class="token punctuation">(</span><span class="token class-name">FlyBehavior</span> flyBehavior<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>flyBehavior <span class="token operator">=</span> flyBehavior<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;鸭子游泳~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>flyBehavior <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            flyBehavior<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:WildDuck
 * Package:Strategy
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/5/15 - 22:08
 * @Version:v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 野鸭
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WildDuck</span> <span class="token keyword">extends</span> <span class="token class-name">Duck</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">WildDuck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//野鸭飞翔技术高超</span>
        flyBehavior <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GoodFlyBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是野鸭！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:WildDuck
 * Package:Strategy
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/5/15 - 22:08
 * @Version:v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 北京鸭
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PekingDuck</span> <span class="token keyword">extends</span> <span class="token class-name">Duck</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">PekingDuck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//北京鸭飞翔技术一般</span>
        flyBehavior <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BadFlyBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是北京鸭！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:WildDuck
 * Package:Strategy
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/5/15 - 22:08
 * @Version:v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 玩具鸭
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ToyDuck</span> <span class="token keyword">extends</span> <span class="token class-name">Duck</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">ToyDuck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//玩具鸭不会飞翔</span>
        flyBehavior <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoFlyBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是玩具鸭！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:Client
 * Package:Strategy
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/5/15 - 22:16
 * @Version:v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//野鸭</span>
        <span class="token class-name">WildDuck</span> wildDuck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WildDuck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        wildDuck<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//北京鸭</span>
        <span class="token class-name">PekingDuck</span> pekingDuck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PekingDuck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pekingDuck<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//玩具鸭</span>
        <span class="token class-name">ToyDuck</span> toyDuck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ToyDuck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        toyDuck<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//动态设置玩具鸭的飞翔行为，玩具鸭原本不会飞，现在动态设置成可以飞</span>
        toyDuck<span class="token punctuation">.</span><span class="token function">setFlyBehavior</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GoodFlyBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;玩具鸭新设置的飞翔技能------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        toyDuck<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//输出结果</span>
        <span class="token comment">//飞翔技术高超~</span>
        <span class="token comment">//飞翔技术一般~</span>
        <span class="token comment">//不会飞翔~</span>
        <span class="token comment">//玩具鸭新设置的飞翔技能------------</span>
        <span class="token comment">//飞翔技术高超~</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、细节注意" tabindex="-1"><a class="header-anchor" href="#_2、细节注意"><span>2、细节注意</span></a></h4><ul><li><p>策略模式的关键是：分析项目中变化部分与不变部分</p></li><li><p>策略模式的核心思想是：多用组合/聚合少用继承；用行为类组合，而不是行为的继承。更有弹性</p></li><li><p>体现了“对修改关闭，对扩展开放”原则，客户端增加行为不用修改原有代码，只要添加一种策略（或者行为）即可，避免了使用多重转移语句(if.else if..else)提供了可以替换继承关系的办法：策略模式将算法封装在独立的Strategy类中使得你可以独立于其Context改变它，使它易于切换、易于理解、易于扩展</p></li><li><p>需要注意的是：每添加一个策略就要增加一个类，当策略过多是会导致类数目庞大</p></li></ul><h3 id="五、状态模式" tabindex="-1"><a class="header-anchor" href="#五、状态模式"><span>五、状态模式</span></a></h3><p>在状态模式（State Pattern）中，类的行为是基于它的状态改变的。这种类型的设计模式属于行为型模式。</p><p>在状态模式中，我们创建表示各种状态的对象和一个行为随着状态对象改变而改变的 context 对象。</p><h4 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2"><span>介绍</span></a></h4><p>**意图：**允许对象在内部状态发生改变时改变它的行为，对象看起来好像修改了它的类。</p><p>**主要解决：**对象的行为依赖于它的状态（属性），并且可以根据它的状态改变而改变它的相关行为。</p><p>**何时使用：**代码中包含大量与对象状态有关的条件语句。</p><p>**如何解决：**将各种具体的状态类抽象出来。</p><p>**关键代码：**通常命令模式的接口中只有一个方法。而状态模式的接口中有一个或者多个方法。而且，状态模式的实现类的方法，一般返回值，或者是改变实例变量的值。也就是说，状态模式一般和对象的状态有关。实现类的方法有不同的功能，覆盖接口中的方法。状态模式和命令模式一样，也可以用于消除 if...else 等条件选择语句。</p><p><strong>应用实例：</strong> 1、打篮球的时候运动员可以有正常状态、不正常状态和超常状态。 2、曾侯乙编钟中，&#39;钟是抽象接口&#39;,&#39;钟A&#39;等是具体状态，&#39;曾侯乙编钟&#39;是具体环境（Context）。</p><p><strong>优点：</strong> 1、封装了转换规则。 2、枚举可能的状态，在枚举状态之前需要确定状态种类。 3、将所有与某个状态有关的行为放到一个类中，并且可以方便地增加新的状态，只需要改变对象状态即可改变对象的行为。 4、允许状态转换逻辑与状态对象合成一体，而不是某一个巨大的条件语句块。 5、可以让多个环境对象共享一个状态对象，从而减少系统中对象的个数。</p><p><strong>缺点：</strong> 1、状态模式的使用必然会增加系统类和对象的个数。 2、状态模式的结构与实现都较为复杂，如果使用不当将导致程序结构和代码的混乱。 3、状态模式对&quot;开闭原则&quot;的支持并不太好，对于可以切换状态的状态模式，增加新的状态类需要修改那些负责状态转换的源代码，否则无法切换到新增状态，而且修改某个状态类的行为也需修改对应类的源代码。</p><p><strong>使用场景：</strong> 1、行为随状态改变而改变的场景。 2、条件、分支语句的代替者。</p><p>**注意事项：**在行为受状态约束的时候使用状态模式，而且状态不超过 5 个。</p><blockquote><p>引出问题</p></blockquote>`,27),ea={href:"https://imgse.com/i/p92Nyd0",target:"_blank",rel:"noopener noreferrer"},ca=n("img",{src:"https://s1.ax1x.com/2023/05/16/p92Nyd0.md.jpg",alt:"p92Nyd0.md.jpg",tabindex:"0",loading:"lazy"},null,-1),oa=n("figcaption",null,"p92Nyd0.md.jpg",-1),la=n("blockquote",null,[n("p",null,"UML图")],-1),ia={href:"https://imgse.com/i/p92NsZq",target:"_blank",rel:"noopener noreferrer"},ua=n("img",{src:"https://s1.ax1x.com/2023/05/16/p92NsZq.md.jpg",alt:"p92NsZq.md.jpg",tabindex:"0",loading:"lazy"},null,-1),da=n("figcaption",null,"p92NsZq.md.jpg",-1),ka=t(`<p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:State
 * Package:State
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/5/15 - 22:57
 * @Version:v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 状态抽象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token comment">//扣除积分 -50</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">deductMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//是否中奖</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">boolean</span> <span class="token function">raffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//发放奖品</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">distribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 不能抽奖状态
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NoRallfeState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token punctuation">{</span>

    <span class="token comment">//组合活动类</span>
    <span class="token keyword">private</span> <span class="token class-name">Activity</span> activity<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">NoRallfeState</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>activity <span class="token operator">=</span> activity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 当我状态是不可以抽奖状态，扣除积分后，将状态设置为可以抽奖状态
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;扣除积分成功，你可以抽奖了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        activity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>activity<span class="token punctuation">.</span><span class="token function">getCanRallfeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 当前状态不能抽奖
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">raffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;扣了积分才可以抽奖哦！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 当前状态不能发放奖品
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">distribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不能发放奖品~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 可以抽奖状态
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CanRallfeState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token punctuation">{</span>

    <span class="token comment">//组合活动类</span>
    <span class="token keyword">private</span> <span class="token class-name">Activity</span> activity<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CanRallfeState</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>activity <span class="token operator">=</span> activity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 已经扣取过积分了,不能再扣了
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;已经扣取过积分了~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 可以抽奖状态
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">raffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请稍后，正在抽奖！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//10%中奖机会</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//改变活动状态为发放奖品</span>
            activity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>activity<span class="token punctuation">.</span><span class="token function">getDistriButeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;很遗憾，没有抽中&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//将状态修改为不能抽奖状态</span>
            activity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>activity<span class="token punctuation">.</span><span class="token function">getNoRallfeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 当前状态不能发放奖品
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">distribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;没中奖，不能发放奖品~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 发放奖品状态
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DistriButeState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token punctuation">{</span>

    <span class="token comment">//组合活动类</span>
    <span class="token keyword">private</span> <span class="token class-name">Activity</span> activity<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DistriButeState</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>activity <span class="token operator">=</span> activity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不能扣除积分&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 当前状态不能抽奖
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">raffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不能抽奖&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 当前状态不能发放奖品
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">distribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>activity<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;恭喜中奖了~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            activity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>activity<span class="token punctuation">.</span><span class="token function">getNoRallfeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;很遗憾，奖品发完了！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            activity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>activity<span class="token punctuation">.</span><span class="token function">getDistriButeOutState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 奖品发放完毕状态
 * 当我们把activity改变成DistriButeOutState，说明抽奖活动结束
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DistriButeOutState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token punctuation">{</span>

    <span class="token comment">//组合活动类</span>
    <span class="token keyword">private</span> <span class="token class-name">Activity</span> activity<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DistriButeOutState</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>activity <span class="token operator">=</span> activity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *奖品发放完毕状态
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;奖品发送完了，请下次再参加~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 奖品发放完毕状态
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">raffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;奖品发送完了，请下次再参加~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 奖品发放完毕状态
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">distribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;奖品发送完了，请下次再参加~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * ClassName:Activity
 * Package:State
 * Description
 *
 * @Author:@wenxueshi
 * @Create:2023/5/15 - 23:00
 * @Version:v1.0
 */</span>

<span class="token doc-comment comment">/**
 * 活动类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Activity</span> <span class="token punctuation">{</span>
    <span class="token comment">//表示当前活动的状态</span>
    <span class="token class-name">State</span> state <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">//奖品数量</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//四种状态</span>
    <span class="token class-name">State</span> noRallfeState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoRallfeState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">State</span> canRallfeState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CanRallfeState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">State</span> distriButeState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DistriButeState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">State</span> distriButeOutState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DistriButeOutState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//初始化当前状态和奖品数量</span>
    <span class="token keyword">public</span> <span class="token class-name">Activity</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token function">getNoRallfeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//扣除积分</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">deductMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">raffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//如果抽奖成功</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span><span class="token function">raffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//则去领取奖品</span>
            state<span class="token punctuation">.</span><span class="token function">distribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">State</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> curCount <span class="token operator">=</span> count<span class="token punctuation">;</span>
        count<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> curCount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getNoRallfeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> noRallfeState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNoRallfeState</span><span class="token punctuation">(</span><span class="token class-name">State</span> noRallfeState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>noRallfeState <span class="token operator">=</span> noRallfeState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getCanRallfeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> canRallfeState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCanRallfeState</span><span class="token punctuation">(</span><span class="token class-name">State</span> canRallfeState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>canRallfeState <span class="token operator">=</span> canRallfeState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getDistriButeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> distriButeState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDistriButeState</span><span class="token punctuation">(</span><span class="token class-name">State</span> distriButeState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>distriButeState <span class="token operator">=</span> distriButeState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getDistriButeOutState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> distriButeOutState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDistriButeOutState</span><span class="token punctuation">(</span><span class="token class-name">State</span> distriButeOutState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>distriButeOutState <span class="token operator">=</span> distriButeOutState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建活动对象，奖品设置1个</span>
        <span class="token class-name">Activity</span> activity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Activity</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//连续抽奖</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第--------&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;次抽奖--------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//扣积分</span>
            activity<span class="token punctuation">.</span><span class="token function">deductMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//开始抽奖</span>
            activity<span class="token punctuation">.</span><span class="token function">raffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、备忘录模式" tabindex="-1"><a class="header-anchor" href="#六、备忘录模式"><span>六、备忘录模式</span></a></h3><p>备忘录模式（Memento Pattern）保存一个对象的某个状态，以便在适当的时候恢复对象。备忘录模式属于行为型模式。</p><h4 id="介绍-3" tabindex="-1"><a class="header-anchor" href="#介绍-3"><span>介绍</span></a></h4><p>**意图：**在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。</p><p>**主要解决：**所谓备忘录模式就是在不破坏封装的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，这样可以在以后将对象恢复到原先保存的状态。</p><p>**何时使用：**很多时候我们总是需要记录一个对象的内部状态，这样做的目的就是为了允许用户取消不确定或者错误的操作，能够恢复到他原先的状态，使得他有&quot;后悔药&quot;可吃。</p><p>**如何解决：**通过一个备忘录类专门存储对象状态。</p><p>**关键代码：**客户不与备忘录类耦合，与备忘录管理类耦合。</p><p><strong>应用实例：</strong> 1、后悔药。 2、打游戏时的存档。 3、Windows 里的 ctrl + z。 4、IE 中的后退。 5、数据库的事务管理。</p><p><strong>优点：</strong> 1、给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态。 2、实现了信息的封装，使得用户不需要关心状态的保存细节。</p><p>**缺点：**消耗资源。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。</p><p><strong>使用场景：</strong> 1、需要保存/恢复数据的相关状态场景。 2、提供一个可回滚的操作。</p><p><strong>注意事项：</strong> 1、为了符合迪米特原则，还要增加一个管理备忘录的类。 2、为了节约内存，可使用原型模式+备忘录模式。</p><blockquote><p>引出问题</p></blockquote>`,23),ra={href:"https://imgse.com/i/p9RwwPx",target:"_blank",rel:"noopener noreferrer"},va=n("img",{src:"https://s1.ax1x.com/2023/05/16/p9RwwPx.md.jpg",alt:"p9RwwPx.md.jpg",tabindex:"0",loading:"lazy"},null,-1),ma=n("figcaption",null,"p9RwwPx.md.jpg",-1),ba=n("blockquote",null,[n("p",null,"UML图")],-1),ga={href:"https://imgse.com/i/p9RwaI1",target:"_blank",rel:"noopener noreferrer"},ya=n("img",{src:"https://s1.ax1x.com/2023/05/16/p9RwaI1.md.jpg",alt:"p9RwaI1.md.jpg",tabindex:"0",loading:"lazy"},null,-1),wa=n("figcaption",null,"p9RwaI1.md.jpg",-1),ha=t(`<p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 备忘录对象
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Memento</span> <span class="token punctuation">{</span>
    <span class="token comment">//攻击力</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> vit<span class="token punctuation">;</span>
    <span class="token comment">//防御力</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> def<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Memento</span><span class="token punctuation">(</span><span class="token keyword">int</span> vit<span class="token punctuation">,</span> <span class="token keyword">int</span> def<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> vit<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getVit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVit</span><span class="token punctuation">(</span><span class="token keyword">int</span> vit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDef</span><span class="token punctuation">(</span><span class="token keyword">int</span> def<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 守护者对象，用来保存游戏角色的状态
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CareTaker</span> <span class="token punctuation">{</span>
    <span class="token comment">//如果只保存一次状态</span>
    <span class="token keyword">private</span> <span class="token class-name">Memento</span> memento<span class="token punctuation">;</span>
    <span class="token comment">//对一个游戏角色保存多次状态</span>
    <span class="token comment">//private ArrayList&lt;Memento&gt; mementos;</span>
    <span class="token comment">//对多个游戏角色保存多次状态</span>
    <span class="token comment">//private HashMap&lt;String,ArrayList&lt;Memento&gt;&gt; roleMementos;</span>


    <span class="token keyword">public</span> <span class="token class-name">Memento</span> <span class="token function">getMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> memento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMemento</span><span class="token punctuation">(</span><span class="token class-name">Memento</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>memento <span class="token operator">=</span> memento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 游戏角色
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GameRole</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> vit<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> def<span class="token punctuation">;</span>

    <span class="token comment">//创建Memento,根据当前的状态得到Memento</span>
    <span class="token keyword">public</span> <span class="token class-name">Memento</span> <span class="token function">crateMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Memento</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vit<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>def<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//从备忘录对象恢复到GameRole的状态</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">recoverGameRoleFromMemento</span><span class="token punctuation">(</span><span class="token class-name">Memento</span> memento<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> memento<span class="token punctuation">.</span><span class="token function">getVit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> memento<span class="token punctuation">.</span><span class="token function">getDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//显示当前角色的状态</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前角色的攻击力为：&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">+</span> <span class="token string">&quot;，防御力为：&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>def<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getVit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVit</span><span class="token punctuation">(</span><span class="token keyword">int</span> vit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDef</span><span class="token punctuation">(</span><span class="token keyword">int</span> def<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//创建游戏角色</span>
        <span class="token class-name">GameRole</span> gameRole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GameRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">setVit</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">setDef</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;和boss大战前的状态&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将当前状态保存到CareTaker中</span>
        <span class="token class-name">CareTaker</span> careTaker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CareTaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        careTaker<span class="token punctuation">.</span><span class="token function">setMemento</span><span class="token punctuation">(</span>gameRole<span class="token punctuation">.</span><span class="token function">crateMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;和boss大战~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">setVit</span><span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">setDef</span><span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        gameRole<span class="token punctuation">.</span><span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;大战后，使用备忘录对象恢复到大战前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">recoverGameRoleFromMemento</span><span class="token punctuation">(</span>careTaker<span class="token punctuation">.</span><span class="token function">getMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//输出结果</span>
        <span class="token comment">//和boss大战前的状态</span>
        <span class="token comment">//当前角色的攻击力为：100，防御力为：100</span>
        <span class="token comment">//和boss大战~</span>
        <span class="token comment">//当前角色的攻击力为：35，防御力为：35</span>
        <span class="token comment">//大战后，使用备忘录对象恢复到大战前</span>
        <span class="token comment">//当前角色的攻击力为：100，防御力为：100</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="七、中介者模式" tabindex="-1"><a class="header-anchor" href="#七、中介者模式"><span>七、中介者模式</span></a></h3><p>中介者模式（Mediator Pattern）是用来降低多个对象和类之间的通信复杂性。这种模式提供了一个中介类，该类通常处理不同类之间的通信，并支持松耦合，使代码易于维护。中介者模式属于行为型模式。</p><h4 id="介绍-4" tabindex="-1"><a class="header-anchor" href="#介绍-4"><span>介绍</span></a></h4><p>**意图：**用一个中介对象来封装一系列的对象交互，中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。</p><p>**主要解决：**对象与对象之间存在大量的关联关系，这样势必会导致系统的结构变得很复杂，同时若一个对象发生改变，我们也需要跟踪与之相关联的对象，同时做出相应的处理。</p><p>**何时使用：**多个类相互耦合，形成了网状结构。</p><p>**如何解决：**将上述网状结构分离为星型结构。</p><p>**关键代码：**对象 Colleague 之间的通信封装到一个类中单独处理。</p><p><strong>应用实例：</strong> 1、中国加入 WTO 之前是各个国家相互贸易，结构复杂，现在是各个国家通过 WTO 来互相贸易。 2、机场调度系统。 3、MVC 框架，其中C（控制器）就是 M（模型）和 V（视图）的中介者。</p><p><strong>优点：</strong> 1、降低了类的复杂度，将一对多转化成了一对一。 2、各个类之间的解耦。 3、符合迪米特原则。</p><p>**缺点：**中介者会庞大，变得复杂难以维护。</p><p><strong>使用场景：</strong> 1、系统中对象之间存在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用该对象。 2、想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。</p><p>**注意事项：**不应当在职责混乱的时候使用。</p><blockquote><p>引出问题</p></blockquote>`,20),fa={href:"https://imgse.com/i/p9RD3xf",target:"_blank",rel:"noopener noreferrer"},ja=n("img",{src:"https://s1.ax1x.com/2023/05/16/p9RD3xf.md.jpg",alt:"p9RD3xf.md.jpg",tabindex:"0",loading:"lazy"},null,-1),_a=n("figcaption",null,"p9RD3xf.md.jpg",-1),qa=n("blockquote",null,[n("p",null,"UML图")],-1),xa={href:"https://imgse.com/i/p9RD1RP",target:"_blank",rel:"noopener noreferrer"},Sa=n("img",{src:"https://s1.ax1x.com/2023/05/16/p9RD1RP.md.jpg",alt:"p9RD1RP.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Ca=n("figcaption",null,"p9RD1RP.md.jpg",-1),Pa=t('<h3 id="八、模板模式" tabindex="-1"><a class="header-anchor" href="#八、模板模式"><span>八、模板模式</span></a></h3><p>在模板模式（Template Pattern）中，一个抽象类公开定义了执行它的方法的方式/模板。它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。这种类型的设计模式属于行为型模式。</p><h4 id="介绍-5" tabindex="-1"><a class="header-anchor" href="#介绍-5"><span>介绍</span></a></h4><p>**意图：**定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。</p><p>**主要解决：**一些方法通用，却在每一个子类都重新写了这一方法。</p><p>**何时使用：**有一些通用的方法。</p><p>**如何解决：**将这些通用算法抽象出来。</p><p>**关键代码：**在抽象类实现，其他步骤在子类实现。</p><p><strong>应用实例：</strong> 1、在造房子的时候，地基、走线、水管都一样，只有在建筑的后期才有加壁橱加栅栏等差异。 2、西游记里面菩萨定好的 81 难，这就是一个顶层的逻辑骨架。 3、spring 中对 Hibernate 的支持，将一些已经定好的方法封装起来，比如开启事务、获取 Session、关闭 Session 等，程序员不重复写那些已经规范好的代码，直接丢一个实体就可以保存。</p><p><strong>优点：</strong> 1、封装不变部分，扩展可变部分。 2、提取公共代码，便于维护。 3、行为由父类控制，子类实现。</p><p>**缺点：**每一个不同的实现都需要一个子类来实现，导致类的个数增加，使得系统更加庞大。</p><p><strong>使用场景：</strong> 1、有多个子类共有的方法，且逻辑相同。 2、重要的、复杂的方法，可以考虑作为模板方法。</p><p>**注意事项：**为防止恶意操作，一般模板方法都加上 final 关键词。</p><blockquote><p>引出问题</p></blockquote>',14),Da={href:"https://imgse.com/i/p9fbT81",target:"_blank",rel:"noopener noreferrer"},Oa=n("img",{src:"https://s1.ax1x.com/2023/05/18/p9fbT81.md.jpg",alt:"p9fbT81.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Ra=n("figcaption",null,"p9fbT81.md.jpg",-1),Aa=n("blockquote",null,[n("p",null,"UML图")],-1),Ba={href:"https://imgse.com/i/p9fboCR",target:"_blank",rel:"noopener noreferrer"},Ma=n("img",{src:"https://s1.ax1x.com/2023/05/18/p9fboCR.md.jpg",alt:"p9fboCR.md.jpg",tabindex:"0",loading:"lazy"},null,-1),za=n("figcaption",null,"p9fboCR.md.jpg",-1),Ia=t(`<p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 抽象类：表示豆浆
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SoyaMilk</span> <span class="token punctuation">{</span>

    <span class="token comment">//模板方法，用final修饰，防止子类覆盖</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//如果为true则顾客加配料</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CustomWantConditions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">soak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//选材料</span>
    <span class="token keyword">void</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;选择上好的黄豆&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//添加配料，由子类具体实现</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//浸泡</span>
    <span class="token keyword">void</span> <span class="token function">soak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第三步，黄豆和配料开始浸泡，需要3小时&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//放到豆浆机中</span>
    <span class="token keyword">void</span> <span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第四步，黄豆和配料放到豆浆机中去打碎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 红豆豆浆
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedBeanSoyaMilk</span> <span class="token keyword">extends</span> <span class="token class-name">SoyaMilk</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;添加上好的红豆&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 黑豆豆浆
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlankBeanSoyaMilk</span> <span class="token keyword">extends</span> <span class="token class-name">SoyaMilk</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;添加上好的黑豆&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//制作红豆浆</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------制作红豆浆-------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RedBeanSoyaMilk</span> redBeanSoyaMilk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedBeanSoyaMilk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redBeanSoyaMilk<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//制作红豆浆</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------制作黑豆浆--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BlankBeanSoyaMilk</span> blankBeanSoyaMilk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlankBeanSoyaMilk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        blankBeanSoyaMilk<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升级</p>`,7),Va={href:"https://imgse.com/i/p9fb7gx",target:"_blank",rel:"noopener noreferrer"},La=n("img",{src:"https://s1.ax1x.com/2023/05/18/p9fb7gx.md.jpg",alt:"p9fb7gx.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Fa=n("figcaption",null,"p9fb7gx.md.jpg",-1),Wa=t(`<p>在SoyaMilk中添加钩子方法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//钩子方法，顾客是否相加配料</span>
    <span class="token keyword">boolean</span> <span class="token class-name">CustomWantConditions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改make()方法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//模板方法，用final修饰，防止子类覆盖</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//如果为true则顾客加配料</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CustomWantConditions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">soak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加纯豆浆类</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 纯豆浆类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleBeanSoyaMilk</span> <span class="token keyword">extends</span> <span class="token class-name">SoyaMilk</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//空实现</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//返回false不添加任何配料</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">boolean</span> <span class="token class-name">CustomWantConditions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改测试类</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//制作红豆浆</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------制作红豆浆-------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RedBeanSoyaMilk</span> redBeanSoyaMilk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedBeanSoyaMilk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redBeanSoyaMilk<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//制作红豆浆</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------制作黑豆浆--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BlankBeanSoyaMilk</span> blankBeanSoyaMilk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlankBeanSoyaMilk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        blankBeanSoyaMilk<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//制作纯豆浆</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------制作纯豆浆--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SimpleBeanSoyaMilk</span> simpleBeanSoyaMilk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleBeanSoyaMilk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        simpleBeanSoyaMilk<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="九、访问者模式" tabindex="-1"><a class="header-anchor" href="#九、访问者模式"><span>九、访问者模式</span></a></h3><p>在访问者模式（Visitor Pattern）中，我们使用了一个访问者类，它改变了元素类的执行算法。通过这种方式，元素的执行算法可以随着访问者改变而改变。这种类型的设计模式属于行为型模式。根据模式，元素对象已接受访问者对象，这样访问者对象就可以处理元素对象上的操作。</p><h4 id="介绍-6" tabindex="-1"><a class="header-anchor" href="#介绍-6"><span>介绍</span></a></h4><p>**意图：**主要将数据结构与数据操作分离。</p><p>**主要解决：**稳定的数据结构和易变的操作耦合问题。</p><p>**何时使用：**需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作&quot;污染&quot;这些对象的类，使用访问者模式将这些封装到类中。</p><p>**如何解决：**在被访问的类里面加一个对外提供接待访问者的接口。</p><p>**关键代码：**在数据基础类里面有一个方法接受访问者，将自身引用传入访问者。</p><p>**应用实例：**您在朋友家做客，您是访问者，朋友接受您的访问，您通过朋友的描述，然后对朋友的描述做出一个判断，这就是访问者模式。</p><p><strong>优点：</strong> 1、符合单一职责原则。 2、优秀的扩展性。 3、灵活性。</p><p><strong>缺点：</strong> 1、具体元素对访问者公布细节，违反了迪米特原则。 2、具体元素变更比较困难。 3、违反了依赖倒置原则，依赖了具体类，没有依赖抽象。</p><p><strong>使用场景：</strong> 1、对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作。 2、需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作&quot;污染&quot;这些对象的类，也不希望在增加新操作时修改这些类。</p><p>**注意事项：**访问者可以对功能进行统一，可以做报表、UI、拦截器与过滤器。</p><blockquote><p>引出问题</p></blockquote>`,22),Ea={href:"https://imgse.com/i/p9fjCFg",target:"_blank",rel:"noopener noreferrer"},Na=n("img",{src:"https://s1.ax1x.com/2023/05/18/p9fjCFg.md.jpg",alt:"p9fjCFg.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Ta=n("figcaption",null,"p9fjCFg.md.jpg",-1),Ua=n("blockquote",null,[n("p",null,"UML图")],-1),Ha={href:"https://imgse.com/i/p9fjpTS",target:"_blank",rel:"noopener noreferrer"},Ja=n("img",{src:"https://s1.ax1x.com/2023/05/18/p9fjpTS.md.jpg",alt:"p9fjpTS.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Ya=n("figcaption",null,"p9fjpTS.md.jpg",-1),Qa=t(`<p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 评价抽象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Action</span> <span class="token punctuation">{</span>
    <span class="token comment">//得到男性的测评</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">getManResults</span><span class="token punctuation">(</span><span class="token class-name">Man</span> man<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//得到女性的测评</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">getWomanResults</span><span class="token punctuation">(</span><span class="token class-name">Woman</span> woman<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体评价类：评价成功
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Success</span> <span class="token keyword">extends</span> <span class="token class-name">Action</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">getManResults</span><span class="token punctuation">(</span><span class="token class-name">Man</span> man<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;男人给该歌手的评价是：很成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">getWomanResults</span><span class="token punctuation">(</span><span class="token class-name">Woman</span> woman<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;女人给该歌手的评价是：很成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 具体评价类：评价失败
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Fail</span> <span class="token keyword">extends</span> <span class="token class-name">Action</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">getManResults</span><span class="token punctuation">(</span><span class="token class-name">Man</span> man<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;男人给该歌手的评价是：晋级失败！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">getWomanResults</span><span class="token punctuation">(</span><span class="token class-name">Woman</span> woman<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;女人给该歌手的评价是：晋级失败！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 接待访问者抽象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Action</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 接待访问者具体类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Action</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        action<span class="token punctuation">.</span><span class="token function">getManResults</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 接待访问者具体类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Woman</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Action</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        action<span class="token punctuation">.</span><span class="token function">getWomanResults</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 数据机构，维护很多人
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectStructure</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> personList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//添加</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attach</span><span class="token punctuation">(</span><span class="token class-name">Person</span> person<span class="token punctuation">)</span><span class="token punctuation">{</span>
        personList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//移除</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">detach</span><span class="token punctuation">(</span><span class="token class-name">Person</span> person<span class="token punctuation">)</span><span class="token punctuation">{</span>
        personList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//展示评价</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">disPlay</span><span class="token punctuation">(</span><span class="token class-name">Action</span> action<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Person</span> person <span class="token operator">:</span> personList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            person<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建ObjectStructure</span>
        <span class="token class-name">ObjectStructure</span> objectStructure <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectStructure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Woman</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//评价成功</span>
        <span class="token class-name">Success</span> success <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">disPlay</span><span class="token punctuation">(</span>success<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//评价失败</span>
        <span class="token class-name">Fail</span> fail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">disPlay</span><span class="token punctuation">(</span>fail<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//输出结果</span>
        <span class="token comment">//男人给该歌手的评价是：很成功！</span>
        <span class="token comment">//女人给该歌手的评价是：很成功！</span>
        <span class="token comment">//男人给该歌手的评价是：晋级失败！</span>
        <span class="token comment">//女人给该歌手的评价是：晋级失败！</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="十、迭代器模式" tabindex="-1"><a class="header-anchor" href="#十、迭代器模式"><span>十、迭代器模式</span></a></h3><p>迭代器模式（Iterator Pattern）是 Java 和 .Net 编程环境中非常常用的设计模式。这种模式用于顺序访问集合对象的元素，不需要知道集合对象的底层表示。</p><p>迭代器模式属于行为型模式。</p><h4 id="介绍-7" tabindex="-1"><a class="header-anchor" href="#介绍-7"><span>介绍</span></a></h4><p>**意图：**提供一种方法顺序访问一个聚合对象中各个元素, 而又无须暴露该对象的内部表示。</p><p>**主要解决：**不同的方式来遍历整个整合对象。</p><p>**何时使用：**遍历一个聚合对象。</p><p>**如何解决：**把在元素之间游走的责任交给迭代器，而不是聚合对象。</p><p>**关键代码：**定义接口：hasNext, next。</p><p>**应用实例：**JAVA 中的 iterator。</p><p><strong>优点：</strong> 1、它支持以不同的方式遍历一个聚合对象。 2、迭代器简化了聚合类。 3、在同一个聚合上可以有多个遍历。 4、在迭代器模式中，增加新的聚合类和迭代器类都很方便，无须修改原有代码。</p><p>**缺点：**由于迭代器模式将存储数据和遍历数据的职责分离，增加新的聚合类需要对应增加新的迭代器类，类的个数成对增加，这在一定程度上增加了系统的复杂性。</p><p><strong>使用场景：</strong> 1、访问一个聚合对象的内容而无须暴露它的内部表示。 2、需要为聚合对象提供多种遍历方式。 3、为遍历不同的聚合结构提供一个统一的接口。</p><p>**注意事项：**迭代器模式就是分离了集合对象的遍历行为，抽象出一个迭代器类来负责，这样既可以做到不暴露集合的内部结构，又可让外部代码透明地访问集合内部的数据。</p><blockquote><p>引出问题</p></blockquote>`,25),Za={href:"https://imgse.com/i/p9h9E6J",target:"_blank",rel:"noopener noreferrer"},Ga=n("img",{src:"https://s1.ax1x.com/2023/05/19/p9h9E6J.md.jpg",alt:"p9h9E6J.md.jpg",tabindex:"0",loading:"lazy"},null,-1),Xa=n("figcaption",null,"p9h9E6J.md.jpg",-1),Ka=n("blockquote",null,[n("p",null,"UML图")],-1),$a={href:"https://imgse.com/i/p9h9Al4",target:"_blank",rel:"noopener noreferrer"},nt=n("img",{src:"https://s1.ax1x.com/2023/05/19/p9h9Al4.md.jpg",alt:"p9h9Al4.md.jpg",tabindex:"0",loading:"lazy"},null,-1),st=n("figcaption",null,"p9h9Al4.md.jpg",-1),at=t(`<p><strong>核心代码</strong></p><p>提供数据：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 系
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Department</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">College</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//添加系</span>
    <span class="token keyword">void</span> <span class="token function">addDepartment</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//提供一个迭代器，用于遍历</span>
    <span class="token class-name">Iterator</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 计算机学院
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComputerCollege</span> <span class="token keyword">implements</span> <span class="token class-name">College</span><span class="token punctuation">{</span>
    <span class="token comment">//添加系</span>
    <span class="token class-name">Department</span><span class="token punctuation">[</span><span class="token punctuation">]</span> departments<span class="token punctuation">;</span>
    <span class="token keyword">int</span> departmentNum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//系的个数</span>

    <span class="token keyword">public</span> <span class="token class-name">ComputerCollege</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        departments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">addDepartment</span><span class="token punctuation">(</span><span class="token string">&quot;java专业&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;java专业&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addDepartment</span><span class="token punctuation">(</span><span class="token string">&quot;php专业&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;php专业&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addDepartment</span><span class="token punctuation">(</span><span class="token string">&quot;大数据专业&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;大数据专业&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;计算机学院&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//添加系</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addDepartment</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Department</span> department <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span>
        departments<span class="token punctuation">[</span>departmentNum<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> department<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//迭代器遍历操作</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ComputerCollegeIterator</span><span class="token punctuation">(</span>departments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 信息工程学院
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InfoCollege</span> <span class="token keyword">implements</span> <span class="token class-name">College</span><span class="token punctuation">{</span>
    <span class="token comment">//添加系</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">&gt;</span></span> departmentList<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">InfoCollege</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        departmentList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addDepartment</span><span class="token punctuation">(</span><span class="token string">&quot;信息安全&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;信息安全&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addDepartment</span><span class="token punctuation">(</span><span class="token string">&quot;网络安全&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;网络安全&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addDepartment</span><span class="token punctuation">(</span><span class="token string">&quot;服务器安全&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;服务器安全&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;信息工程学院&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//添加系</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addDepartment</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Department</span> department <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span>
        departmentList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>department<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//迭代器遍历操作</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InfoCollegeIterator</span><span class="token punctuation">(</span>departmentList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提供遍历方式</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 计算机科学学院迭代器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComputerCollegeIterator</span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span> <span class="token punctuation">{</span>
    <span class="token comment">//这里我们需要知道Department是以怎样的方式存放的=&gt;数组</span>
    <span class="token class-name">Department</span><span class="token punctuation">[</span><span class="token punctuation">]</span> departments<span class="token punctuation">;</span>
    <span class="token keyword">int</span> position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//遍历的位置</span>

    <span class="token keyword">public</span> <span class="token class-name">ComputerCollegeIterator</span><span class="token punctuation">(</span><span class="token class-name">Department</span><span class="token punctuation">[</span><span class="token punctuation">]</span> departments<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>departments <span class="token operator">=</span> departments<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//判断是否还有下一个元素</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>position <span class="token operator">&gt;</span> departments<span class="token punctuation">.</span>length <span class="token operator">||</span> departments<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取下一个元素</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Department</span> department <span class="token operator">=</span> departments<span class="token punctuation">[</span>position<span class="token punctuation">]</span><span class="token punctuation">;</span>
        position<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> department<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//删除方法，空实现</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 信息工程学院迭代器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InfoCollegeIterator</span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span> <span class="token punctuation">{</span>
    <span class="token comment">//这里我们需要知道Department是以怎样的方式存放的=&gt;集合</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">&gt;</span></span> departmentList<span class="token punctuation">;</span>
    <span class="token keyword">int</span> position <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//遍历的位置</span>

    <span class="token keyword">public</span> <span class="token class-name">InfoCollegeIterator</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">&gt;</span></span> departmentList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>departmentList <span class="token operator">=</span> departmentList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//判断是否还有下一个元素</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>position <span class="token operator">&gt;=</span> departmentList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            position<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取下一个元素</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> departmentList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//删除方法，空实现</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 输出实现
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OutPutImpl</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">College</span><span class="token punctuation">&gt;</span></span> collegeList<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">OutPutImpl</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">College</span><span class="token punctuation">&gt;</span></span> collegeList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>collegeList <span class="token operator">=</span> collegeList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//打印学院</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printCollege</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">College</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> collegeList<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">College</span> college <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;========&quot;</span> <span class="token operator">+</span> college<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printDepartment</span><span class="token punctuation">(</span>college<span class="token punctuation">.</span><span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//打印系</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printDepartment</span><span class="token punctuation">(</span><span class="token class-name">Iterator</span> iterator<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Department</span> department <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Department</span><span class="token punctuation">)</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>department<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建学院集合</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">College</span><span class="token punctuation">&gt;</span></span> collegeList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//创建学院</span>
        <span class="token class-name">ComputerCollege</span> computerCollege <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComputerCollege</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InfoCollege</span> infoCollege <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InfoCollege</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//添加学院</span>
        collegeList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>computerCollege<span class="token punctuation">)</span><span class="token punctuation">;</span>
        collegeList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>infoCollege<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//输出</span>
        <span class="token class-name">OutPutImpl</span> outPut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutPutImpl</span><span class="token punctuation">(</span>collegeList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        outPut<span class="token punctuation">.</span><span class="token function">printCollege</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//========计算机学院========</span>
        <span class="token comment">//java专业</span>
        <span class="token comment">//php专业</span>
        <span class="token comment">//大数据专业</span>
        <span class="token comment">//========信息工程学院========</span>
        <span class="token comment">//信息安全</span>
        <span class="token comment">//网络安全</span>
        <span class="token comment">//服务器安全</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结束</strong></p>`,14);function tt(pt,et){const s=e("ExternalLinkIcon");return c(),o("div",null,[i,n("p",null,[n("a",u,[d,a(s)])]),k,n("p",null,[n("a",r,[v,a(s)])]),m,n("p",null,[n("a",b,[g,a(s)])]),y,n("p",null,[n("a",w,[h,a(s)])]),f,n("p",null,[n("a",j,[_,a(s)])]),q,n("p",null,[n("a",x,[S,a(s)])]),C,n("p",null,[n("a",P,[D,a(s)])]),O,n("p",null,[n("a",R,[A,a(s)])]),B,n("p",null,[n("a",M,[z,a(s)])]),I,n("p",null,[n("a",V,[L,a(s)])]),F,n("figure",null,[n("a",W,[E,a(s)]),N]),T,n("p",null,[n("a",U,[H,a(s)])]),J,n("p",null,[n("a",Y,[Q,a(s)])]),Z,n("p",null,[n("a",G,[X,a(s)])]),K,n("figure",null,[n("a",$,[nn,a(s)]),sn]),an,n("figure",null,[n("a",tn,[pn,a(s)]),en]),n("figure",null,[n("a",cn,[on,a(s)]),ln]),un,dn,n("figure",null,[n("a",kn,[rn,a(s)]),vn]),mn,n("figure",null,[n("a",bn,[gn,a(s)]),yn]),wn,n("figure",null,[n("a",hn,[fn,a(s)]),jn]),_n,n("figure",null,[n("a",qn,[xn,a(s)]),Sn]),n("figure",null,[n("a",Cn,[Pn,a(s)]),Dn]),On,n("figure",null,[n("a",Rn,[An,a(s)]),Bn]),Mn,n("figure",null,[n("a",zn,[In,a(s)]),Vn]),Ln,n("figure",null,[n("a",Fn,[Wn,a(s)]),En]),Nn,n("figure",null,[n("a",Tn,[Un,a(s)]),Hn]),Jn,n("figure",null,[n("a",Yn,[Qn,a(s)]),Zn]),Gn,n("figure",null,[n("a",Xn,[Kn,a(s)]),$n]),ns,n("figure",null,[n("a",ss,[as,a(s)]),ts]),ps,n("figure",null,[n("a",es,[cs,a(s)]),os]),ls,n("figure",null,[n("a",is,[us,a(s)]),ds]),ks,n("figure",null,[n("a",rs,[vs,a(s)]),ms]),bs,n("figure",null,[n("a",gs,[ys,a(s)]),ws]),hs,n("figure",null,[n("a",fs,[js,a(s)]),_s]),qs,n("figure",null,[n("a",xs,[Ss,a(s)]),Cs]),Ps,n("figure",null,[n("a",Ds,[Os,a(s)]),Rs]),n("figure",null,[n("a",As,[Bs,a(s)]),Ms]),zs,n("figure",null,[n("a",Is,[Vs,a(s)]),Ls]),Fs,n("figure",null,[n("a",Ws,[Es,a(s)]),Ns]),Ts,n("figure",null,[n("a",Us,[Hs,a(s)]),Js]),Ys,n("figure",null,[n("a",Qs,[Zs,a(s)]),Gs]),Xs,n("figure",null,[n("a",Ks,[$s,a(s)]),na]),sa,n("p",null,[n("a",aa,[ta,a(s)])]),pa,n("figure",null,[n("a",ea,[ca,a(s)]),oa]),la,n("figure",null,[n("a",ia,[ua,a(s)]),da]),ka,n("figure",null,[n("a",ra,[va,a(s)]),ma]),ba,n("figure",null,[n("a",ga,[ya,a(s)]),wa]),ha,n("figure",null,[n("a",fa,[ja,a(s)]),_a]),qa,n("figure",null,[n("a",xa,[Sa,a(s)]),Ca]),Pa,n("figure",null,[n("a",Da,[Oa,a(s)]),Ra]),Aa,n("figure",null,[n("a",Ba,[Ma,a(s)]),za]),Ia,n("figure",null,[n("a",Va,[La,a(s)]),Fa]),Wa,n("figure",null,[n("a",Ea,[Na,a(s)]),Ta]),Ua,n("figure",null,[n("a",Ha,[Ja,a(s)]),Ya]),Qa,n("figure",null,[n("a",Za,[Ga,a(s)]),Xa]),Ka,n("figure",null,[n("a",$a,[nt,a(s)]),st]),at])}const lt=p(l,[["render",tt],["__file","23种设计模式.html.vue"]]),it=JSON.parse('{"path":"/posts/%E5%90%8E%E7%AB%AF/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/23%E7%A7%8D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html","title":"Java设计模式","lang":"zh-CN","frontmatter":{"tag":["设计模式"],"category":["后端"],"date":"2022-01-12T00:00:00.000Z","star":true,"sticky":true,"description":"Java设计模式 简介 特别说明：部分模式解释来自菜鸟教程 设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。 设计模式是一套被反复使用的、多数人知晓的、经过分类编...","head":[["meta",{"property":"og:url","content":"https://swx08.github.io/vuepress/posts/%E5%90%8E%E7%AB%AF/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/23%E7%A7%8D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"文学博客"}],["meta",{"property":"og:title","content":"Java设计模式"}],["meta",{"property":"og:description","content":"Java设计模式 简介 特别说明：部分模式解释来自菜鸟教程 设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。 设计模式是一套被反复使用的、多数人知晓的、经过分类编..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s1.ax1x.com/2023/04/22/p9VYgL8.md.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java设计模式"}],["meta",{"property":"article:author","content":"sixkey"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2022-01-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java设计模式\\",\\"image\\":[\\"https://s1.ax1x.com/2023/04/22/p9VYgL8.md.jpg\\",\\"https://s1.ax1x.com/2023/05/12/p9yR2wQ.jpg\\",\\"https://s1.ax1x.com/2023/05/12/p9yRgeg.md.jpg\\",\\"https://s1.ax1x.com/2023/05/12/p9yRyy8.md.jpg\\",\\"https://s1.ax1x.com/2023/05/12/p9yR6OS.png\\",\\"https://s1.ax1x.com/2023/05/12/p9yXQFx.md.jpg\\",\\"https://s1.ax1x.com/2023/05/12/p96SdRx.md.jpg\\",\\"https://s1.ax1x.com/2023/05/12/p96SaJ1.md.jpg\\",\\"https://s1.ax1x.com/2023/05/12/p96Swz6.md.jpg\\",\\"https://s1.ax1x.com/2023/05/13/p96pESx.md.jpg\\",\\"https://s1.ax1x.com/2023/05/13/p96VC7V.md.jpg\\",\\"https://s1.ax1x.com/2023/05/13/p96VFtU.md.jpg\\",\\"https://s1.ax1x.com/2023/05/13/p96VikT.md.jpg\\",\\"https://s1.ax1x.com/2023/05/13/p96V900.md.jpg\\",\\"https://s1.ax1x.com/2023/05/13/p96Mfsg.md.jpg\\",\\"https://s1.ax1x.com/2023/05/13/p96MhLQ.md.jpg\\",\\"https://s1.ax1x.com/2023/05/13/p96M5Zj.md.jpg\\",\\"https://s1.ax1x.com/2023/05/14/p9cYZQI.md.jpg\\",\\"https://s1.ax1x.com/2023/05/14/p9cYAWd.md.jpg\\",\\"https://s1.ax1x.com/2023/05/14/p9cYFFe.jpg\\",\\"https://s1.ax1x.com/2023/05/14/p9cYVSA.md.jpg\\",\\"https://s1.ax1x.com/2023/05/14/p9gEJTP.md.jpg\\",\\"https://s1.ax1x.com/2023/05/14/p9gE8eI.md.jpg\\",\\"https://s1.ax1x.com/2023/05/14/p9gE1OA.md.jpg\\",\\"https://s1.ax1x.com/2023/05/14/p9gEGwt.md.jpg\\",\\"https://s1.ax1x.com/2023/05/15/p9gely4.jpg\\",\\"https://s1.ax1x.com/2023/05/15/p9geQlF.md.jpg\\",\\"https://s1.ax1x.com/2023/05/15/p928I1A.md.jpg\\",\\"https://s1.ax1x.com/2023/05/15/p928TXt.md.jpg\\",\\"https://s1.ax1x.com/2023/05/16/p92Nyd0.md.jpg\\",\\"https://s1.ax1x.com/2023/05/16/p92NsZq.md.jpg\\",\\"https://s1.ax1x.com/2023/05/16/p9RwwPx.md.jpg\\",\\"https://s1.ax1x.com/2023/05/16/p9RwaI1.md.jpg\\",\\"https://s1.ax1x.com/2023/05/16/p9RD3xf.md.jpg\\",\\"https://s1.ax1x.com/2023/05/16/p9RD1RP.md.jpg\\",\\"https://s1.ax1x.com/2023/05/18/p9fbT81.md.jpg\\",\\"https://s1.ax1x.com/2023/05/18/p9fboCR.md.jpg\\",\\"https://s1.ax1x.com/2023/05/18/p9fb7gx.md.jpg\\",\\"https://s1.ax1x.com/2023/05/18/p9fjCFg.md.jpg\\",\\"https://s1.ax1x.com/2023/05/18/p9fjpTS.md.jpg\\",\\"https://s1.ax1x.com/2023/05/19/p9h9E6J.md.jpg\\",\\"https://s1.ax1x.com/2023/05/19/p9h9Al4.md.jpg\\"],\\"datePublished\\":\\"2022-01-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"sixkey\\",\\"url\\":\\"https://swx08.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"1、什么是 GOF（四人帮，全拼 Gang of Four）？","slug":"_1、什么是-gof-四人帮-全拼-gang-of-four","link":"#_1、什么是-gof-四人帮-全拼-gang-of-four","children":[]},{"level":3,"title":"2、设计模式的使用","slug":"_2、设计模式的使用","link":"#_2、设计模式的使用","children":[]},{"level":3,"title":"3、开发人员的共同平台","slug":"_3、开发人员的共同平台","link":"#_3、开发人员的共同平台","children":[]},{"level":3,"title":"4、最佳的实践","slug":"_4、最佳的实践","link":"#_4、最佳的实践","children":[]},{"level":3,"title":"5、设计模式的类型","slug":"_5、设计模式的类型","link":"#_5、设计模式的类型","children":[]},{"level":3,"title":"6、设计模式的七大原则","slug":"_6、设计模式的七大原则","link":"#_6、设计模式的七大原则","children":[]}]},{"level":2,"title":"创建型模式","slug":"创建型模式","link":"#创建型模式","children":[{"level":3,"title":"一、工厂模式","slug":"一、工厂模式","link":"#一、工厂模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍","link":"#_1、介绍","children":[]},{"level":4,"title":"2、核心本质","slug":"_2、核心本质","link":"#_2、核心本质","children":[]},{"level":4,"title":"3、两种模式","slug":"_3、两种模式","link":"#_3、两种模式","children":[{"level":5,"title":"①、简单工厂模式","slug":"_1、简单工厂模式","link":"#_1、简单工厂模式","children":[]},{"level":5,"title":"②、工厂方法模式","slug":"_2、工厂方法模式","link":"#_2、工厂方法模式","children":[]}]}]},{"level":3,"title":"二、抽象工厂模式","slug":"二、抽象工厂模式","link":"#二、抽象工厂模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-1","link":"#_1、介绍-1","children":[]}]},{"level":3,"title":"三、单例模式","slug":"三、单例模式","link":"#三、单例模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-2","link":"#_1、介绍-2","children":[]},{"level":4,"title":"2、单例模式的六种实现方式","slug":"_2、单例模式的六种实现方式","link":"#_2、单例模式的六种实现方式","children":[{"level":5,"title":"①、懒汉式，线程不安全","slug":"_1、懒汉式-线程不安全","link":"#_1、懒汉式-线程不安全","children":[]},{"level":5,"title":"②、懒汉式，线程安全","slug":"_2、懒汉式-线程安全","link":"#_2、懒汉式-线程安全","children":[]},{"level":5,"title":"③、饿汉式","slug":"_3、饿汉式","link":"#_3、饿汉式","children":[]},{"level":5,"title":"④、双检锁/双重校验锁","slug":"_4、双检锁-双重校验锁","link":"#_4、双检锁-双重校验锁","children":[]},{"level":5,"title":"⑤、登记式/静态内部类","slug":"_5、登记式-静态内部类","link":"#_5、登记式-静态内部类","children":[]},{"level":5,"title":"⑥、枚举","slug":"_6、枚举","link":"#_6、枚举","children":[]},{"level":5,"title":"⑦、经验之谈","slug":"_7、经验之谈","link":"#_7、经验之谈","children":[]}]}]},{"level":3,"title":"四、建造者模式","slug":"四、建造者模式","link":"#四、建造者模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-3","link":"#_1、介绍-3","children":[]},{"level":4,"title":"2、有指挥者模式","slug":"_2、有指挥者模式","link":"#_2、有指挥者模式","children":[]},{"level":4,"title":"3、无指挥者模式","slug":"_3、无指挥者模式","link":"#_3、无指挥者模式","children":[]}]},{"level":3,"title":"五、原型模式","slug":"五、原型模式","link":"#五、原型模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-4","link":"#_1、介绍-4","children":[]},{"level":4,"title":"2、两种克隆","slug":"_2、两种克隆","link":"#_2、两种克隆","children":[{"level":5,"title":"①、浅克隆","slug":"_1、浅克隆","link":"#_1、浅克隆","children":[]},{"level":5,"title":"②、深克隆","slug":"_2、深克隆","link":"#_2、深克隆","children":[]}]}]}]},{"level":2,"title":"结构性模式","slug":"结构性模式","link":"#结构性模式","children":[{"level":3,"title":"一、适配器模式","slug":"一、适配器模式","link":"#一、适配器模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-5","link":"#_1、介绍-5","children":[]},{"level":4,"title":"2、两种适配器","slug":"_2、两种适配器","link":"#_2、两种适配器","children":[{"level":5,"title":"①、类适配器","slug":"_1、类适配器","link":"#_1、类适配器","children":[]},{"level":5,"title":"②、对象适配器","slug":"_2、对象适配器","link":"#_2、对象适配器","children":[]}]}]},{"level":3,"title":"二、桥接模式","slug":"二、桥接模式","link":"#二、桥接模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-6","link":"#_1、介绍-6","children":[]}]},{"level":3,"title":"三、代理模式","slug":"三、代理模式","link":"#三、代理模式","children":[{"level":4,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":4,"title":"静态代理","slug":"静态代理","link":"#静态代理","children":[{"level":5,"title":"1、角色分析","slug":"_1、角色分析","link":"#_1、角色分析","children":[]},{"level":5,"title":"2、加深理解","slug":"_2、加深理解","link":"#_2、加深理解","children":[]}]},{"level":4,"title":"动态代理","slug":"动态代理","link":"#动态代理","children":[{"level":5,"title":"1、介绍","slug":"_1、介绍-7","link":"#_1、介绍-7","children":[]},{"level":5,"title":"2、动态代理实例","slug":"_2、动态代理实例","link":"#_2、动态代理实例","children":[]},{"level":5,"title":"3、动态代理工具包","slug":"_3、动态代理工具包","link":"#_3、动态代理工具包","children":[]}]}]},{"level":3,"title":"四、装饰器模式","slug":"四、装饰器模式","link":"#四、装饰器模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-8","link":"#_1、介绍-8","children":[]},{"level":4,"title":"2、装饰者模式JDK应用","slug":"_2、装饰者模式jdk应用","link":"#_2、装饰者模式jdk应用","children":[]}]},{"level":3,"title":"五、组合模式","slug":"五、组合模式","link":"#五、组合模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-9","link":"#_1、介绍-9","children":[]}]},{"level":3,"title":"六、外观模式","slug":"六、外观模式","link":"#六、外观模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-10","link":"#_1、介绍-10","children":[]},{"level":4,"title":"2、外观模式细节","slug":"_2、外观模式细节","link":"#_2、外观模式细节","children":[]}]},{"level":3,"title":"七、享元模式","slug":"七、享元模式","link":"#七、享元模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-11","link":"#_1、介绍-11","children":[]},{"level":4,"title":"2、内部状态和外部状态","slug":"_2、内部状态和外部状态","link":"#_2、内部状态和外部状态","children":[]},{"level":4,"title":"3、享元模式的注意事项和细节","slug":"_3、享元模式的注意事项和细节","link":"#_3、享元模式的注意事项和细节","children":[]}]}]},{"level":2,"title":"行为型模式","slug":"行为型模式","link":"#行为型模式","children":[{"level":3,"title":"一、命令模式","slug":"一、命令模式","link":"#一、命令模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-12","link":"#_1、介绍-12","children":[]},{"level":4,"title":"2、命令模式的注意事项和细节","slug":"_2、命令模式的注意事项和细节","link":"#_2、命令模式的注意事项和细节","children":[]}]},{"level":3,"title":"二、观察者模式","slug":"二、观察者模式","link":"#二、观察者模式","children":[{"level":4,"title":"介绍","slug":"介绍-1","link":"#介绍-1","children":[]}]},{"level":3,"title":"三、职责链模式","slug":"三、职责链模式","link":"#三、职责链模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-13","link":"#_1、介绍-13","children":[]},{"level":4,"title":"2、职责链模式的注意事项和细节","slug":"_2、职责链模式的注意事项和细节","link":"#_2、职责链模式的注意事项和细节","children":[]}]},{"level":3,"title":"四、策略模式","slug":"四、策略模式","link":"#四、策略模式","children":[{"level":4,"title":"1、介绍","slug":"_1、介绍-14","link":"#_1、介绍-14","children":[]},{"level":4,"title":"2、细节注意","slug":"_2、细节注意","link":"#_2、细节注意","children":[]}]},{"level":3,"title":"五、状态模式","slug":"五、状态模式","link":"#五、状态模式","children":[{"level":4,"title":"介绍","slug":"介绍-2","link":"#介绍-2","children":[]}]},{"level":3,"title":"六、备忘录模式","slug":"六、备忘录模式","link":"#六、备忘录模式","children":[{"level":4,"title":"介绍","slug":"介绍-3","link":"#介绍-3","children":[]}]},{"level":3,"title":"七、中介者模式","slug":"七、中介者模式","link":"#七、中介者模式","children":[{"level":4,"title":"介绍","slug":"介绍-4","link":"#介绍-4","children":[]}]},{"level":3,"title":"八、模板模式","slug":"八、模板模式","link":"#八、模板模式","children":[{"level":4,"title":"介绍","slug":"介绍-5","link":"#介绍-5","children":[]}]},{"level":3,"title":"九、访问者模式","slug":"九、访问者模式","link":"#九、访问者模式","children":[{"level":4,"title":"介绍","slug":"介绍-6","link":"#介绍-6","children":[]}]},{"level":3,"title":"十、迭代器模式","slug":"十、迭代器模式","link":"#十、迭代器模式","children":[{"level":4,"title":"介绍","slug":"介绍-7","link":"#介绍-7","children":[]}]}]}],"git":{},"readingTime":{"minutes":105.61,"words":31684},"filePathRelative":"posts/后端/设计模式/23种设计模式.md","localizedDate":"2022年1月12日","excerpt":"\\n<h2>简介</h2>\\n<p><strong>特别说明：部分模式解释来自菜鸟教程</strong></p>\\n<p>设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。</p>\\n<p>设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。</p>","autoDesc":true}');export{lt as comp,it as data};
