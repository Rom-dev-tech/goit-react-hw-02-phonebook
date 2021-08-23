(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=n(14),i=n(3),u=n(4),l=n(8),m=n(7),d=n(13),b=n.n(d),h=n(5),j=n.n(h),f=(n(29),function(){return j.a.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"3000",extendedTimeOut:"500",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"}}),p=(n(30),n(0)),O=function(e){var t=e.children;return Object(p.jsx)("div",{className:"container",children:t})},v=n(6),C=n(10),g=(n(11),{name:"",number:""}),x=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state=Object(C.a)({},g),e.onChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(v.a)({},a,c))},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState(Object(C.a)({},g))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[Object(p.jsxs)("label",{className:"form__label",children:[Object(p.jsx)("span",{className:"form__name",children:"Name"}),Object(p.jsx)("input",{className:"form__input",value:this.state.name,onChange:this.onChange,autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{className:"form__name",children:"Number"}),Object(p.jsx)("input",{className:"form__input",value:this.state.number,onChange:this.onChange,autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:"form__button",type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=(n(32),function(e){var t=e.contacts,n=e.onDeleteContact;return Object(p.jsx)("ul",{className:"contacts__list",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(p.jsxs)("li",{className:"contacts__item",children:[Object(p.jsxs)("p",{children:[a,": ",c]}),Object(p.jsx)("button",{type:"button",className:"delete__btn",onClick:function(){return n(t)},children:"delete"})]},t)}))})}),N=function(e){var t=e.value,n=e.onChange;return Object(p.jsxs)("label",{className:"form__label",children:[Object(p.jsx)("span",{className:"form__name",children:"Find contacts by name"}),Object(p.jsx)("input",{className:"form__input",type:"text",value:t,onChange:n})]})},y=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.checkNameValidatiton=function(t){return e.state.contacts.find((function(e){return e.name===t}))},e.addContact=function(t){var n=t.name,a=t.number;if(e.checkNameValidatiton(n))j.a.error("".concat(n," is already in contacts")),f();else{var c={id:b.a.generate(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[c].concat(Object(s.a)(t))}}))}},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts,c=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(c)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(p.jsxs)(O,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(x,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(N,{value:e,onChange:this.changeFilter}),Object(p.jsx)(_,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(33);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.514fa678.chunk.js.map