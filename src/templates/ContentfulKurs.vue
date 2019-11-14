<template>
  <Layout>
    <h2>{{ $page.course.title }}</h2>
    <p v-html="richtextToHTML($page.course.description)"></p>
    <div id="eventbrite-widget-container-79316994265"></div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  course: contentfulKurs (id: $id) {
    title
    description
    eventbriteId
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
  mounted() {
    this.loadCheckout()
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

.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>
