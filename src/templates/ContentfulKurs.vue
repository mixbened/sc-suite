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
      <Content class="my-4" :data="$page.course.description"/>
      <div id="eventbrite-widget-container-79316994265" :value="$page.course.eventbriteId"></div>
      <div class="w-100 p-2 mt-5 text-center">
        <h3>Termin passt nicht?</h3>
        <div>
          <b-button v-b-modal.modal-1>Warteliste</b-button>
          <b-modal id="modal-1" title="Warteliste" ok-disabled="true">
            <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_signup">
            <form action="https://start-code.us20.list-manage.com/subscribe/post?u=e8429b1b1cc6f7df4af8fbf90&amp;id=2e53d86122" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
              <h5>Lass uns ein paar Information von dir da, damit wir dich informieren können, wenn es neue Kurse und Angebote bei START.CODE gibt!</h5>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            
            <div class="mc-field-group">
              <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
              <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
            </div>

            <div class="mc-field-group">
              <label for="mce-FNAME">First Name </label>
              <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
            </div>

            <div class="mc-field-group">
              <label for="mce-LNAME">Last Name </label>
              <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
            </div>

            <div class="mc-field-group">
              <label for="mce-LNAME">When do you want to attend? </label>
              <input type="text" value="" name="MMERGE9" class="" id="mce-LNAME">
            </div>

            <div class="mc-field-group">
              <label for="mce-MMERGE7">Waitlist <span class="asterisk">*</span></label>
              <select name="MMERGE7" id="mce-MMERGE7" required>
                <option value="Python">Python</option>
                <option value="Data Science">Data Science</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
              </select>
            </div>

            <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                <div class="content__gdpr">
                    <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                <label class="checkbox subfield" for="gdpr_27217"><input type="checkbox" id="gdpr_27217" name="gdpr[27217]" value="Y" class="av-checkbox "><span>Ich bin einverstanden mit der Datenverarbeitung nach den <g-link to="/data-privacy">Datenschutzbestimmungen</g-link></span></label>
                    </fieldset>
                    <p>Sie können sich jederzeit abmelden, indem Sie auf den Link in der Fußzeile unserer E-Mails klicken. Informationen zu unseren Datenschutzpraktiken finden Sie auf unserer Website.</p>
                </div>
                <div class="content__gdprLegal">
                    <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
                </div>
            </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e8429b1b1cc6f7df4af8fbf90_2e53d86122" tabindex="-1" value=""></div>
                <div class="clear"><input @click="$bvModal.hide('modal-1')	" type="submit" value="Einschreiben" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary"></div>
                </div>
            </form>
            </div>
            <template v-slot:modal-footer>
              <div class="w-100">
              </div>
            </template>
            <!--End mc_embed_signup-->
          </b-modal>
        </div>
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
import Content from '../components/Content'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export default {
  metaInfo() {
    return {
      title: this.$page.course.title,
      id: this.$page.course.eventbriteId
    }
  },
  components: {
    Content
  },
  data(){
    return {
      id: this.course
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
      // console.log('Load Checkout')
      var exampleCallback = function() {
          console.log('Order complete!');
          this.$router.push('/kurse')
      };

      window.EBWidgets.createWidget({
              // Required
              widgetType: 'checkout',
              eventId: id,
              iframeContainerId: 'eventbrite-widget-container-79316994265',

              // Optional
              iframeContainerHeight: 200,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
              onOrderComplete: exampleCallback  // Method called when an order has successfully completed
          })
    },
    loadlist(){
      var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/";
      if(!gi.call(d,id)){ 
        js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; 
        q.parentNode.insertBefore(js,q)
      } 
    }
  },
  mounted() {
    // console.log('Get ID')
    // console.log('Mounting...')
    let id = document.getElementById('eventbrite-widget-container-79316994265').getAttribute('value')
    // console.log('Load Checkout', id)
    this.loadCheckout(id)
    this.loadlist()
    // console.log(this.$page.course.title)
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
