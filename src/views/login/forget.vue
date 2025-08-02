<template>
    <cus-nav :title="$t('忘记密码')">
        <CusLang></CusLang>
    </cus-nav>
    <div class="pl30 pr30 pt40">

        <div class="size28 mb30">{{ $t('用户账户') }}</div>

        <CusInput :tips="$t('请输入您的账号')" v-model="account"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('密保问题') }}</div>
        
        <CusQa @change="$event=>question=$event"></CusQa>

        <div class="mt30 size28 mb30">{{ $t('密保答案') }}</div>

        <CusInput :tips="$t('请设置密保答案')" :psw="true" v-model="answer"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('新密码') }}</div>

        <CusInput :tips="$t('请设置新的登录密码')" :psw="true" v-model="password"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('确认密码') }}</div>

        <CusInput :tips="$t('请再次输入登录密码')" :psw="true" v-model="passwordConfirm"></CusInput>

        <div class="mainBtn mt60" v-scale v-delay="{fun:submit}">{{ $t('确认') }}</div>
    </div>

    <div class="gap100"></div>
</template>

<script setup lang="ts">
import CusInput from '@/components/CusInput/index.vue'
import CusQa from '@/components/CusQa/index.vue'
import { getAccount, setAccount } from '@/config/storage';
import { routerReplace } from '@/router';
import { apiPost } from '@/utils/request';
import { showSuccessToast, showToast } from 'vant';
import { ref } from 'vue';
import CusLang from '@/components/CusLang/index.vue'
import { t } from '@/locale';

const account = ref()
const question = ref()
const answer = ref()
const password = ref()
const passwordConfirm = ref()

const storage = getAccount()
if(storage)account.value = storage

const submit = () => {
    if(!account.value)return showToast(t('请输入您的账号'))
    if(!question.value)return showToast(t('请选择密保问题'))
    if(!answer.value)return showToast(t('请设置密保答案'))
    if(!password.value)return showToast(t('请设置新的登录密码'))
    if(!passwordConfirm.value)return showToast(t('请再次输入登录密码'))
    if(password.value != passwordConfirm.value)return showToast(t('密码输入不一致'))
    apiPost('/api/auth/reset_password',{
        account:account.value,
        question_id:question.value.id,
        question_answer:answer.value,
        password:password.value
    }).then(()=>{
        setAccount(account.value)
        showSuccessToast(t('修改成功'))
        routerReplace('/login')
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