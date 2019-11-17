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
          <b-container class="text-center my-5">
            <h1>CODE.INONEDAY</h1>
            <p class="p-2 px-5">Innerhalb von einem Tag zum Programmierer? So schön ist es nicht, aber das ist auch nicht unser Anspruch. Innerhalb eines Tages-Workshops lernen wir mit einem Team eine Programmiersprache kennen und entwickeln anhand dieser eigene Lösungen. From Scratch!</p>
          </b-container>
          <b-container>
            <b-row>
              <b-col cols="6" class="d-flex align-items-center">
                <img class="img-fluid rounded" alt="teamwork" src="../assets/images/course1.jpg" round/>
              </b-col>
              <b-col cols="6">
                <b-row class="py-4">
                  <b-col cols="3" class="text-right"><i class="fas fa-database fa-2x text-primary"></i></b-col>
                  <b-col cols="9" class="d-flex align-items-center">
                    <small>Moderne Technologien, die eine direkte Anwendung im Arbeitsalltag auch eines Nicht-ITler ermöglichen und so die Arbeitskraft stärken.</small>
                  </b-col>
                </b-row>
                <b-row class="py-4">
                  <b-col cols="3" class="text-right"><i class="fas fa-chalkboard-teacher fa-2x text-primary"></i></b-col>
                  <b-col cols="9" class="d-flex align-items-center">
                    <small>Vor-Ort Kurse, welche einen hohen Lerneffekt verursachen, welcher mit Online-Materialien im Anschluss weiter verstärkt werden kann.</small>
                  </b-col>
                </b-row>
                <b-row class="py-4">
                  <b-col cols="3" class="text-right"><i class="fas fa-laptop-code fa-2x text-primary"></i></b-col>
                  <b-col cols="9" class="d-flex align-items-center">
                    <small>Prakrtische Anwendung der Themen direkt am eigenen Computer, aber doch keine klassische IT-Schulung.</small>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
          <b-container class="my-5">
            <b-row>
              <b-col cols="6">
                <h5 class="my-4">Beispielhafte Agenda</h5>
                <b-list-group>
                  <b-list-group-item class="d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <b-badge variant="primary" pill>14</b-badge>
                  </b-list-group-item>

                  <b-list-group-item class="d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <b-badge variant="primary" pill>2</b-badge>
                  </b-list-group-item>

                  <b-list-group-item class="d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <b-badge variant="primary" pill>1</b-badge>
                  </b-list-group-item>
                </b-list-group>
              </b-col>
              <b-col cols="6">
              <h5 class="my-4">Technologien</h5>
                <p>Es ist wichtig während des Kurses eine Leittechnologie vorzugeben. Anahand dieser können direkte Hard-Skills erworben werden, welche dann gemeinsam mit dem Kennen lernen der Prozesse und Konzepte direkt einen Mehrwert geben.</p>
                <b-row class="text-center my-4">
                  <b-col cols="4">
                    <i class="fab fa-python fa-3x"></i>  
                    <h6 class="my-2">Python</h6>
                  </b-col>
                  <b-col cols="4">
                    <i class="fas fa-table fa-3x"></i>  
                    <h6 class="my-2">SQL</h6>
                  </b-col>
                  <b-col cols="4">
                    <i class="fab fa-js-square fa-3x"></i>    
                    <h6 class="my-2">JavaScript</h6>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
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
small {
  color: var(--gray);
  margin: 0;
}
</style>
