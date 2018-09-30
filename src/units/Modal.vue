<template>
    <transition name="fade">
        <div class="u-modal" v-if="value">
            <div class="modal-body"
                 :class="[center ? 'modal-body-center' : '']"
                 :style="['top: ' + top + 'px']"
            >
                <Icon class="icon-close" name="times" @click.native="close(false)"></Icon>
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
            type: String,
            default: '标题',
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
        width: 400px;
        height: 300px;
        background: #fff;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        top: 100px;
        transform: translateX(-50%);

        .icon-close {
            position: absolute;
            right: 10px;
            top: 10px;
            color: #999;
            cursor: pointer;
            width: 20px;
            height: 20px;
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