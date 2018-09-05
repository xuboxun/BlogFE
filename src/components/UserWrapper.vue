<template>
    <div class="m-userwrapper">
        <div class="head">
            <Menu></Menu>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
        <div class="foot">
            
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu';
export default {
    name: 'UserWrapper',
    components: {
        Menu,
    }
};
</script>

<style lang="scss">
.m-userwrapper {
    width: 100%;
    .head {
        height: 56px;
    }
    .body {

    }
    .foot {
        height: 150px;
        padding-top: 20px;
        padding-bottom: 50px;
    }
}
</style>


