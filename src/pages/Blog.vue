<template>
  <Layout>
    <Title title="News" subtitle="subtitle"/>
      <li v-for="edge in $page.posts.edges" :key="edge.id">
        Article: {{ edge.node.title }}
        <g-link :to="edge.node.path">Zum Artikel</g-link>
      </li>
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
        }
      }
  }
}
</page-query>

<script>
import Title from '../components/Title'

export default {
    metaInfo: {
      title: 'Blog'
    },
    components: {
      Title
    }
  }
</script>

<style lang="scss" scoped>
</style>
