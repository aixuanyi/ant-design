webpackJsonp([154,197],{1511:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}var s=t(1),o=(e(s),t(2));e(o);n.exports={content:["section",["p",["code","LocaleProvider"]," provides a uniform localization support for built-in text of components. "],["h2","Usage"],["p",["code","LocaleProvider"]," takes use of ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context"],", a feature of React, to accomplish global effectiveness by wrapping the app only once."],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> enUS <span class="token keyword" >from</span> <span class="token string" >\'antd/lib/locale-provider/en_US\'</span><span class="token punctuation" >;</span>\n\n<span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>\n\n<span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>LocaleProvider</span> <span class="token attr-name" >locale</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>enUS<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>LocaleProvider</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>'},["code","import enUS from 'antd/lib/locale-provider/en_US';\n\n...\n\nreturn <LocaleProvider locale={enUS}><App /></LocaleProvider>;"]],["h3","Add a language"],["p","We supply an English locale package. Other language users can create a locale package based on ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/26b1f37392a278285aec6c573b99c6feea09e218/components/locale-provider/en_US.js"},"en_US"]," and send us a pull request."],["h3","Other localization needs"],["p","This component aims for localization of the built-in text, if you want to support other documents, we recommend using ",["a",{title:null,href:"https://github.com/yahoo/react-intl"},"react-intl"],", refer to ",["a",{title:null,href:"http://github.com/ant-design/intl-example"},"Intl demo 1"]," and ",["a",{title:null,href:"http://yiminghe.me/learning-react/examples/react-intl.html?locale=en-US"},"Intl demo 2"],"."]],meta:{category:"Components",type:"Other",cols:1,title:"LocaleProvider",filename:"components/locale-provider/index.en-US.md"},toc:["ul",["li",["a",{href:"#Usage"},"Usage"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","locale"],["td","language package setting, you can find the packages in this path: ",["code","antd/lib/locale-provider/"]],["td","Object"],["td","-"]]]]]}}});