<template>
    <div class="v-tag-detail">
        <div class="tag">
            <h3 class="name">{{title}}</h3>
            <p class="desc">{{intro}}</p>
        </div>
        <div class="blogs">
            <h4>列表</h4>
            <ul class="list">
                <li class="item" v-for="(blog, index) in blogList" :key="index">
                    <router-link :to="'/' + blog.type + '/' + blog.name"><font>{{Filter.time(blog.createTime)}}</font>{{blog.title}}</router-link>
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
            line-height: 50px;
            border-bottom: 1px solid #e8eaec;
            font-weight: 400;
            font-size: 1.1rem;
        }
        .item {
            height: 35px;
            line-height: 35px;
            font-size: 1.15rem;
            a {
                display: inline-block;
                height: 100%;
                color: #515a6e;

                &:hover {
                    color: #2d8cf0;
                }
            }
        }
        
    }
}
</style>
