import{_ as n,V as s,W as a,a0 as e}from"./framework-2d083801.js";const i={},t=e(`<h2 id="nil" tabindex="-1"><a class="header-anchor" href="#nil" aria-hidden="true">#</a> nil</h2><p><code>nil</code> 数据结构：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// builtin.go</span>
<span class="token comment">// nil is a predeclared identifier representing the zero value for a</span>
<span class="token comment">// pointer, channel, func, interface, map, or slice type.</span>
<span class="token keyword">var</span> <span class="token boolean">nil</span> Type <span class="token comment">// Type must be a pointer, channel, func, interface, map, or slice type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>nil</code> 为空，但不为空指针</li><li><code>nil</code> 为 pointer、channel、func、interface、map、slice 这 6 种类型的的零值</li><li>每种类型的 <code>nil</code> 不同，无法比较</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token keyword">var</span> i <span class="token operator">*</span><span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i <span class="token operator">==</span> m<span class="token punctuation">)</span> <span class="token comment">// 无效运算: i == m(类型 *int 和 map[string]string 不匹配)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空结构体" tabindex="-1"><a class="header-anchor" href="#空结构体" aria-hidden="true">#</a> 空结构体</h2><ul><li>空结构体的值不为 <code>nil</code></li><li>空结构体的指针也不为 <code>nil</code>, 但同为 <code>zerobase</code></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// malloc.go</span>
<span class="token comment">// base address for all 0-byte allocations</span>
<span class="token keyword">var</span> zerobase <span class="token builtin">uintptr</span> 

<span class="token operator">...</span>

<span class="token comment">// 所有 size == 0 的内存都会分配 zerobase 的地址</span>
<span class="token keyword">func</span> <span class="token function">mallocgc</span><span class="token punctuation">(</span>size <span class="token builtin">uintptr</span><span class="token punctuation">,</span> typ <span class="token operator">*</span>_type<span class="token punctuation">,</span> needzero <span class="token builtin">bool</span><span class="token punctuation">)</span> unsafe<span class="token punctuation">.</span>Pointer <span class="token punctuation">{</span>
	<span class="token keyword">if</span> gcphase <span class="token operator">==</span> _GCmarktermination <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;mallocgc called with gcphase == _GCmarktermination&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> size <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>zerobase<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> K <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> k1 K
<span class="token comment">// false</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>k1 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空接口" tabindex="-1"><a class="header-anchor" href="#空接口" aria-hidden="true">#</a> 空接口</h2><ul><li>结构底层为 <code>iface</code> 空接口为 <code>eface</code></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> iface <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	tab  <span class="token operator">*</span>itab
	data unsafe<span class="token punctuation">.</span>Pointer
<span class="token punctuation">}</span>

<span class="token keyword">type</span> eface <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	_type <span class="token operator">*</span>_type
	data  unsafe<span class="token punctuation">.</span>Pointer
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>空接口不一定是 <code>nil</code> 接口, 当 <code>i1 = &amp;i2</code> 时, 空接口的 <code>eface</code> 下的 <code>_type</code> 就有值了</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> i1 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> i2 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i1 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i2 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

i1 <span class="token operator">=</span> <span class="token operator">&amp;</span>i2
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i1 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>只有当 <code>eface</code> 中的 <code>_type</code> 和 <code>data</code> 都为 <code>nil</code> 才为 <code>nil</code> 接口</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><code>nil</code> 是多个类型（6种）的零值或空值</li><li>空结构体的指针和值都不为 <code>nil</code></li><li>空接口零值是 <code>nil</code> 一旦有了类型信息就不是 <code>nil</code></li></ul>`,16),o=[t];function l(c,p){return s(),a("div",null,o)}const r=n(i,[["render",l],["__file","nil.html.vue"]]);export{r as default};
