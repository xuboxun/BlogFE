<template>
    <div class="v-admin-login">
        <div class="login-bg"></div>
        <div class="login-block">
            <h2 class="title">主人，请登录</h2>
            <FormItem>
                <Input v-model="account" placeholder="请输入账号" width="100%" />
            </FormItem>
            <FormItem>
                <Input v-model="password" type="password" placeholder="请输入密码" width="100%" @keyup.enter.native="login" />
            </FormItem>
            <FormItem>
                <Input v-model="code" type="text" placeholder="请输入验证码" width="100%" @keyup.enter.native="login" />
                <Verify></Verify>
            </FormItem>
            <FormItem style="margin-top: 10px;">
                <Button size="large" style="width: 100%;" @click="login">登录</Button>
            </FormItem>

            <div class="info" v-if="info">
                {{info}}
            </div>
        </div>
    </div>
</template>

<script>
import { adminLogin } from '@/service/login';
import md5 from 'md5';

export default {
    name: 'login',
    data() {
        return {
            account: '',
            password: '',
            code: '',
            info: ''
        };
    },
    methods: {
        login() {
            adminLogin({
                account: this.account,
                password: md5(this.password),
                code: this.code
            }).then(res => {
                if (res.data.code === 200) {
                    this.$router.push({ name: 'admin/dashboard' });
                } else {
                    this.setInfo(res.data.msg);
                }
            });
        },
        setInfo(info) {
            this.info = info;
            setTimeout(() => {
                this.info = '';
            }, 3000);
        }
    }
};
</script>

<style lang="scss" scoped>
.v-admin-login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .login-bg {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-image: url("/assets/images/loginbg.jpg");
        background-position: center center;
    }
    .login-block {
        width: 400px;
        height: 310px;
        border-radius: 5px;
        background: #fff;
        z-index: 999;
        position: relative;
        top: 150px;

        .title {
            text-align: center;
            font-size: 1.5rem;
            color: #17233d;
            height: 80px;
            line-height: 80px;
            font-weight: 400;
        }
    }
    .info {
        margin-top: 10px;
        padding: 0 20px;
        color: #ed4014;
    }
    @media screen and (max-width: 480px) {
        .login-block {
            width: 90%;
        }
    }
}
</style>