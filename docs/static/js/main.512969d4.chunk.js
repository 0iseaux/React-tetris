(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],{22:function(e,n,t){e.exports=t(45)},27:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(16),c=t.n(o),i=(t(27),t(5)),u=t(1),l=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},s=function(e,n,t){for(var r=t.x,a=t.y,o=0;o<e.tetromino.length;o+=1)for(var c=0;c<e.tetromino[o].length;c+=1)if(0!==e.tetromino[o][c]&&(!n[o+e.pos.y+a]||!n[o+e.pos.y+a][c+e.pos.x+r]||"clear"!==n[o+e.pos.y+a][c+e.pos.x+r][1]))return!0},f=t(2),d=t(3),p=t(7),b=t.n(p);function m(){var e=Object(f.a)(["\n    display: flex;\n    align-items: flex-start;\n    padding: 40px;\n    margin: 0 auto;\n    max-width: 900px;\n\n    aside {\n        width: 100%;\n        max-width: 200px;\n        display: block;\n        padding: 0 20px;\n    }\n"]);return m=function(){return e},e}function g(){var e=Object(f.a)(["\n    width: 100vw;\n    height: 100vh;\n    background: url(",") #000;\n    background-size: cover;\n    overflow: hidden;\n"]);return g=function(){return e},e}var v=d.a.div(g(),b.a),x=d.a.div(m());var h=t(19),O={0:{shape:[[0]],color:"0,0,0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 93, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},y=function(){var e="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return O[e]},E=function(e,n){var t=Object(r.useState)(l()),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)(0),s=Object(u.a)(i,2),f=s[0],d=s[1];return Object(r.useEffect)((function(){d(0);var t=function(t){var r=t.map((function(e){return e.map((function(e){return"clear"===e[1]?[0,"clear"]:e}))}));return e.tetromino.forEach((function(n,t){n.forEach((function(n,a){0!==n&&(r[t+e.pos.y][a+e.pos.x]=[n,"".concat(e.collided?"merged":"clear")])}))})),e.collided?(n(),function(e){return e.reduce((function(n,t){return-1===t.findIndex((function(e){return 0===e[0]}))?(d((function(e){return e+1})),n.unshift(new Array(e[0].length).fill([0,"clear"])),n):(n.push(t),n)}),[])}(r)):r};c((function(e){return t(e)}))}),[e,n]),[o,c,f]};function j(){var e=Object(f.a)(["\n    display: grid;\n    grid-template-rows: repeat(\n        ",",\n        calc(25vw / ",")); \n    grid-template-columns: repeat(",", 1fr) ; grid-gap: 1px; border: 2px solid #333; width:\n            100%; max-width: 25vw; background: #111;\n    );\n"]);return j=function(){return e},e}var w=d.a.div(j(),(function(e){return e.height}),(function(e){return e.width}),(function(e){return e.width}));function k(){var e=Object(f.a)(["\n    width: auto;\n    background: rgba(",", 0.8);\n    border: ",";\n    border-bottom-color: rgba(",", 0.1);\n    border-right-color: rgba(",", 1);\n    border-top-color: rgba(",", 1);\n    border-left-color: rgba(",", 0.3);\n"]);return k=function(){return e},e}var S=d.a.div(k(),(function(e){return e.color}),(function(e){return 0===e.type?"0px solid":"4px solid"}),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.color})),T=a.a.memo((function(e){var n=e.type;return a.a.createElement(S,{type:n,color:O[n].color})})),P=function(e){var n=e.stage;return a.a.createElement(w,{width:n[0].length,height:n.length},n.map((function(e){return e.map((function(e,n){return a.a.createElement(T,{key:n,type:e[0]})}))})))};function A(){var e=Object(f.a)(["\n    box-sizing: border-box;\n    displayL flex;\n    align-items: center;\n    margin: 0 0 20px 0;\n    padding: 20px;\n    border: 4px solid #333;\n    min-height: 30px;\n    width: 100%;\n    border-radius: 20px;\n    color: ","\n    background: #000\n    font-family: Pixel, Arial, Helvetica, sans-serif;\n    font-size: 0.8rem;\n"]);return A=function(){return e},e}var z=d.a.div(A(),(function(e){return e.gameOver?"red":"#999"})),C=function(e){var n=e.gameOver,t=e.text;return a.a.createElement(z,{gameOver:n},t)};function I(){var e=Object(f.a)(["\n    box-sizing: border-box;\n    margin: 0 0 20px 0;\n    padding: 20px;\n    min-height: 30px;\n    width: 100%;\n    border-radius: 20px;\n    border: none;\n    color: white;\n    background: #333;\n    font-family: Pixel, Arial, Helvetica, sans-serif;\n    fontsize: 1rem;\n    outline: none;\n    cursor: pointer;\n    :hover {\n        background: #a30a00;\n    }\n"]);return I=function(){return e},e}var J=d.a.button(I()),N=function(e){var n=e.callback,t=e.text;return a.a.createElement(J,{onClick:n},t)},L=t(4),R=t.n(L);function D(){var e=Object(f.a)(["\n    box-sizing: border-box;\n    height: 50px;\n    max-width: 35%;\n    width: 100%;\n    border-radius: 20px;\n    border-width: 0.5rem;\n    border-color: white;\n    color: yellowgreen;\n    padding: 5px 5px 5px 5px;\n    font-family: Pixel, Arial, Helvetica, sans-serif;\n    font-size: 18px;\n    outline: none;\n    cursor: pointer;\n    background: black;\n    :hover {\n        background: #333;\n    }\n"]);return D=function(){return e},e}var H=d.a.button(D()),M=function(e){var n=e.text;return a.a.createElement(H,null,n)},Z=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(),l=Object(u.a)(c,2),s=l[0],f=l[1],d=function(e){return e<10&&(e="0"+(e=e.toString())),e},p=function(e){return s>10?"Oops! You need to beat ".concat(s-1," more records to get on the Chart..."):"Congratulations! Your ranking is ".concat(s,"!")};return Object(i.useRoutes)($),Object(r.useEffect)((function(){!function(){var e,n;R.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.awrap(fetch("https://".concat("tetris-api.fyr.fyi","/topscores")));case 3:return e=t.sent,t.next=6,R.a.awrap(e.json());case 6:n=t.sent,o(n.topScores),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),null,null,[[0,10]])}(),function(){var e,n;R.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.awrap(fetch("https://".concat("tetris-api.fyr.fyi","/rankscores")));case 3:return e=t.sent,t.next=6,R.a.awrap(e.json());case 6:n=(n=t.sent).rank[0]["COUNT(*)"]+1,f(n),p(n),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:case"end":return t.stop()}}),null,null,[[0,12]])}()}),[]),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("h2",{id:"title"},"Top Scores"),a.a.createElement("table",{id:"topScoreBoard"},a.a.createElement("tbody",null,a.a.createElement("tr",null,["Rank","Player's Name","Score","Date / Time"].map((function(e,n){return a.a.createElement("th",{key:n},e)}))),t.map((function(e,n){var t=e.player_name,r=e.score,o=e.date_time;return a.a.createElement("tr",{key:n},a.a.createElement("td",{className:"rank"},n+1),a.a.createElement("td",null,t),a.a.createElement("td",null,r),a.a.createElement("td",null,function(e){var n=new Date(e),t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate(),o=n.getHours(),c=n.getMinutes(),i=n.getSeconds();return t+"-"+(r=d(r))+"-"+a+" / "+(o=d(o))+"-"+(c=d(c))+"-"+(i=d(i))}(o)))}))))),a.a.createElement("div",null,a.a.createElement("h3",{id:"ranking"},p())),a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement(i.A,{href:"/"},a.a.createElement(M,{text:"Take me back!"}))))};function G(){var e=Object(f.a)(["\n    box-sizing: border-box;\n    margin: 0 0 20px 0;\n    padding: 20px;\n    width: 100%;\n    border-radius: 20px;\n    text-align:center;\n    border: white;\n    color: white;\n    background: #333;\n    font-family: Pixel, Arial, Helvetica, sans-serif;\n    fontsize: 1rem;\n    outline: none;\n    cursor: pointer;\n    );\n"]);return G=function(){return e},e}var Y=d.a.div(G()),B=function(){var e=Object(r.useContext)(U),n=Object(r.useState)("Player"),t=Object(u.a)(n,2),o=t[0],c=t[1],l=Object(r.useState)(!1),s=Object(u.a)(l,2),f=s[0],d=s[1],p=Object(r.useRef)(!0),b=function(e){return e<10&&(e="0"+(e=e.toString())),e},m=function(){var e=Date.now(),n=new Date(e),t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate(),o=n.getHours(),c=n.getMinutes(),i=n.getSeconds();o=b(o),c=b(c),i=b(i);var u="".concat(t,"-").concat(r,"-").concat(a," ").concat(o,":").concat(c,":").concat(i);return console.log(u),u};return Object(r.useEffect)((function(){p.current?p.current=!1:f&&Object(i.navigate)("/scoreboard")}),[f]),a.a.createElement(Y,null,a.a.createElement("form",{onSubmit:function(n){return n.preventDefault(),function(){var n,t;R.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n={playersName:o,playersScore:e,dateTime:m()},r.next=4,R.a.awrap(fetch("https://".concat("tetris-api.fyr.fyi","/scores"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}));case 4:return t=r.sent,r.next=7,R.a.awrap(t.json());case 7:return r.abrupt("return",r.sent);case 10:r.prev=10,r.t0=r.catch(0),console.error(r.t0);case 13:case"end":return r.stop()}}),null,null,[[0,10]])}(),d(!0),function(){return Z()}}},a.a.createElement("label",null,"Enter Player's Name:"),a.a.createElement("input",{name:"Players Name",value:o,type:"text",onChange:function(e){c(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"OK!"})))},K=function(){var e=Object(r.useState)(null),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(!1),i=Object(u.a)(c,2),f=i[0],d=i[1],p=Object(r.useState)("Start Game"),b=Object(u.a)(p,2),m=b[0],g=b[1],j=Object(r.useState)(null),w=Object(u.a)(j,2),k=w[0],S=w[1],T=function(){var e=Object(r.useState)({pos:{x:0,y:0},tetromino:O[0].shape,collided:!1}),n=Object(u.a)(e,2),t=n[0],a=n[1],o=function(e,n){var t=e.map((function(n,t){return e.map((function(e){return e[t]}))}));return n>0?t.map((function(e){return e.reverse()})):t.reverse()},c=Object(r.useCallback)((function(){a({pos:{x:4,y:0},tetromino:y().shape,collided:!1})}),[]);return[t,function(e){var n=e.x,t=e.y,r=e.collided;a((function(e){return Object(h.a)({},e,{pos:{x:e.pos.x+=n,y:e.pos.y+=t},collided:r})}))},c,function(e,n){var r=JSON.parse(JSON.stringify(t));r.tetromino=o(r.tetromino,n);for(var c=r.pos.x,i=1;s(r,e,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return o(r.tetromin,-n),void(r.pos.x=c);a(r)}]}(),A=Object(u.a)(T,4),z=A[0],I=A[1],J=A[2],L=A[3],R=E(z,J),D=Object(u.a)(R,3),H=D[0],M=D[1],Z=function(e){var n=Object(r.useState)(0),t=Object(u.a)(n,2),a=t[0],o=t[1],c=Object(r.useState)(0),i=Object(u.a)(c,2),l=i[0],s=i[1],f=Object(r.useState)(0),d=Object(u.a)(f,2),p=d[0],b=d[1],m=[40,100,300,1200],g=Object(r.useCallback)((function(){e>0&&(o((function(n){return n+m[e-1]*(p+1)})),s((function(n){return n+e})))}),[p,m,e]);return Object(r.useEffect)((function(){g()}),[g,e,a]),[a,o,l,s,p,b]}(D[2]),G=Object(u.a)(Z,6),Y=G[0],K=G[1],F=G[2],_=G[3],V=G[4],q=G[5],Q=function(e){s(z,H,{x:e,y:0})||I({x:e,y:0})},W=function(){M(l()),o(1e3),S(1e3),J(),d(!1),K(0),_(0),q(0),console.log(t),console.log(k)},X=function(){console.log(t),console.log(k),S(t),o(null)},$=function(){o(k),console.log(k)},ee=function(){F>=5*(V+1)&&(q(V+1),o(1e3-10*(V+1))),s(z,H,{x:0,y:1})?(z.pos.y<1&&(console.log("GAME OVER!!!!!"),d(!0),o(null),g("Try Again?")),I({x:0,y:0,collided:!0})):I({x:0,y:1,collided:!1})},ne=function(e){var n=e.keyCode;f||(37===n?Q(-1):39===n?Q(1):40===n?(o(null),ee()):38===n&&L(H,1))};return function(e,n){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=e}),[e]),Object(r.useEffect)((function(){if(null!==n){var e=setInterval((function(){t.current()}),n);return function(){clearInterval(e)}}}),[n])}((function(){ee()}),t),a.a.createElement("div",null,a.a.createElement(v,{role:"button",tabIndex:"0",onKeyDown:function(e){return ne(e)},onKeyUp:function(e){var n=e.keyCode;f||40===n&&(o(1e3-10*(V+1)),console.log(t))}},a.a.createElement(x,null,a.a.createElement(U.Provider,{value:Y},a.a.createElement(P,{stage:H}),a.a.createElement("aside",null,f?a.a.createElement("div",null,a.a.createElement(C,{gameOver:f,text:"Game Over :)"}),a.a.createElement(B,null)):a.a.createElement("div",null),a.a.createElement("div",null,a.a.createElement(C,{text:"Score: ".concat(Y)}),a.a.createElement(C,{text:"Rows: ".concat(F)}),a.a.createElement(C,{text:"Level: ".concat(V)}),a.a.createElement(N,{callback:function(){switch(m){case"Start Game":g("Pause"),W();break;case"Pause":g("Resume"),X();break;case"Resume":g("Pause"),$();break;case"Try Again?":g("Pause"),W()}},text:m})))))))},F=K,U=a.a.createContext(K.score);function _(){var e=Object(f.a)(["\n    text-align: center;\n    width: 80vw;\n    padding: 10px 10px 10px 10px;\n    margin-left: auto;\n    margin-right: auto;\n\n    th {\n        padding: 15px;\n        text-align: center;\n        color: yellow;\n    }\n\n    tr {\n        padding: 15px;\n        text-align: center;\n        line-height: 1.5;\n    }\n\n    .rank {\n        color: orange;\n    }\n\n    #ranking {\n        color: red;\n        line-height: 2;\n    }\n"]);return _=function(){return e},e}function V(){var e=Object(f.a)(["\n\n    border: 2px solid #333; \n    border-color: white;\n    width:100%; \n    max-width: 90vw; \n    background: #111;\n    box-sizing: border-box;\n    padding: 10px;\n    margin: 30px;\n    border-radius: 20px;\n    color: white;\n    background: #333;\n    font-family: Pixel, Arial, Helvetica, sans-serif;\n    font-size: 1rem;\n    );\n"]);return V=function(){return e},e}function q(){var e=Object(f.a)(["\n    width: 100vw;\n    height: 100vh;\n    background: url(",") #000;\n    background-size: cover;\n    overflow: hidden;\n"]);return q=function(){return e},e}d.a.div(q(),b.a);var Q=d.a.div(V()),W=d.a.div(_()),X=function(e){e.scoreBoard;return a.a.createElement(v,null,a.a.createElement(Q,null,a.a.createElement(W,null,a.a.createElement(Z,null))))},$={"/":function(){return a.a.createElement("div",{className:"App"},a.a.createElement(F,null))},"/scoreboard":function(){return a.a.createElement(X,null)}},ee=function(){return Object(i.useRoutes)($)};c.a.render(a.a.createElement(ee,null),document.getElementById("root"))},7:function(e,n,t){e.exports=t.p+"static/media/bg.2810fe6b.png"}},[[22,1,2]]]);
//# sourceMappingURL=main.512969d4.chunk.js.map