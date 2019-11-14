<template>
  <Layout>
    <h2>{{ $page.post.title }}</h2>
    <p v-html="richtextToHTML($page.post.blogContent)"></p>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: contentfulBlogPost (id: $id) {
    title
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
            return `<img class="img-fluid" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}"/>`
          }
      }})
    }
  }
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
