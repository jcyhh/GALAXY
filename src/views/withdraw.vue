<template>
    <cus-nav :title="$t('提取')">
        <img src="@/assets/layout/25.png" class="img52" @click="routerPush('/withdrawLog')">
    </cus-nav>

    <div class="pl30 pr30 pt40">

        <div class="mainCard size28">
            <div class="flex jb">
                <div class="opc6">{{ $t('币种') }}</div>
                <div class="flex ac" @click="show=true">
                    <div>{{ ccys[current].name }}</div>
                    <van-icon name="arrow" color="#999999" />
                </div>
            </div>
            <div class="flex jb mt30">
                <div class="opc6">{{ $t('链') }}</div>
                <div>BEP20</div>
            </div>
            <div class="flex jb mt30">
                <div class="opc6">{{ $t('手续费') }}</div>
                <div>{{ current==0?config?.withdraw_usdt_fee:config?.withdraw_sy_fee }}%</div>
            </div>
        </div>

        <div class="mt60">{{ $t('提取地址') }}</div>

        <div class="flex jb ac mt40">
            <input type="text" v-model="address" :placeholder="$t('请输入提取地址')" class="flex1 size40">
        </div>

        <div class="mainLine mt30"></div>

        <div class="mt60">{{ $t('提取数量') }}</div>

        <div class="flex jb ac mt40">
            <input type="number" v-model="amount" placeholder="0.00" class="flex1 size40 bold">
            <div class="mainColor" @click="inputAll">{{ $t('全部') }}</div>
        </div>

        <div class="mainLine mt30"></div>

        <div class="tr size24 mt30">{{ $t('可用') }} : <span v-init="current==0?userInfo?.balance_usdt:userInfo?.balance_sy"></span> {{ current==0?'USDT': `${$t('收益')} USDT` }}</div>

        <div class="mainBtn mt120" @click="openPay">{{ $t('确认') }}</div>

    </div>

    <van-popup v-model:show="show" position="bottom" style="background-color: transparent !important;">
        <div class="pop flex col jb">
            <div>
                <div class="flex jb mb68">
                    <div class="size30">{{ $t('选择代币') }}</div>
                    <img src="@/assets/layout/close.png" class="img32" @click="show=false">
                </div>
                <div class="mainCard flex jb ac mb27" :class="cur==index?'act':''" v-for="(item,index) in ccys" :key="index" @click="cur=index">
                    <div>{{ item.name }}</div>
                    <img src="@/assets/layout/28.png" class="img36 animate__animated animate__zoomIn ani3" v-if="cur==index">
                </div>
            </div>
            <div>
                <div class="mainBtn" @click="confirm">{{ $t('确认') }}</div>
                <div class="safeBottom"></div>
            </div>
        </div>
    </van-popup>

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
import { routerPush } from '@/router';
import { computed, ref } from 'vue';
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';
import { showSuccessToast, showToast } from 'vant';
import { apiGet, apiPost } from '@/utils/request';
import { t } from '@/locale';

const useStore = useUserStore()
const { userInfo } = storeToRefs(useStore)

const config = ref()
apiGet('/api/withdraws/config').then((res:any)=>config.value=res)

const pay = ref(false)
const password = ref()
const openPay = () => {
    if(!address.value)return showToast(t('请输入提取地址'))
    if(!amount.value)return showToast(t('请输入提取数量'))
    password.value = ''
    pay.value = true
}

const show = ref(false)
const amount = ref()
const address = ref()

const current = ref(0)
const cur = ref(0)
const ccys = computed(()=>([
    {name:'USDT', value:'balance_usdt'},
    {name:`${t('收益')} USDT`, value:'balance_sy'}
]))
const confirm = () => {
    amount.value = ''
    const index = cur.value
    current.value = index
    show.value = false
}

const inputAll = () => {
    const num = current.value==0?userInfo.value?.balance_usdt : userInfo.value?.balance_sy
    amount.value = num
}

const submit = () => {
    if(!password.value)return showToast(t('请输入安全密码'))
    apiPost('/api/withdraws',{
        amount:amount.value,
        safe_password:password.value,
        address:address.value,
        ccy: ccys.value[current.value].value
    }).then(()=>{
        showSuccessToast(t('提交成功'))
        amount.value = ''
        address.value = ''
        pay.value = false
        useStore.updateUserInfo()
    })
}
</script>

<style lang="scss" scoped>
.pop{
    width: 100vw;
    height: 920px;
    padding: 40px;
    border-radius: 40px 40px 0 0;
    background-color: #121212;
    .act{
        border: 1px solid $main-color;
    }
}
</style>