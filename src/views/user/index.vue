<template>
    <div>
        index welcome

        <br>
        5秒后跳转到首页
    </div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$router.push({ name: 'home' });
        }, 5000);
    }
}
</script>
