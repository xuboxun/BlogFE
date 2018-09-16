<template>
    <div class="v-tech-list">
        <BlogItem v-for="tech in blogs" :blog="tech" :key="tech.name"></BlogItem>
    </div>
</template>

<script>
import BlogItem from '@/components/BlogItem';
export default {
    components: {
        BlogItem,
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

