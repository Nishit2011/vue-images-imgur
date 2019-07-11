import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

//Allows Vuex to be used by Vue. Wires the two together
Vue.use(Vuex)

//VuexStore is hooked to the auth and images module
//so all the state can be accessed from the auth and images  module
export default new Vuex.Store({
    modules:{
        auth,
        images
    }
})