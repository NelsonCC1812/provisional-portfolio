(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),l=a.n(r),i=a(10),s=(a(70),a(71),a(7)),c=a(27),m=a(17),u=a(18),d=a(29),p=a(64),g=a(42),h=a.n(g),f=a(57),b=a(31),E=a(43),v=a(25),k=a(61),y=(a(73),a(58)),w=a(59),x=a.n(w),j=function e(){var t=this;Object(y.a)(this,e),this.sendMail=function(e){return t.service.post("/sendMail",e).then((function(e){return e.data}))},this.service=x.a.create({baseURL:"".concat("http://provisional-portfolio.herokuapp.com/api","/mail"),withCredentials:!0})};function C(e){var t=Object(n.useState)({email:"",subject:"",content:""}),a=Object(c.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),s=Object(c.a)(i,2),m=s[0],u=s[1],d=new j,p=function(e){u("");var t=e.target,a=t.id,n=t.value;l(Object(E.a)(Object(E.a)({},r),{},Object(b.a)({},a,n)))},g=function(){var t=Object(f.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(r.email)){t.next=12;break}if(!r.subject&&!r.content){t.next=9;break}return t.next=5,d.sendMail(r);case 5:"ok"===t.sent.status?e.closeContactModal():u("An error have ocurred please try again"),t.next=10;break;case 9:u("You have to fill in subject and content fields");case 10:t.next=13;break;case 12:u("The introduced email is not valid");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(v.a.Group,null,o.a.createElement(v.a.Label,{htmlFor:"email"},"Email"),o.a.createElement(v.a.Control,{className:"formInput",type:"text",id:"email",value:r.email,placeholder:"Your email to contact with you",onChange:p}),o.a.createElement(v.a.Label,{htmlFor:"subject"},"Subject"),o.a.createElement(v.a.Control,{className:"formInput",type:"text",id:"subject",value:r.subject,placeholder:"The subject of your mail",onChange:p}),o.a.createElement(v.a.Label,{htmlFor:"content"},"Content"),o.a.createElement(v.a.Control,{style:{height:"100px"},className:"formInput",as:"textarea",id:"content",value:r.content,placeholder:"What would you like to know or say?",onChange:p}),o.a.createElement(k.a,{style:{marginBottom:"10px"},type:"submit",onClick:g},"Submit"),o.a.createElement("h6",{style:{color:"red"}},m))}a(94);function N(e){return o.a.createElement("div",{style:{width:"80%",marginLeft:"2vw"}},o.a.createElement("h1",{style:{marginTop:"5vh",fontSize:"3.5em"}},"Contact"),o.a.createElement("div",{className:"contactContainer"},o.a.createElement(C,{closeContactModal:function(){return e.closeContactModal()}})))}a(95);function O(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(!1),g=Object(c.a)(s,2),h=g[0],f=g[1];Object(n.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){e<window.pageYOffset&&!r&&"/contact"!==window.location.pathname?document.getElementsByClassName("myNavbar")[0].classList.add("uphidden"):e>window.pageYOffset&&!r&&document.getElementsByClassName("myNavbar")[0].classList.remove("uphidden"),e=window.pageYOffset}}));var b=function(){return f(!1)};return o.a.createElement(u.a,{className:"myNavbar",sticky:"top",bg:"dark",variant:"dark",expand:"md"},o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},o.a.createElement(d.a,{as:m.a,md:6,sm:12,xs:12},o.a.createElement("div",{className:"allLinks"},o.a.createElement("div",{className:"mainNav"},o.a.createElement(u.a.Brand,{as:i.b,to:"home",style:{marginLeft:"10px"}},"My portfolio"),o.a.createElement(u.a.Toggle,{name:"toggle",style:{height:"20%"},onClickCapture:function(){l(!0),setTimeout((function(){return l(!1)}),500)}})),o.a.createElement(u.a.Collapse,null,o.a.createElement(d.a.Link,{className:"link",as:i.b,to:"/about"},"About me"),o.a.createElement(d.a.Link,{className:"link",as:i.b,to:"/projects"},"Projects"),o.a.createElement(d.a.Link,{className:"link",onClick:function(){return f(!0)}},"Contact")))),o.a.createElement(u.a.Collapse,{as:m.a,md:3,className:"justify-content-end"},o.a.createElement(u.a.Text,{className:"firm",style:{marginLeft:"5px",marginRight:"10px"}},"Provisional portfolio"))),o.a.createElement(p.a,{show:h,onHide:b,centered:"true"},o.a.createElement(N,{closeContactModal:function(){return b()}})))}a(99);function I(){return o.a.createElement("div",{className:"myFooter"},o.a.createElement(u.a,{sticky:"bottom",variant:"dark",bg:"dark"},o.a.createElement(u.a.Text,{style:{width:"100%",textAlign:"center"}},"Made by: ",o.a.createElement(i.b,{to:"/about"},"Nelson Cabrera Cano"))))}var S=a(36),T=a(37);a(100);function L(){return o.a.createElement(S.a,null,o.a.createElement(T.a,{className:"justify-content-around"},o.a.createElement(m.a,{md:4},o.a.createElement(i.b,{to:"/about"},o.a.createElement("h4",null,"About"),o.a.createElement("p",null,"Here you can see info about me and technologies I use"))),o.a.createElement(m.a,{md:4},o.a.createElement(i.b,{to:"/projects"},o.a.createElement("h4",null,"Projects"),o.a.createElement("p",null,"Here you will see some of my principal projects and some information about my current work")))))}a(101);function A(){return o.a.createElement("div",{className:"pagesContainer"},o.a.createElement("h1",{style:{marginBottom:"30px"}},"Home"),o.a.createElement("div",null,o.a.createElement("p",null,"Thats a provisional portfolio, realized in less than a week to serve a provisional porpouse. I am actually learning about Redux. Then I will create a definitive porfolio, the code of this portfolio is in this ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",style:{color:"rgb(130,130,250)"},href:"https://github.com/nelsoncc1812/provisional-portfolio"}," link"),". This portfolio is realized in React, using too some interesting technologies as: Boostrap, axios... The messages system its currently working online, so I can see messages if you want to contact with me.")),o.a.createElement(L,null))}a(102);function M(e){var t=e.name,a=e.img,n=e.link;return o.a.createElement(m.a,{md:3,sm:6,xs:6},o.a.createElement("div",{className:"techCard"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},o.a.createElement("figure",null,o.a.createElement("img",{src:a,alt:t})),o.a.createElement("h6",null,t))))}a(103);function B(e){var t=e.title,a=e.technologies;return o.a.createElement("article",{className:"techArticle"},o.a.createElement("h3",null,t),o.a.createElement("hr",null),o.a.createElement(T.a,{className:"align-items-end"},a.map((function(e){return o.a.createElement(M,Object.assign({key:e.name},e))}))))}var D=a(46);a(104);function F(){var e=Object.keys(D);return o.a.createElement("section",null,o.a.createElement("h2",null,"Technologies"),o.a.createElement("hr",null),o.a.createElement(S.a,null,e.map((function(e){return o.a.createElement(B,{key:e,title:e,technologies:D[e]})}))))}a(105);function R(){return o.a.createElement("div",{className:"pagesContainer"},o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"Born in Canary Islands (Fuerteventura), in the year 1997. I studied some year in the UMA, electronic, robotic and mecatronic engineering, not finishing it. At the same time I finished some aditional courses: Java oriented to Android, electric vehicles... After that in Madrid I studied the Full-Stack Developer course in Ironhack."),o.a.createElement("p",null,"Resolutive, curious, hard-working, friendly. Looking for have deeper and varied knowledge and new challenges."),o.a.createElement("div",{style:{paddingTop:"40px",paddingBottom:"30px",display:"flex",justifyContent:"space-evenly"}},o.a.createElement("a",{style:{display:"flex",alignItems:"flex-end"},target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/nelson-cc"},o.a.createElement("img",{style:{width:"40px"},src:"./images/about/linkedin.svg"}),o.a.createElement("h6",null,"Linkedin")),o.a.createElement("a",{style:{display:"flex",alignItems:"flex-end"},target:"_blank",rel:"noopener noreferrer",href:"https://github.com/nelsoncc1812"},o.a.createElement("img",{style:{width:"50px"},src:"./images/about/github.png"}),o.a.createElement("h6",null,"Github"))),o.a.createElement("section",{style:{marginTop:"20px"}},o.a.createElement("h3",null,"I studied on:"),o.a.createElement("hr",null),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.ironhack.com/es/desarrollo-web"},o.a.createElement("figure",{style:{textAlign:"center"}},o.a.createElement("img",{style:{width:"90px"},src:"./images/about/ironhack.png",alt:"ironhack"}),o.a.createElement("figcaption",null,"Ironhack"),o.a.createElement("p",null,"Full-stack dev"))),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.uma.es/#gsc.tab=0"},o.a.createElement("figure",{style:{textAlign:"center"}},o.a.createElement("img",{style:{width:"90px"},src:"./images/about/malagau.svg",alt:"malaga university"}),o.a.createElement("figcaption",null,"Malaga University"),o.a.createElement("p",null,"ERME (not finished)"))))),o.a.createElement(F,null))}var H=a(63);a(106);function J(e){var t=e.order,a=e.name,n=e.description,r=e.objetive,l=e.duration,i=e.image,s=e.link;return o.a.createElement("div",{className:"projectCard"},o.a.createElement("h2",null," ",a),o.a.createElement("div",{style:{paddingTop:"40px",borderTop:"2px solid black",borderBottom:"2px solid black"}},o.a.createElement("img",{src:i,alt:a}),o.a.createElement("h3",null,"Order: ",t," "),o.a.createElement("h3",null,"Descrition: ",n),o.a.createElement("h3",null,"Objetive: ",r),o.a.createElement("h3",null,"Duration: ",l," weeks"),o.a.createElement("a",{style:{color:"rgb(130,130,250)"},rel:"noopener noreferrer",target:"_blank",href:s},"Link to web ",t>1&&"(delays first time because free CDN politics)"," ")))}a(107);function W(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"pagesContainer"},o.a.createElement("h1",null,"Projects"),H.map((function(e){return o.a.createElement(J,Object.assign({key:e.order},e))}))),o.a.createElement("div",{style:{backgroundColor:"rgb(240, 240, 235)",paddingTop:"50px",paddingBottom:"30px",width:"100%",padding:"50px 80px 30px 80px"}},o.a.createElement("h2",null,"Actually"),o.a.createElement("hr",null),o.a.createElement("p",null,"I am currently in active work search, studying a Redux course (when I finish I will create a better version of a portfolio). Then I want to study a course of Docker, Kubernetes and Jenkins (separated)")))}a(108);function _(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,null),o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/home",render:function(){return o.a.createElement(A,null)}}),o.a.createElement(s.b,{path:"/about",render:function(){return o.a.createElement(R,null)}}),o.a.createElement(s.b,{path:"/projects",render:function(){return o.a.createElement(W,null)}}),o.a.createElement(s.a,{to:"/home"})),o.a.createElement(I,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(i.a,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e){e.exports=JSON.parse('{"UI":[{"name":"Adove XD","img":"./images/about/logos/adovexd.svg","link":"https://www.adobe.com/es/products/xd/details.html"}],"Version Control":[{"name":"Git","img":"./images/about/logos/git.svg","link":"https://git-scm.com/"},{"name":"Github","img":"./images/about/logos/github.svg","link":"https://github.com/"}],"Styling":[{"name":"CSS3","img":"./images/about/logos/css3.svg","link":"https://developer.mozilla.org/es/docs/Web/CSS"},{"name":"Sass","img":"./images/about/logos/sass.png","link":"https://sass-lang.com/"},{"name":"Bootstrap","img":"./images/about/logos/bootstrap.svg","link":"https://getbootstrap.com/"},{"name":"React Bootstrap","img":"./images/about/logos/reactbootstrap.png","link":"https://react-bootstrap.github.io/"}],"Structure":[{"name":"HTML5","img":"./images/about/logos/html5.svg","link":"https://developer.mozilla.org/es/docs/HTML/HTML5"},{"name":"Handlebars","img":"./images/about/logos/handlebars.svg","link":"https://handlebarsjs.com/"}],"Frameworks":[{"name":"React","img":"./images/about/logos/react.svg","link":"https://es.reactjs.org/"},{"name":"ExpressJS","img":"./images/about/logos/expressjs.png","link":"https://expressjs.com/es/"}],"Databases":[{"name":"MongoDB","img":"./images/about/logos/mongodb.svg","link":"https://www.mongodb.com/es"}],"Others":[{"name":"NodeJS","img":"./images/about/logos/nodejs.svg","link":"https://nodejs.org/es/"},{"name":"npm","img":"./images/about/logos/npm.svg","link":"https://www.npmjs.com/"}]}')},63:function(e){e.exports=JSON.parse('[{"order":1,"name":"Kill\'em all (game1)","description":"A simple game about kill an elegible quantify of enemies, using some habilities.","objetive":"Create a simple game to learn an evalue classes knowledge and basic animation habilities using vanilla canvas.","duration":1,"image":"./images/projects/game1.png","link":"https://nelsoncc1812.github.io/game1/"},{"order":2,"name":"Harcoded News","description":"A news web, using axios technology, databases, API.","objetive":"Learn about APIs and databases (MongoDB), user credentials, Express...","duration":1,"image":"./images/projects/harcoded.png","link":"https://harcodednews.herokuapp.com/"},{"order":3,"name":"Nahele project (Fluffy\'s Shelter)","description":"Web about look for animal that need adoption, you can create your own profile and put up in adoption and create events to meet pets that you are interested in.","objetive":"Create a single page application full Javascript. We used a bundle of technologies: React, Express, Axios, Web Sockets, Data visualization (amCharts), scraping (cherios)...","duration":2,"image":"./images/projects/nahele.png","link":"https://nahele-proyect.herokuapp.com/"}]')},65:function(e,t,a){e.exports=a(109)},71:function(e,t,a){},73:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},99:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.6f0a3021.chunk.js.map