<template>
    <div class="u-input" :style="'width: ' + width">
        <input type="text" v-model="innerValue" @input="update" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        value: [String, Number],
        width: {
            type: String,
            default: '150px'
        },
        placeholder: {
            type: String,
            default: ''
        },
    },
    model: {
        prop: 'value',
        event: 'update'
    },
    data() {
        return {
            innerValue: '',
        };
    },
    watch: {
        value: function() {
            if (this.value !== this.innerValue) {
                this.innerValue = this.value;
            }
        }
    },
    methods: {
        update(e) {
            const val = this.innerValue;
            this.$emit('update', val);
        }
    }
};
</script>

<style lang="scss">
.u-input {
    width: 150px;
    input {
        width: 100%;
        height: 35px;
        padding: 0 5px;
        color: #515a6e;
        border: 1px solid #dcdee2;
        border-radius: 3px;
    }
}
</style>