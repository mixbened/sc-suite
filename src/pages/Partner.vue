<template>
  <Layout>
    <Title title="Partner" subtitle="subtitle"/>
    <section class="section">
      <b-container>
        <b-row class="text-center align-items-center">
          <b-col sm><img width="200" alt="digihub" src="../assets/images/partners/digihub.jpeg"></b-col>
          <b-col sm><img width="200" alt="homelike" src="../assets/images/partners/homelike.jpeg"></b-col>
          <b-col sm><img width="200" alt="startplatz" src="../assets/images/partners/startplatz.jpeg"></b-col>
        </b-row>
        <b-row class="text-center align-items-center">
          <b-col sm><img width="200" alt="tectrion" src="../assets/images/partners/tectrion.gif"></b-col>
          <b-col sm><img width="200" alt="female innovation hub" src="../assets/images/partners/innovation-hub.png"></b-col>
          <b-col sm><img width="200" alt="startplatz" src="../assets/images/partners/foxbase.jpg"></b-col>
        </b-row>
        <b-row class="text-center align-items-center">
          <b-col sm><img width="200" alt="Komm IT" src="../assets/images/partners/kommit.jpg"></b-col>
          <b-col sm><img width="200" alt="Unitymedia" src="../assets/images/partners/unity.png"></b-col>
          <b-col sm><img width="200" alt="oscar consulting" src="../assets/images/partners/oscar.png"></b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section">
      <h4 class="subtitle">Partnerschaften & Kooperationen</h4>
      <b-container>
        <b-row class="my-3">
          <b-col sm class="p-0">
            <p class="text-justify pr-3">Wir lieben und pflegen Kooperationen. Wir arbeiten mit verschiedenen Partnern auf unterschiedlichen Ebenen zusammen. Von Vernetzung von Talenten über gemeinsame Workshops hin zu Ausbildung der Mitarbeiter. Vieles ist möglich! Sprecht uns einfach an, dann unterhalten wir uns unverbindlich.</p> 
            <b-button variant="primary">Deine Nachricht an uns</b-button>
          </b-col>
          <b-col sm>
            <img alt="group" class="img-fluid p-0" src="../assets/images/sp-group.jpeg">
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section">
      <Newsletter />
    </section>
  </Layout>
</template>

<script>
import Title from '../components/Title'
import Newsletter from '../components/Newsletter'

export default {
  metaInfo: {
    title: 'Partner'
  },
  components: {
    Title,
    Newsletter
  }
}
</script>

<style lang="scss" scoped>
.mini-info {
  font-size: .8em;
}
img {
  padding: 1em;
}
</style>
