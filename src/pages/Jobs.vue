<template>
  <Layout>
    <Title title="Jobs" subtitle="subtitle"/>
    <b-container class="text-center">
      <img class="img-fluid" width="400" src="../assets/images/visuals/trainer-graphics.png">
    </b-container>
      <b-container>
        <h2>Coding Instructor (m/w/d)</h2>
        <b><i class="fas fa-map-marker-alt text-primary"></i> Köln, Düsseldorf</b>
        <p>Wir suchen motivierte Instructors, die wirklich Lust haben zu lehren. Bei uns ist nicht von Bedeutung, ob du jahrelang Tech Lead in einer großen Firma warst. Um bei uns Kurse zu geben, solltest du einfach Spaß am unterrichten haben und einfache Programmierkonzepte noch einfacher darstellen können.</p>
        <h5>Aufgabenbereiche</h5>
        <ul>
          <li>Du erstellst Kurskonzepte für die Bereiche Web, Data und App Development oder einer dieser Themen</li>
          <li>Du kommunizierst mit Unternehmen oder individuellen Kursteilnehmern bezüglich Kursinhalten</li>
          <li>Du unterrichtest abends, am Wochendende oder Inhouse Kurse (alle Konstellationen auch einzeln möglich)</li>
        </ul>
        <h5>Das bringst du mit</h5>
        <ul>
          <li>Du kennst dich mit einer oder mehreren der folgenden Technologien aus: Python, JavaScript, HTML, CSS, SQL, Flutter</li>
          <li>Motivation zum Lehren von Informationstechnologien</li>
          <li>ausgeprägte Kommunikationsfähigkeiten</li>
        </ul>
        <h5>Das bieten wir dir</h5>
        <ul>
          <li>verschiedene Anstellungsarten: Freiberuflich, Vollzeit, Teilzeit, Remote</li>
          <li>einen flexiblen Nebenjob</li>
          <li>die Möglichkeit mit qualitativer Bildung einen Unterschied zu machen</li>
          <li>Das Gehalt beträgt für Freiberufler pro Session (1,5h) 100€ inkl. USt.</li>
        </ul>
        <h5>Passt für dich?</h5>
        <p>Melde dich bei uns mit einem Lebenslauf, vielleicht ein Link zu deinem LinkedIn, Xing Profil oder Github und schreibe uns einfach eine Mail. Ein Anschreiben o.ä ist nicht erforderlich.</p>
        <a href="mailto: startcode@startplatz.de"><b-button>Bewerben</b-button></a>
      </b-container>
  </Layout>
</template>

<script>
import Title from '../components/Title'

export default {
  metaInfo: {
    title: 'Jobs'
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
