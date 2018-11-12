<template>
    <div class="u-select" v-clickoutside="close">
        <div class="select-wrapper">
            <div class="select-value" @click="toggleOption">
                <font v-if="value === undefined || value.length === 0" class="select-placement">{{ placement }}</font>
                <template v-if="!multiple">
                    {{ selectedOption && selectedOption.title }}
                </template>
                <template v-else>
                    <Tag
                        v-for="item in selectedOption"
                        :key="item.value"
                        :title="item.title"
                        size="small"
                        :closable="true"
                        @close="closeTag(item.value)"
                    ></Tag>
                </template>
            </div>
            <div class="select-option" :class="!optionShow ? 'select-option-hide' : ''">
                <li class="option"
                    v-for="item in options"
                    :key="item.value"
                    @click="selectOption(item.value)">
                    {{ item.title }}
                    <Icon class="option-check" name="check" v-if="!multiple ? innerValue === item.value : innerValue.indexOf(item.value) > -1"></Icon>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Select',
    props: {
        value: [String, Number, Array],
        placement: {
            type: String,
            default: '请选择'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    model: {
        prop: 'value',
        event: 'update'
    },
    data() {
        return {
            innerValue: this.multiple ? [] : '',
            optionShow: false,
        };
    },
    computed: {
        selectedOption: function() {
            if (!this.multiple) {
                return this.options.find(item => item.value === this.value);
            } else {
                return this.options.filter(item => {
                    return this.value && this.value.indexOf(item.value) > -1;
                });
            }
        }
    },
    watch: {
        value: function() {
            console.log('watch value');
            console.log(this.value);
            this.innerValue = this.value;
        },
        innerValue: function() {
            console.log('watch innerValue');
            this.$emit('update', this.innerValue);
        }
    },
    methods: {
        close() {
            this.optionShow = false;
        },
        toggleOption() {
            this.optionShow = !this.optionShow;
        },
        selectOption(optionValue) {
            if (!this.multiple) {
                this.innerValue = optionValue;
                this.close();
            } else {
                let index = this.innerValue.findIndex(value => value === optionValue);
                if (index === -1) {
                    this.innerValue.push(optionValue);
                } else {
                    this.innerValue.splice(index, 1);
                }
            }
        },
        closeTag(optionValue) {
            let index = this.innerValue.findIndex(value => value === optionValue);
            if (index === -1) {
                this.innerValue.push(optionValue);
            } else {
                this.innerValue.splice(index, 1);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.u-select {
    min-width: 200px;
    height: 35px;
    .select-wrapper {
        min-width: 200px;
        height: 35px;
        z-index: 999;
        position: absolute;
    }
    .select-value {
        width: 100%;
        height: 35px;
        line-height: 35px;
        padding: 0 5px;
        color: #515a6e;
        border: 1px solid #dcdee2;
        border-radius: 3px;
        background: #fff;
        cursor: pointer;
        .select-placement {
            color: #ccc;
        }
    }
    .select-option {
        width: 100%;
        max-height: 500px;
        position: absolute;
        top: 38px;
        left: 0;
        overflow: hidden;
        box-shadow: 0 0 5px #ccc;
        border-radius: 3px;
        background: #fff;
        padding: 5px 0;

        .option {
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            cursor: pointer;
            color: #666;
            position: relative;
            .option-check {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
    .select-option-hide {
        max-height: 0;
        padding: 0;
    }
}
</style>