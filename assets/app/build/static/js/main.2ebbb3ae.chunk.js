(window["webpackJsonpwp-graphiql"]=window["webpackJsonpwp-graphiql"]||[]).push([[0],{104:function(e,t,n){e.exports=n(230)},229:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var o=n(9),r=n.n(o),i=n(52),a=n.n(i),l=n(100),c=n(54),s=n(34),u=n.n(s),p=n(103),f=n.n(p),g=n(102),d=n(238),w=n(35);n(228),n(229);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function h(e){var t=window.wpGraphiQLSettings&&window.wpGraphiQLSettings.nonce?window.wpGraphiQLSettings.nonce:null,n=window.wpGraphiQLSettings&&window.wpGraphiQLSettings.graphqlEndpoint?window.wpGraphiQLSettings.graphqlEndpoint:window.location.origin;return fetch(n,{method:"post",credentials:"same-origin",headers:{"Content-Type":"application/json","X-WP-Nonce":t},body:JSON.stringify(e)}).then(function(e){return e.json()})}var j=function(){var e=Object(o.useState)(null),t=Object(c.a)(e,2),n=t[0],i=t[1],a=Object(o.useState)("# shift-option/alt-click on a query below to jump to it in the explorer\n# option/alt-click on a field in the explorer to select all subfields\nquery GET_PAGES {\n  pages {\n  \tedges {\n  \t\tnode {\n  \t\t\ttitle\n  \t\t}\n  \t}\n  }\n}\n"),s=Object(c.a)(a,2),p=s[0],j=s[1],O=Object(o.useState)(!0),y=Object(c.a)(O,2),b=y[0],v=y[1];Object(o.useEffect)(function(){h({query:Object(g.a)()}).then(function(e){var t=u.a.getQueryEditor();t.setOption("extraKeys",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t.options.extraKeys||{},{"Shift-Alt-LeftClick":E})),i(Object(d.a)(e.data))})});var E=function(e,t){var n=Object(w.a)(p||"");if(!n)return console.error("Couldn't parse query document"),null;var o=e.getTokenAt(t),r={line:t.line,ch:o.start},i={line:t.line,ch:o.end},a={start:e.indexFromPos(r),end:e.indexFromPos(i)},l=n.definitions.find(function(e){if(!e.loc)return console.log("Missing location information for definition"),!1;var t=e.loc,n=t.start,o=t.end;return n<=a.start&&o>=a.end});if(!l)return console.error("Unable to find definition corresponding to mouse position"),null;var c="OperationDefinition"===l.kind?l.operation:"FragmentDefinition"===l.kind?"fragment":"unknown",s="OperationDefinition"===l.kind&&l.name?l.name.value:"FragmentDefinition"===l.kind&&l.name?l.name.value:"unknown",u=".graphiql-explorer-root #".concat(c,"-").concat(s),f=document.querySelector(u);f&&f.scrollIntoView()},S=function(e){return j(e)},k=function(){v(!b)};return r.a.createElement("div",{className:"wrapper"},r.a.createElement(f.a,{schema:n,query:p,onEdit:S,onRunOperation:function(e){return u.a.handleRunQuery(e)},explorerIsOpen:b,onToggleExplorer:k}),r.a.createElement(u.a,{ref:function(e){return GraphiQL=e},fetcher:h,schema:n,query:p,onEditQuery:S},r.a.createElement(u.a.Toolbar,null,r.a.createElement(u.a.Button,{onClick:function(){return u.a.handlePrettifyQuery()},label:"Prettify",title:"Prettify Query (Shift-Ctrl-P)"}),r.a.createElement(u.a.Button,{onClick:function(){return u.a.handleToggleHistory()},label:"History",title:"Show History"}),r.a.createElement(u.a.Button,{onClick:k,label:"Explorer",title:"Toggle Explorer"}))))};a.a.render(r.a.createElement(j,null),document.getElementById("wp-graphiql"))},93:function(e,t,n){var o={".":39,"./":39,"./GraphQLLanguageService":66,"./GraphQLLanguageService.js":66,"./GraphQLLanguageService.js.flow":188,"./autocompleteUtils":47,"./autocompleteUtils.js":47,"./autocompleteUtils.js.flow":189,"./getAutocompleteSuggestions":42,"./getAutocompleteSuggestions.js":42,"./getAutocompleteSuggestions.js.flow":190,"./getDefinition":48,"./getDefinition.js":48,"./getDefinition.js.flow":191,"./getDiagnostics":50,"./getDiagnostics.js":50,"./getDiagnostics.js.flow":192,"./getHoverInformation":51,"./getHoverInformation.js":51,"./getHoverInformation.js.flow":193,"./getOutline":65,"./getOutline.js":65,"./getOutline.js.flow":194,"./index":39,"./index.js":39,"./index.js.flow":195};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=93}},[[104,1,2]]]);
//# sourceMappingURL=main.2ebbb3ae.chunk.js.map