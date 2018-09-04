<template>
    <UserWrapper>
        <div class="v-home">
            home 2333
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

