<template>
    <div class="m-menu">
        <div class="title">
            <router-link to="/">
                <!--<img src="/assets/images/me.gif" alt="logo" class="logo">-->
                <font class="name">思吾轩</font>
            </router-link>
        </div>
        <div class="menu-wrapper" v-clickoutside="hideMenu">
            <Icon @click.native="toggleMenu" class="mbbtn icon" :name="!showMenu ? 'bars' : 'times'" />
            <ul class="menu" :class="!showMenu ? 'menu-hide' : ''">
                <li class="menu-items search-item">
                    <input type="text" v-model="keyword" class="search-input" @keyup.enter="search" />
                    <Icon name="search" class="search-icon" @click.native="search" />
                </li>
                <li class="menu-items"><router-link to="/home">首页</router-link></li>
                <li class="menu-items"><router-link to="/tech">技术</router-link></li>
                <li class="menu-items"><router-link to="/culture">随笔</router-link></li>
                <li class="menu-items"><router-link to="/serial">专栏</router-link></li>
                <li class="menu-items"><router-link to="/tag">标签</router-link></li>
                <li class="menu-items"><router-link to="/archives">归档</router-link></li>
                <li class="menu-items"><router-link to="/about">关于</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            activeMenu: '',
            keyword: '',
        };
    },
    watch: {
        '$route': function(to, from) {
            this.showMenu = false;
        },
    },
    methods: {
        hideMenu() {
            this.showMenu = false;
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        search(e) {
            let keyword = this.keyword.trim();
            if (keyword !== '') {
                this.$router.push({ name: 'search', query: {keyword: keyword} });
                this.keyword = '';
            }
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

    position: fixed;
    z-index: 99999;


    .title {
        .logo {
            /*width: 100px;*/
            height: 40px;
            float: left;
            margin-right: 5px;
        }
        .name {
            display: inline-block;
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
    .menu-wrapper {}
    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        .menu-items {
            position: relative;

            & + .menu-items {
                margin-left: 15px;
            }

            a {
                display: inline-block;
                width: 100%;
                height: 100%;
                padding: 10px 15px;
            }

            .search-input {
                height: 30px;
                width: 100%;
                border-radius: 30px;
                border: 1px solid #e8eaec;
                padding: 0 12px;
                color: #808695;
            }
            .search-icon {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 26px;
                color: #c5c8ce;
            }
        }
        .search-item {
            padding: 10px 15px;
        }
    }

    @media screen and (max-width: 480px) {
        .menu {
            flex-direction: column;
            max-height: 500px;
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
            max-height: 0px;
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
