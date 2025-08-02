<template>
    <cus-nav :title="$t('忘记安全密码')"></cus-nav>
    <div class="pl30 pr30 pt40">

        <div class="size28 mb30">{{ $t('密保问题') }}</div>
        
        <CusQa @change="$event=>question=$event"></CusQa>

        <div class="mt30 size28 mb30">{{ $t('密保答案') }}</div>

        <CusInput :tips="$t('请输入密保答案')" :psw="true" v-model="answer"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('新安全密码') }}</div>

        <CusInput :tips="$t('请设置新的安全密码')" :psw="true" v-model="password"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('确认安全密码') }}</div>

        <CusInput :tips="$t('请再次输入安全密码')" :psw="true" v-model="passwordConfirm"></CusInput>

        <div class="mainBtn mt60" v-scale v-delay="{fun:submit}">{{ $t('确认') }}</div>
    </div>

    <div class="gap100"></div>
</template>

<script setup lang="ts">
import CusInput from '@/components/CusInput/index.vue'
import CusQa from '@/components/CusQa/index.vue'
import { t } from '@/locale';
import { routerGo } from '@/router';
import { apiPost } from '@/utils/request';
import { showSuccessToast, showToast } from 'vant';
import { ref } from 'vue';

const question = ref()
const answer = ref()
const password = ref()
const passwordConfirm = ref()

const submit = () => {
    if(!question.value)return showToast(t('请选择密保问题'))
    if(!answer.value)return showToast(t('请输入密保答案'))
    if(!password.value)return showToast(t('请设置新的安全密码'))
    if(!passwordConfirm.value)return showToast(t('请再次输入安全密码'))
    if(password.value != passwordConfirm.value)return showToast(t('密码输入不一致'))
    apiPost('/api/users/my/reset_safe_password',{
        question_id:question.value.id,
        question_answer:answer.value,
        new_safe_password:password.value
    }).then(()=>{
        showSuccessToast(t('修改成功'))
        setTimeout(() => {
            routerGo()
        }, 1200);
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