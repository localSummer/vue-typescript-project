import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import fly from 'flyio';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Component from 'vue-class-component';

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

Vue.config.productionTip = false;

Vue.use(iView);

fly.config.baseURL = '/duty';

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
