(this["webpackJsonpone-note"]=this["webpackJsonpone-note"]||[]).push([[0],{37:function(e,t,n){e.exports=n(48)},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(6),r=n.n(l),o=n(9),u=n(12),i=n(29),m=n.n(i),s=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,c.a.createElement(m.a,null),"One Note"))},f=n(31),E=n.n(f),d=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){return e.onDelete(e.id)}},c.a.createElement(E.a,null)))},h=function(){var e=(new Date).getFullYear();return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",null,"Aata-allah Rchidi - ",e))},v=n(21),p=n(32),b=n(24),w=n(33),O=n.n(w),g=n(65),j=n(64),k=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(b.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)(!1),u=Object(b.a)(o,2),i=u[0],m=u[1],s=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(p.a)({},e,Object(v.a)({},n,a))}))};return c.a.createElement("div",null,c.a.createElement("form",{className:"create-note"},c.a.createElement("input",{name:"title",onClick:function(){m(!0)},onChange:s,value:l.title,placeholder:"Title"}),i&&c.a.createElement("textarea",{name:"content",onChange:s,value:l.content,placeholder:"Take a note...",rows:"3"}),c.a.createElement(g.a,{in:i},c.a.createElement(j.a,{onClick:function(t){t.preventDefault(),e.onAdd(l),r({title:"",content:""})}},c.a.createElement(O.a,null)))))},C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],r=function(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))};return c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement(k,{onAdd:function(e){l((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return c.a.createElement(d,{key:t,id:t,title:e.title,content:e.content,onDelete:r})})),c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(47);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.9ab6ab05.chunk.js.map