<template>
    <div class="v-culture-list">
        <div class="view-wrapper">
            <div class="view-body">
                <BlogItem v-for="culture in blogs" :blog="culture" :key="culture.name"></BlogItem>
                <Pager></Pager>
            </div>
            <div class="view-side">
                <Side />
            </div>
        </div>
    </div>
</template>

<script>
import BlogItem from '@/components/BlogItem';
import Pager from '@/units/Pager.vue';
import Side from '@/components/Side.vue';
export default{
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
