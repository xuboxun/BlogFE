<template>
    <div class="v-about">
        <div class="about-me">
            <h2 class="section-title">关于我</h2>
            <div class="section-content">
                233
            </div>
        </div>
        <div class="about-system">
            <h2 class="section-title">关于系统</h2>
            <div class="section-content">
                <Timeline :data="versions"></Timeline>
            </div>
        </div>
    </div>
</template>

<script>
import Timeline from '@/units/Timeline.vue';
import Filter from '@/utils/filter.js';
export default {
    components: {
        Timeline,
    },
    data() {
        return {
            versions: []
        };
    },
    created() {
        this.$http.get('/api/system/version').then(res => {
            let items = res.data.data.items;
            this.versions = items.map(item => {
                return {
                    title: item.version,
                    content: item.content.split('。'),
                    time: Filter.time(item.time),
                };
            });
        });
    }
};
</script>

<style lang="scss">
.v-about {
    .section-title {
        font-size: 1.2rem;
        font-weight: 400;
        color: #17233d;
    }
    .section-content {
        padding: 10px 0 20px 10px;
    }
    .about-me {

    }
    .about-system {

    }
}
</style>


