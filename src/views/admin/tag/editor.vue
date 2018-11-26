<template>
    <div class="v-admin-tag-editor">
        <LocateBar>
            <Button @click="submitEdit" v-if="editFlag">确定修改</Button>
            <Button @click="submitAdd" v-else>确定添加</Button>
        </LocateBar>
        <div class="tag-editor-wrapper">
            <FormItem comment="标签名">
                <Input type="text" v-model="form.title" />
            </FormItem>
            <FormItem comment="链接名">
                <Input type="text" v-model="form.name" />
            </FormItem>
            <FormItem comment="描述">
                <Input type="textarea" v-model="form.description" width="100%" />
            </FormItem>
        </div>
    </div>
</template>

<script>
import { getTagDetail, createTag, updateTag, checkTagExist } from '@/service/tag';

export default {
    name: 'editor',
    data() {
        return {
            editFlag: false,
            form: {
                title: '',
                name: '',
                description: ''
            },
            detail: {}
        };
    },
    methods: {
        async checkForm() {
            if (this.form.title === '' || this.form.name === '') {
                console.log('不能为空');
                return false;
            } else {
                let checkName = await this.existCheck({ key: 'name', value: this.form.name});
                let checkTitle = await this.existCheck({ key: 'title', value: this.form.title});
                console.log('check');
                if (!checkName || !checkTitle) {
                    console.log('存在性检测失败');
                    return false;
                }
                return true;
            }
        },
        async submitEdit() {
            if (await this.checkForm()) {
                updateTag({
                    id: this.detail.id,
                    ...this.form
                }).then(res => {
                    if (res.data.code === 200) {
                        console.log('编辑成功');
                        this.$router.push({
                            name: 'admin/tag/list'
                        });
                    } else {
                        console.log('编辑失败');
                    }
                });
            }
        },
        async submitAdd() {
            if (await this.checkForm()) {
                console.log('submit');
                createTag(this.form).then(res => {
                    if (res.data.code === 200) {
                        console.log('添加成功');
                        this.$router.push({
                            name: 'admin/tag/list'
                        });
                    } else {
                        console.log('添加失败');
                    }
                });
            }
        },
        async existCheck(option) {
            let res = await checkTagExist({
                [option.key]: option.value,
            });
            let { code, result } = res.data;
            if (code === 200) {
                if (this.editFlag) {
                    if (!result) {
                        return true;
                    } else {
                        if (this.detail[option.key] === result[option.key]) {
                            return true;
                        }
                        return false;
                    }
                } else {
                    return !result;
                }
            } else {
                return false;
            }
        },
        searchTag() {
            getTagDetail(this.$route.params.name).then(res => {
                if (res.data.code === 200) {
                    let info = res.data.result;
                    this.detail = info;
                    this.form = {
                        title: info.title,
                        name: info.name,
                        description: info.description
                    };
                }
            });
        },
    },
    created() {
        if (this.$route.name === 'admin/tag/edit') {
            this.editFlag = true;
            this.searchTag();
        }
    }
};
</script>

<style lang="scss" scoped>
.v-admin-tag-editor {

}
</style>