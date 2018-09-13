<template>
    <div class="v-archives">
        <Collapse v-for="(year, index) in groupBy" :key="index" :title="year.year + '年'">
            <div slot="body">
                <Collapse v-for="(month, index) in year.data" :key="index" :title="month.month + '月'">
                    <div slot="body">
                        <li v-for="(blog, index) in month.data" :key="index" class="blog-item">
                            <router-link :to="'/' + blog.type + '/blog/' + blog.name">
                                {{blog.title}}
                            </router-link>
                        </li>
                    </div>
                </Collapse>
            </div>
        </Collapse>
    </div>
</template>

<script>
import Collapse from '@/components/Collapse.vue';
import Filter from '@/utils/filter.js';
// 按时间顺序归档
export default {
    components: {
        Collapse,
    },
    data() {
        return {
            blogs: []
        };
    },
    computed: {
        groupBy: function() {
            let groupBy = [];

            let years = {};
            this.blogs.forEach(blog => {
                years[blog.year] ? years[blog.year].push(blog) : years[blog.year] = [blog];
            });

            groupBy = Object.keys(years).map(year => {
                let months = {};
                years[year].forEach(blog => {
                    months[blog.month] ? months[blog.month].push(blog) : months[blog.month] = [blog];
                });
                return {
                    year: +year,
                    data: Object.keys(months).map(month => {
                        return {
                            month: +month,
                            data: months[month]
                        };
                    }).sort((a, b) => {
                        return b.month - a.month;
                    })
                };
            });
            groupBy = groupBy.sort((a, b) => {
                return b.year -a.year;
            });
            
            return groupBy;
        },
    },
    methods: {
        searchArchives() {
            this.$http.get('/api/archives').then(res => {
                this.blogs = res.data.data.items.map(blog => {
                    return {
                        ...blog,
                        year: +Filter.time(blog.createTime, 'YYYY'),
                        month: +Filter.time(blog.createTime, 'MM'),
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


