<template>
    <div class="pl30 pr30 pt40">

        <div class="size28 mb30">{{ $t('用户账户') }}</div>

        <CusInput :tips="$t('请输入您的账号')" v-model="account"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('密保问题') }}</div>
        
        <CusQa @change="$event=>question=$event"></CusQa>

        <div class="mt30 size28 mb30">{{ $t('密保答案') }}</div>

        <CusInput :tips="$t('请设置密保答案')" :psw="true" v-model="answer"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('登录密码') }}</div>

        <CusInput :tips="$t('请设置登录密码')" :psw="true" v-model="password"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('安全密码') }}</div>

        <CusInput :tips="$t('请设置安全密码')" :psw="true" v-model="payPassword"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('分享码') }}</div>

        <CusInput :tips="$t('请输入分享码')" v-model="inviteCode"></CusInput>

        <div class="mainBtn mt60" v-scale v-delay="{fun:submit}">{{ $t('注册') }}</div>
    </div>
</template>

<script setup lang="ts">
import CusInput from '@/components/CusInput/index.vue'
import CusQa from '@/components/CusQa/index.vue'
import { getRef, setAccount } from '@/config/storage'
import { routerPush, routerReplace } from '@/router'
import { apiPost } from '@/utils/request'
import { showSuccessToast, showToast } from 'vant'
import { ref } from 'vue'
import { t } from '@/locale'
import { isIOS } from '@/utils'

defineProps(['isRef'])

const ios = isIOS()

const account = ref()
const question = ref()
const answer = ref()
const password = ref()
const payPassword = ref()
const inviteCode = ref()

const storage = getRef()
if(storage)inviteCode.value = storage

const submit = () => {
    if(!account.value)return showToast(t('请输入您的账号'))
    if(!question.value)return showToast(t('请选择密保问题'))
    if(!answer.value)return showToast(t('请设置密保答案'))
    if(!password.value)return showToast(t('请设置登录密码'))
    if(!payPassword.value)return showToast(t('请设置安全密码'))
    apiPost('/api/auth/register',{
        account:account.value,
        question_id:question.value.id,
        question_answer:answer.value,
        password:password.value,
        safe_password: payPassword.value,
        ref:inviteCode.value
    }).then(()=>{
        setAccount(account.value)
        showSuccessToast(t('注册成功'))
        if(ios){
            routerReplace('/login')
        }else{
            setTimeout(() => {
                routerPush('/download')
            }, 1200);
        }
    })
}
</script>

<style lang="scss" scoped>
.inp {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: #FFFFFF14;
    padding: 0 30px;
}
</style>