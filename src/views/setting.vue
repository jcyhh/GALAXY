<template>
    <cus-nav :title="$t('设置')"></cus-nav>
    <div class="pl30 pr30 pt40 rel">

        <div class="card pb20 size28">
            <div class="top">{{ $t('个人资料') }}</div>
            <div class="pt20 pb20 flex jb pl30 pr30">
                <div class="opc6">{{ $t('用户账号') }}</div>
                <div>{{ userInfo?.maccount || '--' }}</div>
            </div>
            <div class="pt20 pb20 flex jb pl30 pr30">
                <div class="opc6">{{ $t('分享码') }}</div>
                <div class="flex ac" v-copy="userInfo?.referral_code">
                    <div>{{ userInfo?.referral_code || '--' }}</div>
                    <img src="@/assets/layout/26.png" class="img24 ml10">
                </div>
            </div>
        </div>

        <div class="card pb20 size28 mt40">
            <div class="top">{{ $t('安全设置') }}</div>
            <div class="pt20 pb20 flex jb pl30 pr30" @click="routerPush('/updatePsw')">
                <div class="opc6">{{ $t('修改登录密码') }}</div>
                <van-icon name="arrow" />
            </div>
            <div class="pt20 pb20 flex jb pl30 pr30" @click="routerPush('/updatePay')">
                <div class="opc6">{{ $t('修改安全密码') }}</div>
                <van-icon name="arrow" />
            </div>
            <div class="pt20 pb20 flex jb pl30 pr30" @click="routerPush('/updateQA')">
                <div class="opc6">{{ $t('修改密保') }}</div>
                <van-icon name="arrow" />
            </div>
        </div>

        <div class="mainBtn btn mt120" @click="show=true">{{ $t('退出登录') }}</div>

    </div>

    <van-popup v-model:show="show" style="background-color: transparent !important;">
        <div class="pt2 pb2 pl2 pr2">
            <div class="mainPop">
                <div class="flex jb ac">
                    <div class="size32">{{ $t('退出登录') }}</div>
                    <img src="@/assets/layout/close.png" class="img32" @click="show=false">
                </div>
                <div class="mt60 size28 bold">{{ $t('确认退出该账号？') }}</div>
                <div class="mainBtn mt60" v-scale v-delay="{fun:submit}">{{ $t('确认') }}</div>
            </div>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
import { delToken } from '@/config/storage';
import { routerPush, routerReplace } from '@/router';
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const useStore = useUserStore()
const { userInfo } = storeToRefs(useStore)

const show = ref(false)

const submit = () => {
    delToken()
    routerReplace('/login')
}
</script>

<style lang="scss" scoped>
.card{
    border: 1px solid #FFFFFF;
    background-color: #00000033;
    border-radius: 20px;
    .top{
        height: 98px;
        background-color: #FFFFFF1A;
        padding-left: 30px;
        line-height: 98px;
    }
}
.btn{
    background-color: #C43A3A;
    color: #FFFFFF;
}
</style>