<template>
    <div class="m-side">
        <div class="base-info">
            <img src="/assets/images/me.gif" class="image" />
            <h2 class="name">徐博勋</h2>
            <p class="word">你心中的火焰，灼烧的不仅是你的内心，还会成为照亮世界的光，温暖他人。</p>
            <div class="accounts">
                <a class="brand" href="https://github.com/xbx0119" target="blanket" title="https://github.com/xbx0119">
                    <!--<Icon name="brands/github" scale="2" />-->
                    <!-- TODO: 图标优化， 减少http请求 -->
                    <img src="/assets/images/github.webp" alt="github" />
                </a>
                <a class="brand" href="https://www.zhihu.com/people/xuboxun/activities" target="blanket" title="https://www.zhihu.com/people/xuboxun/activities">
                    <img src="/assets/images/zhihu.webp" alt="知乎" />
                </a>
                <a class="brand" href="mailto:ixuboxun@163.com" target="blanket" title="ixuboxun@163.com">
                    <img src="/assets/images/email.webp" alt="邮箱" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Side',
    data() {
        return {

        };
    }
};
</script>

<style lang="scss">
.m-side {
    width: 300px;
    height: 600px;
    padding: 40px 20px;

    .base-info {
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #e8eaec;
        margin-bottom: 20px;

        .image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .name {
            font-size: 1.4rem;
            color: #515a6e;
            font-weight: 400;
            line-height: 35px;
            margin-top: 15px;
        }
        .word {
            color: #808695;
        }

        .accounts {
            margin-top: 15px;
            a {
                display: inline-block;

                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                }
            }
            .brand + .brand {
                margin-left: 10px;
            }
        }
    }
}
</style>

