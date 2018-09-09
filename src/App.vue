<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
    created() {
        this.$store.dispatch('tag/reqTags');
    }
};
</script>

<style lang="scss">
.app {
    width: 100%;
    height: 100%;
}
</style>

