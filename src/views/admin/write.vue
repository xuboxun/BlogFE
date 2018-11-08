<template>
    <div class="v-admin-write">
        <LocateBar>
            <Button @click="saveDraft">保存草稿</Button>
        </LocateBar>
        <div class="write-area">
            <MarkdownEditor v-model="content" />
        </div>
    </div>
</template>

<script>
import MarkdownEditor from '@/units/MarkdownEditor';
import LocateBar from '@/units/LocateBar';
import Button from '@/units/Button';
export default {
    components: {
        MarkdownEditor,
        LocateBar,
        Button,
    },
    data: function () {
        return {
            content: ''
        };
    },
    methods: {
        saveDraft() {
            console.log(this.content);
        }
    }
};
</script>

<style lang="scss" scoped>
.v-admin-write {
    .base-info {
        height: 50px;
        width: 100%;
    }
    .write-area {
        height: calc(100% - 70px);
        width: 100%;
    }
}
</style>