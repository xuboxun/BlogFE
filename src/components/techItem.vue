<template>
    <div class="m-techitem">
        <div class="time">{{Filter.time(tech.createTime)}}</div>
        <div class="info">
            <h3 class="title">{{tech.title}}</h3>
            <p class="tags">
                <Tag v-for="(name, index) in tech.tagNames" :key="index" :name="name" />
            </p>
        </div>
    </div>
</template>

<script>
import Filter from '@/utils/filter.js';
import Tag from '@/components/Tag';
export default {
    name: 'TechItem',
    components: {
        Tag,
    },
    props: {
        tech: Object
    },
    data() {
        return {
            Filter: Filter,
        };
    },
};
</script>

<style lang="scss">
.m-techitem {
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
