<template>
    <div class="v-techblog">
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
.v-techblog {

}
</style>
