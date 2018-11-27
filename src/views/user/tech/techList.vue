<template>
    <div class="v-tech-list">
        <div class="view-wrapper">
            <div class="view-body">
                <BlogItem v-for="tech in blogs" :blog="tech" :key="tech.name"></BlogItem>
                <Pager v-model="pager.num" :pageSize="pager.size" :total="pager.total" @change-page="searchList"></Pager>
            </div>
            <div class="view-side">
                <Side />
            </div>
        </div>
    </div>
</template>

<script>
import BlogItem from '@/components/BlogItem';
import Pager from '@/units/Pager';
import Side from '@/components/Side';
import { getBlogList } from '@/service/blog';

export default {
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
    methods: {
        searchList() {
            getBlogList({
                type: 'tech',
                pageNum: this.pager.num,
                pageSize: this.pager.size,
            }).then(res => {
                if (res.data.code === 200) {
                    this.blogs = res.data.result.items;
                    this.pager.total = res.data.result.total;
                }
            });
        }
    },
    mounted() {
        this.searchList();
    }
};
</script>

<style lang="scss">
.v-tech-list {

}
</style>

