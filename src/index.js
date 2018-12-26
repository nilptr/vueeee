import '@babel/polyfill';
import Vue from 'vue';

import App from './app.vue';
import store from './store';
import router from './router';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render(h) {
        return h(App);
    },
});
/* eslint-enable no-new */
