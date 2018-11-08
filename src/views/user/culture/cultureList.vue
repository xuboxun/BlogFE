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
import { getBlogList } from '@/service/blog';
export default{
    components: {
        BlogItem,
        Pager,
        Side,
    },
    data() {
        return {
            blogs: [],
            pager: {
                num: 1,
                size: 10,
                total: 0,
            }
        };
    },
    mounted() {
        getBlogList({
            type: 'culture',
            pageNum: this.pager.num,
            pageSize: this.pager.size,
        }).then(res => {
            if (res.data.code === 200) {
                this.blogs = res.data.result.items;
            } else {
                this.blogs = [];
            }
        });
    }
};
</script>

<style lang="scss">
.v-culture-list {

}
</style>
