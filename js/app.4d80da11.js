(function(e){function a(a){for(var t,o,c=a[0],s=a[1],u=a[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);f&&f(a);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],t=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(t=!1)}t&&(i.splice(a--,1),e=s(s.s=n[0]))}return e}var t={},o={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"7db44104","chunk-0206bfa0":"fbcb801b","chunk-0c047e41":"c93e636b","chunk-13a6037e":"47d7da63","chunk-18f95272":"8cc31be1","chunk-25b302c8":"e4a9087b","chunk-26fc7596":"eba76383","chunk-2c06842c":"ee78365c","chunk-2d0c5615":"d7c7fea3","chunk-2d0e96ec":"6332f6f8","chunk-2d208d90":"440b5e7e","chunk-2d21d0e2":"d061f3e9","chunk-2d22c123":"4eaafe36","chunk-2d2747e2":"92eb3dc5","chunk-2e80bb9a":"f5f91733","chunk-319206de":"3faa5257","chunk-32334cb6":"e4cb5e8f","chunk-36769079":"00cac6ab","chunk-3c57cd7b":"25993372","chunk-4cdd78c0":"be97f210","chunk-4f2d402a":"8e19b5a7","chunk-515a8379":"1a9ac9f5","chunk-53ccb27e":"a4d1166c","chunk-55d286b8":"5f60a1a0","chunk-59974754":"c8c954a2","chunk-60cbc06b":"e2d94f73","chunk-659152b8":"d4cd6718","chunk-6e1e538a":"d5b7f1d6","chunk-766a929b":"3e7bd3ca","chunk-c796899c":"702a4d0c","chunk-e8a7823a":"78e05249","chunk-f2df7d2c":"213e5ca0","chunk-fde47172":"1e5f4771",comple:"918a6f25",creditos:"903a22f5",glosario:"ce44feac",intro:"6a36f8c0",referencias:"f6f4a4f6",sintesis:"9d7da9f6",tema1:"781b43c2",tema2:"e8a9e3d2",tema3:"d7fc4344"}[e]+".js"}function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema2:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var t="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"2d0e7f69","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"189b7e85","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"b5eaba09","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"78df526f",creditos:"b3bc7c5b",glosario:"1ff8c170",intro:"31d6cfe0",referencias:"687fd754",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"6905b812",tema3:"31d6cfe0"}[e]+".css",r=s.p+t,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===t||l===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===t||l===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var t=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=t,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var t=r[e];if(0!==t)if(t)a.push(t[2]);else{var i=new Promise((function(a,n){t=r[e]=[a,n]}));a.push(t[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(a){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var t=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",d.name="ChunkLoadError",d.type=t,d.request=o,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=t,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)s.d(n,t,function(a){return e[a]}.bind(null,t));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=i,s=n("2877"),u=Object(s["a"])(c,o,r,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),m=n("ae58"),p=n("7e58");d["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema3").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Diseño y construcción de <em>Front-end</em>",descripcionCurso:"En este componente formativo se abordan los conceptos clave para el diseño y desarrollo de aplicaciones móviles nativas, como sus elementos, vistas, maquetación, entornos de desarrollo, lenguajes entre otros.",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("ce7c")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Análisis de requerimiento",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema2",numero:"2",titulo:"Diseño gráfico: herramientas de prototipado",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Figma",hash:"t_2_1"},{numero:"2.2",titulo:"Sketch",hash:"t_2_2"},{numero:"2.3",titulo:"Adobe XD",hash:"t_2_3"},{numero:"2.4",titulo:"Conceptos de Material Desing",hash:"t_2_4"}]},{nombreRuta:"tema3",numero:"3",titulo:"Principios básicos de usabilidad",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Componentes de <i>software</i>",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Licenciamiento",hash:"t_4_1"},{numero:"4.2",titulo:"Seguridad",hash:"t_4_2"},{numero:"4.3",titulo:"API, Firebase",hash:"t_4_3"},{numero:"4.4",titulo:"Herramientas",hash:"t_4_4"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF012_228139_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"2. Diseño gráfico: herramientas de prototipado",referencia:"FalconMasters. (2018). Curso de Adobe XD | 1. Introducción y que Aprenderemos en el Curso",tipo:"Video Tutorial",link:"https://youtu.be/5HfqCSm9k3Y"},{tema:"2. Diseño gráfico: herramientas de prototipado",referencia:"EDteam. (2017). Minicurso de Balsamiq Mockups (1) - Los <em>wireframes</em> y la interfaz.",tipo:"Video Tutorial",link:"https://youtu.be/4WqfxF1QjTM"},{tema:"2. Diseño gráfico: herramientas de prototipado",referencia:"Aprende, G. (2020).  COMO USAR CANVA: Canva tutorial - Aprende a diseñar FÁCIL y de manera PROFESIONAL.",tipo:"Video Tutorial",link:"https://youtu.be/kdE6ZmT_5MI"},{tema:"2. Diseño gráfico: herramientas de prototipado",referencia:"Conde, J. (2016). 01.- Material Design con Android Studio. ¿Qué es Material Design?",tipo:"Video Tutorial",link:"https://youtu.be/wt0Jzc9UHNw"},{tema:"4. Componentes de <i>software</i>",referencia:"Novato, P. (2019). Firebase 01.- Qué es Firebase?. ",tipo:"Video Tutorial",link:"https://youtu.be/0Bhrwc8VfGw"}],glosario:[{termino:"<i>Wearable</i>",significado:"Dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil."},{termino:"<i>Wireframing<i>",significado:"Es un esquema de página o plano de pantalla, como guía visual que representa el esqueleto o estructura visual de una interfaz."}],referencias:[{referencia:"Saenz, S. (2018). Ripple estilo Material Design.",link:"https://sergiosanz.dev/blog/material-design-ripple/"},{referencia:"Material.io. (2021). Material Design.",link:" https://material.io/design/color/the-color-system.html#color-usage-and-palettes"},{referencia:"Aula formativa. (2019, julio 29). ¿Qué es el Material Design?. [Web log post].  blog.aulaformativa.com. ",link:" https://blog.aulaformativa.com/que-es-el-material-design"},{referencia:"Beust, C. (2019).  TestNG. ",link:"https://testng.org/doc"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de Línea de Producción",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Henry Eduardo Bastidas Paruma",cargo:"Experto temático",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Jonathan Guerrero Astaiza",cargo:"Experto temático",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Peter Emerson Pinchao Solis",cargo:"Experto temático",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Zulema Yidney León Escobar",cargo:"Experta temática",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Oscar Absalón Guevara",cargo:"Diseñador instruccional",centro:"Centro de gestión industrial - Regional distrito capital"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Diseñadora instruccional",centro:"Centro de gestión industrial - Regional distrito capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Evaluador instruccional",centro:"Centro para la industria y la comunicación gráfica - Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Evaluadora instruccional",centro:"Centro para la industria y la comunicación gráfica - Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Metodólogo para formación virtual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Fabián Leonardo Correa Díaz",cargo:"Diseñador Instruccional",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Carmen Alicia Martínez Torres",cargo:"Animador y Productor Multimedia",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yerson Fabian Zarate Saavedra",cargo:"Diseñador de Contenidos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Francisco José Lizcano Reyes",cargo:"Desarrollador Full-stack",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta Álvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});t["a"].prototype.$config=v;var k=n("9224");t["a"].prototype.$package=k,new t["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.b959b945.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.a05dad5b.png"}});
//# sourceMappingURL=app.4d80da11.js.map