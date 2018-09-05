import Vue from 'vue';
import Vuex from 'vuex';

import moduleTmp from './modules/tmp';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        tmp: moduleTmp,
    }
});

export default store;