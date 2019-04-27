<template>
    <div class="v-tag-list">
        <div class="view-wrapper">
            <div class="view-body">
                <div class="search">
                    <input class="query-input" type="text" v-model="query" @keyup.enter="filter">
                    <button class="btn-search" @click="filter"><Icon name="search" /></button>
                </div>
                <div class="tags">
                    <Tag v-for="tag in filterTags" :key="tag.name" :name="tag.name" :title="tag.title" size="large" />
                    <NoResult :show="!filterTags.length" />
                </div>
            </div>
            <div class="view-side">
                <Side />
            </div>
        </div>
    </div>
</template>

<script>
import Tag from '@/units/Tag';
import NoResult from '@/components/NoResult.vue';
import Side from '@/components/Side.vue';
import { getTagList } from '@/service/tag';
import { mapMutations } from 'vuex';

export default {
    components: {
        Tag,
        NoResult,
        Side,
    },
    data() {
        return {
            query: '',
            tags: [],
            filterTags: []
        };
    },
    watch: {
        'query': function() {
            this.filter();
        }
    },
    methods: {
        ...mapMutations('system', [
            'setLoading'
        ]),
        filter() {
            this.filterTags = this.tags.filter(tag => {
                return tag.title.indexOf(this.query) > -1;
            });
        },
        searchTagList() {
            this.setLoading(true);
            getTagList().then(res => {
                if (res.data.code === 200) {
                    this.tags = res.data.result.items;
                    this.filterTags = this.tags;
                }
                this.setLoading(false);
            });
        }
    },
    created() {
        this.searchTagList();
    }
};
</script>

<style lang="scss">
.v-tag-list {
  .search {
    width: 600px;
    margin: 20px auto 50px auto;
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
