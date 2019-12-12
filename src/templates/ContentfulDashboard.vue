<template>
  <Layout>
    <section class="my-5">
      <h1>{{ $page.dashboard.kurs.title }}</h1>
      <p>Instructor: {{ $page.dashboard.kurs.instructor }}</p>
      <p>Slack Workspace: {{ $page.dashboard.slack }}</p>
      <p>Ort: {{ $page.dashboard.kurs.ort }}</p>
      <p v-html="richtextToHTML($page.dashboard.infos)"></p>
      <b-button :href="$page.dashboard.drive" target="_blank" block>Curriculum & Inhalte</b-button>
      <b-button href="https://slack.com/signin" target="_blank" variant="primary" block>Slack Channel</b-button>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  dashboard: contentfulDashboard (id: $id) {
    title
    kurs {
      title
      instructor
      ort
      eventbriteId
    }
    drive
    slack
    infos
  }
}
</page-query>

<script>
import BlogContent from '@/components/BlogContent'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'


export default {
  components: {
    BlogContent,
  },
  metaInfo() {
    return {
      title: this.$page.dashboard.title,
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
        }
  }
}
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
}
p {
  // letter-spacing: 0.2px;
  line-height: 180%;
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
