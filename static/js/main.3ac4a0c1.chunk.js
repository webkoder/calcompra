(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(63)},33:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(4),r=a(6),i=a(5),c=a(7),s=a(0),l=a.n(s),u=a(21),d=a.n(u),m=(a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function p(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var v=a(11),h=a(12),f=a(26),b=(a(59),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement(v.b,{exact:!0,to:"/",activeClassName:"selected"},"Home"),l.a.createElement(v.b,{exact:!0,to:"/historico",activeClassName:"selected"},"Historico"))}}]),t}(s.Component)),E=(a(60),function(e){function t(){var e;Object(n.a)(this,t),e=Object(r.a)(this,Object(i.a)(t).call(this));var a=localStorage.getItem("historico");return a=a?JSON.parse(a):[],e.state={lista:a},e}return Object(c.a)(t,e),Object(o.a)(t,[{key:"formatData",value:function(e){var t=e.split("-");return"".concat(t[2],".").concat(t[1],".").concat(t[0])}},{key:"render",value:function(){var e=this,t=this.state.lista;return l.a.createElement("section",{className:"historico"},l.a.createElement(b,null),l.a.createElement("h2",null,"Historico"),t.map(function(t){return l.a.createElement("div",{className:"hisItem",key:t.indice},l.a.createElement("div",{className:"header"},t.local," - ",t.produtos.length," produtos ",l.a.createElement("span",{className:"data"},e.formatData(t.data))),l.a.createElement("div",{className:"body"},t.produtos.map(function(e,t){return l.a.createElement("div",{className:"hisProduto",key:t},l.a.createElement("div",{className:"header"},e.nome),l.a.createElement("div",{className:"body"},e.resultado))})))}))}}]),t}(s.Component)),g=a(27),y=(a(61),a(25)),N=a.n(y),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={quantidade:0,preco:0,resultado:0,nome:""},a.props=e,a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"calculaResultado",value:function(e){e.nativeEvent.data;var t=this.state.quantidade;if("quantidade"===e.target.name){if(t=parseFloat(e.target.value),isNaN(t))return;e.target.value=t}var a=this.state.preco;if("preco"===e.target.name){if(a=parseFloat(e.target.value),isNaN(a))return;e.target.value=a}var n=0;a>0&&(n=Math.round(t/a*1e3)/1e3),this.setState({resultado:n,quantidade:t,preco:a})}},{key:"checkValue",value:function(e){console.log(e.target.value)}},{key:"setProduto",value:function(e){this.setState({nome:e})}},{key:"Salvar",value:function(){0!==this.state.resultado&&(this.props.onNovo(this.state),this.setState({quantidade:0,preco:0,resultado:0,nome:""}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"name-control"},l.a.createElement("span",null,"Nome do Produto"),l.a.createElement("input",{type:"text",name:"nome",value:this.state.nome,placeholder:"digite o nome do produto",onChange:function(t){return e.setProduto(t.target.value)}})),l.a.createElement("div",{className:"ProdutoForm"},l.a.createElement("div",{className:"form-control"},l.a.createElement("span",null,"Quantidade"),l.a.createElement(N.a,{step:.01,precision:2})),l.a.createElement("div",{className:"form-control"},l.a.createElement("span",null,"Pre\xe7o"),l.a.createElement("input",{type:"number",name:"preco",value:this.state.preco,onChange:function(t){return e.calculaResultado(t)}})),l.a.createElement("div",{className:"form-control"},l.a.createElement("span",null,"Pre\xe7o / Produto"),l.a.createElement("input",{type:"number",value:this.state.resultado,readOnly:!0}))),l.a.createElement("div",{className:"btn"},l.a.createElement("button",{type:"button",onClick:function(){return e.Salvar()}},"adicionar")))}}]),t}(s.Component),S=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(i.a)(t).call(this))).quantidade=0,e.preco=0,e.resultado=0,e.nome="Produto",e.indice=0,e}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.quantidade=this.props.quantidade,this.preco=this.props.preco,this.resultado=this.props.resultado,this.nome=this.props.nome,this.indice=this.props.indice}},{key:"render",value:function(){return l.a.createElement("section",{className:"Produto"},l.a.createElement("div",{className:"header"},this.indice,". ",this.nome),l.a.createElement("div",{className:"body"},l.a.createElement("span",{className:"info"},this.quantidade," / R$ ",this.preco),l.a.createElement("span",{className:"result"},this.resultado)))}}]),t}(s.Component),O=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(r.a)(this,Object(i.a)(t).call(this,e));var o=new Date;return o=o.toISOString().split("T")[0],a.local="",a.data=o,a.indice=0,a.state={local:"",data:o,indice:0},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"Salvar",value:function(e){this.props.onSalvar(this.state)}},{key:"Cancelar",value:function(){this.props.onCancelar()}},{key:"setLocal",value:function(e){this.setState({local:e})}},{key:"setData",value:function(e){this.setState({data:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"ListaForm"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",{className:"mb2"},"Salvar no hist\xf3rico"),l.a.createElement("div",{className:"name-control mb2"},l.a.createElement("span",null,"Local"),l.a.createElement("input",{type:"text",name:"local",value:this.state.local,placeholder:"digite o local das compras",onChange:function(t){return e.setLocal(t.target.value)}})),l.a.createElement("div",{className:"name-control mb2"},l.a.createElement("span",null,"data"),l.a.createElement("input",{type:"date",name:"data",value:this.state.data,onChange:function(t){return e.setData(t.target.value)}})),l.a.createElement("div",{className:"btn"},l.a.createElement("button",{type:"button",onClick:function(){return e.Salvar()}},"Salvar & Limpar"),l.a.createElement("button",{type:"button",className:"red",onClick:function(){return e.Cancelar()}},"Cancelar"))))}}]),t}(s.Component),j=(a(62),function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(i.a)(t).call(this))).srcHistorico=null,e.state={produtos:[],isSalvarForm:!1,isHistorico:!1},e}return Object(c.a)(t,e),Object(o.a)(t,[{key:"AdicionarNovo",value:function(e){var t=new S;t.quantidade=e.quantidade,t.preco=e.preco,t.resultado=e.resultado,t.nome=e.nome,t.indice=e.indice|this.state.produtos.length+1;var a=this.state.produtos;a.push(t),a=Object(g.a)(a).sort(function(e,t){return e.resultado-t.resultado}),this.setState({produtos:a})}},{key:"Limpar",value:function(){this.setState({produtos:[],isSalvarForm:!1})}},{key:"SalvarCancelarDiag",value:function(){this.setState({isSalvarForm:!1})}},{key:"SalvarAbrirDiag",value:function(){this.setState({isSalvarForm:!0})}},{key:"Salvar",value:function(e){if(0!==this.state.produtos.length){var t=[];this.state.produtos.map(function(e){return t.push({quantidade:e.quantidade,preco:e.preco,resultado:e.resultado,nome:e.nome,indice:e.indice})});var a=localStorage.getItem("historico");(a=a?JSON.parse(a):[]).push({local:e.local,data:e.data,indice:a.length+1,produtos:t}),localStorage.setItem("historico",JSON.stringify(a)),this.Limpar()}}},{key:"HistoricoAbrirDiag",value:function(){this.srcHistorico&&(this.srcHistorico.className="HistoricoScreen"),this.setState({isHistorico:!0})}},{key:"HistoricoFecharDiag",value:function(){this.srcHistorico.className="HistoricoScreenClosed"}},{key:"render",value:function(){var e=this,t=this.state.produtos;return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement("div",{className:"MainScreen"},l.a.createElement(k,{onNovo:function(t){return e.AdicionarNovo(t)}}),l.a.createElement("h2",null,"valores calculados",l.a.createElement("button",{className:"optbtn green",onClick:function(){return e.SalvarAbrirDiag()}},"salvar"),l.a.createElement("button",{className:"optbtn red",onClick:function(){return e.Limpar()}},"limpar")),l.a.createElement("div",{className:"lista"},t.map(function(e,t){return l.a.createElement(S,{indice:t+1,nome:e.nome,quantidade:e.quantidade,preco:e.preco,resultado:e.resultado,key:e.indice})}))),this.state.isSalvarForm&&l.a.createElement(O,{onSalvar:function(t){return e.Salvar(t)},onCancelar:function(){return e.SalvarCancelarDiag()}}))}}]),t}(s.Component)),w=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(v.a,null,l.a.createElement(f.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper"},l.a.createElement(h.a,{path:"/historico",component:E}),l.a.createElement(h.a,{path:"/",exact:!0,component:j})))}}]),t}(l.a.Component);d.a.render(l.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/calcompra",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/calcompra","/service-worker.js");m?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):p(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):p(t,e)})}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.3ac4a0c1.chunk.js.map