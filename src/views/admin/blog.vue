<template>
    <div class="v-admin-blog">
        <LocateBar>
            <Button @click="addBlog">新建博客</Button>
        </LocateBar>
        <Table />
    </div>
</template>

<script>
import LocateBar from '@/units/LocateBar';
import Table from '@/units/Table';
import Button from '@/units/Button';
export default {
    components: {
        LocateBar,
        Table,
        Button,
    },
    data() {
        return {

        };
    },
    methods: {
        addBlog() {
            this.$router.push({ name: 'admin/write' });
        }
    }
};
</script>

<style lang="scss" scoped>
    .v-admin-blog {

    }
</style>