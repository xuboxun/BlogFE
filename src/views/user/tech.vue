<template>
    <UserWrapper>
        <div>
            tech
            <p>{{$store.state.tmp.items}}</p>
        </div>
    </UserWrapper>
</template>

<script>
import UserWrapper from '@/components/UserWrapper';
export default {
    components: {
        UserWrapper,
    },

    data() {
        return {

        };
    },
    
};
</script>
