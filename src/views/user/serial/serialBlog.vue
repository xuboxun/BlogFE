<template>
    <div class="v-serial-blog">
        <div class="view-wrapper">
            <div class="view-body">
                <h1 class="title">{{ blog.title }}</h1>
                <p class="time">{{ Filter.time(blog.createTime) }}</p>
                <MarkdownView :article="blog.content" />
            </div>
            <div class="view-side">
                目录
            </div>
        </div>
    </div>
</template>

<script>
import MarkdownView from '@/units/MarkdownView.vue';
import { getBlogDetail } from '@/service/blog';
import Filter from '@/utils/filter';
import { mapMutations } from 'vuex';

export default {
    components: {
        MarkdownView,
    },
    data() {
        return {
            Filter: Filter,
            blog: {},
        };
    },
    methods: {
        ...mapMutations('system', [
            'setLoading'
        ]),
        searchBlog() {
            this.setLoading(true);
            getBlogDetail(this.$route.params.name).then(res => {
                if (res.data.code === 200) {
                    this.blog = res.data.result;
                }
                this.setLoading(false);
            });
        }
    },
    created() {
        this.searchBlog();
    }
};
</script>

<style lang="scss">
.v-serial-blog {
    .title {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 10px;
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
