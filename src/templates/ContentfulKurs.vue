<template>
  <Layout>
    <section>
      <div class="course-image d-flex align-items-center" :style="'background-image: url(' + $page.course.titleImage.file.url + ')'" :alt="'Course' + $page.course.title">
        <div class="w-100">
            <h2 class="imageBanner">{{ $page.course.title }}</h2>
            <h3 class="imageBanner subline">{{ $page.course.ort }}</h3>
        </div>
      </div>
      <b-container class="my-2">
        <b-row class="text-center">
          <b-col sm>
            <small><b><i class="fas fa-calendar-week text-secondary"></i> Start:</b> {{ formatDate($page.course.start) }}</small>
          </b-col>
          <b-col sm>
            <small><b><i class="fas fa-graduation-cap text-success"></i> Dauer:</b> {{ $page.course.duration }}</small>
          </b-col>
          <b-col sm>
            <small><b><i class="fas fa-map-marker-alt text-danger"></i> Ort:</b> {{ $page.course.ort }}</small>
          </b-col>
          <b-col sm>
            <small><b><i class="fas fa-chalkboard-teacher text-blue"></i> Instructor:</b> {{ $page.course.instructor }}</small>
          </b-col>
        </b-row>
      </b-container>
    </section>
      <p v-html="richtextToHTML($page.course.description)"></p>
      <div id="eventbrite-widget-container-79316994265"></div>
      <div class="w-100 p-2 mt-5 text-center">
        <h3>Termin passt nicht?</h3>
        <a class="typeform-share button my-4" href="https://benediktmix651456.typeform.com/to/S4OD7M" data-mode="drawer_right" style="display:inline-block;text-decoration:none;background-color:#4FA9B3;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:25px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" target="__blank">Warteliste </a>
      </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  course: contentfulKurs (id: $id) {
    title
    description
    eventbriteId
    ort
    start
    instructor
    duration
    titleImage {
      file {
        url
      }
    }
  }
}
</page-query>

<script>
import BlogContent from '@/components/BlogContent'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export default {
  components: {
  },
  metaInfo() {
    return {
      title: this.$page.course.title,
      id: this.$page.course.eventbriteId
    }
  },
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content, {renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img class="img-fluid" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}"/>`
          }
      }})
    },
    formatDate(date){
      let ndate = new Date(date)
      const months = ["Januar", "Februar", "März","April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
      return ndate.getDate() + ". " + months[ndate.getMonth()] + " " + ndate.getFullYear()   
    },
    loadCheckout(id){
    var exampleCallback = function() {
        console.log('Order complete!');
        $router.push('/kurse')
    };

    window.EBWidgets.createWidget({
            // Required
            widgetType: 'checkout',
            eventId: '79316994265',
            iframeContainerId: 'eventbrite-widget-container-79316994265',

            // Optional
            iframeContainerHeight: 200,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
            onOrderComplete: exampleCallback  // Method called when an order has successfully completed
        })
    }
  },
  loadlist(){
    var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/";
    if(!gi.call(d,id)){ 
      js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; 
      q.parentNode.insertBefore(js,q)
    } 
  },
  mounted() {
    this.loadCheckout()
    this.loadlist()
  },
}
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;
  
  .label {
    font-weight: bold;
  }
}

.course-image {
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  position: relative;
  // padding: 0 20%;
}

.imageBanner {
  background-color: var(--secondary);
  color: var(--light);
  padding: 1%;
  text-transform: uppercase;
  font-size: 2em;
  text-align: center;
  margin: 0 auto;
  width: max-content;
  // display: inline-block;
}

.subline {
  background-color: var(--warning);
  color: var(--primary);
  font-size: 1.3em;
}

.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>
