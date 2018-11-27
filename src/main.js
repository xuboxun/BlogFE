import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import store from './store';
import { routes } from './routes';
import './directives';
import '@/units';
import '@/styles/base.css';
import App from './App';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);


const RouterConfig = {
    mode: 'history',
    routes: routes
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    const path = to.path;
    const auth = false;
    //进入管理界面
    if (path.indexOf('/admin') === 0 && path !== '/admin/login' && !auth) {
        // router.push('/admin/login');
        next();
    } else {
        next();
    }
});

new Vue({
    el: '#root',
    store,
    router: router,
    render: h => h(App)
});