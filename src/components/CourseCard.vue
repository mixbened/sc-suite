<template>
        <div>
        <b-card
            :title="title"
            :img-src="titleImage.file.url"
            img-alt="Article Image"
            img-top
            tag="article"
            class="mb-2"
        >
            <b-card-text>
                <div class="my-2"><small>{{ excerpt }}</small>   </div>
                <div><small><b><i class="fas fa-calendar-week text-secondary"></i> Start:</b> {{ formatDate(start) }}</small></div>
                <div><small><b><i class="fas fa-graduation-cap text-success"></i> Dauer:</b> {{ dauer }}</small></div>
                <div><small><b><i class="fas fa-map-marker-alt text-danger"></i> Ort:</b> {{ ort }}</small></div>
            </b-card-text>

            <g-link :to="path"><b-button block variant="primary">Infos & Anmeldung</b-button></g-link>
        </b-card>
        </div>
</template>

<script>

export default {
  name: 'CourseCard',
  props: ['title', 'titleImage', 'path', 'start', 'author', 'dauer', 'ort', 'excerpt'],
  methods: {
        formatDate(date){
            let ndate = new Date(date)
            const months = ["Januar", "Februar", "März","April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
            return ndate.getDate() + ". " + months[ndate.getMonth()] + " " + ndate.getFullYear()   
        }
    }
}
</script>

<style lang="scss" scoped>
.card-title {
    font-size: 1.2em;
}
</style>