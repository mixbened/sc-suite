<template>
  <Layout>
    <section class="my-5">
      <b-container>
        <div class="my-5">
          <h2>{{ $page.post.title }}</h2>
          <p>Von <b>{{ $page.post.author }}</b> - {{ formatDate($page.post.date) }}</p>
        </div>
        <!-- <p v-html="richtextToHTML($page.post.blogContent)"></p> -->
      </b-container>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: contentfulBlogPost (id: $id) {
    title
    author
    date
    blogContent
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
      title: this.$page.post.title,
    }
  },
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content, {renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img class="img-fluid" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}">`
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
