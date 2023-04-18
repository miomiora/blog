import{_ as n,V as a,W as s,a0 as e}from"./framework-2d083801.js";const i={},t=e(`<h2 id="并发问题" tabindex="-1"><a class="header-anchor" href="#并发问题" aria-hidden="true">#</a> 并发问题</h2><p>主要体现在 <code>runtime.map</code> 的扩容操作中，一个在 <code>扩容</code> 一个在 <code>驱逐</code></p><ul><li>解决方案： <ol><li>加锁：但会严重影响 <code>map</code> 的性能</li><li>使用 <code>sync.Map</code> 使用了两个 <code>map</code> 分离了扩容的问题，数据结构如下</li></ol></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Map <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// 锁，主要是锁 dirty map</span>
	mu Mutex
	
	<span class="token comment">// 不会触发扩容操作（查、改）走这个 read map</span>
	read atomic<span class="token punctuation">.</span>Pointer<span class="token punctuation">[</span>readOnly<span class="token punctuation">]</span>
	
	<span class="token comment">// 可能引发扩容操作（增）走 dirty map</span>
	dirty <span class="token keyword">map</span><span class="token punctuation">[</span>any<span class="token punctuation">]</span><span class="token operator">*</span>entry
	
	<span class="token comment">// 未命中 read map 的计数，如果超过了 len(dirty map) 则会把 dirty map 提升为 read map</span>
	misses <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> readOnly <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// read map 本体</span>
	m       <span class="token keyword">map</span><span class="token punctuation">[</span>any<span class="token punctuation">]</span><span class="token operator">*</span>entry
	
	<span class="token comment">// 是否有追加操作，如果为 true 则代表 dirty map 中包含 m 没有的 key</span>
	<span class="token comment">// 当 read map 未命中的时候会去 dirty map 查找新值</span>
	amended <span class="token builtin">bool</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无序" tabindex="-1"><a class="header-anchor" href="#无序" aria-hidden="true">#</a> 无序</h2><p>可以把<code>map</code>的<code>key</code>使用一个<code>slice</code>接收，再把<code>slice</code>进行排序，最后使用<code>for range</code>对<code>map</code>进行输出</p>`,6),c=[t];function d(o,l){return a(),s("div",null,c)}const r=n(i,[["render",d],["__file","map1.html.vue"]]);export{r as default};
