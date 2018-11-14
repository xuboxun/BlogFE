<template>
    <div class="u-button" @click="click">
        <button class="button" :class="['button-type-' + type, 'button-size-' + size]">
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
                return ['default', 'warn', 'text', 'textwarn'].indexOf(val) > -1;
            }
        },
        size: {
            type: String,
            default: 'normal',
            validator: function(val) {
                return ['small', 'normal', 'large'].indexOf(val) > -1;
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
        width: 100%;
        border: 0;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.1s ease;
    }
    .button-type-default {
        background: #2d8cf0;
        color: #fff;
    }
    .button-type-warn {
        background: #ed4014;
        color: #fff;
    }
    .button-type-text {
        background: transparent;
        color: #808695;
    }
    .button-type-textwarn {
        color: #ed4014;
        background: transparent;
    }
    .button-size-normal {
        font-size: 1.05rem;
        height: 30px;
        padding: 0 15px;
    }
    .button-size-small {
        font-size: 0.9rem;
        height: 25px;
        padding: 0 10px;
    }
    .button-size-large {
        font-size: 1.15rem;
        height: 35px;
        padding: 0 10px;
    }

    .button:hover {
        box-shadow: 0 0 3px #999;
    }
    .button:active {
        box-shadow: 0 0 8px #999;
    }
}
</style>