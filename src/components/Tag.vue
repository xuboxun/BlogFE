<template>
    <span class="m-tag" :class="innerSize === 'large' ? 'm-tag-large' : '' ">
        <router-link :to="'/tag/detail/' + name">{{innerTitle}}</router-link>
    </span>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        name: String,
        title: String,
        size: String, // default large
    },
    data() {
        return {
            innerTitle: '',
            innerSize: this.size || 'default',
        };
    },
    created() {
        if (this.title) {
            this.innerTitle = this.title;
        } else {
            this.innerTitle = this.$store.getters['tag/title'](this.name);
        }
    }
};
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
        transition: all 0.5s ease;

        &:hover {
            box-shadow: 1px 1px 5px #dcdee2;
        }

        a {
            width: 100%;
            color: #80848f;
        }
        a:hover {
            color: #515a6e;
        }

        @media screen and (max-width: 480px){
            a {
                font-size: 0.9rem;
            }
        }
    }
    .m-tag-large {
        height: 30px;
        line-height: 30px;
        font-size: 1.05rem;
        padding: 0 15px;
        border: 1px solid #e8eaec;
        margin-right: 15px;
        margin-bottom: 20px;
    }
</style>
