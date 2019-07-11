import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from'./components/UploadForm';

//passing store to Vue provides data to the relationship established b/w 
//Vue and Vuex established in index.js
Vue.use(VueRouter);

//configuring the routes, tagging the route to its concerned component
export const router = new VueRouter({
    //the word history implies the usage of BrowserRouter and NOT HashRouter
    mode: 'history',
    routes: [
        {path: '/', component:ImageList},
        {path:'/upload', component:UploadForm},
        {path: 'oauth2/callback', component: AuthHandler}
    ]
})

//creating Vue instance
//telling Vue instance about store and router
new Vue({
    router:router,
    store:store,
    render: h=>h(App)
}).$mount('#app')