<template>
  <Layout>
    <section class="section">
      <b-container class="text-center my-5 text-primary">
        <h1 class="headline">JUST CODE IT</h1>
        <p class="p-2 px-5" style="font-size: 1.3em;">Einfach mal selber prorgrammieren - Kurse für Business und Beginner. Wir geben Kurse um digitale Kompetenzen zu vermitteln im Bereich Web und Data. Damit bilden wir nicht nur Softwareentwickler aus, sondern bringen den essentiellen Teil der Digitalisierung an jeden.</p>
      </b-container>
      <b-container class="section">
        <b-row>
          <b-col class="d-flex justify-content-center" sm>
              <b-card img-alt="Card image" img-top>
                <img src="../assets/images/course4.jpeg" alt="course image" class="w-100"/>
                <b-card-text class="p-4">
                  Spannenden Kurse zu den Themen Web und Data an unseren Standorten in Köln und Düsseldorf
                </b-card-text>
                <b-button block href="#" variant="primary">Zu den Kursen</b-button>
              </b-card>
          </b-col>
          <b-col class="d-flex justify-content-center" sm>
            <g-link to="/blog">
              <b-card img-alt="Card image" img-top>
                <img src="../assets/images/course2.jpg" alt="course image" class="w-100"/>
                <b-card-text class="p-4">
                  Neuigkeiten und interessante Stories zu den Themen programmieren lernen und digitale Weiterbildung
                </b-card-text>
                <b-button block href="#" variant="primary">News & Tutorials</b-button>
              </b-card>
            </g-link>
          </b-col>
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
.wrapper {
  position: relative;
  margin-top: 15%;
}
.leiste {
  position: absolute;
  top: -10%;
  width: 100%;
  padding: 0 5%;
  // height: 100px;
}
.card-body {
  padding: 0;
}
.source-1 {
  background-image: url('../assets/images/course4.jpeg');
  background-size: cover;
  background-position: center;
  height: 200px;
}
.source-2 {
  background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  background-position: center;
  height: 200px;
}
</style>