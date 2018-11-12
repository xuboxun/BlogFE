<template>
    <div class="m-blog-editor">
        <div class="base-info">
            <p class="hide-info" v-show="isBaseInfoHide">基本配置信息</p>
            <div class="content" :class="isBaseInfoHide ? 'content-hide': ''">
                <div class="base-names">
                    <Input width="50%" class="info-title" type="text" placeholder="博客名" v-model="innerBlog.title" />
                    <Input width="50%" class="info-name" type="text" placeholder="博客链接名" v-model="innerBlog.name" />
                </div>
                <div class="base-props">
                    <Select v-model="innerBlog.type" :options="typeList" class="info-type" placement="请选择博客类型"></Select>
                    <Select v-model="innerBlog.tagIds" :options="tagList" v-if="innerBlog.type === 'tech' || innerBlog.type === 'culture'" class="info-tag" :multiple="true" placement="请选择标签"></Select>
                    <Select v-model="innerBlog.serialId" :options="serialList" v-if="innerBlog.type === 'serial'" class="info-serial" placement="请选择专栏"></Select>
                </div>
            </div>
            <div class="down-arrow" @click="toggleBaseInfo"></div>
        </div>
        <div class="write-area">
            <MarkdownEditor v-model="innerBlog.content" />
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { getSerialList } from '@/service/serial';
import { getTagList } from '@/service/tag';
export default {
    name: 'BlogEditor',
    props: {
        blog: {
            type: Object,
            default: () => {}
        }
    },
    model: {
        prop: 'blog',
        event: 'update'
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
            innerBlog: {
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
    watch: {
        blog: function() {
            console.log('editor blog');
            console.log(this.blog);
            if (!_.isEqual(this.blog, this.innerBlog)) {
                this.innerBlog = _.cloneDeep(this.blog);
                console.log(this.innerBlog);
            }
        },
        innerBlog: {
            deep: true,
            handler: function() {
                console.log('editor innerBlog');
                console.log(this.innerBlog);
                this.$emit('update', this.innerBlog);
            }
        }
    },
    methods: {
        toggleBaseInfo() {
            this.isBaseInfoHide = !this.isBaseInfoHide;
        },
        checkData() {
            let blog = this.innerBlog;
            if (blog.name === '' || blog.title === '') {
                console.log('博客名不能为空');
                return false;
            }
            if (blog.type === '') {
                console.log('博客类型不能为空');
                return false;
            }
            if (((blog.type === 'tech' || blog.type === 'culture') && blog.tagIds.length === 0)
                || (blog.type === 'serial' && blog.serialId === 0)
            ) {
                console.log('博客标签或专栏不能为空');
                return false;
            }
            return true;
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

<style lang="scss">
.m-blog-editor {
    width: 100%;
    height: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    .base-info {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 0 0 auto;

        .hide-info {
            text-align: center;
            color: #ccc;
            line-height: 20px;
            font-size: 13px;
            border-bottom: 1px solid #ddd;
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
            opacity: 1;
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
            opacity: 0;
        }
    }

    .write-area {
        flex: 1 1 auto;
        width: 100%;
        position: relative;
    }
}
</style>