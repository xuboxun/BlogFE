<template>
    <div class="v-culture-blog">
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
.v-culture-blog {

}
</style>
