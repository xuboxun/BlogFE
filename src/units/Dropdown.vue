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
            position: absolute;
            opacity: 0;
            max-height: 0;
            background: #fff;
            transform: translateY(5px);
            transition: all 0.3s ease;
            box-shadow: 0 0 5px #dddddd;
            border-radius: 3px;

            ul {
                padding: 5px 0;
            }
            li {
                padding: 0 10px;
                line-height: 30px;
                height: 30px;
                cursor: pointer;

                &:hover {
                    background: #f8f8f9;
                }
            }
        }
        .dropdown-menu-show {
            opacity: 1;
            max-height: 400px;
            overflow: auto;
        }
    }
</style>