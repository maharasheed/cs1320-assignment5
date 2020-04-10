import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:null
  },
  mutations: {
    setUsername(payload){
      this.state.username = payload;
    }
  },
  getters:{
    getUsername(){
      return this.state.username;
    }
  },
  actions: {

  }
});
