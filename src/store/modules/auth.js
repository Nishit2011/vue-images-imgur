import api from '../../api/imgur';
import qs from 'qs';
import {router} from '../../main';

const state= {
token : window.localStorage.getItem('imgur_token')
};

//used to read data
const getters = {
isLoggedIn: (state)=> !!state.tokens
};

const actions = {
    login: ()=> {
        api.login();
    },
    finalizeLogin({commit}, hash) {
        
        //fetching access token from the url after the app has authorised login
        
        const query = qs.parse(hash.replace('#', ''));

        //setting token with this fetched token
        commit('setToken', query.access_token);

        //setting localStorage with token that was fetched from query parameters
        window.localStorage.setItem('imgur_token', query.access_token);
        router.push('/')
    },
  logout: ({commit})=>{
  //to call mutation we use commit 
  commit('setToken', null);
  window.localStorage.removeItem('imgur_token')
  }
};

const mutations = {
setToken :(state, token) =>{
state.token = token;
}
};

export default {
    state,
    getters,
    actions,
    mutations
}