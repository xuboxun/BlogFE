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
            this.$http.get('/api/tech/detail', {
                params: {
                    name: this.$route.params.name
                }
            }).then(res => {
                this.blog = res.data.data;
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

}
</style>
