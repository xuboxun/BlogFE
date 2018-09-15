<template>
    <div class="m-collapse">
        <div class="head" @click="toggle">
            <h3 class="title">{{title}}</h3>
        </div>
        <div class="body" :class="fold ? 'body-fold' : ''">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Collapse',
    props: {
        title: [String, Number],
    },
    data() {
        return {
            fold: false
        };
    },
    methods: {
        toggle() {
            this.fold = !this.fold;
        }
    }
};
</script>

<style lang="scss">
.m-collapse {
    
    .head {
        height: 30px;
        line-height: 30px;
        margin-bottom: 5px;
        text-indent: 5px;

        .title {
            font-size: 1.1rem;
            color: #17233d;
            font-weight: 400;
        }
    }
    .body {
        opacity: 1;
        transition: all 0.5s ease;
        text-indent: 15px;
    }
    .body-fold {
        opacity: 0;
        height: 0;
        display: none;
    }
    & + .m-collapse {
        margin-top: 30px;
    }
}
</style>
