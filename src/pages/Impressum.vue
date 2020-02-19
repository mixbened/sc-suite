<template>
  <Layout>
    <Title title="Impressum" subtitle="subtitle"/>
    <b-container class="w-50 text-center mt-5"><b>
      Firmenwortlaut: c/o STARTPLATZ Köln GmbH 
      Firmensitz: Dietrich-Bonhoeffer Str. 5, D-50354
    </b></b-container>
  </Layout>
</template>

<script>
import Title from '../components/Title'

export default {
  metaInfo: {
    title: 'Impressum'
  },
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
</style>
