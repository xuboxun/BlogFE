<template>
    <div class="v-culture-list">
        <BlogItem v-for="(culture, index) in blogs" :blog="culture" :key="index"></BlogItem>
    </div>
</template>

<script>
import BlogItem from '@/components/BlogItem'
export default{
    components: {
        BlogItem,
    },
    data() {
        return {
            blogs: [],
        };
    },
    mounted() {
        this.$http.get('/api/culture/list').then(res => {
            this.blogs = res.data.data.items;
        });
    }
};
</script>

<style lang="scss">
.v-culture-list {

}
</style>
