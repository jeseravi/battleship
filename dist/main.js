(()=>{"use strict";var __webpack_modules__={500:(e,t,r)=>{r.d(t,{N:()=>o,Q:()=>n});var a=r(628),_=r(227);function n(e,t,r){for(let _=0;_<e;_++){let n,o=Math.ceil((_+1)/10);_<10&&(n=_+1),_>=10&&(n=_+1-10*(o-1)),(0,a.k)("button",_,"",t,n+","+o,`boardButton unselectedBoardButton ${r}`),_==e-1&&Array.from(document.getElementsByClassName("boardButton unselectedBoardButton")).forEach((e=>{e.disabled=!0}))}}function o(){88==Array.from(document.getElementsByClassName("unselectedBoardButton")).length&&(n(100,"computerBoardContainer","computerBoard"),document.getElementById("fillerDivEmpty").setAttribute("id","fillerDiv"),(0,_.u)("tinyShip","computerBoard","random"),(0,_.u)("mediumShip","computerBoard","random"),(0,_.u)("largeShip","computerBoard","random"))}},628:(e,t,r)=>{function a(e,t,r,a,_,n){let o=e,i=t,d=a,s=r,l=_,m=n;i=document.createElement(o),i.setAttribute("id",l),i.setAttribute("class",m),i.innerHTML=s,document.getElementById(d).appendChild(i)}r.d(t,{k:()=>a})},138:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>gameMechanics});var _ship__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(643),_shipmaker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(122),_placeOnBoard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(227),_generateElement__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(628),_boardMaker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(500);(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","content","overallContainer","overallContainer"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","overallContainer","headerContainer","headerContainer"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","Battleship","headerContainer","header","header"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","Instructions: First click on a ship on the right, then click to place it on the board. After all ships are placed, the game begins.","headerContainer","header","header"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","overallContainer","gameContainer","gameContainer"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","gameContainer","twoBoardContainers","twoBoardContainers"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","twoBoardContainers","computerBoardContainer","computerBoardContainer"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","twoBoardContainers","fillerDivEmpty","fillerDivEmpty"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","twoBoardContainers","boardContainer","boardContainer"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","gameContainer","sidebarContainer","sidebarContainer"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","sidebarContainer","tinyShipContainer","tinyShipContainer"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","sidebarContainer","mediumShipContainer","mediumShipContainer"),(0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.k)("div","","","sidebarContainer","largeShipContainer","largeShipContainer");const tinyShip=new _ship__WEBPACK_IMPORTED_MODULE_4__.l(2,0,!1);(0,_shipmaker__WEBPACK_IMPORTED_MODULE_0__.e)(tinyShip.length,"tinyShip","playerBoard");const mediumShip=new _ship__WEBPACK_IMPORTED_MODULE_4__.l(4,0,!1);(0,_shipmaker__WEBPACK_IMPORTED_MODULE_0__.e)(mediumShip.length,"mediumShip","playerBoard");const largeShip=new _ship__WEBPACK_IMPORTED_MODULE_4__.l(6,0,!1);function gameMechanics(nameOfShip){const stringName=nameOfShip;nameOfShip=eval(nameOfShip),Array.from(document.getElementsByClassName("computerBoard")).forEach((e=>{e.disabled=!1})),Array.from(document.getElementsByClassName(`${stringName} computerBoard`)).forEach((e=>{e.addEventListener("click",(t=>{nameOfShip.shipHitter(),console.log(nameOfShip.timesHit),e.disabled=!0,e.setAttribute("class","hitTile"),12==Array.from(document.getElementsByClassName("hitTile")).length&&alert("You win!")}))}))}(0,_shipmaker__WEBPACK_IMPORTED_MODULE_0__.e)(largeShip.length,"largeShip","playerBoard"),(0,_boardMaker__WEBPACK_IMPORTED_MODULE_2__.Q)(100,"boardContainer","playerBoard")},227:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>placeOnBoard});var _boardMaker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(500),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(138);let coordinateArray=[],userCoordinateArray=[];function placeOnBoard(nameOfShip,nameOfBoard,location){null==location&&Array.from(document.getElementsByClassName(`boardButton unselectedBoardButton ${nameOfBoard}`)).forEach((e=>{e.disabled=!1}));var shipNameString=nameOfShip;if(nameOfShip=eval(nameOfShip),Array.from(document.getElementsByClassName("unselectedShip")).forEach((e=>{e.disabled=!0})),Array.from(document.getElementsByClassName(`boardButton unselectedBoardButton ${nameOfBoard}`)).forEach((item=>{item.addEventListener("click",(event=>{for(let i=0;i<nameOfShip.length;i++){var startingID=item.getAttribute("id"),splitString=startingID.split(",");let startingCoordinate=parseInt(splitString[1]),yCoordinate=startingCoordinate,xCoordinate=parseInt(splitString[0]);if(0==i&&startingCoordinate+nameOfShip.length>11){alert("You must place this ship higher on the board");break}if(userCoordinateArray.includes(xCoordinate+","+eval(yCoordinate+i))){alert("This will cause your ships to overlap. Please choose another spot."),userCoordinateArray.pop(),Array.from(document.getElementsByClassName(`boardButton ${shipNameString}`)).forEach((e=>{e.disabled=!1,e.setAttribute("class",`boardButton unselectedBoardButton ${nameOfBoard}`)}));break}var modifiedArray=startingCoordinate+i,testString=splitString[0]+","+modifiedArray;userCoordinateArray.push(testString),document.getElementById(testString).setAttribute("class",`${shipNameString} boardButton ${nameOfBoard}`),document.getElementById(testString).disabled=!0,i==nameOfShip.length-1&&(Array.from(document.getElementsByClassName("unselectedShip")).forEach((e=>{e.disabled=!1})),Array.from(document.getElementsByClassName("selectedShip")).forEach((e=>{e.disabled=!0})),Array.from(document.getElementsByClassName(`boardButton unselectedBoardButton ${nameOfBoard}`)).forEach((e=>{const t=e.getAttribute("id");var r=document.getElementById(t),a=r.cloneNode(!0);r.parentNode.replaceChild(a,r)})),0==Array.from(document.getElementsByClassName("boardButton unselectedBoardButton computerBoard")).length&&(0,_boardMaker__WEBPACK_IMPORTED_MODULE_0__.N)())}}))})),null!=location){let xCoordinate=Math.floor(10*Math.random()+1),yCoordinate=Math.floor(Math.random()*(11-eval(nameOfShip).length)+1);for(let i=0;i<eval(nameOfShip).length;i++)coordinateArray.includes(xCoordinate+","+eval(yCoordinate+i))&&(console.log("error"),xCoordinate=Math.floor(10*Math.random()+1),yCoordinate=Math.floor(Math.random()*(11-eval(nameOfShip).length)+1));for(let i=0;i<eval(nameOfShip).length;i++){var startingID=xCoordinate+","+yCoordinate,splitString=startingID.split(",");let e=parseInt(splitString[1]);var modifiedArray=e+i,testString=splitString[0]+","+modifiedArray;coordinateArray.push(testString),document.getElementById(testString).setAttribute("class",`${shipNameString} boardButton ${nameOfBoard}`),88==Array.from(document.getElementsByClassName("unselectedBoardButton computerBoard")).length&&(Array.from(document.getElementsByClassName("boardButton computerBoard")).forEach((e=>{const t=e.getAttribute("id");var r=document.getElementById(t),a=r.cloneNode(!0);r.parentNode.replaceChild(a,r)})),(0,_index__WEBPACK_IMPORTED_MODULE_1__.T)("tinyShip"),(0,_index__WEBPACK_IMPORTED_MODULE_1__.T)("mediumShip"),(0,_index__WEBPACK_IMPORTED_MODULE_1__.T)("largeShip"))}}}},643:(e,t,r)=>{r.d(t,{l:()=>a});class a{constructor(e,t,r){this.length=e,this.timesHit=t,this.sunkChecker=r}shipHitter(){this.timesHit++,this.timesHit==this.length&&this.sunkChecker}}},122:(e,t,r)=>{r.d(t,{e:()=>n});var a=r(628),_=r(227);function n(e,t,r){for(let r=1;r<=e;r++)(0,a.k)("button",r,"",t+"Container",t,`${t} unselectedShip`);Array.from(document.getElementsByClassName(t)).forEach((e=>{e.addEventListener("click",(e=>{Array.from(document.getElementsByClassName(t)).forEach((e=>{e.classList.remove("unselectedShip"),e.classList.add("selectedShip"),e.disabled=!0})),(0,_.u)(t,r)}))}))}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__=__webpack_require__(138)})();