<template>
    <div class="u-markdown-view">
        <div class="markdown-header">
            <slot name="header"></slot>
        </div>
        <div v-html="renderHTML" class="markdown-body"></div>
    </div>
</template>

<script>
import 'github-markdown-css';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import toc from 'markdown-it-table-of-contents';
const md = new MarkdownIt();
md.use(anchor);
md.use(toc, {
    includeLevel: [1,2,3],
    containerClass: 'markdown-toc-container',
    containerHeaderHtml: '<div class="toc-container-header">文章目录</div>'
});
export default {
    name: 'MarkdownView',
    props: {
        article: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        };
    },
    computed: {
        renderHTML: function() {
            return this.render();
        }
    },
    methods: {
        render() {
            return md.render(this.article);
        }
    }
};
</script>

<style lang="scss">
.u-markdown-view {
    width: 800px;
    margin: 0 auto;
    .markdown-header {
        padding-top: 50px;
    }
    .markdown-body {
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
			padding: 0px;
		}
	}
}
</style>
