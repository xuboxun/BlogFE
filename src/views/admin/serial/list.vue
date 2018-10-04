<template>
    <div class="v-admin-serial">
        <LocateBar>
            <Button @click="addSerial">添加专栏</Button>
        </LocateBar>
        <Table :columns="table.columns" :data="table.data" width="800" />
        <Pager :pageNum="pager.pageNum" :pageSize="pager.pageSize" :total="pager.total" align="right"></Pager>
        <Modal v-model="addModal">
            content
        </Modal>
    </div>
</template>

<script>
import LocateBar from '@/units/LocateBar';
import Modal from '@/units/Modal';
import Filter from '@/utils/filter';
export default {
    name: 'serial',
    components: {
        LocateBar,
        Modal,
    },
    data() {
        return {
            addModal: false,
            pager: {
                pageNum: 1,
                pageSize: 15,
                total: 0,
            },
            table: {
                columns: [
                    {
                        key: 'title',
                        title: '专栏名',
                        align: 'left',
                        render: (h, params) => {
                            return h('router-link', {
                                props: {
                                    to: '/admin/serial/detail/' + params.row.name
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
    methods: {
        addSerial() {
            console.log('addSerial');
            this.addModal = true;
        }
    },
    created() {
        this.$http.get('/api/serial/list').then(res => {
            this.table.data = res.data.data.items;
        });
    }
};
</script>

<style lang="scss" scoped>
.v-admin-serial {

}
</style>