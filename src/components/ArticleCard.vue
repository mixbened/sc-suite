<template>
        <div>
        <b-card
            :title="title"
            :img-src="titleImage.file.url"
            img-alt="Article Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
                <pre>{{ date }}</pre>
                <pre>{{ author }}</pre>
            </b-card-text>

            <g-link :to="path"><b-button variant="primary">Weiterlesen</b-button></g-link>
        </b-card>
        </div>
</template>

<script>

export default {
  name: 'ArticleCard',
  props: ['title', 'titleImage', 'path', 'date', 'author']
}
</script>

<style lang="scss" scoped>
.card-title {
    font-size: 1em;
}
</style>