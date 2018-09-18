<template>
    <div class="v-serial-list">
        <div class="serial-item" v-for="item in [1,2,3,4,5]" :key="item">
            <img :src="SerialBG" alt="" class="item-bg">
            <h3 class="name">专栏名称</h3>
            <p>最近更新：aaaaaaaaaaaa</p>
        </div>
    </div>
</template>

<script>
import SerialBG from '@/images/serial.jpg';
export default {
    data() {
        return {
            SerialBG,
        };
    },
};
</script>

<style lang="scss">
.v-serial-list {
    .serial-item {
        position: relative;
        width: 100%;
        height: 150px;
        box-shadow: 0px 0px 5px #dcdee2;
        margin-bottom: 18px;
        border-radius: 3px;
        transition: all 0.5s ease;
        overflow: hidden;
        padding: 20px 20px;

        &:hover {
            box-shadow: 0px 0px 15px #ccc;
        }

        .item-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -999;
            opacity: 0.5;
        }
        .name {
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
}
</style>
