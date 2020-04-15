import Vue from "vue"
import Vuex from "vuex"
import router from "../router"

Vue.use(Vuex)

const Form = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        buttonActions({ commit, state, rootState}) {
            console.log("buttonAction")
        }
    }
}

export default new Vuex.Store({
    modules: {
        Form
    }
})