import{_ as o,V as p,W as d,Z as c,$ as a,a0 as u,X as n,Y as s,C as r}from"./framework-0aae388a.js";const k={},b=u(`<p>简单的增删改查里面，查询这块名堂要多点</p><h2 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h2><p>单页 2 条文档，第一页 <code>db.user.find().limit(2).skip(0)</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>miodb<span class="token operator">&gt;</span> db.user.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>.skip<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    _id: ObjectId<span class="token punctuation">(</span><span class="token string">&quot;641fbad6e438a9958f14131d&quot;</span><span class="token punctuation">)</span>,
    name: <span class="token string">&#39;hanamaru&#39;</span>,
    age: <span class="token number">19</span>,
    gender: <span class="token string">&#39;女&#39;</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    _id: ObjectId<span class="token punctuation">(</span><span class="token string">&quot;641fbad6e438a9958f14131e&quot;</span><span class="token punctuation">)</span>,
    name: <span class="token string">&#39;makoto&#39;</span>,
    age: <span class="token number">51</span>,
    gender: <span class="token string">&#39;女&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询" aria-hidden="true">#</a> 排序查询</h2>`,5),m=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user.find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(".sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("age:1"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131c"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'yui'"),s(`,
    age: `),n("span",{class:"token number"},"16"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`,
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131b"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'akiyama'"),s(`,
    age: `),n("span",{class:"token number"},"17"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`,
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131d"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'hanamaru'"),s(`,
    age: `),n("span",{class:"token number"},"19"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`,
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131e"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'makoto'"),s(`,
    age: `),n("span",{class:"token number"},"51"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user.find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(".sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("age:-1"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131e"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'makoto'"),s(`,
    age: `),n("span",{class:"token number"},"51"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`,
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131d"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'hanamaru'"),s(`,
    age: `),n("span",{class:"token number"},"19"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`,
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131b"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'akiyama'"),s(`,
    age: `),n("span",{class:"token number"},"17"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`,
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131c"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'yui'"),s(`,
    age: `),n("span",{class:"token number"},"16"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=u(`<h2 id="正则查询" tabindex="-1"><a class="header-anchor" href="#正则查询" aria-hidden="true">#</a> 正则查询</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询名字里面包含 u 的文档</span>
miodb<span class="token operator">&gt;</span> db.user.find<span class="token punctuation">(</span><span class="token punctuation">{</span>name:/u/<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    _id: ObjectId<span class="token punctuation">(</span><span class="token string">&quot;641fbad6e438a9958f14131c&quot;</span><span class="token punctuation">)</span>,
    name: <span class="token string">&#39;yui&#39;</span>,
    age: <span class="token number">16</span>,
    gender: <span class="token string">&#39;女&#39;</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    _id: ObjectId<span class="token punctuation">(</span><span class="token string">&quot;641fbad6e438a9958f14131d&quot;</span><span class="token punctuation">)</span>,
    name: <span class="token string">&#39;hanamaru&#39;</span>,
    age: <span class="token number">19</span>,
    gender: <span class="token string">&#39;女&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="比较查询" tabindex="-1"><a class="header-anchor" href="#比较查询" aria-hidden="true">#</a> 比较查询</h2><table><thead><tr><th style="text-align:center;">操作</th><th style="text-align:center;">格式</th></tr></thead><tbody><tr><td style="text-align:center;">等于</td><td style="text-align:center;"><code>{&lt;key&gt;:&lt;value&gt;}</code></td></tr><tr><td style="text-align:center;">小于</td><td style="text-align:center;"><code>{&lt;key&gt;:{$lt:&lt;value&gt;}}</code></td></tr><tr><td style="text-align:center;">小于或等于</td><td style="text-align:center;"><code>{&lt;key&gt;:{$lte:&lt;value&gt;}}</code></td></tr><tr><td style="text-align:center;">大于</td><td style="text-align:center;"><code>{&lt;key&gt;:{$gt:&lt;value&gt;}}</code></td></tr><tr><td style="text-align:center;">大于或等于</td><td style="text-align:center;"><code>{&lt;key&gt;:{$gte:&lt;value&gt;}}</code></td></tr><tr><td style="text-align:center;">不等于</td><td style="text-align:center;"><code>{&lt;key&gt;:{$ne:&lt;value&gt;}}</code></td></tr></tbody></table>`,4),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user.find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("name:"),n("span",{class:"token string"},'"miomiora"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fba25e438a9958f14131a"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'miomiora'"),s(`,
    age: `),n("span",{class:"token number"},"24"),s(`,
    gender: `),n("span",{class:"token string"},"'男'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user.find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("age:"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$gt"),s(":20"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fba25e438a9958f14131a"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'miomiora'"),s(`,
    age: `),n("span",{class:"token number"},"24"),s(`,
    gender: `),n("span",{class:"token string"},"'男'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`,
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131e"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'makoto'"),s(`,
    age: `),n("span",{class:"token number"},"51"),s(`,
    gender: `),n("span",{class:"token string"},"'男'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("h2",{id:"包含查询",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#包含查询","aria-hidden":"true"},"#"),s(" 包含查询")],-1),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user.find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("name:"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$in"),s(":"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"hanamaru"'),s(", "),n("span",{class:"token string"},'"yui"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131c"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'yui'"),s(`,
    age: `),n("span",{class:"token number"},"16"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`,
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131d"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'hanamaru'"),s(`,
    age: `),n("span",{class:"token number"},"19"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user.find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("name:"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$nin"),s(":"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"hanamaru"'),s(", "),n("span",{class:"token string"},'"yui"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131b"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'akiyama'"),s(`,
    age: `),n("span",{class:"token number"},"17"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`,
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131e"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'makoto'"),s(`,
    age: `),n("span",{class:"token number"},"51"),s(`,
    gender: `),n("span",{class:"token string"},"'女'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=u(`<h2 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h2><blockquote><p>或 <code>$or:[{},{},{}]</code> 和 <code>$and:[{},{},{}]</code></p></blockquote><p>查询 name 为 yui 或 makoto 的文档，并且只显示 name 和 age（0为不显示，1为显示，其中_id默认显示）</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>miodb<span class="token operator">&gt;</span> db.user.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token variable">$or</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span>name:<span class="token string">&quot;yui&quot;</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>name:<span class="token string">&quot;makoto&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>_id:0, name:1, age:1<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span> <span class="token punctuation">{</span> name: <span class="token string">&#39;yui&#39;</span>, age: <span class="token number">16</span> <span class="token punctuation">}</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;makoto&#39;</span>, age: <span class="token number">51</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span>
</code></pre></div><p>如果 <code>or</code> 只是为了筛选一个字段的话用 <code>in</code> 更方便</p>`,5);function I(O,q){const l=r("CodeTabs");return p(),d("div",null,[b,c(l,{id:"13",data:[{title:"升序"},{title:"降序"}],"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:i})=>[m]),tab1:a(({title:e,value:t,isActive:i})=>[v]),_:1}),g,c(l,{id:"90",data:[{title:"等于"},{title:"大于"}],"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:i})=>[h]),tab1:a(({title:e,value:t,isActive:i})=>[f]),_:1}),_,c(l,{id:"101",data:[{title:"包含"},{title:"不包含"}],"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:i})=>[x]),tab1:a(({title:e,value:t,isActive:i})=>[y]),_:1}),j])}const A=o(k,[["render",I],["__file","4.html.vue"]]);export{A as default};
