<template>
    <div class="u-markdown-editor">
        <div class="u-markdown-editor-wrapper">
            <div class="tool-bar">工具栏</div>
            <div class="body-bar">
                <div class="editor-area" v-show="config.editor">
                    <textarea id="editor-area-textarea" v-model="writeContent"></textarea>
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
        writeContent(val) {
            this.$emit('update', val);
        }
    },
    data() {
        return {
            config: {
                editor: true,
                preview: true,
            },
            writeContent: ''
        };
    },
    methods: {

    },
    mounted() {

    },
};
</script>

<style lang="scss">
.u-markdown-editor {
    width: 100%;
    height: 100%;
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
        background: #ccc;
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
    }
}
</style>