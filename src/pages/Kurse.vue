<template>
  <Layout>
    <Title title="Kurse" subtitle="subtitle"/>
      <section class="section">
      <b-container>
        <b-row>
          <b-col v-for="edge in $page.courses.edges" :key="edge.id" class="my-4 px-4" sm>
            <CourseCard :title="edge.node.title" :start="edge.node.start" :dauer="edge.node.duration" :path="edge.node.path" :titleImage="edge.node.titleImage" :ort="edge.node.ort" :excerpt="edge.node.excerpt"/>
          </b-col>
        </b-row>
      </b-container>
    </section>
      <section class="section">
      <b-container class="text-center my-5">
        <h2>Erfolgsgeschichten</h2>
        <p class="p-2 px-5">Wer START.CODE Kurse besucht hat und was sie dazu zu sagen haben, erfahrt ihr hier.</p>
      </b-container>
      <b-container>
        
        <b-row>
          
        </b-row>
      </b-container>
    </section>
    <section class="section">
      <b-container class="text-center my-5">
        <h2>Location</h2>
        <p class="p-2 px-5">START.CODE Kurse werden im STARTPLATZ abgehalten. Der STARTPLATZ ist der größte Startup Inkubator in NRW und vermittelt zwischen etablierten Unternehmen und erfolgreichen Startups. Der ideale Standort für Innovation und Technik</p>
      </b-container>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          caption="STARTPLATZ Köln"
          img-src="https://www.startplatz.de/wp-content/uploads/2016/04/STARTPLATZ_Au%C3%9Fenansicht_900X600.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="STARTPLATZ Düsseldorf"
          img-src="https://www.startplatz.de/wp-content/uploads/2018/05/design_thinking_im_startplatz_duesseldorf.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="STARTPLATZ Düsseldorf"
          img-src="https://www.startplatz.de/wp-content/uploads/2016/04/STARTPLATZ-D%C3%BCsseldorf.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="STARTPLATZ Köln"
          img-src="https://res.cloudinary.com/startplatz/image/upload/v1562766047/conference-rooms/koeln/InsurTech-Week-2018_InsurTech-Konferenz-und-BBQ0_Kopie_2.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="STARTPLATZ Köln"
          img-src="https://res.cloudinary.com/startplatz/image/upload/v1562766134/conference-rooms/koeln/tagungsraum_mit_balkon_koeln.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </section>
    <Banner />
  </Layout>
</template>

<page-query>
query Kurs {
  courses: allContentfulKurs {
      edges {
        node {
          id
          title
          start
          path
          excerpt
          duration
          ort
          titleImage {
            file {
              url
            }
          }
        }
      }
  }
}
</page-query>

<script>
import Title from '../components/Title'
import CourseCard from '../components/CourseCard'
import Banner from '../components/Banner'

export default {
    metaInfo: {
      title: 'Kurse'
    },
    components: {
      Title,
      CourseCard
    }
  }
</script>

<style lang="scss" scoped>
</style>
