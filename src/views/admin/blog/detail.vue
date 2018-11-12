<template>
    <div class="v-admin-blog-detail">
        <LocateBar :locations="locations">
            <Button @click="edit">编辑</Button>
        </LocateBar>
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
import { getBlogDetail } from '@/service/blog';

export default {
    data() {
        return {
            locations: [],
            blog: {},
        };
    },
    methods: {
        search() {
            getBlogDetail(this.$route.params.name).then(res => {
                if (res.data.code === 200) {
                    this.blog = res.data.result;
                    this.locations[1].name = this.blog.title;
                }
            });
        },
        edit() {
            this.$router.push({
                name: 'admin/blog/edit',
                params: {
                    name: this.$route.params.name
                }
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