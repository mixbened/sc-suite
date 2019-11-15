<template>
  <Layout>
    <Title title="Kurse" subtitle="subtitle"/>
      <li v-for="edge in $page.courses.edges" :key="edge.id">
        Article: {{ edge.node.title }}
        <g-link :to="edge.node.path">Zum Kurs</g-link>
      </li>
  </Layout>
</template>

<page-query>
query Kurs {
  courses :allContentfulKurs {
      edges {
        node {
          id
          title
          path
          eventbriteId
        }
      }
  }
}
</page-query>

<script>
import Title from '../components/Title'

export default {
    metaInfo: {
      title: 'Kurse'
    },
    components: {
      Title
    }
  }
</script>

<style lang="scss" scoped>
</style>
