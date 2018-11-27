<template>
    <div class="v-admin-tag">
        <LocateBar>
            <Button @click="addTag">新建标签</Button>
        </LocateBar>
        <Table :columns="table.columns" :data="table.data" width="800" />
        <Pager v-model="pager.pageNum" :pageSize="pager.pageSize" :total="pager.total" align="right" @change-page="searchTagList"></Pager>
        <DeleteModal ref="deleteBlogModal" title="删除标签?" :info="deleteInfo"></DeleteModal>
    </div>
</template>

<script>
import LocateBar from '@/units/LocateBar';
import Button from '@/units/Button';
import Filter from '@/utils/filter';
import DeleteModal from '@/components/DeleteModal';
import { getTagList } from '@/service/tag';

export default {
    components: {
        LocateBar,
        Button,
        DeleteModal
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
                        render: (h, params) => {
                            return h('router-link', {
                                props: {
                                    to: '/admin/tag/detail/' + params.row.name
                                }
                            }, params.value);
                        }
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
                        render: (h, params) => {
                            return h('p', Filter.time(params.value));
                        }
                    },
                    {
                        key: 'operate',
                        title: '操作',
                        align: 'center',
                        width: '150',
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
            deleteInfo: []
        };
    },
    methods: {
        addTag() {
            this.$router.push({
                name: 'admin/tag/add'
            });
        },
        edit(name) {
            this.$router.push({
                name: 'admin/tag/edit',
                params: { name: name }
            });
        },
        delete(row) {
            this.deleteInfo = [
                { key: '标签名', value: row.title },
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
        },
        searchTagList() {
            getTagList().then(res => {
                if (res.data.code === 200) {
                    this.table.data = res.data.result.items;
                    this.pager.num = res.data.result.total;
                }
            });
        }
    },
    created() {
        this.searchTagList();
    }
};
</script>

<style lang="scss" scoped>
    .v-admin-tag {

    }
</style>