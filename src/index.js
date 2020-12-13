// polyfills 可视情况配置 @babel/env 并移除
// - useBuiltIns: 'entry'
//   入口文件处引用一次，根据 browserlist 替换成对应的 import
//   - 优点：可以保证每次构建 vendor 的稳定性
//   - 缺点：打包体积偏大
// - useBuiltIns: 'usage'
//   每个文件根据使用情况单独 import
//   - 优点：打包体积小
//   - 缺点：模块重复，可能造成 vendor 不稳定，需要调整 webpack 配置
import 'core-js/stable';
import 'regenerator-runtime/runtime';

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
