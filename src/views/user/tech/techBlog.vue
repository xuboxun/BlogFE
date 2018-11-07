<template>
    <div class="v-tech-blog">
        <div class="view-wrapper">
            <div class="view-body">
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
export default {
    components: {
        MarkdownView,
    },
    data() {
        return {
            blog: {},
        };
    },
    methods: {
        searchBlog() {
            getBlogDetail(this.$route.params.name).then(res => {
                if (res.data.code === 200) {
                    this.blog = res.data.data;
                }
            });
        }
    },
    created() {
        this.searchBlog();
        console.log(this.$route);
    }
};
</script>

<style lang="scss">
.v-tech-blog {

}
</style>
