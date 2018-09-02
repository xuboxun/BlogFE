import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'

import { routes } from './routes';
import App from './App';
import '@/styles/base.css';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const RouterConfig = {
    mode: 'history',
    routes: routes
}
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    next()
})

new Vue({
    el: '#root',
    router: router,
    render: h => h(App)
})