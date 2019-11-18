<template>
  <Layout>
    <Title title="News" subtitle="subtitle"/>
    <section class="section">
      <b-container>
        <ArticleCard class="my-5" v-for="edge in $page.posts.edges" :key="edge.id" :title="edge.node.title" :date="edge.node.date" :path="edge.node.path" :titleImage="edge.node.titleImage" :author="edge.node.author" :excerpt="edge.node.excerpt"/>
      </b-container>
    </section>
    <Newsletter />
  </Layout>
</template>

<page-query>
query Post {
  posts:allContentfulBlogPost(sortBy: "date") {
      edges {
        node {
          title
          id
          date
          path
          author
          excerpt
          titleImage {
            file {
              url
            }
          }
        }
      }
  }
}
</page-query>

<script>
import Title from '../components/Title'
import ArticleCard from '../components/ArticleCard'
import Newsletter from '../components/Newsletter'

export default {
    metaInfo: {
      title: 'Blog'
    },
    components: {
      Title,
      ArticleCard,
      Newsletter
    }
  }
</script>

<style lang="scss" scoped>
</style>
