<template>
    <div class="m-menu">
        <div class="title">
            <img :src="logo" alt="logo" class="logo">
            <font class="name">名字</font>
        </div>
        <Icon @click.native="toggleMenu" class="mbbtn icon" :name="!showMenu ? 'bars' : 'times'" />
        <div class="menu" :class="!showMenu ? 'menu-hide' : ''">
            <li class="menu-items"><router-link to="/home">首页</router-link></li>
            <li class="menu-items"><router-link to="/tech">技术</router-link></li>
            <li class="menu-items"><router-link to="/culture">随笔</router-link></li>
            <li class="menu-items"><router-link to="/tag">标签</router-link></li>
            <li class="menu-items"><router-link to="/archives">归档</router-link></li>
            <li class="menu-items"><router-link to="/about">关于</router-link></li>
        </div>
    </div>
</template>

<script>
import logo from '@/images/logo.jpg';
export default {
    data() {
        return {
            logo,
            showMenu: false,
            activeMenu: '',
        };
    },
    watch: {
        '$route': function(to, from) {
            this.showMenu = false;
        },
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
    },
};
</script>

<style lang="scss">
.m-menu {
    width: 100%;
    height: 56px;
    padding: 8px 50px;
    background: #fff;
    box-shadow: 5px 0px 5px #e0e0e0;

    display: flex;
    justify-content: space-between;


    .title {
        .logo {
            width: 100px;
            height: 40px;
            float: left;
        }
        .name {
            display: inline-block;
            margin-left: 5px;
            line-height: 40px;
            font-size: 1.2rem;
            color: #17233d;
        }
    }

    .mbbtn {
        display: none;
        width: 20px;
        height: 20px;
        color: #666;
        position: relative;
        top: 50%;
        transform: translateY(-50%);

        transition: all 1.0s ease;
    }

    @media screen and (max-width: 480px) {
        .mbbtn {
            display: inline-block;
        }
    }

    .menu {
        .menu-items {
            float: left;
            padding: 10px 15px ;

            & + .menu-items {
                margin-left: 15px;
            }

            a {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }
    }

    @media screen and (max-width: 480px) {
        .menu {
            height: 240px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 56px;
            overflow: hidden;
            background: #fff;
            box-shadow: 5px 0px 5px #ddd;
            transition: all 0.5s ease;
            opacity: 1;
            

            .menu-items {
                width: 100%;
                text-align: center;

                & + .menu-items {
                    margin-left: 0;
                }
            }
        }

        .menu-hide {
            transform: translateY(-80px);
            height: 0px;
            opacity: 0;
        }
    }
}
@media screen and (max-width: 480px) {
    .m-menu {
        padding: 8px 20px;
    }
}
</style>
