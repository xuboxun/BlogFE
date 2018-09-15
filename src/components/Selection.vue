<template>
    <div class="m-selection">
        <div class="select" @click="toggleSelect" :class="border ? 'select-border' : ''">
            <input type="hidden" :value="innerValue">
            <span>{{label}}</span>
            <Icon name="angle-down" class="icon" :class="dropDown ? 'icon-dropdown' : ''" />
        </div>
        <div class="option" :class="dropDown ? 'option-dropdown' : ''">
            <ul>
                <li v-for="(option, index) in options" :key="index" @click="setValue(index)">{{option.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Selection',
    props: {
        value: [String, Number],
        width: [String, Number],
        border: Boolean,
        options: Array,
    },
    data() {
        return {
            dropDown: false,
            innerValue: this.value,
            label: '请选择',
        };
    },
    watch: {
        'innerValue': function(value) {
            this.$emit('input', value)
        }
    },
    methods: {
        setValue(index) {
            const option = this.options[index];
            this.innerValue = option.value;
            this.label = option.label;
            this.toggleSelect();
        },
        toggleSelect() {
            this.dropDown = !this.dropDown;
        },
    },
};
</script>

<style lang="scss">
.m-selection {
    min-width: 100px;
    height: 30px;
    line-height: 30px;
    position: relative;

    .select {
        display: inline-block;
        width: 100%;
        background: transparent;
        border: 0;
        position: relative;
        padding: 0 25px 0 8px;

        span {
            display: inline-block;
            width: 100%;
            color: #808695;
        }

        .icon {
            position: absolute;
            right: 8px;
            top: 50%;
            color: #808695;
            transform: translateY(-50%) rotate(0deg);
            transition: all 0.5ms ease;
        }

        .icon-dropdown {
            transform: translateY(-50%) rotate(180deg);
        }
    }
    .select-border {
        border: 1px solid #dcdee2;
        border-radius: 5px;
    }

    .option {
        z-index: 999;
        background: #fff;
        width: 100%;
        position: absolute;
        top: 35px;
        border: 1px solid #f0f0f0;
        box-shadow: 0px 0px 4px #ddd;
        border-radius: 3px;
        transition: all 0.3s ease;
        display: none;
        max-height: 0;
        opacity: 0;

        ul {
            padding: 3px 0;

            li {
                padding: 0 10px;
                color: #515a6e;
                border-bottom: 1px solid #e8eaec;
            }
            li:last-child {
                border-bottom: 0;
            }
        }
    }
    .option-dropdown {
        opacity: 1;
        max-height: 250px;
        overflow: auto;
        display: inline-block;
    }
}
</style>

