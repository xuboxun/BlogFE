<template>
    <div class="u-button" @click="click">
        <button class="button" :class="'button-' + type">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'default',
            validator: function(val) {
                return ['default', 'warn', 'text'].indexOf(val) > -1;
            }
        }
    },
    data() {
        return {

        };
    },
    methods: {
        click() {
            this.$emit('click');
        }
    }
};
</script>

<style lang="scss" scoped>
.u-button {
    display: inline-block;

    .button {
        font-size: 1.05rem;
        border: 0;
        height: 30px;
        padding: 0 15px;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.1s ease;
    }
    .button-default {
        background: #2d8cf0;
        color: #fff;
    }
    .button-warn {
        background: #ed4014;
        color: #fff;
    }
    .button-text {
        background: transparent;
        color: #17233d;
    }
    .button:hover {
        box-shadow: 0 0 3px #999;
    }
    .button:active {
        box-shadow: 0 0 8px #999;
    }
}
</style>