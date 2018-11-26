<template>
    <div class="u-verify">
        <div class="code" v-html="svg" @click="requestCodeSVG"></div>
    </div>
</template>

<script>
import { getCapture } from '@/service/login';
export default {
    name: 'Verify',
    data() {
        return {
            svg: ''
        };
    },
    methods: {
        requestCodeSVG() {
            getCapture().then(res => {
                if (res.data.code === 200) {
                    this.svg = res.data.result;
                } else {
                    console.log('验证码获取失败');
                }
            });
        }
    },
    created() {
        this.requestCodeSVG();
    }
};
</script>

<style lang="scss" scoped>
.u-verify {
    .code {
        cursor: pointer;
    }
}
</style>