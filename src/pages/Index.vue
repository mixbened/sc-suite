<template>
  <Layout>
    <section class="section">
      <b-container class="text-center my-5 text-primary">
        <h1 class="headline">JUST CODE IT</h1>
        <h5 class="p-2 px-5">Einfach mal selber prorgrammieren - Kurse für Business und Beginner</h5>
      </b-container>
      <b-container>
        <b-row>
          <b-col sm class="text-center m-2 p-3 card bg-secondary text-light">
            <h4>Kurse</h4>
            <b-button variant="light">Zu den Kursen</b-button>
          </b-col>
          <b-col sm class="text-center m-2 p-3 card bg-primary text-light">
            <h4>News & Tutorials</h4>
            <b-button variant="light">Mehr Wissen</b-button></b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section">
      <b-container class="text-center my-5">
        <h2>Was ist START.CODE?</h2>
      </b-container>
      <b-container>
          <b-row class="text-center align-items-center">
          <b-col sm>
            <img width="120" alt="technology" src="../assets/images/visuals/team-graphics.png">
            <h6>Gemeinsam programmieren lernen</h6>
            <p class="text-center mt-3">
              <small>Im Kurs arbeitet man gemeinsam, womit der Spaßfaktor erhöht wird und direkt Fragen geklärt werden können.</small>
            </p>
          </b-col>
          <b-col sm>
            <img width="120" alt="technology" src="../assets/images/visuals/coach-graphics.png">
            <h6>Digitalkompetenz für den Arbeitsalltag</h6>
            <p class="text-center mt-3">
              <small>Nach den Kursen selber digitale Produkte entwickeln oder auch   Digitalisierung besser verstehen.</small>
            </p>
          </b-col>
          <b-col sm>
            <img width="120" alt="technology" src="../assets/images/visuals/workshop-graphics.png">
            <h6>Moderne Technologie für jeden</h6>
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
            <img width="120" alt="technology" src="../assets/images/partners/mintkoeln-logo.png">
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
    <section class="section">
      <h4 class="subtitle">Unsere Vision</h4>
      <b-container>
        <b-row class="my-3">
          <b-col sm class="p-0">
            <p class="text-justify pr-3">Wir möchten als Teil des STARTPLATZES die Weiterbildung von Digitalkompetenz neu denken. Wir haben einen Anspruch an nachhaltiges Lernen und möchten dass jedem die passenden Lernumgebung geboten wird. Daher liegt unser Fokus auf der einzelnen Person. Wir schneidern maßgerechte Workshops für Teams und bestimmte Themen. Wir hören den Leute mit ihren Problemen zu und fördern sie. Dazu setzen wir auch Online Materialien aber auch stark auf den Offline-Austausch. Im Sinne des Blended Learning glaube wir an einen nachhaltigen Effekt durch die Auseinandersetzung mit neuen Konzepten in einem Umfeld der Kommunikation und praktischem testen. Digitalkomptenz heißt nicht Softwareentwickler auszubilden, aber an den Grundsätzen von digitalem den Bereich wirklich kennen zu lernen.</p> 
          </b-col>
          <b-col sm class="py-5 text-center">
            <img class="w-75" src="../assets/images/partners/startplatz.jpeg" alt="STARTPLATZ">
          </b-col>
        </b-row>
      </b-container>
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
.headline {
  font-size: 5rem;
}
</style>
