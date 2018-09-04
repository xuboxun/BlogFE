<template>
    <div class="m-userwrapper">
        <div class="head">

        </div>
        <div class="body">
            <slot></slot>
        </div>
        <div class="foot">
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserWrapper',
    
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


