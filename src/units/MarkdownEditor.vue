<template>
    <div class="u-markdown-editor" @keyup.down.capture="handleInput">
        <link rel="stylesheet" href="/assets/editor.md/css/editormd.css">
        <div id="editormd">
            <!--<textarea style="display:none;">{{ content }}</textarea>-->
        </div>
    </div>
</template>

<script>
// TODO: 去除editor.md，自己实现轻量级的markdown编辑器
import $script from 'scriptjs';
export default {
    name: 'MarkdownEditor',
    model: {
        prop: 'content',
        event: 'update'
    },
    props: {
        content: {
            type: String,
            default: ''
        },
        editorPath: {
            type: String,
            default: '/assets/editor.md/',
        },
        editorConfig: {
            type: Object,
            default() {
                return {
                    id   : 'editormd',
                    path: '/assets/editor.md/lib/',
                    codeFold: true,
                    saveHTMLToTextarea: true,
                    searchReplace: true,
                    htmlDecode: 'style,script,iframe|on*',
                    emoji: true,
                    taskList: true,
                    tocm: true,                  // Using [TOCM]
                    tex: true,                   // 开启科学公式TeX语言支持，默认关闭
                    flowChart: true,             // 开启流程图支持，默认关闭
                    sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
                    imageUpload: true,
                    imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
                    imageUploadURL: 'examples/php/upload.php',
                    onload: () => {

                    },
                };
            },
        },
    },
    data() {
        return {
            instance: null,
        };
    },
    methods: {
        initEditor() {
            this.$nextTick((editorMD = window.editormd) => {
                if (editorMD) {
                    this.instance = editorMD(this.editorConfig);
                }
            });
        },
        handleInput(e) {
            let md = this.instance.getMarkdown();
            console.log(md);
            // this.$emit('update', this.content);
        }
    },
    mounted() {
        $script([
            `${this.editorPath}jquery.min.js`,
            `${this.editorPath}zepto.min.js`,
        ], () => {
            $script(`${this.editorPath}/editormd.min.js`, () => {
                this.initEditor();
            });
        });
    },
};
</script>

<style lang="scss">
.u-markdown-editor {
    width: 100%;
    height: 100%;

    #editormd {
        li {
            list-style-type: inherit;
        }
    }
}
</style>