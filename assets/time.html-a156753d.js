import{_ as e,V as i,W as n,Z as d}from"./framework-4b3cc28c.js";const s={},t=d(`<p>起因是我需要往一个请求头中塞一个时间，并且还要用时间来比较当前的时间，起初</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>time.Now().String()
// 2023-03-07 16:06:22.6212138 +0800 CST m=+0.002775201

time.Now().GoString()
// time.Date(2023, time.March, 7, 16, 7, 30, 188558700, time.Local)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是这样的字符串形式那我另一头接收到必须得解析一遍</p><p>但实际上直接用<code>time.Now().String()</code>或者<code>time.Now().GoString()</code>的字符串丢给<code>time.Parse()</code>都会报错，也就是说自带的<code>String</code>类方法都不能直接解析回去😥</p><p>那我想用用自带的<code>After()</code>和<code>Before()</code>的比较时间的方法就不行了😪</p><p>那为了方便就用时间戳来了<code>time.Now().Unix()</code>只需要另一头拿到时间戳的字符串，把他转成int64做比较即可</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// 拿到当前的时间戳
start := time.Now().Unix()
start2 := strconv.FormatInt(start, 10)

time.Sleep(time.Second * 5)

// 拿到睡眠5秒后的时间戳
end := time.Now().Unix()
end2 := strconv.FormatInt(end, 10)

// 把时间戳字符串转换为int64
atoi, _ := strconv.ParseInt(start2, 10, 64)
atoi2, _ := strconv.ParseInt(end2, 10, 64)

// 结果均为 5
fmt.Println(&quot;1:  &quot;, end-start)
fmt.Println(&quot;2:  &quot;, atoi2-atoi)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[t];function l(r,c){return i(),n("div",null,a)}const v=e(s,[["render",l],["__file","time.html.vue"]]);export{v as default};
