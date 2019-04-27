
const moduleSystem = {
    namespaced: true,
    state: {
        loading: false,
    },
    getters: {},
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        }
    },
    actions: {},
};

export default moduleSystem;
