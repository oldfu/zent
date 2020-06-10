(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{655:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return T}));var t=s(613),p=s.n(t),e=s(607),o=s.n(e),c=s(608),l=s.n(c),u=s(609),i=s.n(u),k=s(610),r=s.n(k),d=s(290),m=s.n(d),f=s(611),g=s.n(f),h=s(612),y=s.n(h),v=s(0),w=s.n(v),E=s(113),b=s(83),x=function(){return w.a.createElement(b.eb,{style:{margin:"10px 0"}},w.a.createElement(b.bb,{span:8},w.a.createElement(b.j,{type:"primary",size:"large"},"首页")),w.a.createElement(b.bb,{span:8,offset:8},w.a.createElement(b.a,{offsetTop:135},w.a.createElement(b.j,{type:"primary",size:"large"},"固钉"))))},A=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),y()(m()(s),"state",{text:"固钉"}),y()(m()(s),"onPin",(function(){s.setState({text:"已经固定啦"})})),y()(m()(s),"onUnpin",(function(){s.setState({text:"取消固定啦"})})),s}return g()(a,n),l()(a,[{key:"render",value:function(){return w.a.createElement(b.a,{offsetTop:200,onPin:this.onPin,onUnpin:this.onUnpin},w.a.createElement(b.b,{type:"warning"},this.state.text))}}]),a}(w.a.Component);return w.a.createElement(n,null)},z=function(){return w.a.createElement("div",{className:"affix-demo-bottom"},w.a.createElement(b.a,{offsetBottom:60},w.a.createElement(b.b,{type:"warning"},w.a.createElement("p",null,"设置距离底部值"))))},N=function(){return w.a.createElement("div",{className:"affix-demo-both"},w.a.createElement(b.a,{offsetBottom:150,offsetTop:50},w.a.createElement(b.b,{type:"warning"},w.a.createElement("p",null,"同时设置 offsetTop 和 offsetBottom"))))};function j(n){return w.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function C(n){return w.a.createElement(j,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function _(n){return w.a.createElement(j,{tag:"style",html:n.style})}var B=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),y()(m()(s),"state",{showCode:!1}),y()(m()(s),"toggle",(function(){s.setState({showCode:!s.state.showCode})})),s}return g()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(j,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),T=function(n){function a(){return o()(this,a),i()(this,r()(a).apply(this,arguments))}return g()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(E.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(_,{style:""}),w.a.createElement(C,{html:'<h2 class="anchor-heading"><a href="#affix-gu-ding">¶</a><a href="javascript:void(0)" id="affix-gu-ding" class="anchor-point"></a>Affix 固钉</h2>\n<p>将元素固定在特定区域，一般用于导航栏固钉。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),w.a.createElement(B,{title:"通过 offsetTop 设置到顶部距离",id:"Demooffsettop",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> LayoutRow <span class="token keyword">as</span> Row<span class="token punctuation">,</span> LayoutCol <span class="token keyword">as</span> Col<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Row style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'10px 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        首页\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">135</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          固钉\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(x)),w.a.createElement(B,{title:"设置回调函数",id:"Democallback",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'固钉\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onPin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'已经固定啦\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onUnpin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'取消固定啦\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span> <span class="token attr-name">onPin</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPin<span class="token punctuation">}</span></span> <span class="token attr-name">onUnpin</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onUnpin<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(A)),w.a.createElement(B,{title:"设置距离底部值：`offsetBottom`",id:"Demooffsetbottom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>affix-demo-bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>设置距离底部值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(B,{title:"同时设置 offsetTop 和 offsetBottom",id:"Demoboth",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>affix-demo-both<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span></span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>同时设置 offsetTop 和 offsetBottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(N)),w.a.createElement(C,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>offsetTop</td>\n<td>距离窗口顶部指定偏移量后触发</td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>offsetBottom</td>\n<td>距离窗口底部指定偏移量后触发</td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onPin</td>\n<td>触发固定后执行的回调函数</td>\n<td><code>() => void</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onUnpin</td>\n<td>固定消失后执行的回调函数</td>\n<td><code>() => void</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>zIndex</td>\n<td>固定时的 \n<code>z-index</code></td>\n<td><code>number</code></td>\n<td>10</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>placeholderClassName</td>\n<td>占位容器的类名</td>\n<td><code>string</code></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><strong>注意</strong>：<code>offsetTop</code> 和 <code>offsetBottom</code> 至少传一个，也可以同时设置，同时设置的时候注意窗口高度很小的时候可能会出现两个参数行为冲突的情况，请谨慎使用。</p>'}))}}]),a}(v.Component)}}]);