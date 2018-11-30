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
                            <li class="menu-item" @click="logout">退出</li>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </div>
        <div class="body-container">
            <div class="navbar-container" :class="navShow ? '' : 'navbar-container-toggle'">
                <div class="admin-navbar">
                    <li class="nav-item"><router-link to="/admin"><Icon name="tachometer-alt" class="icon" />Dashboard</router-link></li>
                    <li class="nav-item"><router-link to="/admin/write"><Icon name="edit" class="icon" />写博客</router-link></li>
                    <Divider />
                    <li class="nav-item"><router-link to="/admin/blog"><Icon name="th-list" class="icon" />博客管理</router-link></li>
                    <li class="nav-item"><router-link to="/admin/tag"><Icon name="tag" class="icon" />标签管理</router-link></li>
                    <li class="nav-item"><router-link to="/admin/serial"><Icon name="layer-group" class="icon" />专栏管理</router-link></li>
                    <li class="nav-item"><router-link to="/admin/subscribe"><Icon name="rss" class="icon" />订阅管理</router-link></li>
                    <li class="nav-item">
                        <router-link to="/admin/system"><Icon name="cog" class="icon" />系统管理</router-link>
                        <ul class="nav-submenu">
                            <li class="nav-sub-item"><router-link to="/admin/system/version"><Icon name="code-branch" class="icon" />版本管理</router-link></li>
                        </ul>
                    </li>
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
import { authentication, adminLogout } from '@/service/login';

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
        },
        logout() {
            adminLogout().then(res => {
                if (res.data.code === 200) {
                    console.log('退出成功');
                    this.$router.push({
                        name: 'admin/login'
                    });
                }
            });
        }
    },
    mounted() {
        authentication().then(res => {
            if (res.data.code === 200 && res.data.result.login) {
                console.log('登录成功');
            } else {
                this.$router.push({ name: 'admin/login' });
            }
        });
    }
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

            .nav-submenu {
                .nav-sub-item {
                    a {
                        padding: 0 45px;
                    }
                }
            }
            a {
                width: 100%;
                height: 100%;
                display: inline-block;
                padding: 0 15px;
                &:hover {
                    background: #f8f8f9;
                }
                .icon {
                    margin-right: 10px;
                }
            }
        }
    }
    .admin-console {
        flex: 1 1 auto;
        background: #fafafa;
        padding: 15px 25px;

        & > div {
            width: 100%;
            height: 100%;
        }
    }
    .navbar-container,
    .admin-console {
        transition: all 0.3s ease;
        overflow-x: hidden;
        overflow-y: auto;
    }
}
</style>
