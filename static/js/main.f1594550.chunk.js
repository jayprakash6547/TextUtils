(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),l=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item"})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function d(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){console.log("On change"),s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 ",onClick:function(){console.log("Uppercase was clicked"+n);var t=n.toUpperCase();s(t),e.showAlert("converted to Uppercase!","success")},children:"Convert To Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Lowercase was clicked"+n);var t=n.toLowerCase();s(t),e.showAlert("converted to Lowercase!","success")},children:"Convert To Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(""),e.showAlert("Oops! Clear Text was Clicked","success")},children:"Clear Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copy Text was Clicked!","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Remove Extra Space was Clicked!","success")},children:"Remove Extra Space"})]}),Object(o.jsxs)("div",{className:"conatiner my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter text here to preview"})]})]})}i.defaultProps={title:"Set title here",About:"AboutUs"};var b=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})};var h=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(l.a)(s,2),h=r[0],j=r[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:c,togglemode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(n("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container","my-3":!0,children:Object(o.jsx)(d,{showAlert:m,heading:"Enter Text to analyse",mode:c})})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.f1594550.chunk.js.map