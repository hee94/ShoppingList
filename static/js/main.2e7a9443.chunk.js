(this.webpackJsonpshopping_list=this.webpackJsonpshopping_list||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(10),r=n.n(c),i=(n(15),n(6)),o=n(9),l=n(2),u=n(3),p=n(5),h=n(4),d=(n(16),n(17),n(0)),j=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).inputRef=s.a.createRef(),e.onAddsubmit=function(t){t.preventDefault();var n=e.inputRef.current.value;n&&e.props.addList(n),e.inputRef.current.value=""},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.onAddsubmit,children:[Object(d.jsx)("input",{ref:this.inputRef,type:"text"}),Object(d.jsx)("button",{className:"addbtn",type:"submit",children:"Add"})]})}}]),n}(a.PureComponent),b=(n(19),n(7)),f=(n(20),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onDelete=function(t){t.preventDefault(),e.props.handleDelete(e.props.item.id)},e.onDecrease=function(t){t.preventDefault(),e.props.handleDecrease(e.props.item)},e.onIncrease=function(t){t.preventDefault(),e.props.handleIncrease(e.props.item)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.item,t=e.name,n=e.count;return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"name",children:t}),Object(d.jsx)("button",{className:"increaseBtn",onClick:this.onIncrease,children:Object(d.jsx)(b.c,{})}),Object(d.jsx)("span",{className:"count",children:n}),Object(d.jsx)("button",{className:"decreaseBtn",onClick:this.onDecrease,children:Object(d.jsx)(b.b,{})}),Object(d.jsxs)("button",{className:"deleteBtn",onClick:this.onDelete,children:[" ",Object(d.jsx)(b.a,{})]})]})}}]),n}(a.PureComponent)),O=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleDelete=function(t){e.props.handleDelete(t)},e.handleDecrease=function(t){e.props.handleDecrease(t)},e.handleIncrease=function(t){e.props.handleIncrease(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("ul",{children:this.props.lists.map((function(t){return Object(d.jsx)(f,{item:t,handleDelete:e.handleDelete,handleIncrease:e.handleIncrease,handleDecrease:e.handleDecrease},t.id)}))})}}]),n}(a.Component),v=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={shoppingList:[{id:1,name:"\uc6b0\uc720",count:1}]},e.addList=function(t){var n=[].concat(Object(o.a)(e.state.shoppingList),[{id:Date.now(),name:t,count:1}]);e.setState({shoppingList:n})},e.handleDelete=function(t){var n=Object(o.a)(e.state.shoppingList.filter((function(e){return e.id!==t})));e.setState({shoppingList:n})},e.handleDecrease=function(t){var n=e.state.shoppingList.map((function(e){if(e.id===t.id){var n=t.count-1;return Object(i.a)(Object(i.a)({},e),{},{count:n<1?1:n})}return e}));e.setState({shoppingList:n})},e.handleIncrease=function(t){var n=e.state.shoppingList.map((function(e){if(e.id===t.id){var n=t.count+1;return Object(i.a)(Object(i.a)({},e),{},{count:n<1?1:n})}return e}));e.setState({shoppingList:n})},e.onReset=function(t){t.preventDefault();e.setState({shoppingList:[]})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("main",{children:[Object(d.jsx)("header",{children:" Shopping LIst"}),Object(d.jsx)(j,{addList:this.addList}),Object(d.jsx)(O,{lists:this.state.shoppingList,handleDelete:this.handleDelete,handleDecrease:this.handleDecrease,handleIncrease:this.handleIncrease}),Object(d.jsx)("button",{className:"resetBtn",onClick:this.onReset,children:"Reset"})]})}}]),n}(a.Component);r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.2e7a9443.chunk.js.map