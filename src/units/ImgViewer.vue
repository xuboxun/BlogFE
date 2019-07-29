<template>
    <div class="u-imgViewer" @click="zoomOut">
        <div class="img-box" :class="mounted ? 'mounted' : ''">
            <img class="src-item" :src="src" alt="" ref="img">
            <p class="alt-item">{{alt}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImgViewer',
    data() {
        return {
            src: '',
            alt: '',
            mounted: false,
        };
    },
    methods: {
        zoomIn(src, alt) {
            this.src = src;
            this.alt = alt;
            this.$refs.img.onload = () => {
                document.body.style.overflow = 'hidden';
                document.body.appendChild(this.$el);
                setTimeout(() => {
                    this.mounted = true;
                }, 10);
            };
        },
        zoomOut() {
            this.src = '';
            this.alt = '';
            document.body.style.overflow = 'visible';
            document.body.removeChild(this.$el);
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    .u-imgViewer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 100000;
        overflow: auto;
        display: flex;
        align-items: center;
        flex: auto;

        .img-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            opacity: 0.4;
            transform: scale(0.5);
            transition: all ease 0.3s;

            .src-item {
                cursor: zoom-out;
                max-width: 100%;
                max-height: calc(100% - 40px);
                border: 20px solid transparent;
            }
            @media screen and (max-width: 480px) {
                .src-item {
                    border: 10px solid transparent;
                }
            }
            .alt-item {
                height: 50px;
                line-height: 30px;
                color: #fff;
                text-align: center;
                font-size: 16px;
            }
        }
        .mounted {
            opacity: 1;
            transform: scale(1.0);
        }
    }
</style>
