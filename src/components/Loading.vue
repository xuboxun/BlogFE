<template>
    <div class="c-loading" v-if="show">
        <div class="loading-mask"></div>
        <div class="loading-body">
            <span class="loading-item"></span>
            <span class="loading-item"></span>
            <span class="loading-item"></span>
            <span class="loading-item"></span>
            <span class="loading-item"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            //
        };
    }
};
</script>

<style lang="scss" scoped>
    .c-loading {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999999;

        .loading-mask {
            width: 100%;
            height: 100%;
            /*background: rgba(0, 0, 0, 0.5);*/
            background: #fff;
            position: fixed;
            left: 0;
            top: 0;

        }
        .loading-body {
            width: auto;
            height: 40px;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .loading-item {
                display: inline-block;
                width: 8px;
                height: 100%;
                margin-right: 3px;
                margin-left: 3px;
                border-radius: 4px;
                background: lightgreen;
                animation: loading 1.5s ease infinite;

                &:nth-child(2){
                    -webkit-animation-delay: 0.3s;
                }
                &:nth-child(3){
                    -webkit-animation-delay: 0.6s;
                }
                &:nth-child(4){
                    -webkit-animation-delay: 0.9s;
                }
                &:nth-child(5){
                    -webkit-animation-delay: 1.2s;
                }
            }
            @-webkit-keyframes loading {
                0%, 100% {
                    height: 40px;
                    background: lightgreen;
                }
                50% {
                    height: 70px;
                    margin-top: -15px;
                    margin-bottom: -15px;
                    background: lightblue;
                }
            }
        }
    }
</style>
