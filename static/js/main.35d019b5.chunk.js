(this["webpackJsonpkanban-web-app"]=this["webpackJsonpkanban-web-app"]||[]).push([[0],[,,,,,,,,function(e,a,n){"use strict";(function(e){var t=n(0),r=n.n(t),c=n(4),l=n(9),d=n(15),i=(n(36),n(20)),o=n.n(i);a.a=function(a){var n=a.cards,t=a.title,i=a.addCard,s=a.panelIndex,u=a.addPanel,m=a.removePanel;return n?r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel__title"},r.a.createElement("span",null,t),r.a.createElement("img",{onClick:function(){e.confirm("\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c?")&&m(s)},src:o.a,alt:"Remove icon"})),r.a.createElement(c.c,{droppableId:"panel-".concat(s)},(function(e){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"panel__body"}),r.a.createElement("div",{className:"panel__items"},n.map((function(e,a){return r.a.createElement(l.a,{key:a,cardIndex:a,panelIndex:s},e)}))),e.placeholder)})),r.a.createElement(d.a,{isEmptyPanel:!1,addCard:i,panelIndex:s,addPanel:u})):r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel__body"},r.a.createElement(d.a,{isEmptyPanel:!0,addCard:i,panelIndex:s,addPanel:u})))}}).call(this,n(11))},function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(4);n(33);a.a=function(e){var a=e.children,n=e.cardIndex,t=e.panelIndex;return"undefined"!==typeof n?r.a.createElement(c.b,{key:n,draggableId:"card-".concat(n,"-").concat(t),index:n},(function(e){return r.a.createElement("div",Object.assign({className:"card",ref:e.innerRef},e.draggableProps,e.dragHandleProps),a)})):r.a.createElement("div",{className:"card"},a)}},,,,,,function(e,a,n){"use strict";var t=n(7),r=n(0),c=n.n(r),l=n(9),d=(n(34),function(e){var a=e.children,n=e.onClick;return c.a.createElement("button",{className:"button",onClick:n},a)}),i=(n(35),n(18)),o=n.n(i),s=n(19),u=n.n(s);a.a=function(e){var a=e.isEmptyPanel,n=e.addCard,i=e.panelIndex,s=e.addPanel,m=Object(r.useState)(!1),p=Object(t.a)(m,2),f=p[0],E=p[1],v=Object(r.useState)(""),b=Object(t.a)(v,2),_=b[0],g=b[1],O=Object(r.useRef)(null);Object(r.useEffect)((function(){O.current&&O.current.focus()}),[f]);return c.a.createElement(c.a.Fragment,null,f?c.a.createElement("div",{className:a?"add-form--empty":"add-form"},c.a.createElement("div",{className:"add-form__input"},c.a.createElement(l.a,null,c.a.createElement("textarea",{onChange:function(e){return console.log(e.target.value)||g(e.target.value)},value:_,placeholder:a?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0438":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",ref:O,rows:"5"})),c.a.createElement("div",{className:"add-form__bottom"},c.a.createElement(d,{onClick:function(){_?(a?s(_):n(i,_),g(""),E(!1)):alert("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!")}},a?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"),c.a.createElement("img",{onClick:function(){E(!1)},src:u.a,alt:"Clear icon"})))):c.a.createElement("div",{onClick:function(){E(!0)},className:"panel__bottom"},c.a.createElement("div",{className:"panel__bottom-add-btn"},c.a.createElement("img",{src:o.a,alt:"Add icon"}),c.a.createElement("span",null,a?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443...":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443..."))))}},,,function(e,a,n){e.exports=n.p+"static/media/add.b4e7124a.svg"},function(e,a,n){e.exports=n.p+"static/media/clear.e82c0deb.svg"},function(e,a,n){e.exports=n.p+"static/media/remove.c91a89fa.svg"},,function(e,a,n){e.exports=n(38)},,,,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(3),l=n.n(c),d=n(2),i=(n(32),n(8)),o=n(4),s=Object(d.b)((function(e){return{items:e}}),(function(e){return{addCard:function(a,n){e(function(e,a){return{type:"ADD_CARD",payload:{index:e,text:a}}}(a,n))},addPanel:function(a){e(function(e){return{type:"ADD_PANEL",payload:e}}(a))},removePanel:function(a){e(function(e){return{type:"REMOVE_PANEL",payload:e}}(a))},onDragEnd:function(a){e(function(e){return{type:"DRAG_DROP",payload:e}}(a))}}}))((function(e){var a=e.items,n=e.addCard,c=e.addPanel,l=e.removePanel,d=e.onDragEnd;return r.a.createElement(t.Fragment,null,r.a.createElement(o.a,{onDragEnd:function(e){return d(e)}},a.map((function(e,a){return r.a.createElement(i.a,Object.assign({},e,{key:a,addCard:n,panelIndex:a,removePanel:l}))}))),r.a.createElement(i.a,Object.assign({},a,{addCard:n,addPanel:c})))}));var u=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mainblock"},r.a.createElement(s,null))))},m=n(1),p=(n(37),n(6)),f=n(21),E=n(7),v=function(e,a){if(!e.destination)return a;var n=Object(p.a)(a),t=e.source,r=e.destination,c=t.index,l=t.droppableId,d=r.index,i=r.droppableId,o=parseInt(l.replace("panel-","")),s=parseInt(i.replace("panel-",""));return n.map((function(e,a){if(s===a){var t=n[o].cards.splice(c,1),r=Object(E.a)(t,1)[0],l=Array.from(n[s].cards);l.splice(d,0,r),e.cards=l}})),n},b=[{title:"\u041f\u043b\u0430\u043d \u043d\u0430 \u043c\u0435\u0441\u044f\u0446",cards:["\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React","\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u0430\u0448\u0438\u043d\u0443","\u0418\u0437\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b\u0439 thunk","\u041f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u0443\u0440\u0441\u044b js","\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441\u044b \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430, \u0447\u0442\u043e\u0431\u044b \u0443\u0435\u0445\u0430\u0442\u044c \u0436\u0438\u0442\u044c \u0432 \u041b\u043e\u043d\u0434\u043e\u043d"]},{title:"\u041f\u043b\u0430\u043d \u043d\u0430 \u0434\u0435\u043d\u044c",cards:["\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u043e","\u041a\u0443\u043f\u0438\u0442\u044c \u0441\u044b\u0440 \u0438 \u0445\u043b\u0435\u0431","\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0438\u0440 \u043d\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0443","\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c \u0432 \u043f\u043e\u043b\u0438\u043a\u043b\u0438\u043d\u0438\u043a\u0443"]},{title:"\u0413\u0438\u0442\u0430\u0440\u0430",cards:["\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u0430\u043a\u043a\u043e\u0440\u0434\u044b","\u041d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0437\u0430\u0436\u0438\u043c\u0430\u0442\u044c  \u0431\u0430\u0440\u044d","\u041d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0438\u0433\u0440\u0430\u0442\u044c \u0441\u043e\u043b\u043e","\u041d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0435\u0440\u043a\u0443\u0441\u0441\u0438\u044e"]}],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CARD":return e.map((function(e,n){return a.payload.index===n?Object(f.a)({},e,{cards:[].concat(Object(p.a)(e.cards),[a.payload.text])}):e}));case"ADD_PANEL":return[].concat(Object(p.a)(e),[{title:a.payload,cards:[]}]);case"DRAG_DROP":return v(a.payload,e);case"REMOVE_PANEL":return e.filter((function(e,n){return a.payload!==n}));default:return e}},g=Object(m.d)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(d.a,{store:g},r.a.createElement(u,null)),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.35d019b5.chunk.js.map