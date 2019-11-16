<template>
  <Layout>
    <Title title="Für Unternehmen" subtitle="subtitle"/>
    <section class="section">
      <section>
        <b-row>
          <b-col cols="6" class="d-flex align-items-center">
            <b-row>
              <h4>Moderne Unternehmen</h4>
              <p>Moderne Unternehmen werden agiler, digitaler und interdisziplinärer. Um das auch wirklich nachhaltig umzusetzen sind die Fähigkeiten der Mitarbeiter gefragt. Wir bilden Mitarbeiter in Digitalkompetenz weiter</p>
            </b-row>
          </b-col>
          <b-col cols="6">
            <img class="img-fluid" alt="teamwork" src="../assets/lottie/feedback.gif">
          </b-col>
        </b-row>
      </section>
      <section>
        <b-row>
          <b-col cols="6" class="d-flex justify-content-flex-start">
            <img class="img-fluid" alt="teamwork" src="../assets/lottie/sketch-together.gif">
          </b-col>
          <b-col cols="6" class="d-flex align-items-center">
            <b-row>
              <h4>Bildung als Treiber</h4>
              <p>Offline is Hot! Mit dem E-Learning Trend gemeinsam wollen wir digitale Weiterbildung fördern. Wir glauben, es ist unabdingbar. Nun machen wir es auch für jeden greifbar. Für Mitarbeiter aus Management, Marketing oder Sales.</p>
            </b-row>
          </b-col>
        </b-row>
      </section>
      <section>
        <b-row>
          <b-col cols="6" class="d-flex align-items-center">
            <b-row>
              <h4>Zusammen die digitale Zukunft gestalten</h4>
              <p>Nach einem Tag oder nach drei Monaten Weiterbildung im Bereich Programmierung kann man das Gelernte auf verschiedene Weisen anwenden. Man kann die gewonnenen Kenntnisse nutzen um digitale Produkte besser zu verstehen oder sogar selber hier und da Hand anlegen und etwas selber entwickeln.</p>
            </b-row>
          </b-col>
          <b-col cols="6" class="d-flex justify-content-flex-start">
            <img class="img-fluid" alt="teamwork" src="../assets/lottie/problem-solving.gif">
          </b-col>
        </b-row>
      </section>
      <section class="section">
          <b-container class="text-center">
            <h1>Coding in One Day</h1>
            <h6 class="mx-5">Ziel von Code in one day ist es, ein interdisziplinäres Grundverständnis für digital-technische Themen im Unternehmen aufzubauen, um einen digitalen Denkansatz zu etablieren, ohne den Ansatz einer klassischen Weiterbildung zu verfolgen.</h6>
          </b-container>
          <b-container>
            <b-row>
              <b-col cols="6" class="d-flex align-items-center">
                <img class="img-fluid" alt="teamwork" src="../assets/images/course1.jpg" round/>
              </b-col>
              <b-col cols="6">
                <b-row class="py-5">
                  <b-col cols="3" class="text-center"><i class="fab fa-python fa-2x text-primary"></i></b-col>
                  <b-col cols="9" class="d-flex align-items-center">
                    <p>Zusammen die digitale Zukunft gestalten</p>
                  </b-col>
                </b-row>
                <b-row class="py-5">
                  <b-col cols="3" class="text-center"><i class="fab fa-python fa-2x text-primary"></i></b-col>
                  <b-col cols="9" class="d-flex align-items-center">
                    <p>Zusammen die digitale Zukunft gestalten</p>
                  </b-col>
                </b-row>
                <b-row class="py-5">
                  <b-col cols="3" class="text-center"><i class="fab fa-python fa-2x text-primary"></i></b-col>
                  <b-col cols="9" class="d-flex align-items-center">
                    <p>Zusammen die digitale Zukunft gestalten</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
      </section>
      <section class="section">
        <div class="card p-3">
          <b-container>
            <b-row>
              <b-col cols="6">
                <img class="img-fluid" alt="teamwork" src="../assets/images/course3.jpg">
              </b-col>
              <b-col cols="6">
                <h3>START.CODE Partnerschaft</h3>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </section>
    </section>
  </Layout>
</template>

<script>
import Title from '../components/Title'

export default {
  metaInfo: {
    title: 'Für Unternehmen'
  },
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
p {
  color: var(--gray);
  margin: 0;
}
</style>
