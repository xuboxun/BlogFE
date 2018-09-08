<template>
    <div class="v-tag">
        {{data}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: []
        }
    },
    mounted() {
        this.$http.get('/api/tags').then((res) => {
            this.data = res.data;
        })
    }
};
</script>

<style>

</style>
