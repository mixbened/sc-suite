(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{238:function(t,e,a){},248:function(t,e,a){"use strict";var r=a(238);a.n(r).a},252:function(t,e,a){"use strict";var r={props:{content:String}},i=(a(248),a(17)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"blog-content",domProps:{innerHTML:this._s(this.content)}})}),[],!1,null,"68a9b5b6",null);e.a=s.exports},256:function(t,e,a){},257:function(t,e){},278:function(t,e,a){"use strict";var r=a(256);a.n(r).a},279:function(t,e,a){"use strict";var r=a(257),i=a.n(r);e.default=i.a},331:function(t,e,a){"use strict";a.r(e);var r=a(24),i=(a(252),a(254)),s=a(255),n={components:{},metaInfo:function(){return{title:this.$page.course.title,id:this.$page.course.eventbriteId}},data:function(){return{id:this.course}},methods:{richtextToHTML:function(t){return Object(i.documentToHtmlString)(t,{renderNode:Object(r.a)({},s.BLOCKS.EMBEDDED_ASSET,(function(t){return'<img class="img-fluid" src="'.concat(t.data.target.fields.file.url,'" alt="').concat(t.data.target.fields.title,'"/>')}))})},formatDate:function(t){var e=new Date(t);return e.getDate()+". "+["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"][e.getMonth()]+" "+e.getFullYear()},loadCheckout:function(t){window.EBWidgets.createWidget({widgetType:"checkout",eventId:t,iframeContainerId:"eventbrite-widget-container-79316994265",iframeContainerHeight:200,onOrderComplete:function(){console.log("Order complete!"),this.$router.push("/kurse")}})},loadlist:function(){var t,e,a=document,r=a.getElementById,i=a.createElement,s=a.getElementsByTagName,n="typef_orm_share";r.call(a,n)||((t=i.call(a,"script")).id=n,t.src="https://embed.typeform.com/embed.js",(e=s.call(a,"script")[0]).parentNode.insertBefore(t,e))}},mounted:function(){console.log("Mounting...");var t=document.getElementById("eventbrite-widget-container-79316994265").getAttribute("value");console.log("Load Checkout",t),this.loadCheckout(t),this.loadlist()}},o=(a(278),a(17)),c=a(279),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("section",[a("div",{staticClass:"course-image d-flex align-items-center",style:"background-image: url("+t.$page.course.titleImage.file.url+")",attrs:{alt:"Course"+t.$page.course.title}},[a("div",{staticClass:"w-100"},[a("h2",{staticClass:"imageBanner"},[t._v(t._s(t.$page.course.title))]),a("h3",{staticClass:"imageBanner subline"},[t._v(t._s(t.$page.course.ort))])])]),a("b-container",{staticClass:"my-2"},[a("b-row",{staticClass:"text-center"},[a("b-col",{attrs:{sm:""}},[a("small",[a("b",[a("i",{staticClass:"fas fa-calendar-week text-secondary"}),t._v(" Start:")]),t._v(" "+t._s(t.formatDate(t.$page.course.start)))])]),a("b-col",{attrs:{sm:""}},[a("small",[a("b",[a("i",{staticClass:"fas fa-graduation-cap text-success"}),t._v(" Dauer:")]),t._v(" "+t._s(t.$page.course.duration))])]),a("b-col",{attrs:{sm:""}},[a("small",[a("b",[a("i",{staticClass:"fas fa-map-marker-alt text-danger"}),t._v(" Ort:")]),t._v(" "+t._s(t.$page.course.ort))])]),a("b-col",{attrs:{sm:""}},[a("small",[a("b",[a("i",{staticClass:"fas fa-chalkboard-teacher text-blue"}),t._v(" Instructor:")]),t._v(" "+t._s(t.$page.course.instructor))])])],1)],1)],1),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.richtextToHTML(t.$page.course.description))}}),a("div",{attrs:{id:"eventbrite-widget-container-79316994265",value:t.$page.course.eventbriteId}}),a("div",{staticClass:"w-100 p-2 mt-5 text-center"},[a("h3",[t._v("Termin passt nicht?")]),a("a",{staticClass:"typeform-share button my-4",staticStyle:{display:"inline-block","text-decoration":"none","background-color":"#4FA9B3",color:"white",cursor:"pointer","font-family":"Helvetica,Arial,sans-serif","font-size":"20px","line-height":"50px","text-align":"center",margin:"0",height:"50px",padding:"0px 33px","border-radius":"25px","max-width":"100%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","font-weight":"bold","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"},attrs:{href:"https://benediktmix651456.typeform.com/to/S4OD7M","data-mode":"drawer_right",target:"__blank"}},[t._v("Warteliste ")])])])}),[],!1,null,"749d997c",null);"function"==typeof c.default&&Object(c.default)(l);e.default=l.exports}}]);