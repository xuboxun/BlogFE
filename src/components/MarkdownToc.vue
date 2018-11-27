<template>
    <div></div>
</template>

<script>
export default {
    name: 'MarkdownToc',
    props: {
        article: String
    },
    data() {
        return {
            content: []
        };
    },
    methods: {
        generateTOC() {
            console.log(this.content);
        }
    },
    mounted() {
        this.generateTOC();
    }
};
</script>

<style scoped>

</style>