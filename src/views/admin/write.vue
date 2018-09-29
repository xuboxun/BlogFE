<template>
    <div class="v-admin-write">
        <div class="base-info">
            baseinfo
        </div>
        <div class="write-area">
            <MarkdownEditor />
        </div>
    </div>
</template>

<script>
import MarkdownEditor from '@/units/MarkdownEditor';
export default {
    components: {
        MarkdownEditor,
    },
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.v-admin-write {
    .base-info {
        height: 50px;
        width: 100%;
    }
    .write-area {
        height: calc(100% - 50px);
        width: 100%;
    }
}
</style>