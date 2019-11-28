<template>
  <Layout>
    <Title title="Classroom" subtitle="subtitle"/>
    <b-container class="">
        <b-form  @submit.stop.prevent>
            <label for="feedback-user">Classroom ID</label>
            <b-input v-model="classroomId" :state="validation" id="feedback-user"></b-input>
            <b-form-invalid-feedback :state="validation">
                Your user ID must be 10-12 characters long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validation">
                Looks Good.
            </b-form-valid-feedback>
            <b-button @click="redirect" class="my-2" variant="primary">Start Learning</b-button>
        </b-form>
    </b-container>
  </Layout>
</template>

<script>
import Title from '../components/Title'

export default {
  metaInfo: {
    title: 'Class'
  },
  data(){
      return {
          classroomId: ''
      }
  },
  components: {
    Title
  },
  computed: {
    validation() {
        if(this.classroomId.length == 0) return null
        return this.classroomId.length > 10 && this.classroomId.length < 13
      }
  },
  methods: {
      redirect: function(){
          if(!this.classroomId) return 
          this.$router.push('/class/' + this.classroomId)
      }
  }
}
</script>

<style lang="scss" scoped>
</style>