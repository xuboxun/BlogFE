<template>
    <div class="v-home">
        <div class="home-banner">

        </div>
        <div class="content-wrapper">
            <div class="home-content">
                <div class="recent">
                    <h2 class="section-title">最近更新</h2>
                    <div class="blog-item" v-for="(blog, index) in recent" :key="index">
                        <p class="type">{{Filter.blogType(blog.type)}} | {{Filter.time(blog.createTime)}}</p>
                        <h3 class="title">
                            <router-link :to="'/' + blog.type + '/blog/' + blog.name">{{blog.title}}</router-link>
                        </h3>
                        <p class="brief">{{blog.content.slice(0, 200) + '...'}}</p>
                    </div>
                </div>
            </div>

            <div class="home-side">
                <Side />
            </div>
        </div>

        
    </div>
</template>

<script>
import Side from '@/components/Side';
import Filter from '@/utils/filter';
export default {
    components: {
        Side,
    },
    data() {
        return {
            Filter,
            recent: [],
            mostView: []
        };
    },
    computed: {
        items() {
            return this.$store.state.tmp.items;
        }
    },
    methods: {
        searchRecent() {
            this.$http.get('/api/home/recent', {
                params: {
                    size: 6
                }
            }).then(res => {
                this.recent = res.data.data.items;
            });
        },
        searchMostView() {
            this.$http.get('/api/home/mostview').then(res => {
                this.mostView = res.data.data.items;
            });
        }
    },
    created() {
        this.searchRecent();
        this.searchMostView();
    }
};
</script>

<style lang="scss">
.v-home {
    .home-banner {
        width: 100%;
        height: 400px;
        border: 1px solid #dcdee2;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 30px;
    }
    .content-wrapper {
        display: flex;
        .home-content {
            flex: 1 1 auto;    
            .section-title {
                font-size: 1.45rem;
                font-weight: 400;
                line-height: 40px;
                border-bottom: 1px solid #e8eaec;
                margin-bottom: 15px;
                color: #515a6e;
            }
            .recent {
                .blog-item {
                    margin-bottom: 30px;
                    .type {
                        line-height: 25px;
                        font-size: 1.1rem;
                        color: #808695;
                    }
                    .title {
                        line-height: 35px;
                        font-size: 1.2rem;
                        font-weight: 400;
                        color: #17233d;
                    }
                    .brief {
                        text-indent: 2.1rem;
                        font-size: 1.05rem;
                        color: #515a6e;
                    }
                }
            }
        }

        .home-side {
            flex: 0 0 auto;
            padding-top: 40px;
            padding-left: 100px;
        }
    }

    @media screen and (max-width: 480px) {
        .home-banner {
            height: 200px;
        }
        .content-wrapper {
            flex-direction: column;

            .home-content {

            }
            .home-side {
                flex: 1 1 auto;
                padding-top: 0;
                padding-left: 0;
            }
        }
    }
    
    
}
</style>

