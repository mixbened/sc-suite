<template>
  <Layout>
    <Title title="Kontakt" subtitle="subtitle"/>
    <section class="section">
      <section class="section">
        <div class="row align-items-center">
          <div class="col-sm text-center">
                <img class="img-fluid profile" src="../assets/images/christine-schluetz.jpg" fluid alt="christine schlütz">
                <h5 class="title is-5">Christine Schlütz</h5>
                <div>Program Manager START.CODE</div>
                <div>Email: christine.schluetz@startplatz.de</div>
                <div>Tel: +49 (0)1578 0535 600</div>
                <p></p>
          </div>
          <div class="col-sm">
            <div class="bar">Deine Nachricht</div>
            <lottie-player v-if="check"
                src="https://assets5.lottiefiles.com/packages/lf20_8SdEu9.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay >
            </lottie-player>
            <form v-if="!check" class="card contact-form" ref="form" action="https://formspree.io/xvogdrpw" method="POST">
          
              <b-form-group
                label="Name"
                label-for="name-input"
                invalid-feedback="Name is required"
                description="Wir behandeln deinen Informationen vertraulich."
              >

                <b-form-input
                  id="name-input"
                  v-model="name"
                  name="name"
                  placeholder="Name"
                  required
                ></b-form-input>
              
              </b-form-group>
              
              <b-form-group
                label="Email"
                label-for="email-input"
                invalid-feedback="Email is required"
              >

                <b-form-input
                  id="email-input"
                  name="_replyto"
                  v-model="email"
                  placeholder="Email"
                  required
                ></b-form-input>
              
              </b-form-group>
              
              <b-form-group
                label="Nachricht"
                label-for="nachricht-input"
              >

                <b-form-textarea
                  id="nachricht-input"
                  v-model="nachricht"
                  placeholder="Deine Nachricht ..."
                  name="message"
                  required
                ></b-form-textarea>
              
              </b-form-group>
              <b-button @click="check != check" type="submit" variant="primary">Senden</b-button>
          </form>
          </div>
        </div>
      </section>
      <section class="section">
        <Banner title="Wie können wir dir helfen?" text="Du weißt noch nicht genau, welcher Kurs der Richtige für dich ist? Kein Problem! Wir helfen dir dabei, den Kurs zu finden, der zu deinen Bedürfnissen und Zielen passt. Auch wenn du Fragen zu unserem Angebot für Unternehmen hast, freuen wir uns über eine Nachricht."/>
      </section>
    </section>
  </Layout>
</template>

<script>
import Title from '../components/Title'
import Banner from '../components/Banner'
import axios from 'axios'

  export default {
    metaInfo: {
      title: 'Kontakt aufnehmen'
    },
    data(){
      return {
        name: '',
        email: '',
        nachricht: '',
        showForm: false,
        check: false
      }
    },
    components: {
      Title,
      Banner
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
.profile {
  border-radius: 100%;
  width: 200px;
  height: 200px;
}
.visual {
  width: 50%;
  margin: 0 auto;
  display: block;
}
.bar {
  margin: 0;
  width: 100%;
  padding: 1em;
  background: var(--primary);
  color: var(--light);
  font-weight: 800;
}
.contact-form {
  padding: 1em;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
