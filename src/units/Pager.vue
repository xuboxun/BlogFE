<template>
    <div class="u-pager">
        <ul class="pager-ul" :style="'float:' + align">
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
        </ul>
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
        align: {
            type: String,
            default: 'left',
            validator: function(val) {
                return ['left', 'center', 'right'].indexOf(val) > -1;
            }
        }
    },
    model: {
        prop: 'pageNum',
        event: 'update'
    },
    data() {
        return {
            innerPageNum: this.pageNum,
            innerPageSize: this.pageSize,
        };
    },
    watch: {
        innerPageNum: function(val) {
            this.$emit('update', val);
            this.$emit('change-page');
        }
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
.u-pager {
    margin-top: 10px;

    .pager-ul {
        display: inline-block;
    }
    .pager-item {
        height: 25px;
        line-height: 25px;
        padding: 0 10px;
        color: #2d8cf0;
        cursor: pointer;
        float: left;
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
