<template>
    <div class="v-admin-blog">
        <LocateBar>
            <Button @click="addBlog">新建博客</Button>
        </LocateBar>
        <Table :columns="table.columns" :data="table.data" width="800" />
        <Pager :pageNum="pager.pageNum" :pageSize="pager.pageSize" :total="pager.total" align="right"></Pager>
    </div>
</template>

<script>
import LocateBar from '@/units/LocateBar';
import Table from '@/units/Table';
import Button from '@/units/Button';
import Tag from '@/units/Tag';
import Pager from '@/units/Pager';
import Filter from '@/utils/filter';
export default {
    components: {
        LocateBar,
        Table,
        Button,
        Tag,
        Pager,
    },
    data() {
        return {
            table: {
                columns: [
                    {
                        key: 'type',
                        title: '类型',
                        align: 'left',
                        render: (h, params) => {
                            return h('p', Filter.blogType(params.value));
                        }
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
                                    props: {
                                        size: 'small',
                                        type: 'text'
                                    },
                                    on: {
                                        click: () =>  { console.log('233') }
                                    }
                                }, '详情'),
                            ]);
                        }
                    }
                ],
                data: []
            },
            pager: {
                pageNum: 1,
                pageSize: 15,
                total: 0,
            }

        };
    },
    methods: {
        addBlog() {
            this.$router.push({ name: 'admin/write' });
        },
        searchBlog() {
            this.$http.get('/api/blog/list', {
                params: {
                    ...this.pager
                }
            }).then(res => {
                this.table.data = res.data.data.items;
                this.pager.total = res.data.data.total;
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