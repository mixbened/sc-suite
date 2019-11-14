<template>
    <section class="section">
        <h2 class="title is-2 has-text-centered">{{ title }}</h2>
        <!-- <h5 class="title is-6 has-text-centered">{{ subtitle }}</h5> -->
    </section>
</template>

<script>

export default {
  name: 'Title',
  props: ['title', 'subtitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  margin: 2em 0;
}
h2, h5 {
    letter-spacing: 0.1em;
    text-align: center;
}
h2 {
    color: white;
    background: #17a2b8;
    width: 40%;
    margin: 0 auto;
    text-transform: uppercase;
}
@media (max-width: 768px){
  h2 {
    width: 80%;
  }
}
</style>