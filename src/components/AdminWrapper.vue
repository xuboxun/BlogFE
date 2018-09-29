<template>
    <div class="m-admin-wrapper">
        <div class="header-container">
            <div class="admin-header">
                <div class="logo-area">
                    <Icon name="bars" width="25" height="20" class="bar" @click.native="toggleNav" />
                    <h1 class="name">控制台</h1>
                </div>
                <div class="toolbar">
                    <Dropdown>
                        <div class="user">
                            <Icon name="user" class="icon" />
                            <span class="name">admin</span>
                            <Icon name="angle-down" class="icon" />
                        </div>
                        <div slot="content">
                            <li class="menu-item">个人信息</li>
                            <li class="menu-item">退出</li>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </div>
        <div class="body-container">
            <div class="navbar-container" :class="navShow ? '' : 'navbar-container-toggle'">
                <div class="admin-navbar">
                    <router-link to="/admin"><li class="nav-item"><Icon name="tachometer-alt" class="icon" />Dashboard</li></router-link>
                    <router-link to="/admin/write"><li class="nav-item"><Icon name="edit" class="icon" />写博客</li></router-link>
                    <Divider />
                    <router-link to="/admin/blog"><li class="nav-item"><Icon name="th-list" class="icon" />博客管理</li></router-link>
                    <router-link to="/admin/tag"><li class="nav-item"><Icon name="tag" class="icon" />标签管理</li></router-link>
                    <router-link to="/admin/subscribe"><li class="nav-item"><Icon name="rss" class="icon" />订阅管理</li></router-link>
                    <router-link to="/admin/system"><li class="nav-item"><Icon name="cog" class="icon" />系统管理</li></router-link>
                </div>
            </div>
            
            <div class="admin-console">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/units/Dropdown';
import Divider from '@/units/Divider';
export default {
    components: {
        Dropdown,
        Divider,
    },
    data() {
        return {
            navShow: true,
        };
    },
    methods: {
        toggleNav() {
            this.navShow = !this.navShow;
        }
    },
};
</script>

<style lang="scss">
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-shadow: 0 3px 10px #999;
        position: relative;
        top: 0;

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

        .toolbar {
            display: flex;
            align-items: center;
            padding: 0 20px;

            .user {
                height: $headerHeight;
                width: 100px;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;

                .icon {
                    color: #fff;
                }
                .name {
                    margin: 0 5px;
                }
            }
            .menu-item {
                padding: 0 10px;
                line-height: 35px;
                height: 35px;
                cursor: pointer;

                &:hover {
                    background: #f8f8f9;
                }
            }
        }
    }

    .body-container {
        flex: 1 1 auto;
        display: flex;
        flex-direction: row;
    }
    .navbar-container {
        width: $leftWidth;
        background: #aaa;
        overflow: hidden;
    }
    .navbar-container-toggle {
        width: 0;
        transform: translateX(-$leftWidth);
    }

    @media screen and (max-width: 480px) {
        .navbar-container {
            width: 0;
            transform: translateX(-$leftWidth);
        }
        .navbar-container-toggle {
            width: $leftWidth;
            transform: translateX(0);
        }
    }
    .admin-navbar {
        width: $leftWidth;
        height: 100%;
        background: #fff;
        border: 1px solid #ddd;

        .nav-item {
            height: 50px;
            line-height: 50px;
            font-size: 1.1rem;
            cursor: pointer;
            padding: 0 15px;

            &:hover {
                background: #f8f8f9;
            }
            .icon {
                margin-right: 10px;
            }
        }
    }
    .admin-console {
        flex: 1 1 auto;
        background: #fafafa;
        padding: 20px 25px;

        & > div {
            width: 100%;
            height: 100%;
        }
    }
    .navbar-container,
    .admin-console {
        transition: all 0.3s ease;
    }
}
</style>
