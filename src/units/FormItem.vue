<template>
    <div class="u-formitem">
        <div class="comment" v-if="comment">{{comment}}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FormItem',
    props: {
        comment: {
            type: String,
            default: ''
        },
        width: {
            type: Number,
            default: 100
        }
    }
};
</script>

<style lang="scss" scoped>
.u-formitem {
    width: 100%;
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;

    .comment {
        display: inline-block;
        height: 35px;
        width: 100px;

    }
}
</style>