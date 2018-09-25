<template>
    <div class="v-archives">
        <div class="filter">
            <div class="body-width-responsive filter-content">
                <Selection v-model="filterTime" :options="timeOptions" width="150px"></Selection>
                <Selection v-model="filterType" :options="typeOption" style="margin-left: 20px;"></Selection>
            </div>
        </div>
        <div class="archives-list">
            <Collapse v-for="group in filterBlogs" :key="group.name" :title="Filter.yearMonth(group.name)">
                <div slot="body">
                    <li v-for="blog in group.blogs" :key="blog.name" class="blog-item">
                        <router-link :to="'/' + blog.type + '/blog/' + blog.name">
                            {{blog.title}}
                        </router-link>
                    </li>
                </div>
            </Collapse>
            <NoResult :show="!filterBlogs.length" />
        </div>
    </div>
</template>

<script>
import Collapse from '@/components/Collapse.vue';
import Selection from '@/components/Selection.vue';
import NoResult from '@/components/NoResult.vue';
import Filter from '@/utils/filter.js';
// 按时间顺序归档
export default {
    components: {
        Collapse,
        Selection,
        NoResult,
    },
    data() {
        return {
            Filter: Filter,
            blogs: [],
            filterTime: '',
            filterType: '',
            typeOption: [
                { value: '', label: '全部类型' },
                { value: 'tech', label: '技术' },
                { value: 'culture', label: '随笔' },
                { value: 'serial', label: '专栏' }
            ]
        };
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
                    name: group,
                    blogs: groups[group].sort((a, b) => {
                        return b.createTime - a.createTime;
                    })
                };
            });
            groupBy = groupBy.sort((a, b) => {
                return parseInt(b.name) - parseInt(a.name);
            });
            
            return groupBy;
        },
        filterBlogs: function() {
            if (this.filterTime === '' && this.filterType === '') {
                return this.groupBy;
            } else {
                let arr = [];
                this.groupBy.forEach(group => {
                    if (group.name.indexOf(this.filterTime) > -1) {
                        let blogs = group.blogs.filter(blog => {
                            return blog.type.indexOf(this.filterType) > -1;
                        });
                        if (blogs.length > 0) {
                            arr.push({
                                name: group.name,
                                blogs: blogs
                            });
                        }
                    }
                });
                return arr;
            }
        },
        timeOptions: function() {
            let arr = [{value: '', label: '全部时间'}];
            this.groupBy.forEach(group => {
                arr.push({
                    value: group.name,
                    label: Filter.yearMonth(group.name)   
                });
            });
            return arr;
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
        width: 100%;
        position: fixed;
        left: 0;
        top: 56px;
        padding: 30px;
        z-index: 999;
        background: #fff;

        .filter-content {
            margin: 0 auto;
        }
    }
    .archives-list {
        position: relative;
        top: 80px;

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
    @media screen and (max-width: 480px) {
        .filter {
            padding: 20px 20px;
        }
        .archives-list {
            top: 45px;
        }
    }
}
</style>


