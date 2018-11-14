<template>
    <Modal class="m-delete-modal" v-model="flag">
        <div class="tips">
            <h3 class="title">删除博客?</h3>
            <div class="info">
                <h4>相关信息</h4>
                <template v-if="info.length > 0">
                    <p v-for="(item, index) in info" :key="index">{{ item.key }} : {{ item.value }}</p>
                </template>
                <template v-else>
                    <p>无</p>
                </template>
            </div>
        </div>
        <div class="opts">
            <Button type="warn" @click="doDelete">删除</Button>
            <Button @click="close">取消</Button>
        </div>
    </Modal>
</template>

<script>
export default {
    name: 'DeleteModal',
    props: {
        info: {
            type: Array,
            default: () => [], // { key: '', value: ''}
        }
    },
    data() {
        return {
            flag: false,
            deleteFunc: null
        };
    },
    methods: {
        show(deleteFunc) {
            this.flag = true;
            this.deleteFunc = deleteFunc;
        },
        doDelete() {
            this.deleteFunc().then(res => {
                console.log(res);
                if (res) {
                    this.close();
                    console.log('删除成功');
                } else {
                    console.log('删除失败');
                }
            });
        },
        close() {
            this.flag = false;
            this.deleteFunc = null;
        }
    }
};
</script>

<style lang="scss" scoped>
.m-delete-modal {
    .tips {
        .title {
            font-size: 16px;
            font-weight: 400;
            color: #1c2438;
        }
        .info {
            margin-top: 20px;
            padding-left: 10px;
            color: #666;
            h4 {
                font-weight: 400;
                margin-bottom: 10px;
            }
            p {
                font-size: 13px;
                padding-left: 20px;
                margin-bottom: 5px;
            }
        }
    }
    .opts {
        width: 100%;
        margin-top: 20px;
        padding-right: 20px;
        text-align: right;
    }
}
</style>