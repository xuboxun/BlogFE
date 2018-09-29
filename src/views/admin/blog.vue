<template>
    <div class="v-admin-blog">
        <LocateBar>
            <Button @click="addBlog">新建博客</Button>
        </LocateBar>
        <Table :columns="table.columns" :data="table.data" />
    </div>
</template>

<script>
import LocateBar from '@/units/LocateBar';
import Table from '@/units/Table';
import Button from '@/units/Button';
import Filter from '@/utils/filter';
export default {
    components: {
        LocateBar,
        Table,
        Button,
    },
    data() {
        return {
            table: {
                columns: [
                    {
                        key: 'type',
                        align: 'left'
                    },
                    {
                        key: 'title',
                        align: 'left'
                    },
                    {
                        key: 'name',
                        align: 'left'
                    },
                    {
                        key: 'createTime',
                        align: 'left',
                        render: (val) => {
                            return Filter.time(val);
                        }
                    }
                ],
                data: []
            }

        };
    },
    methods: {
        addBlog() {
            this.$router.push({ name: 'admin/write' });
        },
        searchBlog() {
            this.$http.get('/api/tech/list').then(res => {
                // this.table.data = res.data.data.items;
                console.log(this.table.data);
            });
        }
    },
    created() {
        this.searchBlog();
    }
};
</script>

<style lang="scss" scoped>
    .v-admin-blog {

    }
</style>