<template>
  <Layout>
    <h1 class="my-4 mb-5">Kurse</h1>
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
  export default {
    metaInfo: {
      title: 'Kurse'
    }
  }
</script>

<style lang="scss" scoped>
</style>
