<template>
    <div class="u-dropdown">

        <div class="dropdown-body" @click="toggle" @mouseenter="toggle" @mouseleave="toggle" v-clickoutside="close">
            <slot></slot>
        </div>

        <div class="dropdown-menu" :class="value ? 'dropdown-menu-show' : ''">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    props: {
        trigger: {
            type: String,
            default: 'click',
            validator: function(val) {
                return ['hover', 'click'].indexOf(val) > -1;
            }
        }
    },

    data() {
        return {
            value: false,
        };
    },
    methods: {
        toggle(e) {
            const type = e.type;
            switch (this.trigger) {
            case 'hover':
                if (type === 'mouseleave' || type === 'mouseenter') {
                    this.value = !this.value;
                }
                break;
            case 'click':
                if (type === 'click') {
                    this.value = !this.value;
                }
                break;
            default:
                console.log('unknown type');
            }
        },
        close() {
            this.value = false;
        }
    },

};
</script>


<style lang="scss">
    .u-dropdown {
        position: relative;
        min-width: 100px;

        .dropdown-body {
            cursor: pointer;
        }

        .dropdown-menu {
            min-width: 100px;
            max-height: 0;
            position: absolute;
            opacity: 0;
            background: #fff;
            transform: translateY(5px);
            transition: all 0.3s ease;
            box-shadow: 0 0 5px #dddddd;
            border-radius: 3px;
            overflow: hidden;
            z-index: 999;
        }
        .dropdown-menu-show {
            padding: 5px 0;
            opacity: 1;
            max-height: 400px;
            overflow: auto;
        }
    }
</style>