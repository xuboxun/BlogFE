<template>
    <div class="v-admin-serial">
        <LocateBar>
            <Button @click="addSerial">添加专栏</Button>
        </LocateBar>
        <Modal v-model="addModal">
            content
        </Modal>
    </div>
</template>

<script>
import LocateBar from '@/units/LocateBar';
import Modal from '@/units/Modal';
export default {
    name: 'serial',
    components: {
        LocateBar,
        Modal,
    },
    data() {
        return {
            addModal: false
        };
    },
    methods: {
        addSerial() {
            console.log('addSerial');
            this.addModal = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.v-admin-serial {

}
</style>