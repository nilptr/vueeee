import Vue from 'vue';
import Vuex from 'vuex';

// import modules here

Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {},
    state: {},
    strict,
});
