<template>
    <div class="v-tag-list">
        <div class="search">
            <input class="query-input" type="text" v-model="query">
            <button class="btn-search"><Icon name="search" /></button>
        </div>
        <div class="tags">
            <Tag v-for="(tag, index) in tags" :key="index" v-show="tag.title.indexOf(query) > -1"
                :name="tag.name" :title="tag.title" 
            />
        </div>
    </div>
</template>

<script>
import Tag from '@/components/Tag';
export default {
    components: {
        Tag,
    },
    data() {
        return {
            query: '',
        };
    },
    computed: {
        'tags': function() {
            return this.$store.state.tag.tags;
        },
    },
    methods: {
        
    },
};
</script>

<style lang="scss">
.v-tag-list {
    .search {
        width: 600px;
        margin: 20px 0 50px 0;
        position: relative;
        padding: 5px 50px 5px 10px;
        border: 1px solid #eee;
        border-radius: 3px;
        box-shadow: 1px 2px 5px #ddd;
        .query-input {
            width: 100%;
            height: 30px;
            line-height: 30px;
            border: none;
            font-size: 1.4rem;
            color: #808695;
        }
        .btn-search {
            height: 30px;
            width: 30px;
            position: absolute;
            right: 10px;
            top: 5px;
            background: transparent;
            border: none;
            color: #4285f4;
        }
    }
    .tags {

    }
    @media screen and (max-width: 480px) {
        .search {
            width: 100%;
        }
    }
}
</style>
