import{_ as n,V as s,W as a,a0 as t}from"./framework-0aae388a.js";const o={},p=t(`<h2 id="不太行的" tabindex="-1"><a class="header-anchor" href="#不太行的" aria-hidden="true">#</a> 不太行的</h2><p>前后端分离的项目中，传统的 <code>MVC</code> 架构中的 <code>V</code> 已经被抽离出去</p><p>在我之前做的项目中的架构分层都感觉不是很行，在我之前的 <code>mio-api</code> 项目分层如下</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>│  go.mod
│  go.sum
│  main.go
│  settings.yaml
│
├─api
│  │  init.go
│  │
│  ├─interfaceApi
│  │      create.go
│  │      delete.go
│  │      init.go
│  │      invoke.go
│  │      read.go
│  │      update.go
│  │      utils.go
│  │
│  └─userApi
│          delete.go
│          init.go
│          login.go
│          read.go
│          register.go
│          update.go
│          utils.go
│
├─config
│      gin.go
│      init.go
│      mysql.go
│      redis.go
│
├─database
│      init.go
│      mysql.go
│      redis.go
│
├─middleware
│      authAdmin.go
│      authUser.go
│      cors.go
│      refreshToken.go
│
├─model
│      interfaceInfo.go
│      user.go
│      userInterface.go
│
├─routes
│      init.go
│      interfaceRouter.go
│      userRouter.go
│
└─utils
        constant.go
        isNumber.go
        regexpString.go
        response.go
        validToken.go
</code></pre></div><p>其中 <code>api</code> 存放的为 <code>Gin</code> 处理路由的主要 <code>handler</code></p><p>但其中杂糅的非常厉害，基本上属于一个函数解决所有事情。</p><p>比如 <code>api/userApi/login.go</code> 中代码如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>UserApi<span class="token punctuation">)</span> <span class="token function">UserLogin</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> userDTO model<span class="token punctuation">.</span>UserInfo
	<span class="token keyword">var</span> user model<span class="token punctuation">.</span>User
	<span class="token comment">// 获取用户登录信息, 同时校验是否为空, 以及长度是否合法</span>
	result <span class="token operator">:=</span> <span class="token function">bindContextJson</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>result <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 帐号是否合法(字母开头，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]*$</span>
	matched <span class="token operator">:=</span> utils<span class="token punctuation">.</span><span class="token function">MatchString</span><span class="token punctuation">(</span><span class="token string">\`^[a-zA-Z][a-zA-Z0-9_]*$\`</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>UserAccount<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>matched <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusForbidden<span class="token punctuation">,</span> utils<span class="token punctuation">.</span><span class="token function">ResponseError</span><span class="token punctuation">(</span>utils<span class="token punctuation">.</span>ParamsError<span class="token punctuation">,</span> <span class="token string">&quot;账号不合法！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 加密密码</span>
	password <span class="token operator">:=</span> <span class="token function">encryptString</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>UserPassword<span class="token punctuation">)</span>

	<span class="token comment">// 查询数据库中是否存在该用户，并且同时把取出来的数据存入userDTO中</span>
	affected <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Take</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>model<span class="token punctuation">.</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token string">&quot;user_account = ? and user_password = ?&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>UserAccount<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">.</span>
		<span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>userDTO<span class="token punctuation">)</span><span class="token punctuation">.</span>RowsAffected
	<span class="token keyword">if</span> affected <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusForbidden<span class="token punctuation">,</span> utils<span class="token punctuation">.</span><span class="token function">ResponseError</span><span class="token punctuation">(</span>utils<span class="token punctuation">.</span>ParamsError<span class="token punctuation">,</span> <span class="token string">&quot;账号不存在！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 记录用户的登录状态, 使用redis+token</span>
	token <span class="token operator">:=</span> uuid<span class="token punctuation">.</span><span class="token function">NewString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	tokenKey <span class="token operator">:=</span> utils<span class="token punctuation">.</span>TokenPrefix <span class="token operator">+</span> token
	<span class="token comment">// 存入redis, 并且把用户ip存入redis</span>
	err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">HSet</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> tokenKey<span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> userDTO<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;client_ip&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">ClientIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;[api UserLogin err] Conn.Do HSET : &quot;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">,</span> utils<span class="token punctuation">.</span><span class="token function">ResponseError</span><span class="token punctuation">(</span>utils<span class="token punctuation">.</span>RedisError<span class="token punctuation">,</span> <span class="token string">&quot;存储Token失败！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 设置有效期</span>
	err <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Expire</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> tokenKey<span class="token punctuation">,</span> utils<span class="token punctuation">.</span>TokenTimeout<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;[api UserLogin err] Conn.Do EXPIRE : &quot;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">,</span> utils<span class="token punctuation">.</span><span class="token function">ResponseError</span><span class="token punctuation">(</span>utils<span class="token punctuation">.</span>RedisError<span class="token punctuation">,</span> <span class="token string">&quot;设置Token有效期失败！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 封装user和token</span>
	res <span class="token operator">:=</span> <span class="token operator">&amp;</span>gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">&quot;user&quot;</span><span class="token punctuation">:</span>  userDTO<span class="token punctuation">,</span>
		<span class="token string">&quot;token&quot;</span><span class="token punctuation">:</span> token<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	c<span class="token punctuation">.</span>JS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是把参数校验、业务处理、数据库操作、返回响应等等内容全部写在了一个函数中，这非常不好</p><h2 id="cld-分层" tabindex="-1"><a class="header-anchor" href="#cld-分层" aria-hidden="true">#</a> CLD 分层</h2><p>1、Controller，控制层，服务入口，负责处理路由，参数校验，请求转发。</p><p>2、Logic/Service，业务逻辑（服务）层，一般是业务逻辑的入口，可以认为从这里开始，所有的请求参数一定是合法的。业务逻辑和业务流程也都在这一层中。</p><p>3、DAO/Repository，DAO层，这一层主要负责和数据、存储打交道。将下层存储以更简单的函数、接口形式暴露给 Logic 层来使用。负责数据的持久化工作。</p><p>在 <code>CLD</code> 分层的架构下，新的 <code>Gin</code> 项目脚手架应该为如下</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>│  config.yml
│  go.mod
│  go.sum
│  main.go
│
├─config
│      config.go
│
├─controller
├─dao
│  ├─mysql
│  │      mysql.go
│  │
│  └─redis
│         redis.go
│
├─logger
│      logger.go
│
├─logic
├─model
└─router
        router.go
</code></pre></div><p>处理响应的流程应该为:</p><ol><li>匹配路由，执行路由绑定的 <code>controller</code> 层的函数</li><li>进入 <code>controller</code> 层，该层主要做三件事: <ul><li>参数校验（<code>c.ShouldBind()</code>）</li><li>业务处理（调用 <code>logic</code> 层中业务处理的函数）</li><li>返回响应（ <code>c.JSON()</code> ）</li></ul></li><li>在完成 <code>controller</code> 层中的参数校验后，进入 <code>logic</code> 层进行业务的处理 <ul><li>在此层中的已经确定参数是一定正确的</li><li>调用 <code>dao</code> 层的数据库操作</li></ul></li><li>进入 <code>dao</code> 层，这一层只提供对外暴露的操作数据库的方法 <ul><li><code>func QueryUserById(id int) (model.User, error)</code></li></ul></li><li>并对数据库操作的结果进行判断业务处理是否成功，把结果返回给 <code>controller</code>层</li><li><code>controller</code> 层进行最后的响应</li></ol>`,17),e=[p];function c(i,u){return s(),a("div",null,e)}const r=n(o,[["render",c],["__file","webcli.html.vue"]]);export{r as default};
