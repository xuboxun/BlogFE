<template>
    <div class="v-tech-blog">
        techblog
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
.v-tech-blog {

}
</style>
