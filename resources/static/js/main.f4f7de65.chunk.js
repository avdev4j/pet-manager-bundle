(window["webpackJsonppet-details-widget"]=window["webpackJsonppet-details-widget"]||[]).push([[0],{62:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","notAuthenticated":"User is not authenticated."},"entities":{"pet":{"id":"ID","name":"entities.pet.name","birth":"entities.pet.birth"}}}')},63:function(e){e.exports=JSON.parse('{"common":{"name":"","value":"","widgetName":"","couldNotFetchData":"","notAuthenticated":"","loading":""},"entities":{"pet":{"id":"","name":"","birth":""}}}')},64:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Non \xe8 stato possibile caricare i dati dell\'entit\xe0","widgetName":"Dettagli a proposito di \'{{widgetNamePlaceholder}}\'","name":"Nome","value":"Valore","loading":"Caricamento in corso...","notAuthenticated":"L\'utente non \xe8 autenticato."},"entities":{"pet":{"id":"ID","name":"entit\xe0.pet.name","birth":"entit\xe0.pet.birth"}}}')},73:function(e,t,n){e.exports=n(93)},74:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);n(74);var a=n(27),r=n(28),o=n(35),i=n(20),c=n(29),l=n(66),s=n(24),u=n(0),p=n.n(u),d=n(12),f=n.n(d),m=p.a.createContext(null),b=n(16),h=n.n(b),O=n(31),y=n(37),v=n(23),k=n(125),w=n(65),g=n(3),j=n.n(g),E=(j.a.shape({initialized:j.a.bool,authenticated:j.a.bool}),n(67));j.a.oneOfType([j.a.func,j.a.shape({current:j.a.elementType}),j.a.shape(null)]);var P=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},N=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},D=n(127),S=(j.a.shape({id:j.a.number,name:j.a.string,birth:j.a.string}),n(119)),C=n(123),x=n(122),z=n(120),R=n(121),A=function(e){var t=e.t,n=e.i18n.language,a=e.pet;return p.a.createElement(S.a,null,p.a.createElement(z.a,null,p.a.createElement(R.a,null,p.a.createElement(x.a,null,t("common.name")),p.a.createElement(x.a,null,t("common.value")))),p.a.createElement(C.a,null,p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.pet.id"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.id))),p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.pet.name"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.name))),p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.pet.birth"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.birth&&new Date(a.birth).toLocaleString(n))))))};A.defaultProps={pet:[]};var F=Object(v.b)()(A),L=function(e){var t=e.t,n=e.pet;return p.a.createElement(D.a,null,p.a.createElement("h3",null,t("common.widgetName",{widgetNamePlaceholder:"Pet"})),p.a.createElement(F,{pet:n}))};L.defaultProps={pet:{}};var T=Object(v.b)()(L),U=n(4),M=n(128),I=n(130),J=n(124),K=n(5),H=n(129),V=n(59),W=n.n(V),B=n(60),G=n.n(B),q=n(58),Q=n.n(q),X=n(61),Y=n.n(X),Z={success:Q.a,error:W.a,info:G.a},$={success:3e3,error:null,info:5e3},_=function e(t){var n=t.className,a=t.classes,r=t.status,o=t.message,i=t.onClose,c=!!o,l=r||e.INFO,s=Z[l],u=$[l],d=p.a.createElement("span",{className:a.message},p.a.createElement(s,{className:Object(U.a)(a.icon,a.iconStatus)}),o);return p.a.createElement(M.a,{open:c,onClose:i,autoHideDuration:u},p.a.createElement(I.a,{className:Object(U.a)(a[l],n),message:d,action:[p.a.createElement(H.a,{key:"close","aria-label":"close",color:"inherit",onClick:i},p.a.createElement(Y.a,{className:a.icon}))]}))};_.SUCCESS="success",_.ERROR="error",_.defaultProps={message:null,className:"",status:_.INFO="info",onClose:function(){}};var ee=Object(K.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:J.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(_),te=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/pets","/").concat(n),r=ae({},{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})},{method:"GET"}),e.abrupt("return",te(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),oe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={loading:!0,pet:{},notificationStatus:null,notificationMessage:null},n.theme=Object(w.a)(),n.closeNotification=n.closeNotification.bind(Object(y.a)(n)),n.fetchData=n.fetchData.bind(Object(y.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.keycloak,n=t.initialized&&t.authenticated,a=e.keycloak.authenticated!==n;n&&a&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,a,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,re(r,a);case 6:o=e.sent,this.setState((function(){return{pet:o,loading:!1}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("common.couldNotFetchData"),notificationStatus:ee.ERROR,loading:!1}}))}},{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"render",value:function(){var e=this.state,t=e.pet,n=e.notificationStatus,a=e.notificationMessage,r=e.loading,o=this.props,i=o.t,c=o.keycloak;return p.a.createElement(k.a,{theme:this.theme},p.a.createElement(N,{keycloak:c},i("common.notAuthenticated")),p.a.createElement(P,{keycloak:c},r&&i("common.loading"),!r&&p.a.createElement(T,{pet:t})),p.a.createElement(ee,{status:n,message:a,onClose:this.closeNotification}))}}]),t}(p.a.Component);oe.defaultProps={onError:function(){},serviceUrl:""};var ie=function(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];return(r=Object(o.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(l)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,o=Object(E.a)(n,["forwardedRef"]);return p.a.createElement(e,Object.assign({},o,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return p.a.createElement(m.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return p.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}(Object(v.b)()(oe)),ce=n(49),le={en:n(62),fr:n(63),it:n(64)};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ue=Object.keys(le).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(s.a)({},t,Object(s.a)({},"translation",le[t])))}),{}),pe=(ce.a.t,function(e){!function(e,t){ce.a.use(v.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:ue,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")});function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(){return window&&window.entando&&window.entando.keycloak&&fe({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},be="service-url",he="locale",Oe=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).mountPoint=null,n.unsubscribeFromKeycloakEvent=null,n.keycloak=me(),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"connectedCallback",value:function(){var e,t,n=this;this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.keycloak=fe({},me(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(e="keycloak",t=function(){n.keycloak=fe({},me(),{initialized:!0}),n.render()},window.addEventListener(e,t),function(){window.removeEventListener(e,t)}),this.render()}},{key:"render",value:function(){var e=this,t=this.getAttribute(be)||"",n=this.getAttribute(he);pe(n);var a=this.getAttribute("id"),r=p.a.createElement(ie,{id:a,onError:function(t){var n=new CustomEvent("".concat("pet.details.","error"),{details:{error:t}});e.dispatchEvent(n)},serviceUrl:t});f.a.render(p.a.createElement(m.Provider,{value:this.keycloak},r),this.mountPoint)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}}]),t}(Object(l.a)(HTMLElement));customElements.define("pet-details",Oe)}},[[73,1,2]]]);
//# sourceMappingURL=main.f4f7de65.chunk.js.map