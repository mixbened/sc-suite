<template>
  <Layout>
    <section class="my-5">
      <b-container>
        <div class="my-5">
          <h2>{{ $page.post.title }}</h2>
          <p>Von <b>{{ $page.post.author }}</b> - {{ formatDate($page.post.date) }}</p>
        </div>
        <Content :data="$page.post.blogContent"/>
        <b-row>
          <b-col>  
            <b-card no-body class="overflow-hidden">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Digitale Bildung für alle">
                    <b-card-text>
                      Wenn du dich für weitere Themen interessierst, schau auch unsere anderen Beiträge an. Unter Kursen findest du unsere aktuelle anstehenden Kurs in Düsseldorf und Köln.
                    </b-card-text>
                    <g-link to="/kurse"><b-button class="mx-2" variant="info">Kurse</b-button></g-link>
                    <g-link to="/blog"><b-button class="mx-2" variant="dark">Artikel</b-button></g-link>
                  </b-card-body>
                </b-col>
              </b-row>
              </b-card>
          </b-col>
        </b-row>
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
import Content from '../components/Content'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'


export default {
  components: {
    BlogContent,
    Content
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
