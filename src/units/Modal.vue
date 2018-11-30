<template>
    <transition name="fade">
        <div class="u-modal" v-if="value">
            <div class="modal-body"
                 :class="[center ? 'modal-body-center' : '']"
                 :style="['top: ' + top + 'px']">
                <Icon class="icon-close" name="times" @click.native="close(false)"></Icon>
                <template v-if="title">
                    <h3 class="default-title">{{ title }}</h3>
                </template>
                <slot></slot>
            </div>
            <div class="modal-mask" @click="maskClose"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        title: {
            type: String
        },
        value: {
            type: Boolean,
            default: false
        },
        maskClosable: {
            type: Boolean,
            default: false
        },
        top: {
            type: Number,
            default: 100
        },
        center: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'value',
        event: 'update'
    },
    methods: {
        close(val) {
            this.$emit('update', val);
        },
        maskClose() {
            if (this.maskClosable) {
                this.close(false);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.u-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .modal-body {
        min-width: 400px;
        min-height: 200px;
        background: #fff;
        border-radius: 5px;
        padding: 15px 20px 20px;
        position: absolute;
        left: 50%;
        top: 100px;
        transform: translateX(-50%);

        .icon-close {
            position: absolute;
            right: 15px;
            top: 15px;
            color: #999;
            cursor: pointer;
            width: 20px;
            height: 20px;
        }
        .default-title {
            font-size: 16px;
            font-weight: 400;
            color: #1c2438;
            margin-bottom: 10px;
        }
    }
    .modal-body-center {
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .modal-mask {
        width: 100%;
        height: 100%;
        background: rgba(55, 55, 55, 0.6);
    }
}
</style>