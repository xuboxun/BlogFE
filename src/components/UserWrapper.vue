<template>
    <div class="m-userwrapper">
        <div class="head">
            <TopMenu></TopMenu>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
        <div class="foot">
            <div>
                <p></p>
                <p class="content">Power by Xu boxun</p>
            </div>
        </div>
    </div>
</template>

<script>
import TopMenu from '@/components/Menu';
export default {
    name: 'UserWrapper',
    components: {
        TopMenu,
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
        text-align: center;

        .content {
            font-size: 1.1rem;
            color: #515a6e;
        }
    }
}
</style>


