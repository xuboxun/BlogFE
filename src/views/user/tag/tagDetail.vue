<template>
    <div class="v-tag-detail">
        <div class="tag">
            <h3 class="name">{{title}}</h3>
            <p class="desc">{{intro}}</p>
        </div>
        <div class="blogs">
            <h4>博客列表</h4>
            <ul class="list">
                <li class="item" v-for="blog in blogList" :key="blog.name">
                    <router-link :to="'/' + blog.type + '/blog/' + blog.name">
                        <font class="time">{{Filter.time(blog.createTime)}}</font>
                        <font class="name">{{blog.title}}</font>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Filter from '@/utils/filter';
export default {
    data() {
        return {
            Filter: Filter,
            name: '',
            title: '',
            intro: '',
            createTime: '',
            blogList: []
        };
    },
    methods: {
        getTagDetail() {
            this.$http('/api/tag/detail', {
                params: {
                    name: this.name,
                }
            }).then(res => {
                let data = res.data.data;
                this.title = data.title;
                this.intro = data.intro;
                this.blogList = data.blogs;
            });
        }
    },
    created() {
        this.name = this.$route.params.name;
        this.getTagDetail();
    }
};
</script>

<style lang="scss">
.v-tag-detail {
    .tag {
        .name {
            height: 100px;
            line-height: 100px;
            font-size: 1.5rem;
            font-weight: 400;
            color: #17233d;
        }
        .desc {
            text-indent: 2.2rem;
            line-height: 30px;
            font-size: 1.1rem;
            color: #515a6e;
        }
    }
    .blogs {
        margin-top: 50px;
        h4 {
            line-height: 40px;
            border-bottom: 1px solid #e8eaec;
            margin-bottom: 15px;
            font-weight: 400;
            font-size: 1.1rem;
        }
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
</style>
