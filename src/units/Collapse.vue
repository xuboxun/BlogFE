<template>
    <div class="u-collapse">
        <div class="head" @click="toggle">
            <h3 class="title">
                {{title}}
                <Icon name="angle-up" class="icon" :class="fold ? 'icon-dropdown' : ''" />
            </h3>
        </div>
        <div class="body" :class="fold ? 'body-fold' : ''">
            <slot name="body"></slot>
        </div>
    </div>
</template>`

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
.u-collapse {
    
    .head {
        height: 30px;
        line-height: 30px;
        margin-bottom: 5px;
        padding-left: 10px;

        .title {
            font-size: 1.1rem;
            color: #17233d;
            font-weight: 400;
            position: relative;

            .icon {
                color: #808695;
                margin-left: 15px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%) rotate(0);
                transition: all 0.3s ease;
            }
            .icon-dropdown {
                transform: translateY(-50%) rotate(180deg);
            }
        }
    }
    .body {
        opacity: 1;
        transition: all 0.3s ease;
        padding-left: 25px;
        overflow: hidden;
        max-height: 1000px;
    }
    .body-fold {
        opacity: 0;
        max-height: 0;
    }
    & + .u-collapse {
        margin-top: 30px;
    }
}
</style>
