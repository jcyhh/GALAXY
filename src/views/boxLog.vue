<template>
    <cus-nav :title="$t('开箱记录')"></cus-nav>
    <div class="pl30 pr30 pt40 rel">
 
        <div class="flex ac mb60">
            <div class="flex col jc ac bold mr40 rel" :class="current==index?'act':'size28'" v-for="(item,index) in tabs" :key="index" @click="tabsClick(index)">
                <div>{{ item.name }}</div>
                <img src="@/assets/layout/6.png" class="tabLine animate__animated animate__zoomIn ani3" v-if="current==index">
            </div>
        </div>

        <cus-list ref="list" api="/api/order/list" name="data" :param="{status:tabs[current].value}" v-slot="{ listData }">
            <div class="card card1 mb30" v-for="(item,index) in listData" :key="index">
                <div class="flex jb">
                    <div>
                        <div class="flex ac">
                            <img src="@/assets/usdt.png" class="img44 mr12">
                            <div class="size36 mainColor bold" v-init="item.income"></div>
                        </div>
                        <div class="size24 mt20">{{ $t('累计收益') }}</div>
                    </div>
                    <div class="tag flex ac">
                        <div class="size24 mr10">{{ item.income_bl }}%</div>
                        <img src="@/assets/layout/23.png" class="img26">
                    </div>
                </div>
                <div class="flex jb ac mt20">
                    <div class="size28">
                        <span class="opc6">{{ $t('宝箱价格') }}</span>
                        <span class="ml20"><span v-init="item.amount"></span> USDT</span>
                    </div>
                    <div>
                        <div class="size28 tr">{{ item.run_days }}/{{ item.day }} {{ $t('天') }}</div>
                        <div class="progress mt20">
                            <div class="progressLine" :style="{width:`${getProgress(item)}%`}"></div>
                        </div>
                    </div>
                </div>
                <div class="flex jb size24 opc6 mt20">
                    <div v-init:time="item.created_at"></div>
                    <div>{{ $t('收益天数') }}</div>
                </div>
                <div class="btn flex jc ac mt50" @click="submit(item.id)" v-if="current==0">{{ $t('续单') }}</div>
            </div>
        </cus-list>

    </div>

    <van-popup v-model:show="show" :destroy-on-close="true" style="background-color: transparent !important;">
        <div class="pt2 pb2 pl2 pr2">
            <div class="mainPop">
                <div class="flex jb ac">
                    <div class="size32">{{ $t('续单') }}</div>
                    <img src="@/assets/layout/close.png" class="img32" @click="show=false">
                </div>
                <div class="popinp flex mt60">
                    <input type="number" v-model="amount" :placeholder="$t('请输入金额')" class="flex1 tc size28">
                </div>
                <div class="popinp flex mt30">
                    <input type="password" v-model="password" :placeholder="$t('请输入安全密码')" class="flex1 tc size28">
                </div>
                <div class="mainBtn mt50" @click="buyBox">{{ $t('确认') }}</div>
            </div>
        </div>
    </van-popup>

</template>

<script setup lang="ts">
import { t } from '@/locale';
import { computedDiv } from '@/utils';
import { computed, ref } from 'vue';
import { showSuccessToast, showToast } from 'vant';
import { apiPost } from '@/utils/request';

const current = ref(0)
const tabs = computed(()=>([
    {name:t('进行中'), value:1},
    {name:t('已完成'), value:0}
]))
const list = ref()
const tabsClick = (index:number)=>{
    if(current.value==index)return
    current.value = index
    list.value?.refresh()
}

const getProgress = (data:any) => Math.floor(computedDiv(data.run_days, data.day) * 10000) / 100

const show = ref()
const amount = ref()
const password = ref()
const orderId = ref()

const submit = (id:any) => {
    orderId.value = id
    password.value = ''
    amount.value = ''
    show.value = true
}

const buyBox = () => {
    if(!amount.value)return showToast(t('请输入金额'))
    if(amount.value % 100 > 0)return showToast(t('请输入100的倍数'))
    if(!password.value)return showToast(t('请输入安全密码'))
    apiPost('/api/order/add_amount',{
        order_id: orderId.value,
        amount: amount.value,
        safe_password: password.value
    }).then(()=>{
        show.value = false
        showSuccessToast(t('续单成功'))
        list.value?.refresh()
    })
}

</script>

<style lang="scss" scoped>
.act{
    font-size: 44px;
    color: $main-color;
}
.tabLine{
    width: 80px;
    height: 23px;
    position: absolute;
    bottom: -20px;
}
.card{
    background-size: 100% 100%;
    padding: 40px 30px 0 30px;
    .tag{
        height: 56px;
        border-radius: 28px;
        border: 1px solid #FFFFFF;
        padding: 0 20px;
    }
    .progress{
        width: 180px;
        height: 20px;
        border-radius: 10px;
        background-color: #000000;
        overflow: hidden;
        .progressLine{
            height: 20px;
            background: linear-gradient(to right,#86EE33, #1CFFFF);
        }
    }
    .btn{
        height: 68px;
        border-radius: 34px;
        border: 1px solid $main-color;
        font-size: 24px;
        color: $main-color;
    }
}
.card1{
    height: 450px;
    background-image: url("@/assets/layout/21.png");
}
.card2{
    height: 321px;
    background-image: url("@/assets/layout/22.png");
}
</style>