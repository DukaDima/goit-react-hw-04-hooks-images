(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{18:function(e,t,n){},4:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(5),o=n.n(a),i=(n(18),n(3)),s=(n(4),n(9)),u=(n(19),n(1));function l(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a),o("")):s.b.error("\u0412\u0412\u0415\u0414\u0418\u0422\u0415 \u041a\u041b\u042e\u0427\u0415\u0412\u041e\u0415 \u0421\u041b\u041e\u0412\u041e \u041f\u041e\u0418\u0421\u041a\u0410")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",value:a,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var b=n(12),j=n(7),h=n.n(j),f=n(11),m=function(e){var t=e.src;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image"})})},O=(n(22),n(13)),d=n.n(O);function p(){return Object(u.jsx)("div",{className:"Overlay",children:Object(u.jsx)(d.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}var g=function(e){var t=e.onClick;return Object(u.jsx)("div",{className:"buttonContainer",children:Object(u.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})};function x(e){var t=e.searchPhoto,n=e.onClick,r=Object(c.useState)([]),a=Object(i.a)(r,2),o=a[0],s=a[1],l=Object(c.useState)(!1),j=Object(i.a)(l,2),O=j[0],d=j[1],x=Object(c.useState)(1),v=Object(i.a)(x,2),k=v[0],w=v[1],S=Object(c.useState)(null),y=Object(i.a)(S,2),C=y[0],F=y[1],N="https://pixabay.com/api/",E="22333452-088c943be01bb3bdea991b2c2";Object(c.useEffect)((function(){Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return w(1),s([]),d(!0),F(null),e.prev=6,e.next=9,fetch("".concat(N,"?q=").concat(t,"&page=1&key=").concat(E,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){if(!e.hits.length)throw new Error("oops");s(e.hits)})).catch((function(e){F(e)})).finally((function(){return d(!1)}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),d(!1);case 14:case"end":return e.stop()}}),e,null,[[6,11]])})))()}),[t]),Object(c.useEffect)((function(){Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==k){e.next=2;break}return e.abrupt("return");case 2:return d(!0),e.prev=3,e.next=6,fetch("".concat(N,"?q=").concat(t,"&page=").concat(k,"&key=").concat(E,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return s((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e.hits))}))})).catch((function(e){F(e)})).finally((function(){d(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),F(e.t0),d(!1);case 12:case"end":return e.stop()}}),e,null,[[3,8]])})))()}),[k]);var P=function(e){n(e)};return Object(u.jsxs)("div",{children:[C&&Object(u.jsxs)("p",{children:['\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e \u0441\u043b\u043e\u0432\u0443 "',t,'"']}),O&&Object(u.jsx)(p,{}),o&&Object(u.jsx)("ul",{className:"ImageGallery",children:o.map((function(e){return Object(u.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return P(e.largeImageURL)},children:Object(u.jsx)(m,{src:e.webformatURL})},e.id)}))}),o.length>0&&Object(u.jsx)(g,{onClick:function(){w((function(e){return e+1}))}})]})}var v=document.querySelector("#modal-root");function k(e){var t=e.largePhoto,n=e.onClose,r=function(e){"Escape"===e.code&&n()};return Object(c.useEffect)((function(){return window.addEventListener("keydown",r),function(){return window.removeEventListener("keydown",r)}})),Object(a.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&n()},children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:t,alt:"largePhoto"})})}),v)}function w(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(i.a)(a,2),b=o[0],j=o[1],h=Object(c.useState)(""),f=Object(i.a)(h,2),m=f[0],O=f[1];return Object(u.jsxs)(u.Fragment,{children:[b&&Object(u.jsx)(k,{onClose:function(){j(!1)},largePhoto:m}),Object(u.jsx)(s.a,{autoClose:3e3}),Object(u.jsx)(l,{onSubmit:function(e){r(e)}}),Object(u.jsx)(x,{searchPhoto:n,onClick:function(e){O(e),j(!0)}})]})}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),S()}},[[43,1,2]]]);
//# sourceMappingURL=main.3738b0fc.chunk.js.map