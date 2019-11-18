(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{872:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return M});var t=s(34),e=s.n(t),p=s(35),o=s.n(p),c=s(36),l=s.n(c),u=s(37),i=s.n(u),r=s(46),k=s.n(r),m=s(38),d=s.n(m),h=s(39),g=s.n(h),f=s(771),v=s.n(f),y=s(773),E=s.n(y),b=s(0),C=s.n(b),w=s(199),I=s(139),_=function(){return C.a.createElement(function(){var n=C.a.useState(!0),a=E()(n,2),s=a[0],t=a[1],e=C.a.useState("ime"),p=E()(e,2),o=p[0],c=p[1],l=function(n){c(n.target.value)};return C.a.createElement("div",{className:"ime-composition-demo"},C.a.createElement(I.N,{enable:s},C.a.createElement(I.R,{value:o,onChange:l}),C.a.createElement(I.R,{value:o,onChange:l,type:"textarea"})),C.a.createElement(I.i,{type:"primary",onClick:function(){return t(!s)}},s?"Disable":"Enable"," IMEComposition"))},null)};function N(n){return C.a.createElement(n.tag,v()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function x(n){return C.a.createElement(N,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return C.a.createElement(N,{tag:"style",html:n.style})}var j=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=l()(this,(n=i()(a)).call.apply(n,[this].concat(p))),g()(k()(s),"state",{showCode:!1}),g()(k()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return d()(a,n),o()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return C.a.createElement("div",{className:"zandoc-react-demo"},C.a.createElement("div",{className:"zandoc-react-demo__preview"},e),C.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},C.a.createElement("div",{className:"zandoc-react-demo__title"},C.a.createElement("p",null,s||"")),C.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&C.a.createElement("pre",{className:"zandoc-react-demo__code"},C.a.createElement(N,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(b.Component),M=function(n){function a(){return e()(this,a),l()(this,i()(a).apply(this,arguments))}return d()(a,n),o()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return C.a.createElement("div",{className:"zandoc-react-container",key:null},C.a.createElement(z,{style:".ime-composition-demo {\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n\t-ms-flex-direction: column;\n\t    flex-direction: column;\n}\n\n.ime-composition-demo > * {\n\tmargin-bottom: 10px;\n}"}),C.a.createElement(x,{html:'<h2 class="anchor-heading"><a href="#imecomposition">¶</a><a href="javascript:void(0)" id="imecomposition" class="anchor-point"></a>IMEComposition</h2>\n<p><code>IMEComposition</code>\'s <code>Input</code> child component will emit <code>onChange</code> event after IME complete input string instead of every time you press keyboard.</p>\n<p>PS：Only controlled component will be handled.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),C.a.createElement(j,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> IMEComposition<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Simple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>enable<span class="token punctuation">,</span> setEnable<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'ime\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">onInputChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setText</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ime-composition-demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IMEComposition</span> <span class="token attr-name">enable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>enable<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onInputChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onInputChange<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IMEComposition</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setEnable</span><span class="token punctuation">(</span><span class="token operator">!</span>enable<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>enable <span class="token operator">?</span> <span class="token string">\'Disable\'</span> <span class="token punctuation">:</span> <span class="token string">\'Enable\'</span><span class="token punctuation">}</span> IMEComposition\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(_)),C.a.createElement(x,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>enable</td>\n<td>is enable ime composition</td>\n<td>bool</td>\n<td>No</td>\n<td>false</td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(b.Component)}}]);