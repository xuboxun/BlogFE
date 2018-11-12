<template>
    <div class="u-select" v-clickoutside="close">
        <div class="select-wrapper">
            <div class="select-value" @click="toggleOption">
                <template v-if="!multiple">
                    {{ innerValue[0].title }}
                </template>
                <template v-else>
                    <Tag v-for="item in innerValue" :key="item.value" :name="item.value" :title="item.title" size="small"></Tag>
                </template>
            </div>
            <div class="select-option" :class="!optionShow ? 'select-option-hide' : ''">
                <li class="option"
                    v-for="item in options"
                    :key="item.value"
                    @click="selectOption(item)">
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
            innerValue: [
                { value: '', title: ''}
            ],
            optionShow: false,
        };
    },
    watch: {
        value: function() {
            // console.log('watch value');
            // if (!this.multiple) {
            //     this.innerValue = [this.options.find(item => item.value === this.value)];
            //     console.log(this.innerValue);
            // } else {
            //     this.innerValue = this.options.filter(item => item.value === this.value);
            // }
        },
        innerValue: function() {
            console.log('watch innerValue');
            let val = this.innerValue.map(item => item.value);
            if (!this.multiple) {
                val = val[0];
            }
            this.$emit('update', val);
        }
    },
    methods: {
        close() {
            this.optionShow = false;
        },
        toggleOption() {
            this.optionShow = !this.optionShow;
        },
        selectOption(option) {
            if (!this.multiple) {
                this.innerValue = [option];
                this.close();
            } else {
                let index = this.innerValue.findIndex(item => item.value === option.value);
                if (index === -1) {
                    this.innerValue.push(option);
                } else {
                    this.innerValue.splice(index, 1);
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.u-select {
    width: 200px;
    height: 35px;
    .select-wrapper {
        width: 200px;
        height: 35px;
        z-index: 9999;
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