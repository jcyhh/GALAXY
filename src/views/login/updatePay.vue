<template>
    <cus-nav :title="$t('修改安全密码')">
        <div class="size24 opc6" @click="routerPush('/forgetPay')">{{ $t('忘记密码？') }}</div>
    </cus-nav>
    <div class="pl30 pr30 pt40">

        <div class="size28 mb30">{{ $t('旧安全密码') }}</div>
        
        <CusInput :tips="$t('请输入旧的安全密码')" :psw="true" v-model="oldPassword"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('新密码') }}</div>

        <CusInput :tips="$t('请设置新的安全密码')" :psw="true" v-model="newPassword"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('确认密码') }}</div>

        <CusInput :tips="$t('请再次输入安全密码')" :psw="true" v-model="passwordConfirm"></CusInput>


        <div class="mainBtn mt60" v-scale v-delay="{fun:submit}">{{ $t('确认') }}</div>
    </div>

    <div class="gap100"></div>
</template>

<script setup lang="ts">
import CusInput from '@/components/CusInput/index.vue'
import { t } from '@/locale';
import { routerGo, routerPush } from '@/router';
import { apiPost } from '@/utils/request';
import { showSuccessToast, showToast } from 'vant';
import { ref } from 'vue';

const oldPassword = ref()
const newPassword = ref()
const passwordConfirm = ref()

const submit = () => {
    if(!oldPassword.value)return showToast(t('请输入旧的安全密码'))
    if(!newPassword.value)return showToast(t('请设置新的安全密码'))
    if(!passwordConfirm.value)return showToast(t('请再次输入安全密码'))
    if(newPassword.value != passwordConfirm.value)return showToast(t('密码输入不一致'))
    apiPost('/api/users/my/change_safe_password',{
        old_safe_password:oldPassword.value,
        new_safe_password:newPassword.value
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