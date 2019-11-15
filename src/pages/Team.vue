<template>
  <Layout>
    <Title title="Über uns" subtitle="subtitle"/>
    <section class="section">
      <div class="row mt-5">
        <div class="col-sm text-center">
            <img class="img-fluid profile" src="../assets/images/christine-schluetz.jpg" fluid alt="christine schluetz">
            <h5 class="title is-5">Christine Schlütz</h5>
            <div>Program Manager START.CODE</div>
            <div>Email: christine@start-code.de</div>
            <div>Tel: +49 (0)1578 0535 600</div>
        </div>
        <div class="col-sm text-center">
            <img class="img-fluid profile" src="../assets/images/lorenz-graef.jpg" fluid alt="lorenz graef">
            <h5 class="title is-5">Lorenz Gräf</h5>
            <div>Managing Director START.CODE</div>
            <div>Email: ben@start-code.de</div>
            <div>Tel: +49 (0)163 7398 552</div>
        </div>
        <div class="col-sm text-center">
            <img class="img-fluid profile" src="../assets/images/benedikt-mix.jpg" fluid alt="benedikt mix">
            <h5 class="title is-5">Benedikt Mix</h5>
            <div>Head Instructor START.CODE</div>
            <div>Email: ben@start-code.de</div>
            <div>Tel: +49 (0)163 7398 552</div>
        </div>
      </div>
    </section>
    <section class="section">
      <h4 class="subtitle">Unsere Vision</h4>
      <b-container>
        <b-row class="my-3">
          <b-col sm class="p-0">
            <p class="text-justify pr-3">Wir möchten die Weiterbildung von Digitalkompetenz neu denken. Wir haben einen Anspruch an nachhaltiges Lernen und möchten dass jedem die passenden Lernumgebung geboten wird. Daher liegt unser Fokus auf der einzelnen Person. Wir schneidern maßgerechte Workshops für Teams und bestimmte Themen. Wir hören den Leute mit ihren Problemen zu und fördern sie. Dazu setzen wir auch Online Materialien aber auch stark auf den Offline-Austausch. Im Sinne des Blended Learning glaube wir an einen nachhaltigen Effekt durch die Auseinandersetzung mit neuen Konzepten in einem Umfeld der Kommunikation und praktischem testen. Digitalkomptenz heißt nicht Softwareentwickler auszubilden, aber an den Grundsätzen von digitalem den Bereich wirklich kennen zu lernen.</p> 
          </b-col>
          <b-col sm>
            <lottie-player 
               class="lottie" src="https://assets10.lottiefiles.com/temp/lf20_aKAfIn.json"  background="transparent"  speed="1" loop autoplay style="display:flex; justify-content: center; width: 350px;">
            </lottie-player>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- <section class="section">
      <h4 class="subtitle">Unsere Instruktoren</h4>
    </section> -->
  </Layout>
</template>

<script>
import Title from '../components/Title'

export default {
  metaInfo: {
    title: 'Über uns'
  },
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
.profile {
  border-radius: 100%;
  width: 200px;
  height: 200px;
}
#shadow-root {
  background: red;
}
</style>
