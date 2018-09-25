<template>
    <div class="m-pager">
        <li class="pager-item"
            :class="innerPageNum === 1 ? 'pager-item-disabled' : ''"
            @click="prev"
        >
            上一页
        </li>
        <li class="pager-item"
            :class="innerPageNum === page ? 'pager-item-active' : ''"
            v-for="page in pageCount" :key="page"
            @click="jump(page)"
        >
            {{page}}
        </li>

        <li class="pager-item"
            :class="innerPageNum === pageCount ? 'pager-item-disabled' : ''"
            @click="next"
        >
            下一页
        </li>
    </div>
</template>

<script>
export default {
    name: 'Pager',
    props: {
        pageNum: {
            type: Number,
            default: 1,
        },
        pageSize: {
            type: Number,
            default: 10,
        },
        total: {
            type: Number,
            default: 0,
        },
        onChange: Function
    },
    data() {
        return {
            innerPageNum: this.pageNum,
            innerPageSize: this.pageSize,
        };
    },
    methods: {
        prev() {
            if (this.innerPageNum !== 1) {
                this.innerPageNum = this.innerPageNum - 1;
            }
        },
        next() {
            if (this.innerPageNum !== this.pageCount) {
                this.innerPageNum = this.innerPageNum + 1;
            }
        },
        jump(val) {
            this.innerPageNum = val;
        },
        step() {

        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.total / this.pageSize);
        }
    }
};
</script>

<style lang="scss">
.m-pager {
    margin-top: 10px;
    .pager-item {
        height: 25px;
        line-height: 25px;
        float: left;
        padding: 0 10px;
        color: #2d8cf0;
        cursor: pointer;
    }
    .pager-item-active {
        background: #2d8cf0;
        color: #fff;
        border-radius: 3px;
    }
    .pager-item-disabled {
        color: #c5c8ce;
        cursor: not-allowed;
    }
}
</style>
