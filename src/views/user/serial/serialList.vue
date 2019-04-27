<template>
    <div class="v-serial-list">
        <div class="view-wrapper">
            <div class="view-body">
                <div class="serial-item" v-for="(serial, index) in serialList" :key="index">
                    <img src="/assets/images/serial.jpg" class="item-bg">
                    <h3 class="name">
                        <router-link :to="'/serial/detail/' + serial.name">
                            {{serial.title}}
                            <Icon name="link" width="14" height="14" />
                        </router-link>
                    </h3>
                    <p class="intro">{{serial.intro}}</p>
                    <p class="update">
                        最近更新：
                        <router-link v-if="serial.recent" :to="'/serial/blog/' + serial.recent.name">{{serial.recent.title}}</router-link>
                        <font v-else>没有更新</font>
                    </p>
                </div>
            </div>
            <div class="view-side">
                <Side />
            </div>
        </div>
    </div>
</template>

<script>
import Side from '@/components/Side.vue';
import { getSerialList } from '@/service/serial';
import { mapMutations } from 'vuex';

export default{
    components: {
        Side,
    },
    data() {
        return {
            serialList: [],
        };
    },
    methods: {
        ...mapMutations('system', [
            'setLoading'
        ]),
        searchSerial() {
            this.setLoading(true);
            getSerialList().then(res => {
                if (res.data.code === 200) {
                    this.serialList = res.data.result.items;
                } else {
                    this.serialList = [];
                }
                this.setLoading(false);
            });
        }
    },
    created() {
        this.searchSerial();
    }
};
</script>

<style lang="scss">
.v-serial-list {
    .serial-item {
        position: relative;
        width: 100%;
        min-height: 150px;
        box-shadow: 0px 0px 5px #dcdee2;
        margin-bottom: 18px;
        border-radius: 3px;
        transition: all 2s ease;
        overflow: hidden;
        padding: 15px 20px;

        .item-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -999;
            opacity: 0.2;
            transition: all 2s ease;
        }

        &:hover {
            box-shadow: 0px 0px 15px #ccc;

            .item-bg {
                transform: scale(1.2);
            }
        }

        .name {
            font-size: 1.25rem;
            font-weight: 400;
            color: #17233d;
        }
        .intro {
            // max-height: 60px;
            line-height: 20px;
            overflow: hidden;
            color: #808695;
            font-size: 0.9rem;
            text-indent: 1.5rem;
            padding-left: 1rem;
            margin-top: 10px;
            position: relative;
        }
        .update {
            color: #888;
            font-size: 1.0rem;
            margin-top: 10px;
        }
    }
}
</style>
