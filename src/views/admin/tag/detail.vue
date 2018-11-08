<template>
    <div class="v-admin-tag-detail">
        <LocateBar :locations="locations"></LocateBar>
    </div>
</template>

<script>
import { getTagDetail } from '@/service/tag';

export default {
    data() {
        return {
            locations: [],
        };
    },
    created() {
        this.locations = [
            { name: '标签详情' },
            { name: '标签名称' }
        ];
    }
};
</script>

<style lang="scss" scoped>
.v-admin-tag-detail {

}
</style>