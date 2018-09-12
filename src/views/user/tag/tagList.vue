<template>
    <div class="v-tag-list">
        <div class="search">
            <input class="query-input" type="text" v-model="query" @keyup.enter="search">
            <button class="btn-search" @click="search"><Icon name="search" /></button>
        </div>
        <div class="tags">
            <Tag v-for="(tag, index) in filterTags" :key="index" :name="tag.name" :title="tag.title" size="large" />
            <NoResult v-if="filterTags.length === 0" />
        </div>
    </div>
</template>

<script>
import Tag from '@/components/Tag';
import NoResult from '@/components/NoResult';

export default {
    components: {
        Tag,
        NoResult,
    },
    data() {
        return {
            query: '',
            tags: [],
            filterTags: []
        };
    },
    watch: {
        '$store.state.tag.tags': function() {
            this.init();
        }
    },
    methods: {
        search() {
            this.filterTags = this.tags.filter(tag => {
                return tag.title.indexOf(this.query) > -1;
            });
        },
        init() {
            this.tags = this.$store.state.tag.tags;
            this.filterTags = this.tags;
        }
    },
    created() {
        this.init();
    }
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
      font-size: 1.15rem;
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
      cursor: pointer;
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
