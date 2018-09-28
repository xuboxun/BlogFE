<template>
    <div class="u-divider" :style="'background:'+color">

    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#ddd',
        }
    },
    name: 'Divider',
};
</script>

<style lang="scss" scoped>
.u-divider {
    height: 1px;
    width: 100%;
    background: #ddd;
}
</style>