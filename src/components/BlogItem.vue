<template>
    <div class="m-blogitem">
        <div class="time">{{Filter.time(blog.createTime)}}</div>
        <div class="info">
            <h3 class="title"><router-link :to="'/' + blog.type + '/blog/' + blog.name">{{blog.title}}</router-link></h3>
            <p class="tags">
                <Tag v-for="(tag, index) in blog.tags" :key="index" :name="tag.name" :title="tag.title" size="small" />
            </p>
        </div>
    </div>
</template>

<script>
import Filter from '@/utils/filter.js';
import Tag from '@/units/Tag';
export default {
    name: 'BlogItem',
    components: {
        Tag,
    },
    props: {
        blog: Object
    },
    data() {
        return {
            Filter: Filter,
        };
    },
};
</script>

<style lang="scss">
.m-blogitem {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px 0px;

    .time {
        width: 150px;
        line-height: 30px;
        font-size: 1.4rem;
        color: #80848f;
    }
    .info {
        flex: 1 1 0;
        .title {
            line-height: 30px;
            font-weight: 400;
            font-size: 1.4rem;
            color: #333;
        }
        .tags {
            margin-top: 10px;
            color: #80848f;
        }
    }

    @media screen and (max-width: 480px) {
        & {
            flex-direction: column;
        }
        .time, .info {
            width: 100%;
        }
        .time {
            font-size: 1.1rem;
        }
        .info {
            .title {
                font-size: 1.2rem;
                line-height: 25px;
            }
        }
    }

}
</style>
