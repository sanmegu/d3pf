import Vue from 'vue'
import Vuex from 'vuex'
// Importar oauth
import oauth from './modules/oauth'
// Importar Loading
import loading from './modules/loading'
// Importar error
import error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  // Aquuí registramos todos los módulos
  modules: {
    oauth, loading, error
  }
})
