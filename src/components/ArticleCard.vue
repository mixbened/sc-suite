<template>
        <b-container class=" p-3">
            <b-row class="m-0">
                <b-col sm="4" class="p-0">
                    <img class="img-fluid" :alt="title" :src="titleImage.file.url"> 
                </b-col>
                <b-col sm="8">
                    <g-link :to="path"><h5>{{ title }}</h5></g-link>
                    <small>{{ author }}</small><small class="text-gray"> - {{ formatDate(date) }}</small>
                    <div class="py-2">
                        <small class="py-2 text-gray">
                            {{ excerpt }}
                            <g-link :to="path">Weiterlesen...</g-link>
                        </small>
                    </div>
                </b-col>
            </b-row>
        </b-container>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export default {
  name: 'ArticleCard',
  props: ['title', 'titleImage', 'path', 'date', 'author', 'excerpt'],
  methods: {
      formatDate(date){
          let ndate = new Date(date)
          const months = ["Januar", "Februar", "März","April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
          return ndate.getDate() + " " + months[ndate.getMonth()] + " " + ndate.getFullYear()   
      }
    }
}
</script>

<style lang="scss" scoped>
.card-title {
    font-size: 1em;
}
a:hover {
    text-decoration: none;
    color: var(--secondary)
}
</style>