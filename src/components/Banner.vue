<template>
    <section class="section banner mt-5">
        <div class="container">
            <h2 class="title is-2">{{ title }}</h2>
            <p class="content">{{ text }}</p>
            <g-link v-if="cta || action" :to="cta"><b-button variant="light">{{ action }}</b-button></g-link>
        </div>
    </section>
</template>

<script>

export default {
  name: 'Banner',
  props: ['title', 'text', 'cta', 'action']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
    background: linear-gradient(to right,#2a3758, #17a2b8);
    color: white;
    text-align: center;
    padding: 2%;
    border-radius: 5px;
}
h2 {
    color: white;
}
.banner > * .content {
    width: 50%;
    margin: 3% auto;
}
@media (max-width: 768px){
    .banner > * .content {
        width: 80%;
    }
}
</style>