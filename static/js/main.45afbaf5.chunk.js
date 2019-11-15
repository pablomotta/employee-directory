(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/loading.2f2ad951.gif"},20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l);function s(){return r.a.createElement(n.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"/",className:"brand-logo center"},"Employee Directory"))))}var i=a(2),o=a(3),m=a(5),d=a(4),u=a(6),h=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={handleSearchChange:function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"section no-pad-bot teal lighten-5",id:"index-banner"},r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{className:"header center blue-text"},"Welcome To"),r.a.createElement("h1",{className:"header center blue-text text-darken-2"},"Employee Directory"),r.a.createElement("div",{className:"row center"},r.a.createElement("h5",{className:"header col s12 light blue-text text-darken-4"},"Type into the search box to find the user you're looking for."),r.a.createElement("h5",{className:"header col s12 light blue-text text-darken-4"},"Click on ",r.a.createElement("b",null,"name")," to reorder contacts.")),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),t}(n.Component);a(25);var f=function(e){var t=e.handleSearchChange;return r.a.createElement("div",{className:"container-fluid teal lighten-5 center"},r.a.createElement("div",{className:"row center"},r.a.createElement("form",{className:"col s12"},r.a.createElement("div",{className:"input-field col s8 offset-s2 m4 offset-m4 "},r.a.createElement("input",{className:"validate teal lighten-5 blue-text text-darken-4",type:"search","aria-label":"Search",id:"search",onChange:function(e){return t(e)}}),r.a.createElement("label",{class:"",for:"search"},"Search")))),r.a.createElement("br",null),r.a.createElement("br",null))};a(8);var E=function(e){var t=e.headings,a=e.handleSort;return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){var t=e.name,n=e.width;return r.a.createElement("th",{className:"row-title",key:t,style:{width:n},onClick:function(){a(t.toLowerCase())}},t)}))))};var g=function(e){var t=e.users,a=e.formatDate,n=e.loading;return r.a.createElement("tbody",null,!1===n?t.map((function(e){var t=e.login,n=e.name,l=e.picture,c=e.phone,s=e.email,i=e.dob;return r.a.createElement("tr",{key:t.uuid},r.a.createElement("td",{"data-th":"Image"},r.a.createElement("img",{src:l.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name"},n.first," ",n.last),r.a.createElement("td",{"data-th":"Phone"},c),r.a.createElement("td",{"data-th":"Email"},r.a.createElement("a",{href:"mailto:"+s,target:"__blank"},s)),r.a.createElement("td",{"data-th":"DOB"},a(i.date)))})):r.a.createElement(r.a.Fragment,null))},v=a(18),b=a.n(v),p=(a(26),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container center"},r.a.createElement("img",{className:"loading",src:b.a,alt:"loading"}))}}]),t}(n.Component)),N=a(19),y=a.n(N),O=function(){return y.a.get("https://randomuser.me/api/?results=200&nat=us")},j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={users:[{}],order:"descend",filteredUsers:[{}],headings:[{name:"Image",width:"15%"},{name:"Name",width:"15%"},{name:"Phone",width:"20%"},{name:"Email",width:"30%"},{name:"DOB",width:"20%"}],loading:!0,handleSort:function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},handleSearchChange:function(t){var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},formatDate:function(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("/")}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({loading:!0}),e.setState({users:t.data.results,filteredUsers:t.data.results,loading:!1})}))}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,{handleSearchChange:this.state.handleSearchChange}),this.state.loading?r.a.createElement(p,null):r.a.createElement("div",{className:"container-fluid root"},r.a.createElement("table",{className:"striped table"},r.a.createElement(E,{headings:this.state.headings,handleSort:this.state.handleSort}),r.a.createElement(g,{users:this.state.filteredUsers,loading:this.state.loading,formatDate:this.state.formatDate}))))}}]),t}(n.Component);a(44);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(h,null),r.a.createElement(j,null))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))},8:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.45afbaf5.chunk.js.map