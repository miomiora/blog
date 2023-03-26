import{_ as p,V as r,W as u,Z as o,$ as a,a0 as i,X as n,Y as s,C as d}from"./framework-0aae388a.js";const k={},b=i('<ul><li>与 <code>SQL</code> 对应的关系</li></ul><table><thead><tr><th style="text-align:center;">SQL</th><th style="text-align:center;">MongoDB</th></tr></thead><tbody><tr><td style="text-align:center;">database</td><td style="text-align:center;">database</td></tr><tr><td style="text-align:center;">table</td><td style="text-align:center;">collection</td></tr><tr><td style="text-align:center;">row</td><td style="text-align:center;">document</td></tr><tr><td style="text-align:center;">column</td><td style="text-align:center;">field</td></tr><tr><td style="text-align:center;">index</td><td style="text-align:center;">index</td></tr><tr><td style="text-align:center;">joins</td><td style="text-align:center;">无表连接，使用嵌入式文档替代</td></tr><tr><td style="text-align:center;">primary key</td><td style="text-align:center;">primary key</td></tr></tbody></table><p>以下操作均是对于 <code>document</code></p><h2 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h2>',4),m=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("db.COLLECTION_NAME.insertOne"),n("span",{class:"token punctuation"},"("),s(`
   `),n("span",{class:"token operator"},"<"),s("document"),n("span",{class:"token operator"},">"),s(`,
   `),n("span",{class:"token punctuation"},"{"),s(`
      writeConcern: `),n("span",{class:"token operator"},"<"),s("document"),n("span",{class:"token operator"},">"),s(`
   `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("db.COLLECTION_NAME.insertMany"),n("span",{class:"token punctuation"},"("),s(`
   `),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"<"),s("document "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"1"),s(">")]),s(" , "),n("span",{class:"token operator"},"<"),s("document "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s(", "),n("span",{class:"token punctuation"},".."),s(". "),n("span",{class:"token punctuation"},"]"),s(`,
   `),n("span",{class:"token punctuation"},"{"),s(`
      writeConcern: `),n("span",{class:"token operator"},"<"),s("document"),n("span",{class:"token operator"},">"),s(`,
      ordered: `),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),s(`
   `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("p",null,[s("插入单条数据, 这里没有显式的创建 "),n("code",null,"user"),s(" 集合，直接执行插入语句会判断是否存在该集合，没有该集合会自动创建，插入的时候没有指定 "),n("code",null,"_id"),s(" 则会自动分配 "),n("code",null,"ObjectId")],-1),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user.insertOne"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"miomiora"'),s(", "),n("span",{class:"token string"},'"age"'),s(":24, "),n("span",{class:"token string"},'"gender"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"男"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  acknowledged: true,
  insertedId: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fba25e438a9958f14131a"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user.insertMany"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"akiyama"'),s(", "),n("span",{class:"token string"},'"age"'),s(":17, "),n("span",{class:"token string"},'"gender"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"女"'),n("span",{class:"token punctuation"},"}"),s(","),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"yui"'),s(", "),n("span",{class:"token string"},'"age"'),s(":16, "),n("span",{class:"token string"},'"gender"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"女"'),n("span",{class:"token punctuation"},"}"),s(","),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"hanamaru"'),s(", "),n("span",{class:"token string"},'"age"'),s(":19, "),n("span",{class:"token string"},'"gender"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"女"'),n("span",{class:"token punctuation"},"}"),s(","),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"makoto"'),s(", "),n("span",{class:"token string"},'"age"'),s(":51, "),n("span",{class:"token string"},'"gender"'),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token string"},'"男"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  acknowledged: true,
  insertedIds: `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},"'0'"),n("span",{class:"token builtin class-name"},":"),s(" ObjectId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131b"'),n("span",{class:"token punctuation"},")"),s(`,
    `),n("span",{class:"token string"},"'1'"),n("span",{class:"token builtin class-name"},":"),s(" ObjectId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131c"'),n("span",{class:"token punctuation"},")"),s(`,
    `),n("span",{class:"token string"},"'2'"),n("span",{class:"token builtin class-name"},":"),s(" ObjectId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131d"'),n("span",{class:"token punctuation"},")"),s(`,
    `),n("span",{class:"token string"},"'3'"),n("span",{class:"token builtin class-name"},":"),s(" ObjectId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fbad6e438a9958f14131e"'),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h2",{id:"查",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#查","aria-hidden":"true"},"#"),s(" 查")],-1),x=n("blockquote",null,[n("p",null,[s("查询语句 "),n("code",null,"db.COLLECTION_NAME.find(<query>, [projection]"),s("，其中 "),n("code",null,"findOne()"),s("方法只返回一个文档")])],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user."),n("span",{class:"token function-name function"},"findOne"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fba25e438a9958f14131a"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'miomiora'"),s(`,
    age: `),n("span",{class:"token number"},"24"),s(`,
    gender: `),n("span",{class:"token string"},"'男'"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("miodb"),n("span",{class:"token operator"},">"),s(" db.user.find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    _id: ObjectId`),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"641fba25e438a9958f14131a"'),n("span",{class:"token punctuation"},")"),s(`,
    name: `),n("span",{class:"token string"},"'miomiora'"),s(`,
    age: `),n("span",{class:"token number"},"24"),s(`,
    gender: `),n("span",{class:"token string"},"'男'"),s(`
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
    gender: `),n("span",{class:"token string"},"'男'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"改",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#改","aria-hidden":"true"},"#"),s(" 改")],-1),I=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("db.COLLECTION_NAME.updateOne"),n("span",{class:"token punctuation"},"("),s(`
   `),n("span",{class:"token operator"},"<"),s("filter"),n("span",{class:"token operator"},">"),s(`,
   `),n("span",{class:"token operator"},"<"),s("update"),n("span",{class:"token operator"},">"),s(`,
   `),n("span",{class:"token punctuation"},"{"),s(`
     upsert: `),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),s(`,
     writeConcern: `),n("span",{class:"token operator"},"<"),s("document"),n("span",{class:"token operator"},">"),s(`,
     collation: `),n("span",{class:"token operator"},"<"),s("document"),n("span",{class:"token operator"},">"),s(`,
     arrayFilters: `),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"<"),s("filterdocument"),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"1"),s(">")]),s(", "),n("span",{class:"token punctuation"},".."),s(". "),n("span",{class:"token punctuation"},"]"),s(`,
     hint:  `),n("span",{class:"token operator"},"<"),s("document"),n("span",{class:"token operator"},"|"),s("string"),n("span",{class:"token operator"},">"),s(`      
   `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("db.COLLECTION_NAME.updateMany"),n("span",{class:"token punctuation"},"("),s(`
   `),n("span",{class:"token operator"},"<"),s("filter"),n("span",{class:"token operator"},">"),s(`,
   `),n("span",{class:"token operator"},"<"),s("update"),n("span",{class:"token operator"},">"),s(`,
   `),n("span",{class:"token punctuation"},"{"),s(`
     upsert: `),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),s(`,
     writeConcern: `),n("span",{class:"token operator"},"<"),s("document"),n("span",{class:"token operator"},">"),s(`,
     collation: `),n("span",{class:"token operator"},"<"),s("document"),n("span",{class:"token operator"},">"),s(`,
     arrayFilters: `),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"<"),s("filterdocument"),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"1"),s(">")]),s(", "),n("span",{class:"token punctuation"},".."),s(". "),n("span",{class:"token punctuation"},"]"),s(`,
     hint:  `),n("span",{class:"token operator"},"<"),s("document"),n("span",{class:"token operator"},"|"),s("string"),n("span",{class:"token operator"},">"),s(`      
   `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=i(`<p>把所有性别为 <code>男</code> 的文档改为 <code>女</code>, <code>$set</code> 表示只替换后面的键值对</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>miodb<span class="token operator">&gt;</span> db.user.updateMany<span class="token punctuation">(</span><span class="token punctuation">{</span>gender:<span class="token string">&quot;男&quot;</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token variable">$set</span>:<span class="token punctuation">{</span>gender:<span class="token string">&quot;女&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  acknowledged: true,
  insertedId: null,
  matchedCount: <span class="token number">2</span>,
  modifiedCount: <span class="token number">2</span>,
  upsertedCount: <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 此外还有 deleteMany() 方法</span>
db.COLLECTION_NAME.deleteOne<span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>filter<span class="token operator">&gt;</span>,
   <span class="token punctuation">{</span>
      writeConcern: <span class="token operator">&lt;</span>document<span class="token operator">&gt;</span>,
      collation: <span class="token operator">&lt;</span>document<span class="token operator">&gt;</span>,
      hint: <span class="token operator">&lt;</span>document<span class="token operator">|</span>string<span class="token operator">&gt;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>miodb<span class="token operator">&gt;</span> db.user.deleteOne<span class="token punctuation">(</span><span class="token punctuation">{</span>gender:<span class="token string">&quot;女&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span> acknowledged: true, deletedCount: <span class="token number">1</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function A(L,E){const c=d("CodeTabs");return r(),u("div",null,[b,o(c,{id:"83",data:[{title:"单条"},{title:"多条"}],"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:l})=>[m]),tab1:a(({title:e,value:t,isActive:l})=>[v]),_:1}),g,o(c,{id:"94",data:[{title:"单条"},{title:"多条"}],"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:l})=>[h]),tab1:a(({title:e,value:t,isActive:l})=>[_]),_:1}),f,x,o(c,{id:"110",data:[{title:"一条"},{title:"全部"}],"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:l})=>[y]),tab1:a(({title:e,value:t,isActive:l})=>[O]),_:1}),C,o(c,{id:"121",data:[{title:"单条"},{title:"多条"}],"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:l})=>[I]),tab1:a(({title:e,value:t,isActive:l})=>[N]),_:1}),j])}const w=p(k,[["render",A],["__file","3.html.vue"]]);export{w as default};
