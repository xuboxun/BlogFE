<template>
    <div class="u-locate-bar">
        <div class="location" v-if="locations">
            <span class="location-item" v-for="(item, index) in locations" :key="index">{{item.name}}</span>
        </div>
        <div class="location" v-else>
            <span class="location-item">{{defaultTitle}}</span>
        </div>
        <div class="operation">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LocateBar',
    props: {
        locations: Array
    },
    data() {
        return {
            defaultTitle: '',
        };
    },
    created() {
        this.defaultTitle = this.$route.meta.title;
    }
};
</script>

<style lang="scss" scoped>
.u-locate-bar {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8eaec;

    .location {
        .location-item {
            font-size: 1.2rem;
            color: #17233d;
        }
    }
}
</style>