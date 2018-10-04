<template>
    <div class="v-admin-blog-detail">
        <LocateBar :locations="locations"></LocateBar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            locations: []
        };
    },
    created() {
        console.log(this.$route.params.id)
        this.locations = [
            { name: '博客详情' },
            { name: '博客名称' },
        ];
    }
};
</script>

<style lang="scss" scoped>
.v-admin-blog-detail {

}
</style>