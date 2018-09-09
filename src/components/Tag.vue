<template>
    <span class="m-tag">
        <router-link :to="'/tag/' + name">{{title}}</router-link>
    </span>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        name: String,
    },
    data() {
        return {
            title: '',
        }
    },
    created() {
        this.title = this.$store.getters['tag/title'](this.name);
    }
}
</script>

<style lang="scss">
    .m-tag {
        display: inline-block;
        height: 25px;
        line-height: 25px;
        border-radius: 3px;
        background: #fafafa;
        padding: 0 10px;

        a {
            width: 100%;
            color: #80848f;
        }
        
        & + .m-tag {
            margin-left: 8px;
        }
    }
</style>
