(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9Ngl":function(e,t,l){e.exports=l.p+"static/blog-cc8cff60f93cf458a0d5ba63ace6c08c.jpeg"},E997:function(e,t,l){e.exports=l.p+"static/madrid-099e40762a4d2cda63dfe7713a3c4e6d.jpg"},RXBc:function(e,t,l){"use strict";l.r(t);var o=l("q1tI"),n=l.n(o),a=l("7oih");var r=l("dI71"),i=l("dwco"),c=l.n(i),s=function(e){return e.children},m=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(r.a)(t,e);var l=t.prototype;return l.componentDidMount=function(){c.a.polyfill()},l.handleClick=function(e){e.preventDefault();var t=0,l=!0,o=this.props,n=o.type,a=o.element,r=o.offset,i=o.timeout;if(n&&a)switch(n){case"class":l=!!(t=document.getElementsByClassName(a)[0]);break;case"id":l=!!(t=document.getElementById(a))}l?this.scrollTo(t,r,i):console.log("Element not found: "+a)},l.scrollTo=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),l):window.scroll({top:o+t,left:0,behavior:"smooth"})},l.render=function(){return n.a.createElement(s,null,"object"==typeof this.props.children?n.a.cloneElement(this.props.children,{onClick:this.handleClick}):n.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(n.a.Component),f=l("E997"),d=l.n(f),p=l("dD7K"),u=l.n(p),h=l("9Ngl"),v=l.n(h),y=l("obyI"),g=l.n(y),E=l("+ZDr"),b=l.n(E);t.default=function(){return n.a.createElement(a.a,null,n.a.createElement("section",{id:"banner"},n.a.createElement("div",{className:"inner"},n.a.createElement("h2",null,g.a.heading),n.a.createElement("p",null,g.a.subHeading),n.a.createElement("ul",{className:"actions special"},n.a.createElement("li",null,n.a.createElement(m,{type:"id",element:"one"},n.a.createElement("a",{href:"/#",className:"button primary"},"Explore"))))),n.a.createElement(m,{type:"id",element:"one"},n.a.createElement("a",{href:"#one",className:"more"},"Learn More"))),n.a.createElement("section",{id:"one",className:"wrapper style1 special"},n.a.createElement("div",{className:"inner"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Welcome to my personal space in the wide web,",n.a.createElement("br",null),"I am glad you found your way here"),n.a.createElement("p",null,"I am very passionate about a lot of different topics in the area of software development. Currently I am especially interested in software architecture around modern and scalable web. applications. In this area I enjoy designing the system architecture as well as doing frontend and backend development. Because of all that I am working as a software architect at Accenture."),n.a.createElement("p",null,"Next to my job I am currently studying economic computer science and working on my master’s degree. I am doing this remotely at the University of Bamberg through their online program."),n.a.createElement("p",null,"I am living in Nuremberg, Germany since 2015 and love the area, the people and the tech community here a lot.")))),n.a.createElement("section",{id:"two",className:"wrapper alt style2"},n.a.createElement("section",{className:"spotlight"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:d.a,alt:"Myself in Madrid"})),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Profession"),n.a.createElement("p",null,"I am spending my time in the domain of software development since the beginning of my bachelors degree in computer science."),n.a.createElement("p",null,"Since then I have worked on different projects, for different clients and different companies, most of the time as a consultant."),n.a.createElement("p",null,"This all lead to my current role in Accenture."),n.a.createElement("ul",{className:"actions stacked"},n.a.createElement("li",null,n.a.createElement(b.a,{to:"/cv",className:"button fit primary"},"More Details in my CV")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.accenture.com/",className:"button fit"},"About Accenture"))))),n.a.createElement("section",{className:"spotlight"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:u.a,alt:"Some dice in the sun"})),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Private"),n.a.createElement("p",null,"In private I enjoy a lot of things nerdy, which includes"),n.a.createElement("ul",null,n.a.createElement("li",null,"Programming (yes, also in private)"),n.a.createElement("li",null,"Storytelling and Design"),n.a.createElement("li",null,"Tabletop RPGs"),n.a.createElement("li",null,"Videogames"),n.a.createElement("li",null,"Reading"),n.a.createElement("li",null,"Climbing")))),n.a.createElement("section",{className:"spotlight"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:v.a,alt:"Different things to read"})),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Something to read"),n.a.createElement("p",null,"Im working on a few things to read for you, so stay tuned...")))))}},dD7K:function(e,t,l){e.exports=l.p+"static/hobby-0f799caac899884b83529f1956c12afd.jpeg"},dwco:function(e,t,l){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var l,o=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?u.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):u.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;u.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var l=d(this),o=l.getBoundingClientRect(),a=this.getBoundingClientRect();l!==t.body?(u.call(this,l,l.scrollLeft+a.left-o.left,l.scrollTop+a.top-o.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function m(t,l){var o=e.getComputedStyle(t,null)["overflow"+l];return"auto"===o||"scroll"===o}function f(e){var t=s(e,"Y")&&m(e,"Y"),l=s(e,"X")&&m(e,"X");return t||l}function d(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function p(t){var l,o,n,r,i=(a()-t.startTime)/468;r=i=i>1?1:i,l=.5*(1-Math.cos(Math.PI*r)),o=t.startX+(t.x-t.startX)*l,n=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,o,n),o===t.x&&n===t.y||e.requestAnimationFrame(p.bind(e,t))}function u(l,o,r){var c,s,m,f,d=a();l===t.body?(c=e,s=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,f=n.scroll):(c=l,s=l.scrollLeft,m=l.scrollTop,f=i),p({scrollable:c,method:f,startTime:d,startX:s,startY:m,x:o,y:r})}}}}()}}]);
//# sourceMappingURL=component---src-pages-index-js-014e177f2d6bf8008429.js.map