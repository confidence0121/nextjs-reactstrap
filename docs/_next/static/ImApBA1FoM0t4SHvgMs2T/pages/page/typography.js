(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/kxI":function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),i=t("q1tI"),l=t.n(i),r=t("17x9"),c=t.n(r),o=t("TSYQ"),u=t.n(o),m=t("33Jr"),d={tag:m.l,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,i=e.innerRef,r=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),o=Object(m.i)(u()(a,"card-body"),t);return l.a.createElement(r,Object(s.a)({},c,{className:o,ref:i}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},"3OM0":function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),i=t("q1tI"),l=t.n(i),r=t("17x9"),c=t.n(r),o=t("TSYQ"),u=t.n(o),m=t("33Jr"),d=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),p={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.l,className:c.a.string,cssModule:c.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:c.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,i=e.hidden,r=e.widths,c=e.tag,o=e.check,d=e.size,b=e.for,p=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),f=[];r.forEach((function(a,s){var n=e[a];if(delete p[a],n||""===n){var i,l=!s;if(Object(m.g)(n)){var r,c=l?"-":"-"+a+"-";i=g(l,a,n.size),f.push(Object(m.i)(u()(((r={})[i]=n.size||""===n.size,r["order"+c+n.order]=n.order||0===n.order,r["offset"+c+n.offset]=n.offset||0===n.offset,r))),t)}else i=g(l,a,n),f.push(i)}}));var h=Object(m.i)(u()(a,!!i&&"sr-only",!!o&&"form-check-label",!!d&&"col-form-label-"+d,f,!!f.length&&"col-form-label"),t);return l.a.createElement(c,Object(s.a)({htmlFor:b},p,{className:h}))};h.propTypes=p,h.defaultProps=f,a.a=h},BLzl:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),i=t("q1tI"),l=t.n(i),r=t("17x9"),c=t.n(r),o=t("TSYQ"),u=t.n(o),m=t("33Jr"),d={tag:m.l,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,i=e.color,r=e.body,c=e.inverse,o=e.outline,d=e.tag,b=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(m.i)(u()(a,"card",!!c&&"text-white",!!r&&"card-body",!!i&&(o?"border":"bg")+"-"+i),t);return l.a.createElement(d,Object(s.a)({},p,{className:f,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},L3zb:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),i=t("JX7q"),l=t("dI71"),r=t("q1tI"),c=t.n(r),o=t("17x9"),u=t.n(o),m=t("TSYQ"),d=t.n(m),b=t("33Jr"),p={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:b.l,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,r=e.valid,o=e.invalid,u=e.tag,m=e.addon,p=e.plaintext,f=e.innerRef,g=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(i)>-1,N=new RegExp("\\D","g"),x=u||("select"===i||"textarea"===i?i:"input"),y="form-control";p?(y+="-plaintext",x=u||"input"):"file"===i?y+="-file":h&&(y=m?null:"form-check-input"),g.size&&N.test(g.size)&&(Object(b.m)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var v=Object(b.i)(d()(a,o&&"is-invalid",r&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===x||u&&"function"===typeof u)&&(g.type=i),g.children&&!p&&"select"!==i&&"string"===typeof x&&"select"!==x&&(Object(b.m)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(x,Object(s.a)({},g,{ref:f,className:v}))},a}(c.a.Component);f.propTypes=p,f.defaultProps={type:"text"},a.a=f},cBf0:function(e,a,t){"use strict";t.r(a);var s=t("eVuF"),n=t.n(s),i=t("ln6h"),l=t.n(i),r=t("0iUn"),c=t("sLSF"),o=t("MI3g"),u=t("a7VT"),m=t("Tit0"),d=t("q1tI"),b=t.n(d),p=t("foez"),f=t("1Yj4"),g=t("ok1R"),h=t("rhny"),N=t("sOKU"),x=t("taD6"),y=t("BLzl"),v=t("/kxI"),w=t("uBiN"),k=t("jrRI"),j=t("3OM0"),O=t("L3zb"),q=b.a.createElement,z=Object(d.memo)((function(e){return q(b.a.Fragment,null,q(f.a,{fluid:!0},q(g.a,null,q(h.a,{md:"12",id:"typography",className:"typography"},q("h1",null,"Typography"),q("h2",null,"Paragraph"),q("p",{className:"lead"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium veritatis ratione expedita consequatur magnam explicabo, omnis facilis blanditiis maxime eius nesciunt! Autem tempore aut cupiditate. Quibusdam, natus cum reiciendis id nulla ad vitae."),q("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium veritatis ratione expedita consequatur magnam explicabo, omnis facilis blanditiis maxime eius nesciunt! Autem tempore aut cupiditate. Quibusdam, natus cum reiciendis id nulla ad vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid sint, quae dolor dolore perspiciatis ab nesciunt impedit, obcaecati eveniet earum omnis facilis accusamus similique voluptatum tenetur placeat. Distinctio architecto assumenda, sint quidem necessitatibus quo nam nemo dicta unde omnis itaque repellat voluptatum doloremque soluta veritatis ratione sequi! Optio incidunt delectus est doloribus similique quidem soluta excepturi doloremque, repellendus impedit tempora cum consequuntur quasi cupiditate deserunt aspernatur reiciendis sunt sit fugit repudiandae enim! Harum consequatur magni ea officia cum provident atque neque, non corrupti nesciunt minus optio rem enim doloribus ipsam ipsa quae corporis vel placeat iste laboriosam quasi?"),q("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium veritatis ratione expedita consequatur magnam explicabo, omnis facilis blanditiis maxime eius nesciunt! Autem tempore aut cupiditate. Quibusdam, natus cum reiciendis id nulla ad vitae."),q("h1",null,"h1 Lorem ipsum dolor sit amet, consectetur adipisicing elit."),q("h2",null,"h2 Lorem ipsum dolor sit amet consectetur adipisicing elit."),q("h3",null,"h3 Lorem ipsum dolor sit amet consectetur adipisicing elit."),q("h4",null,"h4 Lorem ipsum dolor sit amet consectetur adipisicing elit."),q("br",null),q("br",null),q("h2",{className:"d-block clearfix"},"Buttons"),q("div",{className:"d-block hero-start"},q(N.a,{className:"btn btn-warning btn-sm"},"Submit"),q(N.a,{className:"btn btn-warning btn-md"},"Submit"),q(N.a,{className:"btn btn-warning btn-lg"},"Submit"),q(N.a,{className:"btn btn-warning btn-sm btn-rounded"},"Submit"),q(N.a,{className:"btn btn-warning btn-md btn-rounded"},"Submit"),q(N.a,{className:"btn btn-warning btn-lg btn-rounded"},"Submit"),q("p",{className:"my-4"},q("span",{className:"text-muted mr-2"},"Hidden Icons"),q(N.a,{className:"btn btn-danger btn-sm btn-square btn-hidden"},q("i",{className:"fas fa-eye"})," ",q("span",{className:"links"},"Read More")),q(N.a,{className:"btn btn-danger btn-sm btn-square btn-hidden"},q("i",{className:"fas fa-trash"})," ",q("span",{className:"links"},"Delete")),q(N.a,{className:"btn btn-danger btn-sm btn-square btn-hidden"},q("i",{className:"fas fa-chevron-left"})," ",q("span",{className:"links"},"Submit")),q(N.a,{className:"btn btn-danger btn-sm btn-square btn-hidden"},q("i",{className:"fab fa-facebook"})," ",q("span",{className:"links"},"Post")),q(N.a,{className:"btn btn-danger btn-sm btn-square btn-hidden"},q("i",{className:"fab fa-twitter"})," ",q("span",{className:"links"},"Twit")),q(N.a,{className:"btn btn-danger btn-sm btn-square btn-hidden"},q("i",{className:"fab fa-github"})," ",q("span",{className:"links"},"Commit"))),q("br",null),q("br",null),q("div",{className:"container"},q(x.a,null,q(y.a,{className:"m-2 box-shadow"},q(v.a,{className:"col-12"},q(w.a,null,q("fieldset",null,q("legend",{className:"text-info font-weight-bold uppercase"},"Login"),q(k.a,null,q(j.a,{for:"exampleInputEmail1"},"Email address"),q(O.a,{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),q("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),q(k.a,null,q(j.a,{for:"exampleInputPassword1"},"Password"),q(O.a,{type:"password",className:"form-control",id:"exampleInputPassword1"})),q(k.a,{check:!0},q(O.a,{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),q(j.a,{check:!0,for:"exampleCheck1"},"Check me out"))),q(N.a,{className:"btn btn-info btn-sm btn-block"},"Submit")))),q(y.a,{className:"m-2 box-shadow"},q(v.a,{className:"col-12"},q(w.a,null,q("fieldset",null,q("legend",{className:"text-success font-weight-bold uppercase"},"Login"),q(k.a,null,q(j.a,{for:"exampleInputEmail2"},"Email address"),q(O.a,{type:"email",className:"form-control",id:"exampleInputEmail2","aria-describedby":"emailHelp"}),q("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),q(k.a,null,q(j.a,{for:"exampleInputPassword2"},"Password"),q(O.a,{type:"password",className:"form-control",id:"exampleInputPassword2"})),q(k.a,{check:!0},q(O.a,{type:"checkbox",className:"form-check-input",id:"exampleCheck2"}),q(j.a,{check:!0,for:"exampleCheck2"},"Check me out"))),q(N.a,{className:"btn btn-success btn-md btn-block"},"Submit")))),q(y.a,{className:"m-2 box-shadow"},q(v.a,{className:"col-12"},q(w.a,null,q("fieldset",null,q("legend",{className:"text-primary font-weight-bold uppercase"},"Login"),q(k.a,null,q(j.a,{for:"exampleInputEmail3"},"Email address"),q(O.a,{type:"email",className:"form-control",id:"exampleInputEmail3","aria-describedby":"emailHelp"}),q("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),q(k.a,null,q(j.a,{for:"exampleInputPassword3"},"Password"),q(O.a,{type:"password",className:"form-control",id:"exampleInputPassword3"})),q(k.a,{check:!0},q(O.a,{type:"checkbox",className:"form-check-input",id:"exampleCheck3"}),q(j.a,{check:!0,for:"exampleCheck3"},"Check me out"))),q(N.a,{className:"btn btn-primary btn-lg btn-block"},"Submit")))))),q("br",null),q("br",null),q(N.a,{className:"btn btn-warning btn-sm"},"Submit ",q("span",{className:"badge badge-danger badge-pill"},"14")),q(N.a,{className:"btn btn-warning btn-md"},"Submit ",q("span",{className:"badge badge-danger badge-pill"},"14")),q(N.a,{className:"btn btn-warning btn-lg"},"Submit ",q("span",{className:"badge badge-danger badge-pill"},"14")))))))})),I=b.a.createElement;var P=function(e){var a=e.dispatch,t=e.storeLayout;return I(z,{dispatch:a,storeLayout:t})},R=t("oNbo"),S=b.a.createElement,T=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={isScrolled:!1},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props;e.dispatch,e.storeLayout;return S(b.a.Fragment,null,S(R.a,{title:"Typography"}),S(p.a,null,S(P,null)))}}],[{key:"getInitialProps",value:function(e){var a;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.ctx,a.store,a.isServer,a.req,a.res;case 1:case"end":return t.stop()}}),null,null,null,n.a)}}]),a}(b.a.Component);a.default=T},jrRI:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),i=t("q1tI"),l=t.n(i),r=t("17x9"),c=t.n(r),o=t("TSYQ"),u=t.n(o),m=t("33Jr"),d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:m.l,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,i=e.row,r=e.disabled,c=e.check,o=e.inline,d=e.tag,b=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(m.i)(u()(a,!!i&&"row",c?"form-check":"form-group",!(!c||!o)&&"form-check-inline",!(!c||!r)&&"disabled"),t);return"fieldset"===d&&(b.disabled=r),l.a.createElement(d,Object(s.a)({},b,{className:p}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},taD6:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),i=t("q1tI"),l=t.n(i),r=t("17x9"),c=t.n(r),o=t("TSYQ"),u=t.n(o),m=t("33Jr"),d={tag:m.l,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,i=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(m.i)(u()(a,"card-deck"),t);return l.a.createElement(i,Object(s.a)({},r,{className:c}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},uBiN:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),i=t("JX7q"),l=t("dI71"),r=t("q1tI"),c=t.n(r),o=t("17x9"),u=t.n(o),m=t("TSYQ"),d=t.n(m),b=t("33Jr"),p={children:u.a.node,inline:u.a.bool,tag:b.l,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.submit=t.submit.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.inline,l=e.tag,r=e.innerRef,o=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(b.i)(d()(a,!!i&&"form-inline"),t);return c.a.createElement(l,Object(s.a)({},o,{ref:r,className:u}))},a}(r.Component);f.propTypes=p,f.defaultProps={tag:"form"},a.a=f},xbnc:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/typography",function(){return t("cBf0")}])}},[["xbnc",1,2,0,3,4,5]]]);