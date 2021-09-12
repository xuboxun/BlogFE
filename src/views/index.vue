<template>
    <div class="v-index" v-on:mousemove.passive="handleMouseMove">
        <div class="background" :class="isSupportWebp ? 'webp' : ''">
            <div ref="bgImg" class="backImg" :class="isSupportWebp ? 'webp' : ''"></div>
        </div>
        <div class="content-wrapper" :class="animate ? 'content-wrapper-animate' : ''">
            <span class="toggle" @click="toggle"></span>
            <div class="content">
                <h1 class="name">思吾轩・徐博勋的博客</h1>
                <div class="entry">
                    <li><router-link to="/home"><Icon name="angle-right" class="icon" />首页</router-link></li>
                    <li><router-link to="/tech"><Icon name="angle-right" class="icon" />技术</router-link></li>
                    <li><router-link to="/culture"><Icon name="angle-right" class="icon" />随笔</router-link></li>
                    <li><router-link to="/about"><Icon name="angle-right" class="icon" />关于你想知道的我</router-link></li>
                </div>
                <div class="link">
                    <p class="title">全站链接</p>
                    <ul>
                        <li><a href="http://spoos.xuboxun.site/client" target="_blank">对象存储客户端</a></li>
                        <li><a href="http://axure.xuboxun.site/" target="_blank">Axure交互站</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="beian"><a href="https://beian.miit.gov.cn" target="blanket">备案号：皖ICP备16002370号-3</a></div>
        <!--<div class="music"></div>-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            animate: false,
            isSupportWebp: window.isSupportWebp
        };
    },
    methods: {
        toggle() {
            this.animate = !this.animate;
        },
        handleMouseMove(e) {
            const { clientX, clientY } = e;
            const { clientWidth, clientHeight } = document.body;

            const centerX = Math.floor(clientWidth / 2);
            const centerY = Math.floor(clientHeight / 2);

            const moveX = -Math.floor((clientX - centerX) / 15);
            const moveY = -Math.floor((clientY - centerY) / 20);
            this.$refs.bgImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    },
    mounted() {

    },
};
</script>

<style lang="scss">
.v-index {
    width: 100%;
    height: 100%;
    .background {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: center;

        display: flex;
        justify-content: center;
        align-items: center;

    }
    .backImg {
        flex: 1 0 auto;
        width: 2100px;
        height: 1200px;
        background-image: url('/assets/images/girl.jpg');
        background-position: center center;
        background-size: auto 100%;
        transition: all ease-out 0.2s;
    }
    .backImg.webp {
        background-image: url('/assets/images/girl.webp');
    }
    .content-wrapper {
        display: inline-block;
        width: 580px;
        height: 400px;
        position: absolute;
        top: 45%;
        right: 50%;
        transform: translate(50%, -50%);
        border-radius: 5px;
        background: rgba(200, 200, 200, 0.5);
        transition: all ease 0.8s;

        .toggle {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            position: absolute;
            right: 10px;
            top: 10px;
            background: #2d8cf0;
            cursor: pointer;
            z-index: 999;
        }
        .content {
            width: 100%;
            height: 100%;
            overflow: hidden;
            padding: 20px;
            opacity: 1;
            transition: all ease 0.8s;

            .name {
                height: 70px;
                line-height: 70px;
                margin-bottom: 20px;
                text-align: center;
                font-size: 1.8rem;
                font-weight: 400;
                color: #17233d;
            }
            @media screen and (max-width: 480px) {
                .name {
                    font-size: 1.4em;
                }
            }
            .entry {
                height: 200px;
                li {
                    border-radius: 5px;
                    background: #fff;
                    margin-bottom: 15px;
                    padding: 5px 10px;
                    font-size: 1.1rem;
                    a {
                        position: relative;
                        padding-left: 15px;
                    }
                    .icon {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
            .link {
                width: calc(100% - 40px);
                height: 60px;
                .title {
                    font-size: 1.1rem;
                    color: #fff;
                    height: 30px;
                    line-height: 35px;
                    border-bottom: 1px solid #fff;
                }
                ul {
                    margin-top: 10px;
                    width: 100%;
                    height: 30px;

                    li {
                        color: #fff;
                        float: left;
                        a {
                            color: #fff;
                        }
                    }
                    li + li {
                        margin-left: 20px;
                    }
                }
            }
        }
    }
    .music {
        height: 60px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #ccc;
    }

    @media screen and (max-width: 480px) {
        .backImg {
            width: 100%;
            height: 100%;
            background-size: auto 100%;
            background-image: url('/assets/images/index_mb_bg.jpg');
            transform: none !important;
        }
        .backImg.webp {
            background-image: url('/assets/images/index_mb_bg.webp');
        }
        .content-wrapper {
            width: 80%;
            top: 50%;
        }
    }
    .content-wrapper-animate {
        width: 40px;
        height: 40px;
        overflow: hidden;
        transform: none;
        right: 20px;
        top: 20px;
        .content {
            opacity: 0;
        }
    }
    .beian {
        width: 100%;
        position: absolute;
        bottom: 20px;
        text-align: center;

        a {
            color: #fff;

            &:hover {
                color: #2d8cf0;
            }
        }
    }
}
</style>

