<template>
    <div class="v-admin-write">
        <LocateBar>
            <Button @click="saveDraft">保存草稿</Button>
            <Button @click="doneWrite">提交</Button>
        </LocateBar>
        <div class="base-info">
            <div class="base-names">
                <Input width="400px" class="info-title" type="text" placeholder="博客名" v-model="blog.title" />
                <Input width="400px" class="info-name" type="text" placeholder="博客链接名" v-model="blog.name" />
            </div>
            <div class="base-props">
                <select v-model="blog.type" class="info-type">
                    <option v-for="type in typeList" :value="type.value" :key="type.value">{{ type.name }}</option>
                </select>
                <select v-if="blog.type === 'tech' || blog.type === 'culture'" class="info-tag">
                    <option v-for="tag in tagList" :key="tag.id" :value="tag.id">{{ tag.title }}</option>
                </select>
                <select v-if="blog.type === 'serial'" class="info-serial">
                    <option v-for="serial in serialList" :key="serial.id" :value="serial.id">{{ serial.title }}</option>
                </select>
            </div>
        </div>
        <div class="write-area">
            <MarkdownEditor v-model="blog.content" />
        </div>
    </div>
</template>

<script>
import MarkdownEditor from '@/units/MarkdownEditor';
import LocateBar from '@/units/LocateBar';
import Button from '@/units/Button';
import { getSerialList } from '@/service/serial';
import { getTagList } from '@/service/tag';

export default {
    components: {
        MarkdownEditor,
        LocateBar,
        Button,
    },
    data: function () {
        return {
            typeList: [
                { value: 'tech', name: '技术' },
                { value: 'culture', name: '随笔' },
                { value: 'serial', name: '专栏' }
            ],
            tagList: [],
            serialList: [],
            blog: {
                name: '',
                title: '',
                content: '',
                type: '',
                tagIds: [],
                serialId: ''
            }
        };
    },
    methods: {
        saveDraft() {
            console.log(this.blog);
        },
        doneWrite() {
            console.log(this.blog);
        },
        searchTagList() {
            getTagList().then(res => {
                if (res.data.code === 200) {
                    this.tagList = res.data.result.items;
                }
            });
        },
        searchSerialList() {
            getSerialList().then(res => {
                if (res.data.code === 200) {
                    this.serialList = res.data.result.items;
                }
            });
        }
    },
    created() {
        this.searchTagList();
        this.searchSerialList();
    }
};
</script>

<style lang="scss" scoped>
.v-admin-write {
    .base-info {
        height: 80px;
        width: 100%;

        .base-names {
            height: 40px;
            width: 100%;
            display: flex;
            .info-title, .info-name {
                /*height: 30px;*/
                /*width: 200px;*/
            }
            .info-title {
                margin-right: 10px;
            }
        }
        .base-props {
            width: 100%;
            height: 30px;
            .info-type {

            }
            .info-tag {

            }
            .info-serial {

            }
        }
    }
    .write-area {
        height: calc(100% - 150px);
        width: 100%;
    }
}
</style>