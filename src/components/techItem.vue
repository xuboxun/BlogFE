<template>
    <div class="m-techitem">
        <div class="time">2018-09-07</div>
        <div class="info">
            <h3 class="title">题目题目题目题目题目题目题目题目题目题目题目题目题目题目</h3>
            <p class="tags">
                <Tag />
                <Tag />
                <Tag />
            </p>
        </div>
    </div>
</template>

<script>
import Tag from '@/components/Tag';
export default {
    name: 'TechItem',
    components: {
        Tag,
    },
    props: {

    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">
.m-techitem {
    width: 100%;
    display: flex;
    padding: 10px 20px;

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
            color: #1c2438;
        }
        .tags {
            margin-top: 10px;
            color: #80848f;
        }
    }

}
</style>
