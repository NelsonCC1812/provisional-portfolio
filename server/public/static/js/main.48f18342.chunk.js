(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),i=a(18),s=(a(70),a(71),a(7)),c=a(27),m=a(25),u=a(16),d=a(29),g=a(64),p=a(40),h=a.n(p),b=a(55),f=a(31),E=a(41),v=a(24),k=a(59),w=(a(73),a(56)),y=a(57),x=a.n(y),j=function e(){var t=this;Object(w.a)(this,e),this.sendMail=function(e){return t.service.post("/sendMail",e).then((function(e){return e.data}))},this.service=x.a.create({baseURL:"".concat("http://provisional-portfolio.herokuapp.com/api","/mail"),withCredentials:!0})};function C(e){var t=Object(n.useState)({email:"",subject:"",content:""}),a=Object(c.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),s=Object(c.a)(i,2),m=s[0],u=s[1],d=new j,g=function(e){u("");var t=e.target,a=t.id,n=t.value;l(Object(E.a)(Object(E.a)({},r),{},Object(f.a)({},a,n)))},p=function(){var t=Object(b.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(r.email)){t.next=12;break}if(!r.subject&&!r.content){t.next=9;break}return t.next=5,d.sendMail(r);case 5:"ok"===t.sent.status?e.closeContactModal():u("An error have ocurred please try again"),t.next=10;break;case 9:u("You have to fill in subject and content fields");case 10:t.next=13;break;case 12:u("The introduced email is not valid");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(v.a.Group,null,o.a.createElement(v.a.Label,{htmlFor:"email"},"Email"),o.a.createElement(v.a.Control,{className:"formInput",type:"text",id:"email",value:r.email,placeholder:"Your email to contact with you",onChange:g}),o.a.createElement(v.a.Label,{htmlFor:"subject"},"Subject"),o.a.createElement(v.a.Control,{className:"formInput",type:"text",id:"subject",value:r.subject,placeholder:"The subject of your mail",onChange:g}),o.a.createElement(v.a.Label,{htmlFor:"content"},"Content"),o.a.createElement(v.a.Control,{style:{height:"100px"},className:"formInput",as:"textarea",id:"content",value:r.content,placeholder:"What would you like to know or say?",onChange:g}),o.a.createElement(k.a,{style:{marginBottom:"10px"},type:"submit",onClick:p},"Submit"),o.a.createElement("h6",{style:{color:"red"}},m))}a(94);function N(e){return o.a.createElement("div",{style:{width:"80%",marginLeft:"2vw"}},o.a.createElement("h1",{style:{marginTop:"5vh",fontSize:"3.5em"}},"Contact"),o.a.createElement("div",{className:"contactContainer"},o.a.createElement(C,{closeContactModal:function(){return e.closeContactModal()}})))}a(95);function O(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(!1),p=Object(c.a)(s,2),h=p[0],b=p[1];Object(n.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){e<window.pageYOffset&&!r&&"/contact"!==window.location.pathname?document.getElementsByClassName("myNavbar")[0].classList.add("uphidden"):e>window.pageYOffset&&!r&&document.getElementsByClassName("myNavbar")[0].classList.remove("uphidden"),e=window.pageYOffset}}));var f=function(){return b(!1)};return o.a.createElement(u.a,{className:"myNavbar",sticky:"top",bg:"dark",variant:"dark",expand:"md"},o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},o.a.createElement(d.a,{as:m.a,md:6,sm:12,xs:12},o.a.createElement("div",{className:"allLinks"},o.a.createElement("div",{className:"mainNav"},o.a.createElement(u.a.Brand,{as:i.b,to:"home",style:{marginLeft:"10px"}},"My portfolio"),o.a.createElement(u.a.Toggle,{name:"toggle",style:{height:"20%"},onClickCapture:function(){l(!0),setTimeout((function(){return l(!1)}),500)}})),o.a.createElement(u.a.Collapse,null,o.a.createElement(d.a.Link,{className:"link",as:i.b,to:"/about"},"About me"),o.a.createElement(d.a.Link,{className:"link",as:i.b,to:"/projects"},"Projects"),o.a.createElement(d.a.Link,{className:"link",onClick:function(){return b(!0)}},"Contact")))),o.a.createElement(u.a.Collapse,{as:m.a,md:3,className:"justify-content-end"},o.a.createElement(u.a.Text,{className:"firm",style:{marginLeft:"5px",marginRight:"10px"}},"Provisional portfolio"))),o.a.createElement(g.a,{show:h,onHide:f,centered:"true"},o.a.createElement(N,{closeContactModal:function(){return f()}})))}a(99);function I(){return o.a.createElement("div",{className:"myFooter"},o.a.createElement(u.a,{sticky:"bottom",variant:"dark",bg:"dark"},o.a.createElement(u.a.Text,{style:{width:"100%",textAlign:"center"}},"Made by: ",o.a.createElement(i.b,{to:"/about"},"Nelson Cabrera Cano"))))}a(100);var S=function(){return o.a.createElement("div",{className:"pagesContainer"},o.a.createElement("h1",{style:{marginBottom:"30px"}},"Home"),o.a.createElement("p",null,"Thats a provisional portfolio, realized in less than a week to serve a provisional porpouse. I am actually learning about Redux. Then I will create a definitive porfolio, the code of this portfolio (maybe esthetically is not too visual) is in this ",o.a.createElement("a",{style:{color:"rgb(130,130,250)"},href:"https://github.com/nelsoncc1812/provisional-portfolio"}," link"),". This portfolio is realized in React, using too some interesting technologies as: Boostrap, axios... The messages system its currently working online, so I can see messages if you want to contact with me."),o.a.createElement("img",{style:{width:"80%"},src:"./images/home/rage.gif",alt:"working while raging"}))},T=a(62),L=a(61);a(101);function A(e){var t=e.name,a=e.img,n=e.link;return o.a.createElement(m.a,{md:3,sm:6,xs:6},o.a.createElement("div",{className:"techCard"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},o.a.createElement("figure",null,o.a.createElement("img",{src:a,alt:t})),o.a.createElement("h6",null,t))))}a(102);function M(e){var t=e.title,a=e.technologies;return o.a.createElement("article",{className:"techArticle"},o.a.createElement("h3",null,t),o.a.createElement("hr",null),o.a.createElement(L.a,{className:"align-items-end"},a.map((function(e){return o.a.createElement(A,Object.assign({key:e.name},e))}))))}var B=a(44);a(103);function D(){var e=Object.keys(B);return o.a.createElement("section",null,o.a.createElement("h2",null,"Technologies"),o.a.createElement(T.a,null,e.map((function(e){return o.a.createElement(M,{key:e,title:e,technologies:B[e]})}))))}a(104);function F(){return o.a.createElement("div",{className:"pagesContainer"},o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"Born in Canary Islands (Fuerteventura), in the year 1997. I studied some year in the UMA, electronic, robotic and mecatronic engineering, not finishing it. At the same time I finished some aditional courses: Java oriented to Android, electric vehicles... After that in Madrid I studied the Full-Stack Developer course in Ironhack."),o.a.createElement("p",null,"Resolutive, curious, hard-working, friendly. Looking for have deeper and varied knoledge and new challenges."),o.a.createElement("section",{style:{marginTop:"20px"}},o.a.createElement("h3",null,"I studied on:"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.ironhack.com/es/desarrollo-web"},o.a.createElement("figure",{style:{textAlign:"center"}},o.a.createElement("img",{style:{width:"90px"},src:"./images/about/ironhack.png",alt:"ironhack"})," ",o.a.createElement("figcaption",null,"Ironhack")," ",o.a.createElement("p",null,"Full-stack dev")))),o.a.createElement(D,null))}var J=a(63);a(105);function R(e){var t=e.order,a=e.name,n=e.description,r=e.objetive,l=e.duration,i=e.image,s=e.link;return o.a.createElement("div",{className:"projectCard"},o.a.createElement("h2",null," ",a),o.a.createElement("div",{style:{paddingTop:"40px",borderTop:"2px solid black",borderBottom:"2px solid black"}},o.a.createElement("img",{src:i,alt:a}),o.a.createElement("h3",null,"Order: ",t," "),o.a.createElement("h3",null,"Descrition: ",n),o.a.createElement("h3",null,"Objetive: ",r),o.a.createElement("h3",null,"Duration: ",l," weeks"),o.a.createElement("a",{style:{color:"rgb(130,130,250)"},rel:"noopener noreferrer",target:"_blank",href:s},"Link to web ",t>1&&"(delays first time because free CDN politics)"," ")))}a(106);function H(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"pagesContainer"},o.a.createElement("h1",null,"Projects"),J.map((function(e){return o.a.createElement(R,Object.assign({key:e.order},e))}))),o.a.createElement("div",{style:{backgroundColor:"rgb(240, 240, 235)",paddingTop:"50px",paddingBottom:"30px",width:"100%",padding:"50px 80px 30px 80px"}},o.a.createElement("h2",null,"Actually"),o.a.createElement("hr",null),o.a.createElement("p",null,"I am currently in active work search, studying a Redux course (when I finish I will create a better version of a portfolio). Then I want to study a course of Docker, Kubernetes and Jenkins (separated)")))}a(107);function W(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,null),o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/home",render:function(){return o.a.createElement(S,null)}}),o.a.createElement(s.b,{path:"/about",render:function(){return o.a.createElement(F,null)}}),o.a.createElement(s.b,{path:"/projects",render:function(){return o.a.createElement(H,null)}}),o.a.createElement(s.a,{to:"/home"})),o.a.createElement(I,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(i.a,null,o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e){e.exports=JSON.parse('{"UI":[{"name":"Adove XD","img":"./images/about/logos/adovexd.svg","link":"https://www.adobe.com/es/products/xd/details.html"}],"Version Control":[{"name":"Git","img":"./images/about/logos/git.svg","link":"https://git-scm.com/"},{"name":"Github","img":"./images/about/logos/github.svg","link":"https://github.com/"}],"Styling":[{"name":"CSS3","img":"./images/about/logos/css3.svg","link":"https://developer.mozilla.org/es/docs/Web/CSS"},{"name":"Sass","img":"./images/about/logos/sass.png","link":"https://sass-lang.com/"},{"name":"Bootstrap","img":"./images/about/logos/bootstrap.svg","link":"https://getbootstrap.com/"},{"name":"React Bootstrap","img":"./images/about/logos/reactbootstrap.png","link":"https://react-bootstrap.github.io/"}],"Structure":[{"name":"HTML5","img":"./images/about/logos/html5.svg","link":"https://developer.mozilla.org/es/docs/HTML/HTML5"},{"name":"Handlebars","img":"./images/about/logos/handlebars.svg","link":"https://handlebarsjs.com/"}],"Frameworks":[{"name":"React","img":"./images/about/logos/react.svg","link":"https://es.reactjs.org/"},{"name":"ExpressJS","img":"./images/about/logos/expressjs.png","link":"https://expressjs.com/es/"}],"Databases":[{"name":"MongoDB","img":"./images/about/logos/mongodb.svg","link":"https://www.mongodb.com/es"}],"Others":[{"name":"NodeJS","img":"./images/about/logos/nodejs.svg","link":"https://nodejs.org/es/"},{"name":"npm","img":"./images/about/logos/npm.svg","link":"https://www.npmjs.com/"}]}')},63:function(e){e.exports=JSON.parse('[{"order":1,"name":"Kill\'em all (game1)","description":"A simple game about kill an elegible quantify of enemies, using some habilities.","objetive":"Create a simple game to learn an evalue classes knowledge and basic animation habilities using vanilla canvas.","duration":1,"image":"./images/projects/game1.png","link":"https://nelsoncc1812.github.io/game1/"},{"order":2,"name":"Harcoded News","description":"A news web, using axios technology, databases, API.","objetive":"Learn about APIs and databases (MongoDB), user credentials, Express...","duration":1,"image":"./images/projects/harcoded.png","link":"https://harcodednews.herokuapp.com/"},{"order":3,"name":"Nahele project (Fluffy\'s Shelter)","description":"Web about look for animal that need adoption, you can create your own profile and put up in adoption and create events to meet pets that you are interested in.","objetive":"Create a single page application full Javascript. We used a bundle of technologies: React, Express, Axios, Web Sockets, Data visualization (amCharts), scraping (cherios)...","duration":2,"image":"./images/projects/nahele.png","link":"https://nahele-proyect.herokuapp.com/"}]')},65:function(e,t,a){e.exports=a(108)},71:function(e,t,a){},73:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},99:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.48f18342.chunk.js.map