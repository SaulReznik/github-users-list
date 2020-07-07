(this["webpackJsonpgithub-users-list"]=this["webpackJsonpgithub-users-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),i=n.n(s),o=(n(13),n(1)),c=n(2),u=n(4),l=n(3),m=(n(14),function(e){return r.a.createElement("div",{className:"MessageContainer"},r.a.createElement("h1",null,e.text))}),d=function(e){var t=e.user,n=e.onUserEdit,a=e.onUserDelete,s=t.avatar,i=t.login,o=t.url,c=t.id;return r.a.createElement("div",{className:"User"},r.a.createElement("div",{className:"UserColumn"},r.a.createElement("div",{className:"ImageContainer"},r.a.createElement("img",{alt:"avatar",src:s})),r.a.createElement("div",null,r.a.createElement("h2",null,i),r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},i,"'s page"))),r.a.createElement("div",{className:"ButtonContainer"},r.a.createElement("button",{className:"UserButton SuccessButton",onClick:n},"Edit"),r.a.createElement("button",{className:"UserButton DangerButton",onClick:function(){return a(c)}},"Delete")))},h=n(5),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:Object(h.a)({},e.props.user)},e.onLoginChange=function(t){e.setState({user:Object(h.a)(Object(h.a)({},e.state.user),{},{login:t.target.value})})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement("div",{className:"User"},r.a.createElement("div",{className:"UserFormContainer"},r.a.createElement("span",{className:"Label"},"Login"),r.a.createElement("input",{onChange:function(t){return e.onLoginChange(t)},value:t.login})),r.a.createElement("div",{className:"ButtonContainer"},r.a.createElement("button",{className:"UserButton SuccessButton",onClick:function(){return e.props.onFormSubmit(t)}},"Save Changes"),r.a.createElement("button",{className:"UserButton DangerButton",onClick:this.props.onFormCancel},"Cancel")))}}]),n}(r.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isEditing:!1},e.onUserEdit=function(){e.setState({isEditing:!0})},e.onFormSubmit=function(t){e.props.handleFormSubmit(t),e.setState({isEditing:!1})},e.onFormCancel=function(){return e.setState({isEditing:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.onUserDelete;return this.state.isEditing?r.a.createElement(E,{key:t.id,user:t,onFormSubmit:this.onFormSubmit,onFormCancel:this.onFormCancel}):r.a.createElement(d,{key:t.id,user:t,onUserEdit:this.onUserEdit,onUserDelete:n})}}]),n}(r.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],isLoading:!0,isFailedToLoad:!1},e.onUserDelete=function(t){e.setState({users:e.state.users.filter((function(e){return e.id!==t}))})},e.handleFormSubmit=function(t){var n=e.state.users.map((function(e){return e.id===t.id?t:e}));e.setState({users:n})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users").then((function(e){return e.json()})).then((function(t){var n=t.map((function(e){return{id:e.id,avatar:e.avatar_url,login:e.login,url:e.html_url}}));e.setState({users:n,isLoading:!1})})).catch((function(t){e.setState({isLoading:!1,isFailedToLoad:!0})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,a=t.isLoading,s=t.isFailedToLoad;return a?r.a.createElement(m,{text:"Loading..."}):s?r.a.createElement(m,{text:"Error"}):r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"GITHUB FOLKS"),r.a.createElement("div",{className:"UsersContainer"},n.map((function(t){return r.a.createElement(f,{key:t.id,user:t,handleFormSubmit:e.handleFormSubmit,onUserDelete:e.onUserDelete})}))))}}]),n}(r.a.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.569d02fb.chunk.js.map