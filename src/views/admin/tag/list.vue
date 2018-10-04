<template>
    <div class="v-admin-tag">
        <LocateBar></LocateBar>
        <Table :columns="table.columns" :data="table.data" width="800" />
        <Pager :pageNum="pager.pageNum" :pageSize="pager.pageSize" :total="pager.total" align="right"></Pager>
    </div>
</template>

<script>
import LocateBar from '@/units/LocateBar';
import Button from '@/units/Button';
export default {
    components: {
        LocateBar,
        Button,
    },
    data() {
        return {
            pager: {
                pageNum: 1,
                pageSize: 15,
                total: 0,
            },
            table: {
                columns: [
                    {
                        key: 'title',
                        title: '标签名',
                        align: 'left',
                    },
                    {
                        key: 'name',
                        title: 'name',
                        align: 'left',
                    },
                    {
                        key: 'count',
                        title: '博客数量',
                        align: 'left',
                    },
                    {
                        key: 'createTime',
                        title: '创建时间',
                        align: 'left',
                    },

                ],
                data: []
            }
        };
    },
};
</script>

<style lang="scss" scoped>
    .v-admin-tag {

    }
</style>