<template>
    <div class="v-admin-blog-detail">
        <LocateBar :locations="locations"></LocateBar>
        <div class="detail">
            <h2 class="title">{{blog.title}}</h2>
            <div class="base-info">
                类型 标签 专栏 创建时间
            </div>
            <div class="article">
                文章内容
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            locations: [],
            blog: {},
        };
    },
    methods: {
        search() {
            this.$http.get('/api/tech/detail', {
                params: {
                    name: this.$route.params.id
                }
            }).then(res => {
                this.blog = res.data.data;
            });
        }
    },
    created() {
        this.locations = [
            { name: '博客详情' },
            { name: '博客名称' },
        ];
        this.search();
    }
};
</script>

<style lang="scss" scoped>
.v-admin-blog-detail {

}
</style>