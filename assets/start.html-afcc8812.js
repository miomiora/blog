import{_ as t,V as e,W as p,X as n,$ as s,Y as o,a0 as c,C as l}from"./framework-2d083801.js";const i={},u=n("h2",{id:"安装序列化工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装序列化工具","aria-hidden":"true"},"#"),s(" 安装序列化工具")],-1),r=n("code",null,"protoc",-1),k={href:"https://github.com/protocolbuffers/protobuf/releases",target:"_blank",rel:"noopener noreferrer"},d=c(`<h2 id="添加到环境变量" tabindex="-1"><a class="header-anchor" href="#添加到环境变量" aria-hidden="true">#</a> 添加到环境变量</h2><p>把<code>protoc</code>的<code>bin</code>目录添加到<code>path</code>的环境变量下即可</p><h2 id="安装grpc编译器" tabindex="-1"><a class="header-anchor" href="#安装grpc编译器" aria-hidden="true">#</a> 安装gRPC编译器</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">install</span> google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
go <span class="token function">install</span> google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
</code></pre></div><h2 id="编写protoc文件" tabindex="-1"><a class="header-anchor" href="#编写protoc文件" aria-hidden="true">#</a> 编写<code>protoc</code>文件</h2><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token comment">// 指定protoc语法版本</span>
<span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 生成的代码包 . 表示当前目录，分号隔开，service表示生成的代码包名</span>
<span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">&quot;.;service&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 定义了一个rpc的service</span>
<span class="token keyword">service</span> <span class="token class-name">SayHello</span> <span class="token punctuation">{</span>
  <span class="token comment">// 理解为Go中的func，传入HelloRequest返回HelloResponse</span>
  <span class="token keyword">rpc</span> <span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token class-name">HelloRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">HelloResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// HelloRequest定义，理解为Go中的struct，Java中的class</span>
<span class="token keyword">message</span> <span class="token class-name">HelloRequest</span> <span class="token punctuation">{</span>
  <span class="token comment">// =1 表示该变量唯一标识</span>
  <span class="token builtin">string</span> requestName <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">HelloResponse</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> responseMsg <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成代码" tabindex="-1"><a class="header-anchor" href="#生成代码" aria-hidden="true">#</a> 生成代码</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 表示使用hello.proto文件生成，并且把生成的文件放在当前的目录下</span>
protoc <span class="token parameter variable">--go_out</span><span class="token operator">=</span>. hello.proto
protoc --go-grpc_out<span class="token operator">=</span>. hello.proto

<span class="token comment"># java版本</span>
protoc <span class="token parameter variable">--plugin</span><span class="token operator">=</span>protoc-gen-grpc-java<span class="token operator">=</span>protoc-gen-grpc-java.exe --grpc-java_out<span class="token operator">=</span>java <span class="token parameter variable">--proto_path</span><span class="token operator">=</span>proto proto/mio-api.proto
protoc <span class="token parameter variable">--java_out</span><span class="token operator">=</span>java <span class="token parameter variable">--proto_path</span><span class="token operator">=</span>proto proto/mio-api.proto
</code></pre></div><h2 id="实现接口" tabindex="-1"><a class="header-anchor" href="#实现接口" aria-hidden="true">#</a> 实现接口</h2><p><code>hello-server</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	pb <span class="token string">&quot;demo01/hello-server/proto&quot;</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/metadata&quot;</span>
	<span class="token string">&quot;net&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// hello server</span>
<span class="token keyword">type</span> server <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	pb<span class="token punctuation">.</span>UnimplementedSayHelloServer
<span class="token punctuation">}</span>

<span class="token comment">// SayHello 实际上编写业务的地方，生成的hello.pb.go不要动</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s server<span class="token punctuation">)</span> <span class="token function">SayHello</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> 
    response <span class="token operator">*</span>pb<span class="token punctuation">.</span>HelloRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>pb<span class="token punctuation">.</span>HelloResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">// 获取元数据的信息</span>
	md<span class="token punctuation">,</span> ok <span class="token operator">:=</span> metadata<span class="token punctuation">.</span><span class="token function">FromIncomingContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;未传输token&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> appId <span class="token builtin">string</span>
	<span class="token keyword">var</span> appKey <span class="token builtin">string</span>

	<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> md<span class="token punctuation">[</span><span class="token string">&quot;appid&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		appId <span class="token operator">=</span> v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> md<span class="token punctuation">[</span><span class="token string">&quot;appkey&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		appKey <span class="token operator">=</span> v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 数据库查找</span>
	<span class="token keyword">if</span> appId <span class="token operator">!=</span> <span class="token string">&quot;miomiora&quot;</span> <span class="token operator">||</span> appKey <span class="token operator">!=</span> <span class="token string">&quot;123321&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;token 不正确&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>HelloResponse<span class="token punctuation">{</span>ResponseMsg<span class="token punctuation">:</span> <span class="token string">&quot;hello &quot;</span> <span class="token operator">+</span> response<span class="token punctuation">.</span>RequestName<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 开启端口</span>
	listen<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:9090&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 创建grpc服务</span>
	newServer <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	pb<span class="token punctuation">.</span><span class="token function">RegisterSayHelloServer</span><span class="token punctuation">(</span>newServer<span class="token punctuation">,</span> <span class="token operator">&amp;</span>server<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// 启动服务</span>
	err <span class="token operator">:=</span> newServer<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span>listen<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;启动grpc服务器失败！&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hello-client</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	pb <span class="token string">&quot;demo01/hello-client/proto&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/credentials/insecure&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ClientTokenAuth <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ClientTokenAuth<span class="token punctuation">)</span> <span class="token function">GetRequestMetadata</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> 
    uri <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
	<span class="token keyword">return</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
		<span class="token string">&quot;appId&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;miomiora1&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;appKey&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;123321&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ClientTokenAuth<span class="token punctuation">)</span> <span class="token function">RequireTransportSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> opts <span class="token punctuation">[</span><span class="token punctuation">]</span>grpc<span class="token punctuation">.</span>DialOption
	opts <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>opts<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithTransportCredentials</span><span class="token punctuation">(</span>insecure<span class="token punctuation">.</span><span class="token function">NewCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	opts <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>opts<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithPerRPCCredentials</span><span class="token punctuation">(</span><span class="token function">new</span><span class="token punctuation">(</span>ClientTokenAuth<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	dial<span class="token punctuation">,</span> err <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:9090&quot;</span><span class="token punctuation">,</span> opts<span class="token operator">...</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;监听错误&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> dial<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 建立链接</span>
	client <span class="token operator">:=</span> pb<span class="token punctuation">.</span><span class="token function">NewSayHelloClient</span><span class="token punctuation">(</span>dial<span class="token punctuation">)</span>

	<span class="token comment">// 执行rpc的调用</span>
	hello<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">SayHello</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>HelloRequest<span class="token punctuation">{</span>RequestName<span class="token punctuation">:</span> <span class="token string">&quot;miomiora&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;响应失败&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>hello<span class="token punctuation">.</span>ResponseMsg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><p>先运行<code>server</code>后运行<code>client</code>即可</p>`,15);function v(m,b){const a=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[r,s(),n("a",k,[s("https://github.com/protocolbuffers/protobuf/releases"),o(a)])]),d])}const h=t(i,[["render",v],["__file","start.html.vue"]]);export{h as default};
