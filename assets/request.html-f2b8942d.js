import{_ as t,V as s,W as r,X as n,Y as e,Z as l,$ as d,C as o}from"./framework-7d796c00.js";const u={},a={href:"https://pkg.go.dev/",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"net/http",-1),c=d(`<p>根据官方文档，最简单的发请求就是</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>resp, err := http.Get(&quot;http://example.com/&quot;)

resp, err := http.Post(&quot;http://example.com/upload&quot;, &quot;image/jpeg&quot;, &amp;buf)

resp, err := http.PostForm(&quot;http://example.com/form&quot;,
    url.Values{&quot;key&quot;: {&quot;Value&quot;}, &quot;id&quot;: {&quot;123&quot;}})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我要设置请求头等其他的请求内容的话，就不能用上面的方法了，大概的步骤是通过<code>http.Newquest()</code>新建一个请求实例，并在这个请求实例中设置更丰富地请求内容。然后想要真正地发起这个请求的话，必须得用<code>&amp;http.Client{}</code>创建一个http客户端实例，然后通过这个实例去调用上面新建的请求</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// 创建一个http客户端
client := &amp;http.Client{}

// 创建对应的请求
newRequest, err := http.NewRequest(&quot;GET&quot;, &quot;http://localhost:8080/api/user&quot;, nil)
if err != nil {
	fmt.Println(&quot;[request err] NewRequest &quot;, err.Error())
	return
}

// 填入请求头相关的参数
newRequest.Header.Set(&quot;timestamp&quot;, strconv.FormatInt(time.Now().Unix(), 10))

// 客户端执行请求
response, err := client.Do(newRequest)
if err != nil {
	fmt.Println(&quot;[do request err] client.Do &quot;, err.Error())
	return
}
// 要记得关闭
defer response.Body.Close()

// 获取响应的Body内容
context, err := io.ReadAll(response.Body)
if err != nil {
	fmt.Println(&quot;[io.ReadAll(response.Body) err]&quot;, err.Error())
	return
}

// 测试一下response里面的内容
fmt.Println(&quot;Status: &quot;, response.Status)
fmt.Println(&quot;Body: &quot;, string(context))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(p,b){const i=o("ExternalLinkIcon");return s(),r("div",null,[n("p",null,[e("用Go发请求，去 "),n("a",a,[e("https://pkg.go.dev/"),l(i)]),e(" 找了一圈，还是打算用"),v,e("来发请求")]),c])}const h=t(u,[["render",m],["__file","request.html.vue"]]);export{h as default};
