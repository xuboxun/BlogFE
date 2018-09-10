<template>
    <div class="v-cultureblog">
        cultureblog
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {
        console.log(this.$route.params.name);
    }
};
</script>

<style lang="scss">
.v-cultureblog {

}
</style>
