<template>
    <div class="u-markdown-view">
        <div v-html="renderHTML" class="markdown-body"></div>
    </div>
</template>

<script>
import 'github-markdown-css';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();
export default {
    name: 'MarkdownView',
    props: {
        article: {
            type: String,
            default: '# test'
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
    .markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
        padding: 45px;
        
        li {
            list-style-type: inherit;
        }
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
}
</style>
