<template>
  <Layout>
    <Title title="FAQ" subtitle="subtitle"/>
      <section class="section">
      <div>
        <b-card no-body>
          <b-tabs pills card vertical nav-wrapper-class="w-50">
            <b-tab title="Was ist START.CODE?" active><b-card-text><h5>Was ist START.CODE?</h5>START.CODE ist eine Coding Schule, wo du aktuelle Programmiersprachen in kleinen Klassen von 10-12 Leuten lernen kannst. Unsere Mission ist es IT-Skills auf eine spannende Art und Weise zu unterrichten.</b-card-text></b-tab>
            <b-tab title="Welche Skills erlerne ich mit START.CODE?"><b-card-text><h5>Welche Skills erlerne ich mit START.CODE?</h5>Bei uns lernst du aktuelle Coding Skills, die bei IT-Unternehmen nachgefragt werden. Unsere Coding Kurse richten sich sowohl an AnfängerInnen als auch an Fortgeschrittene.</b-card-text></b-tab>
            <b-tab title="Wer unterrichtet die START.CODE Kurse?"><b-card-text><h5>Wer unterrichtet die START.CODE Kurse?</h5>Die TrainerInnen sind IT-Profis: Sie arbeiten entweder als ProgrammiererInnen oder sind IT-Selbstständige. Sie sind erfahren und können dir Coding beibringen und dir zeigen, wie das Leben einer/s CoderIn aussieht.</b-card-text></b-tab>
            <b-tab title="Warum sollte ich das Programmieren lernen?"><b-card-text><h5>Warum sollte ich das Programmieren lernen?</h5>Digitale Skills sind heutzutage in jedem Beruf von Nutzen. Egal ob als Praktikant, Angestellter oder Gründer - mit einem Grundwissen im Programmieren bist du vielen anderen einen Schritt voraus! In unserem Kurs Web Development 1 lernst du die Basics des Programmierens und kannst für dich herausfinden, ob das Programmieren etwas für dich ist und inwieweit du deine Kenntnisse noch vertiefen möchtest. :)</b-card-text></b-tab>
            <b-tab title="Woher weiß ich, welche Programmiersprache die richtige für mich ist?"><b-card-text><h5>Woher weiß ich, welche Programmiersprache die richtige für mich ist?</h5>Das ist eine Frage, die sich viele am Anfang stellen. Am Ende des Tages ist es nicht entscheidend, welche Sprache du lernst, weil die Grundprinzipien des Programmierens in jeder Programmiersprache die gleichen sind. Wir unterrichten JavaScripts (im Web Development Kurs), da es eine sehr Anfänger/innen-freundliche Programmiesprache ist.</b-card-text></b-tab>
            <b-tab title="Welchen Kurs soll ich besuchen?"><b-card-text><h5>Welchen Kurs soll ich besuchen?</h5>Wenn du Coding AnfängerIn bist, solltest du das Web Development 1 zuerst besuchen, damit du herausfinden kannst, ob Programmieren überhaupt das Richtige für dich ist und ob es etwas ist, was du künftig machen willst (entweder als Hobby oder beruflich).</b-card-text></b-tab>
            <b-tab title="Ich habe keinen IT-Background, ist es das Richtige für mich?"><b-card-text><h5>Ich habe keinen IT-Background, ist es das Richtige für mich?</h5>Wenn du Anfänger bist, bist du bei uns richtig. Um die Grundlagen des Programmierens zu erlernen kannst du super den Web Development Kurs besuchen. Unser Curriculum ist so aufgebaut, dass die Folgekurse auf dem erlernten Grundwissen aufbauen und du dein Wissen in jedem Kurs erweitern kannst. :)</b-card-text></b-tab>
            <b-tab title="Ich habe keine Erfahrung im Programmieren, kann ich trotzdem teilnehmen?"><b-card-text><h5>Ich habe keine Erfahrung im Programmieren, kann ich trotzdem teilnehmen?</h5>Unsere Grundlagenkurse sind perfekt für Personen ohne Coding-Background. Schau Dir doch einmal den Kurs Web Development an, dieser ist auf Anfänger ausgerichtet.</b-card-text></b-tab>
            <b-tab title="Ab wann darf ich an einem Kurs teilnehmen?"><b-card-text><h5>Ab wann darf ich an einem Kurs teilnehmen?</h5>Normalerweise sind die Kurse für Personen ab 18 Jahren vorgesehen, solltest du aber älter als 15 Jahre alt sein, darfst du gerne an einem Kurs teilnehmen. Sprich uns hierzu auch gerne an. :)</b-card-text></b-tab>
            <b-tab title="Bekomme ich eine Teilnahmebescheinigung oder ein Zertifikat?"><b-card-text><h5>Bekomme ich eine Teilnahmebescheinigung oder ein Zertifikat?</h5>Natürlich stellen wir dir am Ende eines jeden Kurses eine Teilnahmebestätigung aus. :)</b-card-text></b-tab>
          </b-tabs>
        </b-card>
      </div>
    </section>
    <Banner title="Weitere Fragen" text="Nimm direkt Kontakt zu uns auf!" cta="/contact" action="Direktnachricht" />
  </Layout>
</template>

<script>
import Title from '../components/Title'
import Banner from '../components/Banner'

export default {
  metaInfo: {
    title: 'Partner'
  },
  components: {
    Title,
    Banner
  }
}
</script>

<style lang="scss" scoped>
</style>
