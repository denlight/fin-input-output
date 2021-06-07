<template>
  <div class="home">
    <v-text-field :rules="[inputRules.validateInput]"  ref="input" label="Input" v-model="input" :error="error"></v-text-field>
    <v-btn @click="seeResult">See result</v-btn>
  </div>
</template>

<script>

const INPUT_PATTERN = /^(\.|\.\d+|0\.?|0\.\d+|[1-9]\d*(\.)?(\d+)?)(k|b|m)?$/
const FINAL_PATTERN = /^(0\.\d+|[1-9]\d*|[1-9]\d*\.\d+|\.\d+)(k|b|m|)$/

import {mapActions} from 'vuex'

export default {
  name: 'Input',
  data: () => ({
    input: '',
    error: false,
    inputRules: {
      validateInput: value => INPUT_PATTERN.test(value) || `Bad number format: input box accepts only a financial number such as "250k", "10m", "10.04k" or ".5b".`,
    }
  }),
  methods: {
    ...mapActions([
      'processInput'
    ]),
    seeResult() {
      if(FINAL_PATTERN.test(this.input)) {
        this.processInput(this.input)
        this.$router.push({name: 'output'})
      }
      else this.error = true
    }
  }
}
</script>
