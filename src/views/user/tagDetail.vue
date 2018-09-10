<template>
    <div class="v-tagdetail">
        <div class="tag">
            <h3 class="name">{{tagName}}</h3>
            <p class="desc">{{tagDesc}}</p>
        </div>
        <div class="blogs">
            <h4>列表</h4>
            <ul class="list">
                <li class="item" v-for="(item, index) in blogList" :key="index">
                    <router-link to=""><font>2018</font>content title</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tagName: '',
            tagDesc: '',
            blogList: []
        };
    },
    methods: {

    }
};
</script>

<style lang="scss">
.v-tagdetail {
    .tag {
        .name {
            font-size: 1.4rem;
            font-weight: 400;
            color: #17233d;
        }
        .desc {
            font-size: 1.1rem;
            color: #515a6e;
        }
    }
    .blogs {
        margin-top: 50px;
        h4 {
            border-bottom: 1px solid #e8eaec;
            font-weight: 400;
            font-size: 1.1rem;
        }
        .item {
            height: 30px;
            line-height: 30px;
            a {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }
        
    }
}
</style>
