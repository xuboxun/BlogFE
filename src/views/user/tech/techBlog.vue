<template>
    <div class="v-tech-blog">
        <div class="view-wrapper">
            <div class="view-body">
                <h1 class="title">{{ blog.title }}</h1>
                <p class="time">{{ Filter.time(blog.createTime) }}</p>
                <MarkdownView :article="blog.content" />
            </div>
            <!--<div class="view-side">-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
import MarkdownView from '@/units/MarkdownView.vue';
import MarkdownToc from '@/components/MarkdownToc.vue';
import { getBlogDetail } from '@/service/blog';
import Filter from '@/utils/filter';
export default {
    components: {
        MarkdownView,
        MarkdownToc
    },
    data() {
        return {
            Filter: Filter,
            blog: {},
        };
    },
    methods: {
        searchBlog() {
            getBlogDetail(this.$route.params.name).then(res => {
                if (res.data.code === 200) {
                    this.blog = res.data.result;
                }
            });
        }
    },
    created() {
        this.searchBlog();
    }
};
</script>

<style lang="scss">
.v-tech-blog {
    .title {
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 5px;
        line-height: 30px;
        color: #17233d;
        text-align: center;
    }
    .time {
        font-size: 13px;
        color: #808695;
        margin-bottom: 30px;
        text-align: center;
    }
}
</style>
