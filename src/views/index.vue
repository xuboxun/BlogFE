<template>
    <div class="v-index">
        <div class="background"></div>
        <div class="content-wrapper" :class="animate ? 'content-wrapper-animate' : ''">
            <span class="toggle" @click="toggle"></span>
            <div class="content">
                <h1 class="name">徐博勋的博客</h1>
                <div class="entry">
                    <li><router-link to="/home"><Icon name="angle-right" class="icon" />首页</router-link></li>
                    <li><router-link to="/tech"><Icon name="angle-right" class="icon" />技术</router-link></li>
                    <li><router-link to="/culture"><Icon name="angle-right" class="icon" />随笔</router-link></li>
                    <li><router-link to="/about"><Icon name="angle-right" class="icon" />关于你想知道的我</router-link></li>
                </div>
                <div class="link">
                    <p class="title">快捷链接</p>
                    <ul>
                        <li><a href="https://github.com/xuboxun">github</a></li>
                        <li><a href="https://www.zhihu.com/">知乎</a></li>
                        <li><a href="https://www.squarespace.com/">squarespace</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!--<div class="music"></div>-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            animate: false
        };
    },
    methods: {
        toggle() {
            this.animate = !this.animate;
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
        background-image: url('/assets/images/sing.webp');
        background-repeat: no-repeat;
        background-position: center;
    }
    .content-wrapper {
        display: inline-block;
        width: 580px;
        height: 400px;
        position: absolute;
        top: 40%;
        right: 50%;
        transform: translate(50%, -50%);
        border-radius: 5px;
        background: rgba(200, 200, 200, 0.4);
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
                font-weight: 300;
                color: #17233d;
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
        .background {
            background-size: auto 100%;
            background-image: url('/assets/images/index_mb_bg.jpg');
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
}
</style>

