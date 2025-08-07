<template>
    <cus-nav :title="$t('兑换')">
        <!-- <img src="@/assets/layout/25.png" class="img52"> -->
    </cus-nav>

    <div class="pl30 pr30 pt40">

        <div class="flex jb ac">
            <div class="size28 opc6">{{ $t('发送') }}</div>
            <div class="size26">{{ $t('可用') }} : <span v-init="userInfo?.balance_usdt"></span> USDT</div>
        </div>

        <div class="mainCard mt30 flex ac">
            <input type="number" v-model="amount" placeholder="0.00" class="flex1 size28 bold">
            <div class="mainColor size24 ml30">{{ $t('全部') }}</div>
            <div class="line ml20 mr20"></div>
            <div class="size28" @click="inputAll">{{ $t('收益') }} USDT</div>
        </div>

        <div class="mainLine mt90 rel">
            <img src="@/assets/layout/29.png" class="pic29 animate__animated animate__fadeInDown">
        </div>
        <div class="size28 mt60 opc6">{{ $t('接收') }}</div>

        <div class="mainCard mt30 flex ac">
            <div class="flex1 size28 bold" v-init="total"></div>
            <div class="line ml20 mr20"></div>
            <div class="size28">USDT</div>
        </div>

        <div class="mainBtn mt120" @click="openPay">{{ $t('确认') }}</div>

    </div>

    <van-popup v-model:show="pay" style="background-color: transparent !important;">
        <div class="pt2 pb2 pl2 pr2">
            <div class="mainPop">
                <div class="flex jb ac">
                    <div class="size32">{{ $t('安全密码') }}</div>
                    <img src="@/assets/layout/close.png" class="img32" @click="pay=false">
                </div>
                <div class="popinp flex mt60">
                    <input type="password" v-model="password" :placeholder="$t('请输入安全密码')" class="flex1 tc size28">
                </div>
                <div class="mainBtn mt50" v-scale v-delay="{fun:submit}">{{ $t('确认') }}</div>
            </div>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
import { t } from '@/locale';
import { useUserStore } from '@/store';
import { apiPost } from '@/utils/request';
import { storeToRefs } from 'pinia';
import { showSuccessToast, showToast } from 'vant';
import { computed, ref } from 'vue';

const useStore = useUserStore()
const { userInfo } = storeToRefs(useStore)

const amount = ref()

const total = computed(()=>amount.value)

const inputAll = () => amount.value = userInfo.value?.balance_usdt

const pay = ref(false)
const password = ref()
const openPay = () => {
    if(!amount.value)return showToast(t('请输入兑换数量'))
    password.value = ''
    pay.value = true
}

const submit = () => {
    if(!password.value)return showToast(t('请输入安全密码'))
    apiPost('/api/swaps',{
        amount:amount.value,
        safe_password:password.value
    }).then(()=>{
        showSuccessToast(t('兑换成功'))
        amount.value = ''
        pay.value = false
        useStore.updateUserInfo()
    })
}
</script>

<style lang="scss" scoped>
.line{
    width: 1px;
    height: 40px;
    background-color: #FFFFFF33;
}
.pic29{
    width: 60px;
    height: 60px;
    position: absolute;
    left: 315px;
    top: -30px;
}
</style>