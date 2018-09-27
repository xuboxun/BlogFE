<template>
    <div class="m-admin-wrapper">
        <div class="header-container">
            <div class="admin-header">
                <div class="logo-area">
                    <Icon name="bars" width="25" height="20" class="bar" @click.native="toggleNav" />
                    <h1 class="name">博客后台</h1>
                </div>
                <div class="toolbar">
                    <!-- user -->
                </div>
            </div>
        </div>
        <div class="body-container">
            <div class="admin-navbar" :class="navShow ? '' : 'admin-navbar-hide'">
                navbar navbar navbar navbar
            </div>
            
            <div class="admin-console">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navShow: true,
        };
    },
    methods: {
        toggleNav() {
            console.log('click')
            this.navShow = !this.navShow;
        }
    }
};
</script>

<style lang="scss" scoped>
.m-admin-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    $leftWidth: 200px;
    $headerHeight: 56px;

    .header-container {
        flex: 0 0 auto;
    }
    .admin-header {
        height: $headerHeight;
        background: #607d8b !important;

        .logo-area {
            width: $leftWidth;
            height: 100%;
            align-items: center;
            display: flex;

            .bar {
                cursor: pointer;
                color: #fff;
                margin: 0 25px;
            }
            .name {
                display: inline-block;
                font-size: 1.3rem;
                font-weight: 400;
                color: #fff;
            }
        }
    }

    .body-container {
        flex: 1 1 auto;
        display: flex;
        flex-direction: row;
    }
    .admin-navbar {
        width: $leftWidth;
        background: #aaa;
        overflow: hidden;
    }
    .admin-navbar-hide {
        width: 0;
        transform: translateX(-$leftWidth);
    }
    .admin-console {
        flex: 1 1 auto;
        background: #eee;
    }
    .admin-navbar,
    .admin-console {
        transition: all 0.3s ease;
    }
}
</style>
