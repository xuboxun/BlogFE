<template>
    <div class="m-userwrapper">
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
import TopMenu from '@/components/Menu';
export default {
    name: 'UserWrapper',
    components: {
        TopMenu,
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
.m-userwrapper {
    width: 100%;

    .body-width-responsive {
        width: 1040px;
    }

    & > .head {
        height: 56px;
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


