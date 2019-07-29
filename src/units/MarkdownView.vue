<template>
    <div class="u-markdown-view">
        <div class="markdown-header">
            <slot name="header"></slot>
        </div>
        <div v-html="renderHTML" class="markdown-body" @click="handleClickMarkdown"></div>
    </div>
</template>

<script>
import Vue from 'vue';
import '@/styles/github-markdown.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 黑色背景
// import 'highlight.js/styles/github.css'; // 白色背景
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import toc from 'markdown-it-table-of-contents';
import ImgViewer from '@/units/ImgViewer';

hljs.configure({
    tabReplace: '  ', // 2 spaces
    classPrefix: 'hljs-'
});
const md = new MarkdownIt({
    html:         true,
    xhtmlOut:     true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
            } catch (__) {
                //
            }
        }
        return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
    }
});
md.use(anchor);
md.use(toc, {
    includeLevel: [1,2,3],
    containerClass: 'markdown-toc-container',
    containerHeaderHtml: '<div class="toc-container-header">文章目录</div>'
});
export default {
    name: 'MarkdownView',
    components: {
        ImgViewer
    },
    props: {
        article: {
            type: String,
            default: ''
        }
    },
    computed: {
        renderHTML: function() {
            return this.render();
        }
    },
    mounted() {
        hljs.initHighlighting();
    },
    methods: {
        render() {
            return md.render(this.article);
        },
        handleClickMarkdown(e) {
            const target = e.target;
            const tagName = target && target.tagName && target.tagName.toLowerCase();
            if (tagName === 'img') {
                const { src, alt } = target;
                this.showImgViewer(src, alt);
            }
        },
        showImgViewer(src, alt) {
            let ImgViewerClass = Vue.extend(ImgViewer);
            const imgViewer = new ImgViewerClass().$mount();
            imgViewer.zoomIn(src, alt);
        }
    }
};
</script>

<style lang="scss">
.u-markdown-view {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    .markdown-header {
        padding-top: 50px;
    }
    .markdown-body {
        color: #595959;
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
        padding: 0px;
        position: relative;

        h1, h2, h3, h4, h5, h6 {
            padding-top: 80px;
            margin-top: -70px;
        }

        li {
            list-style-type: inherit;
        }
        img {
            cursor: zoom-in;
        }
        .markdown-toc-container {
            width: 100%;
            padding: 5px 15px;
            background: #fff;


            .toc-container-header {
                height: 40px;
                line-height: 45px;
                margin-bottom: 10px;
                font-size: 16px;
                border-bottom: 1px solid #ddd;
            }
            ul {
                font-size: 14px;
                padding-left: 20px;
            }
        }
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 0;
		}
	}
}
</style>
