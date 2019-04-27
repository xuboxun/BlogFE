import axios from 'axios';

const moduleTag = {
    namespaced: true,
    state: {
        tags: [],
        total: 0,
    },
    getters: {
        title(state) {
            return (name) => {
                let tag = state.tags.find(item => {
                    return item.name === name;
                });
                return tag.title;
            };
        }
    },
    mutations: {
        setTags(state, payload) {
            state.tags = payload.tags;
            state.total = payload.total;
        }
    },
    actions: {
        reqTags(context) {
            axios.get('/api/tag/list').then(res => {
                context.commit('setTags', {
                    tags: res.data.data.items,
                    total: res.data.data.total
                });
            });
        }
    },
};

export default moduleTag;
