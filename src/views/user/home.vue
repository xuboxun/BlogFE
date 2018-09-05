<template>
    <UserWrapper>
        <div class="v-home">
            home 2333
            <p>{{items}}</p>
            <br />
            <button @click="add">添加</button>
            <br />

            <router-link to="/home">home</router-link><br />
            <router-link to="/tech">tech</router-link><br />
            <router-link to="/culture">culture</router-link><br />
            <router-link to="/about">about</router-link><br />
        </div>
    </UserWrapper>
</template>

<script>
import UserWrapper from '@/components/UserWrapper';
export default {
    components: {
        UserWrapper,
    },
    data() {
        return {
            
        };
    },
    computed: {
        items() {
            return this.$store.state.tmp.items;
        }
    },
    methods: {
        add() {
            this.$store.dispatch('reqItems');
        }
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

.home {
    div {
        color: red;
    }
}
</style>

