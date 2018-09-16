<template>
    <div class="m-no-result" v-if="show">
        <h3>啊哦，没有你要找的东西哦～</h3>
    </div>
</template>

<script>
export default {
    name: 'NoResult',
    props: {
        show: Boolean
    }
};
</script>

<style lang="scss">
.m-no-result {
    h3 {
        font-weight: 400;
        font-size: 1.4rem;
        color: #808695;
        text-align: center;
    }
}
</style>

