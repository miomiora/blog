import{_ as o,V as t,W as c,X as n,Y as a,Z as e,a0 as d,C as p}from"./framework-0aae388a.js";const l={},r=n("h2",{id:"下载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),a(" 下载")],-1),i=n("code",null,"MongoDB",-1),h={href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,[a("这里选择下载"),n("code",null,"zip"),a("也就是绿色解压即用版本")],-1),u=n("code",null,"MongoDB Shell",-1),b={href:"https://www.mongodb.com/try/download/shell",target:"_blank",rel:"noopener noreferrer"},g=d(`<h2 id="启动服务器" tabindex="-1"><a class="header-anchor" href="#启动服务器" aria-hidden="true">#</a> 启动服务器</h2><p>解压完成后到对应的目录<code>解压目录\\mongodb-win32-x86_64-windows-6.0.5\\bin</code> 启动 <code>cmd</code> 运行</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--dbpath</span><span class="token operator">=</span><span class="token punctuation">..</span><span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>db
</code></pre></div><h2 id="启动-mongodb-shell" tabindex="-1"><a class="header-anchor" href="#启动-mongodb-shell" aria-hidden="true">#</a> 启动 <code>MongoDB Shell</code></h2><p>到对应的目录<code>解压目录\\mongosh-1.8.0-win32-x64\\bin</code> 启动 <code>cmd</code> 运行</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mongosh
</code></pre></div><p>或者直接双击 <code>mongosh.exe</code></p><h2 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看有权限查看的数据库</span>
test<span class="token operator">&gt;</span> show dbs
admin       <span class="token number">40.00</span> KiB
config     <span class="token number">108.00</span> KiB
<span class="token builtin class-name">local</span>       <span class="token number">72.00</span> KiB

<span class="token comment"># 查看当前正在使用的数据库命令</span>
test<span class="token operator">&gt;</span> db
<span class="token builtin class-name">test</span>

<span class="token comment"># 创建数据库</span>
test<span class="token operator">&gt;</span> use miodb
switched to db miodb
miodb<span class="token operator">&gt;</span> db
miodb

<span class="token comment"># 数据库的删除</span>
miodb<span class="token operator">&gt;</span> db.<span class="token function-name function">dropDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span> ok: <span class="token number">1</span>, dropped: <span class="token string">&#39;miodb&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><h2 id="集合操作" tabindex="-1"><a class="header-anchor" href="#集合操作" aria-hidden="true">#</a> 集合操作</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显式创建</span>
db.createCollection<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre></div><ul><li>隐式创建（向集合中插入一个文档时，集合不存在则会自动创建）</li></ul>`,12);function k(_,w){const s=p("ExternalLinkIcon");return t(),c("div",null,[r,n("p",null,[a("下载 "),i,a(" 服务器 "),n("a",h,[a("https://www.mongodb.com/try/download/community"),e(s)])]),m,n("p",null,[a("下载 "),u,a(),n("a",b,[a("https://www.mongodb.com/try/download/shell"),e(s)])]),g])}const x=o(l,[["render",k],["__file","2.html.vue"]]);export{x as default};
