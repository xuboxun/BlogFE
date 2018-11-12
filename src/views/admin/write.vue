<template>
    <div class="v-admin-write">
        <LocateBar>
            <Button @click="saveDraft">保存草稿</Button>
            <Button @click="doneWrite">提交</Button>
        </LocateBar>
        <div class="base-info">
            <p class="hide-info" v-show="isBaseInfoHide">基本配置信息</p>
            <div class="content" :class="isBaseInfoHide ? 'content-hide': ''">
                <div class="base-names">
                    <Input width="50%" class="info-title" type="text" placeholder="博客名" v-model="blog.title" />
                    <Input width="50%" class="info-name" type="text" placeholder="博客链接名" v-model="blog.name" />
                </div>
                <div class="base-props">
                    <Select v-model="blog.type" :options="typeList" class="info-type"></Select>
                    <Select v-model="blog.tagIds" :options="tagList" v-if="blog.type === 'tech' || blog.type === 'culture'" class="info-tag" :multiple="true"></Select>
                    <Select v-model="blog.serialId" v-if="blog.type === 'serial'" class="info-serial"></Select>
                </div>
            </div>
            <div class="down-arrow" @click="toggleBaseInfo"></div>
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
                { value: 'tech', title: '技术' },
                { value: 'culture', title: '随笔' },
                { value: 'serial', title: '专栏' }
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
            },
            isBaseInfoHide: false
        };
    },
    methods: {
        toggleBaseInfo() {
            this.isBaseInfoHide = !this.isBaseInfoHide;
        },
        saveDraft() {
            console.log(this.blog);
        },
        doneWrite() {
            console.log(this.blog);
        },
        searchTagList() {
            getTagList().then(res => {
                if (res.data.code === 200) {
                    this.tagList = res.data.result.items.map(item => {
                        return {
                            value: item.id,
                            title: item.title
                        };
                    });
                }
            });
        },
        searchSerialList() {
            getSerialList().then(res => {
                if (res.data.code === 200) {
                    this.serialList = res.data.result.items.map(item => {
                        return {
                            value: item.id,
                            title: item.title
                        };
                    });
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
        width: 100%;
        position: relative;

        .hide-info {
            text-align: center;
            color: #ccc;
            line-height: 20px;
            font-size: 13px;
        }

        .down-arrow {
            position: relative;
            display: inline-block;
            left: 50%;
            transform: translateX(-50%);
            cursor: pointer;
            width: 20px;
            height: 20px;
            border: 10px solid transparent;
            border-top: 10px solid #ddd;
        }

        .content {
            max-height: 80px;
            border-bottom: 1px solid #ddd;
            transition: all ease 0.5s;
            padding-bottom: 10px;
            overflow: hidden;
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
                display: flex;
                .info-type {
                    margin-right: 10px;
                }
                .info-tag {
                }
                .info-serial {
                }
            }
        }
        .content-hide {
            max-height: 0;
            padding-bottom: 0;
        }
    }

    .write-area {
        height: calc(100% - 150px);
        width: 100%;
    }
}
</style>