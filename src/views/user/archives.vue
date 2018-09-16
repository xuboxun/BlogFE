<template>
    <div class="v-archives">
        <div class="filter">
            <Selection v-model="filterTime" :options="options" width="150px"></Selection>
        </div>
        <div>
            <Collapse v-for="(group, index) in groupBy" :key="index" :title="Filter.yearMonth(group.name)">
                <div slot="body">
                    <li v-for="(blog, index) in group.blogs" :key="index" class="blog-item">
                        <router-link :to="'/' + blog.type + '/blog/' + blog.name">
                            {{blog.title}}
                        </router-link>
                    </li>
                </div>
            </Collapse>
        </div>
    </div>
</template>

<script>
import Collapse from '@/components/Collapse.vue';
import Selection from '@/components/Selection.vue';
import Filter from '@/utils/filter.js';
// 按时间顺序归档
export default {
    components: {
        Collapse,
        Selection
    },
    data() {
        return {
            Filter: Filter,
            blogs: [],
            filterTime: '',
            filterType: '',
        };
    },
    watch: {
        'filterTime': function(val) {
            console.log('filterTime change: ' + val)
        }
    },
    computed: {
        groupBy: function() {
            let groupBy = [];

            let groups = {};
            this.blogs.forEach(blog => {
                groups[blog.groupTime] ? groups[blog.groupTime].push(blog) : groups[blog.groupTime] = [blog];
            });

            groupBy = Object.keys(groups).map(group => {
                return {
                    name: +group,
                    blogs: groups[group].sort((a, b) => {
                        return b.createTime - a.createTime;
                    })
                };
            });
            groupBy = groupBy.sort((a, b) => {
                return b.name -a.name;
            });
            
            return groupBy;
        },
        options: function() {
            return this.groupBy.map(group => {
                return {
                    value: group.name,
                    label: Filter.yearMonth(group.name)   
                };
            });
        }
    },
    methods: {
        searchArchives() {
            this.$http.get('/api/archives').then(res => {
                this.blogs = res.data.data.items.map(blog => {
                    return {
                        ...blog,
                        groupTime: +Filter.time(blog.createTime, 'YYYYMM'),
                    };
                });
            });
        }
    },
    created() {
        this.searchArchives();
    }
};
</script>

<style lang="scss">
.v-archives {
    .filter {
        height: 50px;
        line-height: 50px;
        margin-bottom: 10px;
    }
    .blog-item {
        height: 30px;
        line-height: 30px;
        a {
            display: inline-block;
            height: 100%;
        }
    }
    @media screen and (max-width: 480px) {
        .blog-item {
            a {
                width: 100%;
                overflow: hidden;
                white-space: nowrap;;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>


