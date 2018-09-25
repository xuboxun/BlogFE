<template>
    <div class="view-wrapper v-tech-list">
        <div class="view-body">
            <BlogItem v-for="tech in blogs" :blog="tech" :key="tech.name"></BlogItem>
            <Pager></Pager>
        </div>
        <div class="view-side">
            <Side />
        </div>
    </div>
</template>

<script>
import BlogItem from '@/components/BlogItem';
import Pager from '@/components/Pager';
import Side from '@/components/Side';
export default {
    components: {
        BlogItem,
        Pager,
        Side,
    },
    data() {
        return {
            blogs: [],
        };
    },
    mounted() {
        this.$http.get('/api/tech/list').then(res => {
            this.blogs = res.data.data.items;
        });
    },
};
</script>

<style lang="scss">
.v-tech-list {
    
}
</style>

