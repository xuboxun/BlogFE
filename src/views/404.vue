<template>
    <div class="v-404">
        <img :src="wrapWebpLink('/assets/images/404.jpg')" alt="404">
        <p class="gohome">
            <router-link to="/home">返回首页</router-link>
        </p>
    </div>
</template>

<script>
import { wrapWebpLink } from '@/utils/tools';
export default {
    data() {
        return {
        };
    },
    methods: {
        wrapWebpLink
    }
};
</script>

<style lang="scss">
.v-404 {
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    .gohome {
        margin-top: 20px;
        a {
            font-size: 1.4rem;
        }
    }
}
</style>
