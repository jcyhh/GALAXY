<template>
    <cus-nav :title="$t('修改密保')"></cus-nav>
    <div class="pl30 pr30 pt40">

        <div class="size28 mb30">{{ $t('旧密保问题') }}</div>
        
        <CusQa @change="$event=>oldQuestion=$event"></CusQa>

        <div class="mt30 size28 mb30">{{ $t('旧密保答案') }}</div>

        <CusInput :tips="$t('请输入旧的密保答案')" :psw="true" v-model="oldAnswer"></CusInput>

        <div class="mt30 size28 mb30">{{ $t('新密保问题') }}</div>

        <CusQa @change="$event=>newQuestion=$event"></CusQa>

        <div class="mt30 size28 mb30">{{ $t('新密保答案') }}</div>

        <CusInput :tips="$t('请设置新的密保答案')" :psw="true" v-model="newAnswer"></CusInput>

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

const oldQuestion = ref()
const oldAnswer = ref()
const newQuestion = ref()
const newAnswer = ref()

const submit = () => {
    if(!oldQuestion.value)return showToast(t('请选择密保问题'))
    if(!oldAnswer.value)return showToast(t('请输入旧的密保答案'))
    if(!newQuestion.value)return showToast(t('请选择密保问题'))
    if(!newAnswer.value)return showToast(t('请设置新的密保答案'))
    apiPost('/api/users/my/change_security_question',{
        old_question_id:oldQuestion.value.id,
        old_question_answer:oldAnswer.value,
        new_question_id:newQuestion.value.id,
        new_question_answer:newAnswer.value
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