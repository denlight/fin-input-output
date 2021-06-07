import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    setOutput(state, payload) {
      state.output = payload
    }
  },
  actions: {
    processInput({commit}, payload) {
      let multiplier = payload.replace(/\d+|\./g, '')
      let number = parseFloat(payload.replace(/[a-z]/g, ''))
      let output 
      
      switch(multiplier) {
        case 'k': multiplier = 1000; break;
        case 'm': multiplier = 1000000; break;
        case 'b': multiplier = 1000000000; break;
        default: multiplier = 1; break;
      }
      
      output = number * multiplier

      // only happens for small decimal values
      let isExponential = output.toString().includes('e')

      if(!isExponential) {
        output = output.toLocaleString('en-US')
      } else {
        let num = number.toExponential().split('e')[0]
        let multiplierDecimalPoint = parseInt(Number(multiplier).toExponential().split('e')[1])
        let numberDecimalPoint = parseInt(Number(number).toExponential().split('e')[1])
        let totalDecimalPoints = numberDecimalPoint + multiplierDecimalPoint
        output = '0.'
        for(let i=1; i<totalDecimalPoints*-1; i++) output += '0'
        output += num
      }
      
      commit('setOutput', output )
    }
  },
  modules: {
  }
})
