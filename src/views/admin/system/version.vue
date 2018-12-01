<template>
    <div class="v-admin-system-version">
        <LocateBar>
            <Button @click="add">添加版本</Button>
        </LocateBar>
        <Table :columns="table.columns" :data="table.data" width="800" />
        <Pager v-model="pager.pageNum" :pageSize="pager.pageSize" :total="pager.total" align="right" @change-page="searchVersion"></Pager>
        <Modal v-model="showModal" :title="form.id ? '编辑版本' : '添加版本'">
            <div class="add-modal">
                <Input type="text" width="100%" placeholder="版本号" v-model="form.version" class="version" />
                <Input type="textarea" width="100%" height="150px" placeholder="版本描述，中文句号分隔" v-model="form.description" class="description" />
                <div style="text-align: right; margin-top: 15px;">
                    {{ JSON.stringify(form)}}
                    <Button @click="cancel">取消</Button>
                    <Button type="primary" @click="confirm" style="margin-left: 10px;">确定</Button>
                </div>
            </div>
        </Modal>
        <DeleteModal ref="deleteModal" title="删除版本" :info="deleteInfo"></DeleteModal>
    </div>
</template>

<script>
import LocateBar from '@/units/LocateBar';
import Filter from '@/utils/filter';
import DeleteModal from '@/components/DeleteModal';
import { getVersionList, createVersion, updateVersion, deleteVersion } from '@/service/system';
export default {
    components: {
        LocateBar,
        DeleteModal
    },
    data() {
        return {
            table: {
                columns: [
                    {
                        key: 'id',
                        title: 'id',
                        align: 'left',
                    },
                    {
                        key: 'version',
                        title: '版本号',
                        align: 'left',
                    },
                    {
                        key: 'description',
                        title: '版本详情',
                        align: 'left',
                        render: (h, params) => {
                            let items = params.row.description.split('。').filter(item => item);
                            return h('div', items.map((item, index) => {
                                return h('p', {
                                    style: { margin: '5px 0'}
                                }, index + 1 + '. ' + item);
                            }));
                        }
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
                                        click: () => { this.edit(params.row); }
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
                pageSize: 10,
                total: 0
            },
            showModal: false,
            form: {
                id: '',
                version: '',
                description: ''
            },
            deleteInfo: []
        };
    },
    methods: {
        searchVersion() {
            getVersionList().then(res => {
                if (res.data.code === 200) {
                    this.table.data = res.data.result.items;
                    this.pager.total = res.data.result.total;
                } else {
                    console.log(res.data.msg);
                }
            });
        },
        add() {
            this.showModal = true;
        },
        edit(row) {
            console.log(row);
            this.form = {
                id: row.id,
                version: row.version,
                description: row.description
            };
            this.showModal = true;
        },
        delete(row) {
            this.deleteInfo = [
                { key: '版本号', value: row.version },
                { key: '版本信息', value: row.description }
            ];
            this.$refs.deleteModal.show(() => {
                this.removeVersion(row.id);
            });
        },
        cancel() {
            this.form = {
                id: '',
                version: '',
                description: ''
            };
            this.showModal = false;
        },
        confirm() {
            if (this.form.version && this.form.description) {
                this.form.description = this.form.description.replace('\n', '');
                if (this.form.id) {
                    this.editVersion();
                } else {
                    this.addVersion();
                }
            } else {
                console.log('请填写数据');
            }
        },
        addVersion() {
            createVersion(this.form).then(res => {
                if (res.data.code === 200) {
                    console.log('添加成功');
                    this.searchVersion();
                    this.cancel();
                } else {
                    console.log('添加失败: ', res.data.msg);
                }
            });
        },
        editVersion() {
            updateVersion(this.form).then(res => {
                if (res.data.code === 200) {
                    console.log('编辑成功');
                    this.searchVersion();
                    this.cancel();
                } else {
                    console.log('编辑失败: ', res.data.msg);
                }
            });
        },
        removeVersion(id) {
            deleteVersion(id).then(res => {
                if (res.data.code === 200) {
                    console.log('删除成功');
                    this.searchVersion();
                    this.cancel();
                } else {
                    console.log('删除失败: ', res.data.msg);
                }
            });
        }
    },
    created() {
        this.searchVersion();
    }
};
</script>

<style lang="scss" scoped>
    .v-admin-system-version {
        .add-modal {
            width: 600px;
            margin-top: 20px;

            .version {
                margin-bottom: 10px;
            }
            .description {

            }
        }
    }
</style>