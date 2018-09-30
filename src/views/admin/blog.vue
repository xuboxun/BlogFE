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
import Tag from '@/units/Tag';
import Filter from '@/utils/filter';
export default {
    components: {
        LocateBar,
        Table,
        Button,
        Tag,
    },
    data() {
        return {
            table: {
                columns: [
                    {
                        key: 'type',
                        title: '类型',
                        align: 'left'
                    },
                    {
                        key: 'title',
                        title: '标题',
                        align: 'left'
                    },
                    {
                        key: 'name',
                        title: '链接名称',
                        align: 'left'
                    },
                    {
                        key: 'createTime',
                        title: '创建时间',
                        align: 'left',
                        render: (h, params) => {
                            return h('p', Filter.time(params.value));
                        }
                    },
                    {
                        key: 'operate',
                        title: '操作',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    on: {
                                        click: () =>  { console.log('233') }
                                    }
                                }, '详情'),
                            ]);
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
                this.table.data = res.data.data.items;
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