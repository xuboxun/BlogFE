<template>
    <div class="m-userwrapper">
        <Loading :show="loading"></Loading>
        <div class="head">
            <TopMenu></TopMenu>
        </div>
        <div class="body-width-responsive body">
            <router-view></router-view>
        </div>
        <div class="foot">
            <div>
                <p></p>
                <p class="content">Power by Xu boxun <span id="cnzz_stat_icon_1275502621" style="display: none;"></span></p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Loading from '@/components/Loading';
import TopMenu from '@/components/Menu';
export default {
    name: 'UserWrapper',
    components: {
        TopMenu,
        Loading,
    },
    computed: {
        ...mapState('system', {
            loading: state => state.loading,
        })
    },
    methods: {
        createAnalyse() {
            const wrapper = document.getElementById('cnzz_stat_icon_1275502621');
            const newScript = document.createElement('script');
            newScript.type = 'text/javascript';
            newScript.src = 'https://s96.cnzz.com/z_stat.php?id=1275502621&amp;show=pic';
            wrapper.appendChild(newScript);
        }
    },
    mounted() {
        this.createAnalyse();
    }
};
</script>

<style lang="scss">
@import '../styles/variable';
.m-userwrapper {
    width: 100%;
    padding-top: 56px;

    .body-width-responsive {
        width: $minWidth;
    }

    & > .head {
        width: 100%;
        height: 56px;
        background: #fff;
        box-shadow: 5px 0 5px #e0e0e0;

        display: flex;
        justify-content: center;

        position: fixed;
        z-index: 99999;
        top: 0;
        left: 0;
    }
    & > .body {
        margin: 0 auto;
        padding: 20px 20px;
    }
    @media screen and (max-width: 480px) {
        .body-width-responsive {
            width: 100%;
        }
        & > .body {
            width: 100%;
        }
    }
    & > .foot {
        height: 150px;
        padding-top: 50px;
        padding-bottom: 30px;
        text-align: center;

        .content {
            height: 50px;
            line-height: 50px;
            font-size: 1.1rem;
            color: #515a6e;
        }
    }
    .view-wrapper {
        display: flex;

        .view-body {
            flex: 1 1 auto;
        }

        .view-side {
            flex: 0 0 auto;
            padding-top: 40px;
            padding-left: 100px;
        }
    }

    @media screen and (max-width: 480px) {
        .view-wrapper {
            flex-direction: column;

            .view-side {
                flex: 1 1 auto;
                padding-top: 0;
                padding-left: 0;
                display: none;
            }
        }
    }
}
</style>


