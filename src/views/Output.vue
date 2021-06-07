<template>
  <div class="home">
    <v-card>Result: {{output}}</v-card>
    <v-btn @click="goBack">Go back</v-btn>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: 'Output',
  computed: {
    ...mapState({
      output: state => state.output
    })
  },
  methods: {
    goBack() {
      this.$router.push({name: 'input'})
    }
  }
}
</script>
