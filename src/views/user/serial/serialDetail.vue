<template>
    <div class="v-serial-detail">
        <h3 class="serial-name">{{ serial.title }}</h3>
        <div class="content-wrapper">
            <div class="serial">
                <img class="serial-img" src="/assets/images/serial.jpg" alt="" />
                <div class="desc">
                    <h4 class="sec-title">专栏简介</h4>
                    <p>{{ serial.description }}</p>
                </div>
            </div>
            <div class="blogs">
                <h4 class="sec-title">博客列表</h4>
                <ul class="list">
                    <li class="item" v-for="blog in serial.blogs" :key="blog.name">
                        <router-link :to="'/' + blog.type + '/blog/' + blog.name">
                            <font class="time">{{Filter.time(blog.createTime)}}</font>
                            <font class="name">{{blog.title}}</font>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Filter from '@/utils/filter';
import { getSerialDetail } from '@/service/serial';
export default {
    data() {
        return {
            Filter,
            serial: {}
        };
    },
    methods: {
        searchSerial() {
            getSerialDetail(this.$route.params.name).then(res => {
                if (res.data.code === 200) {
                    this.serial = res.data.result;
                }
            });
        }
    },
    created() {
        this.searchSerial();
    }
};
</script>

<style lang="scss">
.v-serial-detail {
    .serial-name {
        line-height: 40px;
        font-size: 1.6rem;
        font-weight: 400;
        color: #17233d;
        margin-bottom: 50px;
        margin-top: 20px;
    }
    @media screen and (max-width: 480px) {
        .serial-name {
            text-align: center;
        }
    }
    .content-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;

        h4.sec-title {
            line-height: 40px;
            border-bottom: 1px solid #e8eaec;
            margin-bottom: 15px;
            font-weight: 400;
            font-size: 1.2rem;
        }
        .serial {
            .serial-img {
                width: 100%;
                border-radius: 5px;
                margin-bottom: 20px;
            }
            .desc {
                p {
                    line-height: 30px;
                    font-size: 1.1rem;
                    color: #515a6e;
                }
            }

        }
        .blogs {
            margin-top: 50px;
            .item {
                line-height: 40px;
                font-size: 1.15rem;
                a {
                    display: inline-block;
                    color: #515a6e;

                    .time {
                        margin-right: 15px;
                        color: #808695;
                    }
                    .name {
                        color: #515a6e;
                    }
                    &:hover {
                        .time,
                        .name {
                            color: #2d8cf0;
                        }

                    }
                }

                @media screen and (max-width: 480px) {
                    & {
                        line-height: 35px
                    }
                    a {
                        .time {
                            display: inline-block;
                            width: 100%;
                            line-height: 20px;
                            font-size: 0.95rem;
                            transform: translateY(10px);
                        }
                        .name {
                            display: inline-block;
                            width: 100%;
                        }
                    }
                }
            }

        }
    }
}
</style>
