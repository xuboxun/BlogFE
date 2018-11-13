<template>
    <div class="v-index">
        <div class="background"></div>
        <div class="content">
            <h1 class="name">徐博勋的博客</h1>
            <div class="entry">
                <li><router-link to="/home"><Icon name="angle-right" class="icon" />首页</router-link></li>
                <li><router-link to="/tech"><Icon name="angle-right" class="icon" />技术博客</router-link></li>
                <li><router-link to="/culture"><Icon name="angle-right" class="icon" />文艺青年</router-link></li>
                <li><router-link to="/about"><Icon name="angle-right" class="icon" />关于你想知道的我</router-link></li>
            </div>
            <div class="link">
                <p class="title">快捷链接</p>
                <ul>
                    <li><a href="">测试</a></li>
                    <li><a href="">测试</a></li>
                    <li><a href="">测试</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    mounted() {

    },
};
</script>

<style lang="scss">
.v-index {
    .background {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url('/assets/images/indexbg.jpg');
        background-repeat: no-repeat;
        background-position: center;
    }
    .content {
        width: 580px;
        height: 400px;
        padding: 20px;
        border-radius: 5px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(225, 225, 225, 0.4);

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
            position: absolute;
            bottom: 20px;
            width: calc(100% - 40px);
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

    @media screen and (max-width: 480px) {
        .background {
            background-size: auto 100%;
            background-image: url('/assets/images/index_mb_bg.jpg');
        }
        .content {
            width: 80%;
            top: 50%;
        }
    }
}
</style>

