const moduleTmp = {
    // namespaced: true,
    state: {
        items: [0]
    },
    getters: {
        filterItems(state) {
            return state.items.filter(item => {
                return item > 2;
            });
        }
    },
    mutations: {
        setItems(state, payload) {
            state.items.push(payload.addition);
        }
    },
    actions: {
        reqItems(context) {
            setTimeout(() => {
                context.commit('setItems', {
                    addition: context.state.items.length
                });
            }, 1000);
        }
    },
};

export default moduleTmp;