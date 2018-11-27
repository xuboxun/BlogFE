<template>
    <div class="v-admin-blog-list">
        <LocateBar>
            <Button @click="addBlog">新建博客</Button>
        </LocateBar>
        <Table :columns="table.columns" :data="table.data" width="800" />
        <Pager v-model="pager.pageNum" :pageSize="pager.pageSize" :total="pager.total" align="right" @change-page="searchBlog"></Pager>
        <DeleteModal ref="deleteBlogModal" title="删除博客?" :info="deleteInfo"></DeleteModal>
    </div>
</template>

<script>
import LocateBar from '@/units/LocateBar';
import Table from '@/units/Table';
import Button from '@/units/Button';
import Tag from '@/units/Tag';
import Pager from '@/units/Pager';
import Filter from '@/utils/filter';
import DeleteModal from '@/components/DeleteModal';
import { getBlogList } from '@/service/blog';

export default {
    components: {
        LocateBar,
        Table,
        Button,
        Tag,
        Pager,
        DeleteModal
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
                        align: 'left',
                        render: (h, params) => {
                            return h('router-link', {
                                props: {
                                    to: '/admin/blog/detail/' + params.row.name
                                }
                            }, params.value);
                        }
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
                        align: 'center',
                        width: 150,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'text'
                                    },
                                    on: {
                                        click: () => { this.edit(params.row.name); }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'textwarn'
                                    },
                                    on: {
                                        click: () => { this.delete(params.row); }
                                    }
                                }, '删除'),
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
            },
            deleteInfo: []
        };
    },
    methods: {
        addBlog() {
            this.$router.push({ name: 'admin/write' });
        },
        searchBlog() {
            getBlogList({
                ...this.pager
            }).then(res => {
                if (res.data.code === 200) {
                    this.table.data = res.data.result.items;
                    this.pager.total = res.data.result.total;
                }
            });
        },
        edit(name) {
            this.$router.push({
                name: 'admin/blog/edit',
                params: { name: name }
            });
        },
        delete(row) {
            this.deleteInfo = [
                { key: '博客名', value: row.title },
                { key: '链接名', value: row.name },
                { key: '创建时间', value: Filter.time(row.createTime) },
            ];
            this.$refs.deleteBlogModal.show(() => {
                return this.requestDelete(row.name);
            });
        },
        requestDelete(name) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('delete', name);
                    resolve(true);
                }, 1500);
            });
        }
    },
    created() {
        this.searchBlog();
    }
};
</script>

<style lang="scss" scoped>
    .v-admin-blog-list {

    }
</style>