(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"3OM0":function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),c=t("q1tI"),l=t.n(c),n=t("17x9"),i=t.n(n),r=t("TSYQ"),m=t.n(r),d=t("33Jr"),u=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.string,i.a.number,i.a.shape({size:u,order:u,offset:u})]),p={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.l,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},N=function(e){var a=e.className,t=e.cssModule,c=e.hidden,n=e.widths,i=e.tag,r=e.check,u=e.size,f=e.for,p=Object(o.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];n.forEach((function(a,s){var o=e[a];if(delete p[a],o||""===o){var c,l=!s;if(Object(d.g)(o)){var n,i=l?"-":"-"+a+"-";c=h(l,a,o.size),b.push(Object(d.i)(m()(((n={})[c]=o.size||""===o.size,n["order"+i+o.order]=o.order||0===o.order,n["offset"+i+o.offset]=o.offset||0===o.offset,n))),t)}else c=h(l,a,o),b.push(c)}}));var N=Object(d.i)(m()(a,!!c&&"sr-only",!!r&&"form-check-label",!!u&&"col-form-label-"+u,b,!!b.length&&"col-form-label"),t);return l.a.createElement(i,Object(s.a)({htmlFor:f},p,{className:N}))};N.propTypes=p,N.defaultProps=b,a.a=N},BLzl:function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),c=t("q1tI"),l=t.n(c),n=t("17x9"),i=t.n(n),r=t("TSYQ"),m=t.n(r),d=t("33Jr"),u={tag:d.l,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var a=e.className,t=e.cssModule,c=e.color,n=e.body,i=e.inverse,r=e.outline,u=e.tag,f=e.innerRef,p=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.i)(m()(a,"card",!!i&&"text-white",!!n&&"card-body",!!c&&(r?"border":"bg")+"-"+c),t);return l.a.createElement(u,Object(s.a)({},p,{className:b,ref:f}))};f.propTypes=u,f.defaultProps={tag:"div"},a.a=f},ChEw:function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),c=t("q1tI"),l=t.n(c),n=t("17x9"),i=t.n(n),r=t("TSYQ"),m=t.n(r),d=t("33Jr"),u={tag:d.l,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.tag,n=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.i)(m()(a,"card-title"),t);return l.a.createElement(c,Object(s.a)({},n,{className:i}))};f.propTypes=u,f.defaultProps={tag:"div"},a.a=f},L3zb:function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),c=t("JX7q"),l=t("dI71"),n=t("q1tI"),i=t.n(n),r=t("17x9"),m=t.n(r),d=t("TSYQ"),u=t.n(d),f=t("33Jr"),p={children:m.a.node,type:m.a.string,size:m.a.string,bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.l,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,l=e.bsSize,n=e.valid,r=e.invalid,m=e.tag,d=e.addon,p=e.plaintext,b=e.innerRef,h=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),N=["radio","checkbox"].indexOf(c)>-1,v=new RegExp("\\D","g"),g=m||("select"===c||"textarea"===c?c:"input"),y="form-control";p?(y+="-plaintext",g=m||"input"):"file"===c?y+="-file":N&&(y=d?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(f.m)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var k=Object(f.i)(u()(a,r&&"is-invalid",n&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===g||m&&"function"===typeof m)&&(h.type=c),h.children&&!p&&"select"!==c&&"string"===typeof g&&"select"!==g&&(Object(f.m)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(g,Object(s.a)({},h,{ref:b,className:k}))},a}(i.a.Component);b.propTypes=p,b.defaultProps={type:"text"},a.a=b},Nzez:function(e,a,t){"use strict";t.r(a);var s=t("eVuF"),o=t.n(s),c=t("ln6h"),l=t.n(c),n=t("0iUn"),i=t("sLSF"),r=t("MI3g"),m=t("a7VT"),d=t("Tit0"),u=t("q1tI"),f=t.n(u),p=t("foez"),b=t("9a8N"),h=t("F66N"),N=t("arvA"),v=t("wx14"),g=t("dI71"),y=t("VCL8"),k=t("17x9"),x=t.n(k),w=t("TSYQ"),j=t.n(w),O=f.a.createContext({}),T=t("33Jr"),M={tag:T.l,activeTab:x.a.any,className:x.a.string,cssModule:x.a.object},z=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(g.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.tag,o=Object(T.j)(this.props,Object.keys(M)),c=Object(T.i)(j()("tab-content",a),t);return f.a.createElement(O.Provider,{value:{activeTabId:this.state.activeTab}},f.a.createElement(s,Object(v.a)({},o,{className:c})))},a}(u.Component);Object(y.polyfill)(z);var E=z;z.propTypes=M,z.defaultProps={tag:"div"};var P=t("zLVn"),F={tag:T.l,className:x.a.string,cssModule:x.a.object,tabId:x.a.any};function I(e){var a=e.className,t=e.cssModule,s=e.tabId,o=e.tag,c=Object(P.a)(e,["className","cssModule","tabId","tag"]),l=function(e){return Object(T.i)(j()("tab-pane",a,{active:s===e}),t)};return f.a.createElement(O.Consumer,null,(function(e){var a=e.activeTabId;return f.a.createElement(o,Object(v.a)({},c,{className:l(a)}))}))}I.propTypes=F,I.defaultProps={tag:"div"};var S=t("ok1R"),C=t("rhny"),Y=t("BLzl"),R=t("ChEw"),L=t("ezmu"),_=t("uBiN"),J=t("L3zb"),V=t("3OM0"),q=t("sOKU"),A=f.a.createElement,D=Object(u.memo)((function(e){var a=e.isOpen,t=e.toggle;return A(f.a.Fragment,null,A("h2",null,"Settings"),A(b.a,{tabs:!0},A(h.a,null,A(N.a,{className:"1"===a?"active":"",onClick:function(){t("1")}},"Profile")),A(h.a,null,A(N.a,{className:"2"===a?"active":"",onClick:function(){t("2")}},"Contact")),A(h.a,null,A(N.a,{className:"3"===a?"active":"",onClick:function(){t("3")}},"Post")),A(h.a,null,A(N.a,{className:"4"===a?"active":"",onClick:function(){t("4")}},"Widget"))),A(E,{activeTab:a},A(I,{tabId:"1"},A(S.a,null,A(C.a,{sm:"12"},A("div",{className:"p-3 align-items-center text-white-50 bg-gradient-primary box-shadow"},A("h5",null,"Profile"),A("div",{className:"bg-white p-3 text-secondary mx-auto"},A(_.a,{className:"form-horizontal",action:"",method:"GET"},A("div",{className:"form-row"},A("div",{className:"col-sm-2"},A("span",{className:"text-black"},"Public Profile"),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"visible_profile",id:"visible_profile_yes",className:"form-check-input",value:"1",checked:"checked"}),A(V.a,{className:"form-check-label",for:"visible_profile_yes"},"Yes")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"visible_profile",id:"visible_profile_no",className:"form-check-input",value:"0"}),A(V.a,{className:"form-check-label",for:"visible_profile_no"},"No"))),A("div",{className:"col-sm-2"},A("span",{className:"text-black"},"Show Email"),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"hideEmail",id:"hideEmailYes",className:"form-check-input",value:"1",checked:"checked"}),A(V.a,{className:"form-check-label",for:"hideEmailYes"},"Yes")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"hideEmail",id:"hideEmailNo",className:"form-check-input",value:"0"}),A(V.a,{className:"form-check-label",for:"hideEmailNo"},"No"))),A("div",{className:"col-sm-8"})),A("div",{className:"form-row mt-3"},A("div",{className:"col-sm-12 text-right mt-1"},A(q.a,{type:"submit",name:"submit",className:"btn btn-md btn-primary"},A("i",{className:"fas fa-check"})," Save"))))))))),A(I,{tabId:"2"},A(S.a,null,A(C.a,{sm:"12"},A("div",{className:"p-3 align-items-center text-white-50 bg-gradient-primary box-shadow"},A("h5",null,"Contact"),A("div",{className:"bg-white p-3 text-secondary mx-auto"},A(_.a,{className:"form-horizontal",action:"",method:"GET"},A("div",{className:"form-row"},A("div",{className:"col-sm-2"},A("span",{className:"text-black"},"Disable Contact Form"),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"disableForm",id:"disableFormYes",className:"form-check-input",value:"1"}),A(V.a,{className:"form-check-label",for:"disableFormYes"},"Yes")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"disableForm",id:"disableFormNo",className:"form-check-input",value:"0",checked:"checked"}),A(V.a,{className:"form-check-label",for:"disableFormNo"},"No"))),A("div",{className:"col-sm-3"},A("div",{className:"form-group"},A(V.a,{for:"contactPhone"},"Phone"),A(J.a,{type:"text",name:"contactPhone",className:"form-control",id:"contactPhone",placeholder:"Business phone"}))),A("div",{className:"col-sm-3"},A("div",{className:"form-group"},A(V.a,{for:"contactEmail"},"Email"),A(J.a,{type:"text",name:"contactEmail",className:"form-control",id:"contactEmail",placeholder:"Business email"}))),A("div",{className:"col-sm-4"},A("div",{className:"form-group"},A(V.a,{for:"contactAddress"},"Address"),A(J.a,{type:"textarea",name:"contactAddress",id:"contactAddress",className:"form-control",placeholder:"My business address"})))),A("div",{className:"form-row mt-3"},A("div",{className:"col-sm-12 text-right mt-1"},A(q.a,{type:"submit",name:"submit",className:"btn btn-md btn-primary"},A("i",{className:"fas fa-check"})," Save"))))))))),A(I,{tabId:"3"},A(S.a,null,A(C.a,{sm:"12"},A("div",{className:"p-3 align-items-center text-white-50 bg-gradient-primary box-shadow"},A("h5",null,"Post"),A("div",{className:"bg-white p-3 text-secondary mx-auto"},A(_.a,{className:"form-horizontal",action:"",method:"GET"},A("div",{className:"form-row"},A("div",{className:"col-sm-2"},A("span",{className:"text-black font-weight-bold"},"Maintenance Mode"),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"maintenanceMode",id:"maintenanceModeYes",className:"form-check-input",value:"1"}),A(V.a,{className:"form-check-label",for:"maintenanceModeYes"},"Yes")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"maintenanceMode",id:"maintenanceModeNo",className:"form-check-input",value:"0",checked:!0}),A(V.a,{className:"form-check-label",for:"maintenanceModeNo"},"No"))),A("div",{className:"col-sm-2"},A("span",{className:"text-black font-weight-bold"},"Disable Comments"),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"comments",id:"disableCommentYes",className:"form-check-input",value:"1",checked:"checked"}),A(V.a,{className:"form-check-label",for:"disableCommentYes"},"Yes")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"comments",id:"disableCommentNo",className:"form-check-input",value:"0"}),A(V.a,{className:"form-check-label",for:"disableCommentNo"},"No"))),A("div",{className:"col-sm-2"},A(V.a,{className:"font-weight-bold"},"Comments"),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"commentModerate",id:"commentModerationOne",className:"form-check-input",value:"1",checked:"checked"}),A(V.a,{className:"form-check-label",for:"commentModerationOne"},"Always Moderate")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"commentModerate",id:"commentModerationTwo",className:"form-check-input",value:"0"}),A(V.a,{className:"form-check-label",for:"commentModerationTwo"},"Wait Moderation")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"commentModerate",id:"commentModerationThree",className:"form-check-input",value:"0"}),A(V.a,{className:"form-check-label",for:"commentModerationThree"},"Delete Instantly"))),A("div",{className:"col-sm-6"},A(V.a,{className:"font-weight-bold"},"Post Format"),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"postFormat",id:"postFormatOne",className:"form-check-input",value:"1",checked:"checked"}),A(V.a,{className:"form-check-label",for:"postFormatOne"},"/your-blog-post-title/")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"postFormat",id:"postFormatTwo",className:"form-check-input",value:"0"}),A(V.a,{className:"form-check-label",for:"postFormatTwo"},"/dd-mm-yyyy/your-blog-post-title/")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"postFormat",id:"postFormatThree",className:"form-check-input",value:"0"}),A(V.a,{className:"form-check-label",for:"postFormatThree"},"/category/your-blog-post-title/")),A("div",{className:"form-check"},A(J.a,{type:"radio",name:"postFormat",id:"postFormatFour",className:"form-check-input",value:"0"}),A(V.a,{className:"form-check-label",for:"postFormatFour"},"/dd-mm-yyyy/category/your-blog-post-title/")))),A("div",{className:"form-row mt-3"},A("div",{className:"col-sm-6"},A(V.a,{for:"maintenanceModeText"},"Maintenance Message"),A(J.a,{type:"textarea",id:"maintenanceModeText",name:"maintenanceModeText",className:"form-control",placeholder:"Your status",defaultValue:"We are in maintenance mode, sorry for the convinience!"})),A("div",{className:"col-sm-6"},A(V.a,{for:"statusText"},"Status"),A(J.a,{type:"textarea",id:"statusText",name:"statusText",className:"form-control",placeholder:"Your status",defaultValue:"Hi, John Doe was here!"}))),A("div",{className:"form-row mt-3"},A("div",{className:"col-sm-12 text-right mt-1"},A(q.a,{type:"submit",name:"submit",className:"btn btn-md btn-primary"},A("i",{className:"fas fa-check"})," Save"))))))))),A(I,{tabId:"4"},A(S.a,{className:"pt-4"},A(C.a,{sm:"6"},A(Y.a,{body:!0},A(R.a,null,"Special Title Treatment"),A(L.a,null,"With supporting text below as a natural lead-in to additional content."),A(q.a,null,"Go somewhere"))),A(C.a,{sm:"6"},A(Y.a,{body:!0},A(R.a,null,"Special Title Treatment"),A(L.a,null,"With supporting text below as a natural lead-in to additional content."),A(q.a,null,"Go somewhere")))))),A("h2",null,"Profile"),A("div",{className:"d-flex p-3 align-items-center text-white-50 bg-gradient-primary box-shadow"},A("div",{className:"col-sm-3"},A("blockquote",{className:"blockquote text-left p-0 m-0"},A("a",{href:"#",title:"Update Image"},A("img",{className:"mr-3 img-thumbnail",src:"/images/profile2.jpg",alt:"Profile Image"})),A("p",{className:"m-0 font-weight-bold"},"John Doe"),A("div",{className:"blockquote-footer text-white"},"Web Administrator")),A("div",{className:"pt-2"},A("a",{className:"btn btn-info btn-sm",href:"#"},A("i",{className:"fab fa-linkedin"})," LinkedIn"),A("a",{className:"btn btn-secondary btn-sm",href:"#"},A("i",{className:"fab fa-github"})," GitHub"))),A("div",{className:"col-sm-9"},A("form",null,A("div",{className:"form-group"},A("div",{className:"form-row"},A("div",{className:"col-sm-6"},A(V.a,{for:"name"},"Name"),A(J.a,{type:"text",id:"name",name:"name",placeholder:"Fullname",className:"form-control",value:"John Doe"}),A(V.a,{for:"username"},"Username"),A(J.a,{type:"text",id:"username",name:"username",placeholder:"@username",className:"form-control",value:"johndoe"})),A("div",{className:"col-sm-6"},A(V.a,{for:"email"},"Email"),A(J.a,{type:"email",id:"email",name:"email",placeholder:"email@email.com",className:"form-control",value:"johndoe@gmail.com"}),A(V.a,{for:"phone"},"Phone"),A(J.a,{type:"text",id:"phone",name:"phone",placeholder:"Phone",className:"form-control"}))),A("div",{className:"form-group"},A(V.a,{for:"email"},"About"),A(J.a,{type:"textarea",name:"about",className:"form-control",placeholder:"About",defaultValue:"Web Administrator"})),A("div",{className:"form-group"},A(q.a,{name:"submit",className:"btn btn-primary btn-sm"},A("i",{className:"fas fa-check"})," Update Profile")))))))})),Q=f.a.createElement;var W=function(e){var a=e.dispatch,t=e.storeLayout,s=Object(u.useState)("1"),o=s[0],c=s[1];return Q(D,{dispatch:a,storeLayout:t,isOpen:o,toggle:function(e){return c(e)}})},B=t("oNbo"),G=f.a.createElement,U=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(m.a)(a).call(this,e))).state={isScrolled:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props;e.dispatch,e.storeLayout;return G(f.a.Fragment,null,G(B.a,{title:"Setting"}),G(p.a,null,G(W,null)))}}],[{key:"getInitialProps",value:function(e){var a;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.ctx,a.store,a.isServer,a.req,a.res;case 1:case"end":return t.stop()}}),null,null,null,o.a)}}]),a}(f.a.Component);a.default=U},ezmu:function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),c=t("q1tI"),l=t.n(c),n=t("17x9"),i=t.n(n),r=t("TSYQ"),m=t.n(r),d=t("33Jr"),u={tag:d.l,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.tag,n=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.i)(m()(a,"card-text"),t);return l.a.createElement(c,Object(s.a)({},n,{className:i}))};f.propTypes=u,f.defaultProps={tag:"p"},a.a=f},hcuC:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/setting",function(){return t("Nzez")}])},uBiN:function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),c=t("JX7q"),l=t("dI71"),n=t("q1tI"),i=t.n(n),r=t("17x9"),m=t.n(r),d=t("TSYQ"),u=t.n(d),f=t("33Jr"),p={children:m.a.node,inline:m.a.bool,tag:f.l,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,l=e.tag,n=e.innerRef,r=Object(o.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(f.i)(u()(a,!!c&&"form-inline"),t);return i.a.createElement(l,Object(s.a)({},r,{ref:n,className:m}))},a}(n.Component);b.propTypes=p,b.defaultProps={tag:"form"},a.a=b}},[["hcuC",1,2,0,24,25,26]]]);