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
        margin-right: 8px;
        margin-bottom: 5px;
        padding: 0 10px;

        a {
            width: 100%;
            color: #80848f;
        }

        @media screen and (max-width: 480px){
            a {
                font-size: 0.9rem;
            }
        }
        
    }
</style>
