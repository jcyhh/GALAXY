<template>
    <img src="@/assets/layout/5.png" class="bg">
    <img src="@/assets/svga/1.gif" class="gif1">
    <div class="lang">
        <CusLang></CusLang>
    </div>
    <div class="gap200"></div>
    <div class="pl60 pr60 pt18 rel">

        <div class="flex jc">
            <img src="@/assets/imgs/3.png" class="pic3">
        </div>

        <div class="mt150 size28 mb30">{{ $t('用户账户') }}</div>

        <CusInput :tips="$t('请输入您的账号')" v-model="account"></CusInput>

        <div class="mt60 mb36 flex jb ac">
            <div class="size28">{{ $t('登录密码') }}</div>
            <div class="flex ac mainColor size24" @click="routerPush('/forget')">
                <div>{{ $t('忘记密码') }}</div>
                <van-icon name="arrow" />
            </div>
        </div>

        <CusInput v-model="password" :tips="$t('请输入登录密码')" :psw="true"></CusInput>

        <div class="mainBtn mt120" v-scale v-delay="{fun:submit}">{{ $t('登录') }}</div>

        <div class="mt40 lineBtn flex jc ac" @click="routerPush('/register')">{{ $t('去注册') }}</div>

    </div>
</template>

<script setup lang="ts">
import CusInput from '@/components/CusInput/index.vue'
import { getAccount, setAccount, setToken } from '@/config/storage';
import { routerPush, routerReplace } from '@/router';
import { useUserStore } from '@/store';
import { apiPost } from '@/utils/request';
import { showToast } from 'vant';
import { ref } from 'vue';
import CusLang from '@/components/CusLang/index.vue'
import { t } from '@/locale';

const useStore = useUserStore()

const account = ref()
const password = ref()

const storage = getAccount()
if(storage)account.value = storage

const submit = () => {
    if(!account.value)return showToast(t('请输入您的账号'))
    if(!password.value)return showToast(t('请输入登录密码'))
    apiPost('/api/auth/login',{
        account:account.value,
        password:password.value
    }).then((res:any)=>{
        setAccount(account.value)
        setToken(res.token)
        useStore.updateUserInfo()
        routerReplace('/home')
    })
}
</script>

<style lang="scss" scoped>
.bg{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
}
.lang{
    position: fixed;
    top: 56px;
    right: 30px;
    z-index: 11;
}
.gif1{
    width: 532px;
    height: 532px;
    position: absolute;
    top: 0;
    left: 109px;
}
.pic3{
    width: 188px;
    height: 179px;
}
</style>