<template>
    <div class="u-markdown-editor" :class="config.fullScreen ? 'editor-fullScreen' : ''">
        <div class="u-markdown-editor-wrapper">
            <div class="tool-bar">
                <Icon class="tool-item" name="expand-arrows-alt" @click.native="toolFullScreen"></Icon>
            </div>
            <div class="body-bar">
                <div class="editor-area" v-show="config.editor">
                    <textarea id="editor-area-textarea" v-model="writeContent" spellcheck="false"></textarea>
                </div>
                <div class="preview-area" v-show="config.preview">
                    <MarkdownView :article="writeContent"></MarkdownView>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MarkdownView from '@/units/MarkdownView';
export default {
    name: 'MarkdownEditor',
    components: {
        MarkdownView
    },
    model: {
        prop: 'content',
        event: 'update'
    },
    props: {
        content: {
            type: String,
            default: ''
        },
    },
    watch: {
        content() {
            if (this.writeContent !== this.content) {
                this.writeContent = this.content;
            }
        },
        writeContent(val) {
            this.$emit('update', val);
        }
    },
    data() {
        return {
            config: {
                editor: true,
                preview: true,
                fullScreen: false
            },
            writeContent: ''
        };
    },
    methods: {
        // 工具栏-全屏
        toolFullScreen() {
            console.log('233');
            this.config.fullScreen = !this.config.fullScreen;
        }
    },
    mounted() {

    },
};
</script>

<style lang="scss">
.u-markdown-editor {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    top: 0;
    li {
        list-style-type: inherit;
    }
    .u-markdown-editor-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .tool-bar {
        min-height: 50px;
        background: #f0f0f0;
        padding: 0 15px;
        position: relative;

        .tool-item {
            cursor: pointer;
            color: #999;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin-right: 10px;
        }
    }
    .body-bar {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex: 1 1 auto;
        background: #fff;

        .editor-area,
        .preview-area {
            height: 100%;
            width: 50%;
            flex: 1 1 auto;
            padding: 10px;
        }
        .editor-area {
            border-right: 1px solid #ccc;
        }
        .preview-area {
        }
    }

    #editor-area-textarea {
        width: 100%;
        height: 100%;
        resize: none;
        border: 0;
        line-height: 25px;
    }
}
.editor-fullScreen {
    z-index: 99999;
    position: fixed;
    left: 0;
    top: 0;
}
</style>