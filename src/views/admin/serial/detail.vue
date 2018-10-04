<template>
    <div class="v-admin-serial-detail">
        <LocateBar :locations="locations"></LocateBar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            locations: [],
        };
    },
    created() {
        this.locations = [
            { name: '专栏详情' },
            { name: '专栏名称' }
        ];
    }
};
</script>

<style lang="scss" scoped>
.v-admin-serial-detail {

}
</style>