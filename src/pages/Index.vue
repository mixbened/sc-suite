<template>
  <Layout>
    <section class="section">
      <b-container>
          <b-row class="text-center align-items-center">
          <b-col sm>
            <img width="120" alt="technology" src="../assets/images/visuals/team-graphics.png">
            <h4>Gemeinsam programmieren lernen</h4>
            <p class="text-center mt-3">
              <small>Im Kurs arbeitet man gemeinsam, womit der Spaßfaktor erhöht wird und direkt Fragen geklärt werden können.</small>
            </p>
          </b-col>
          <b-col sm>
            <img width="120" alt="technology" src="../assets/images/visuals/coach-graphics.png">
            <h4>Digitalkompetenz für den Arbeitsalltag</h4>
            <p class="text-center mt-3">
              <small>Nach den Kursen selber digitale Produkte entwickeln oder auch   Digitalisierung besser verstehen.</small>
            </p>
          </b-col>
          <b-col sm>
            <img width="120" alt="technology" src="../assets/images/visuals/workshop-graphics.png">
            <h4>Moderne Technologie für jeden</h4>
            <p class="text-center mt-3">
              <small>Wir verfolgen nicht das Ziel einer klassischen IT-Schulung, bei der Vokabeln und Fachbegriffe gepaukt werden.</small>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section">
      <div class="tile p-4">
        <h6 class="mb-4">Nachhaltige Digitalisierung für</h6>
        <b-container>
          <b-row class="text-center align-items-center">
          <b-col sm>
            <img width="120" alt="technology" src="../assets/images/partners/digihub.jpeg">
          </b-col>
          <b-col sm>
            <img width="120" alt="technology" src="../assets/images/partners/unity.png">
          </b-col>
          <b-col sm>
            <img width="120" alt="technology" src="../assets/images/partners/oscar.png">
          </b-col>
        </b-row>
      </b-container>
      </div>
    </section>
    <Newsletter />
  </Layout>
</template>

<script>
import Newsletter from '../components/Newsletter'

export default {
  metaInfo: {
    title: 'Programmieren ist für jeden'
  },
  components: {
    Newsletter
  }
}
</script>

<style lang="scss" scoped>
.tile {
  background-color: #e9ecef63;
  filter: grayscale(100%); 
  width: 100%;
  // height: 150px;
}
</style>
