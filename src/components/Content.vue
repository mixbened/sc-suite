<template>
    <div>
        <div v-html="richtextToHTML(data)"></div>
    </div>
</template>

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
    }
  },
  props: ['data'],
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
</style>
