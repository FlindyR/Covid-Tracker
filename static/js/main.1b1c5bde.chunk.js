(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},55:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),s=n(28),i=n.n(s),o=(n(36),n(37),n(13)),l=n(2),j=n(11),d=n(10),b=n.n(d),u=(n(55),n(14)),h=function(e){var t=e.title,n=e.confirm,r=e.recover,a=e.death;return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)("h1",{style:{paddingLeft:"1em"},children:t}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("span",{className:"box",children:[Object(c.jsx)("h2",{style:{color:"yellow"},children:"Positif"}),Object(c.jsx)(u.a,{value:n,displayType:"text",thousandSeparator:!0,renderText:function(e){return Object(c.jsx)("div",{style:{color:"yellow"},children:e})}})]}),Object(c.jsxs)("span",{className:"box",children:[Object(c.jsx)("h2",{style:{color:"greenyellow"},children:"Sembuh"}),Object(c.jsx)(u.a,{value:r,displayType:"text",thousandSeparator:!0,renderText:function(e){return Object(c.jsx)("div",{style:{color:"greenyellow"},children:e})}})]}),Object(c.jsxs)("span",{className:"box",children:[Object(c.jsx)("h2",{style:{color:"red"},children:"Meninggal"}),Object(c.jsx)(u.a,{value:a,displayType:"text",thousandSeparator:!0,renderText:function(e){return Object(c.jsx)("div",{style:{color:"red"},children:e})}})]})]})]})},O=function(){var e=Object(r.useState)({Positif:0,Sembuh:0,Meninggal:0}),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){b.a.get("https://covid19.mathdro.id/api").then((function(e){return a({Positif:e.data.confirmed.value,Sembuh:e.data.recovered.value,Meninggal:e.data.deaths.value})}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h,{title:"Global",confirm:n.Positif,recover:n.Sembuh,death:n.Meninggal})})},x=function(e){var t=Object(r.useState)({positif:0,sembuh:0,meninggal:0}),n=Object(j.a)(t,2),a=n[0],s=n[1];return Object(r.useEffect)((function(){b.a.get("https://covid19.mathdro.id/api/countries/indonesia").then((function(e){return s({positif:e.data.confirmed.value,sembuh:e.data.recovered.value,meninggal:e.data.deaths.value})}))}),[]),console.log(a),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h,{title:"Indonesia",confirm:a.positif,recover:a.sembuh,death:a.meninggal})})},p=n(7),f=n(29),v=[{Header:"Provinsi",accessor:"provinsi"},{Header:"Positif",accessor:"kasusPosi"},{Header:"Sembuh",accessor:"kasusSemb"},{Header:"Meninggal",accessor:"kasusMeni"}],g=function(e){var t=e.provin,n=Object(f.useTable)({columns:v,data:t}),r=n.getTableProps,a=n.getTableBodyProps,s=n.headerGroups,i=n.rows,o=n.prepareRow;return Object(c.jsxs)("table",Object(p.a)(Object(p.a)({},r()),{},{children:[Object(c.jsx)("thead",{children:s.map((function(e){return Object(c.jsx)("tr",Object(p.a)(Object(p.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("th",Object(p.a)(Object(p.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(c.jsx)("tbody",Object(p.a)(Object(p.a)({style:{padding:15}},a()),{},{children:i.map((function(e){return o(e),Object(c.jsx)("tr",Object(p.a)(Object(p.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return console.log(e.data),Object(c.jsx)("td",Object(p.a)(Object(p.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))},m=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){b.a.get("https://indonesia-covid-19.mathdro.id/api/provinsi").then((function(e){return a(e.data.data)}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(g,{provin:n})})},y=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/Global",children:"Global"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/Indonesia",children:"Indonesia"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/Provinsi",children:"Per Provinsi"})})]})})}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/Global",children:Object(c.jsx)(O,{})}),Object(c.jsx)(l.a,{path:"/Indonesia",children:Object(c.jsx)(x,{})}),Object(c.jsx)(l.a,{path:"/Provinsi",children:Object(c.jsx)(m,{})})]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),P()}},[[64,1,2]]]);
//# sourceMappingURL=main.1b1c5bde.chunk.js.map