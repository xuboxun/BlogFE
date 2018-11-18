<template>
    <div class="u-input" :style="'width: ' + width">
        <template v-if="type !== 'textarea'">
            <input class="type-normal" :type="type" v-model="innerValue" @input="update" :placeholder="placeholder">
        </template>
        <template v-else>
            <textarea class="type-textarea" v-model="innerValue" @input="update" :placeholder="placeholder"></textarea>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        value: [String, Number],
        type: {
            type: String,
            default: 'text'
        },
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
    min-width: 150px;
    .type-normal {
        width: 100%;
        height: 35px;
        padding: 0 8px;
        color: #515a6e;
        border: 1px solid #dcdee2;
        border-radius: 3px;
    }
    .type-textarea {
        width: 100%;
        height: 100px;
        color: #515a6e;
        padding: 8px;
        border-radius: 3px;
        border: 1px solid #dcdee2;
    }
}
</style>