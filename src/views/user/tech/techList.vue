<template>
    <div class="v-tech">
        <TechItem v-for="(tech, index) in techs" :tech="techList" :key="index"></TechItem>
    </div>
</template>

<script>
import TechItem from '@/components/techItem';
export default {
    components: {
        TechItem,
    },
    data() {
        return {
            techs: [],
        };
    },
    mounted() {
        this.$http.get('/api/tech/list').then(res => {
            this.techs = res.data.data.items;
        });
    },
};
</script>
