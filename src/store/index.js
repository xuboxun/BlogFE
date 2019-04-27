import Vue from 'vue';
import Vuex from 'vuex';

import moduleTmp from './modules/tmp';
import moduleTag from './modules/tag';
import moduleSystem from './modules/system';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        tmp: moduleTmp,
        tag: moduleTag,
        system: moduleSystem,
    }
});

export default store;
