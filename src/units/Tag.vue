<template>
    <span class="u-tag" :class="innerSize === 'large' ? 'u-tag-large' : '' ">
        <router-link v-if="name !== undefined" :to="'/tag/detail/' + name">{{innerTitle}}</router-link>
        <template v-else>{{innerTitle}}</template>
        <Icon v-if="closable" name="times" class="tag-close" @click.native.stop="close"></Icon>
    </span>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        name: String,
        title: String,
        size: {
            type: String,
            default: 'large'
        },
        closable: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            innerTitle: '',
            innerSize: this.size,
        };
    },
    methods: {
        close() {
            this.$emit('close');
        }
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
    .u-tag {
        display: inline-block;
        height: 25px;
        line-height: 25px;
        border-radius: 3px;
        background: #fafafa;
        margin-right: 8px;
        margin-bottom: 4px;
        padding: 0 10px;
        transition: all 0.5s ease;
        position: relative;

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

        .tag-close {
            color: #aaa;
            cursor: pointer;
            position: relative;
            top: 3px;
        }

        @media screen and (max-width: 480px){
            a {
                font-size: 0.9rem;
            }
        }
    }
    .u-tag-large {
        height: 30px;
        line-height: 30px;
        font-size: 1.05rem;
        padding: 0 15px;
        border: 1px solid #e8eaec;
        margin-right: 15px;
        margin-bottom: 20px;
    }
</style>
