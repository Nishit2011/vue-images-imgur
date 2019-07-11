import api from '../../api/imgur';

const state = {
    images: []
};
const actions = {
    //rootstate is a reference to all the reference to all the state in our vuex store
    async fetchImages({rootState}) {
    const {token} = rootState.auth;
    const response = await api.fetchImages(token);

    console.log(response);
    }
};
const getters = {
    allImages: state=>state.images
};
const mutations = {
    setImages: (state, images)=>{
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}