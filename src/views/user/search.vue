<template>
    <div class="v-search">
        search {{$route.query.keyword}}
        <NoResult :show="!results.length" />
    </div>
</template>

<script>
import NoResult from '@/components/NoResult.vue';
export default {
    components: {
        NoResult,
    },
    data() {
        return {
            results: []
        };
    },
    methods: {
        search() {
            console.log('search');
        },
    },
    mounted() {

    }
};
</script>

<style lang="scss">
.v-search {
    
}
</style>