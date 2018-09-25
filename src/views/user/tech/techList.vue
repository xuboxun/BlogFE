<template>
    <div class="v-tech-list">
        <div class="view-wrapper">
            <div class="view-body">
                <BlogItem v-for="tech in blogs" :blog="tech" :key="tech.name"></BlogItem>
                <Pager :pageNum="pager.num" :pageSize="pager.size" :total="pager.total"></Pager>
            </div>
            <div class="view-side">
                <Side />
            </div>
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
            pager: {
                num: 1,
                size: 10,
                total: 0,
            }
        };
    },
    methods: {
        searchList() {
            this.$http.get('/api/tech/list', {
                params: {
                    pageNum: this.pager.num,
                    pageSize: this.pager.size,
                }
            }).then(res => {
                this.blogs = res.data.data.items;
                this.pager.total = res.data.data.total;
            });
        }
    },
    mounted() {
        this.searchList();
    },
};
</script>

<style lang="scss">
.v-tech-list {
    
}
</style>

