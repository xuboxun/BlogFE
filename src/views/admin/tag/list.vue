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
import Filter from '@/utils/filter';
import { getTagList } from '@/service/tag';

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
                        align: 'left',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text'
                                    }
                                }, '详情')
                            ]);
                        }
                    }
                ],
                data: []
            }
        };
    },
    created() {
        getTagList().then(res => {
            if (res.data.code === 200) {
                this.table.data = res.data.result.items;
            }
        });
    }
};
</script>

<style lang="scss" scoped>
    .v-admin-tag {

    }
</style>