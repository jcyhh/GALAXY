<template>
    <cus-nav :title="$t('提取明细')"></cus-nav>
    <div class="pl30 pr30 pt40 rel">
 
        <div class="flex ac mb60">
            <div class="flex col jc ac bold mr40 rel" :class="current==index?'act':'size28'" v-for="(item,index) in tabs" :key="index" @click="tabsClick(index)">
                <div>{{ item.name }}</div>
                <img src="@/assets/layout/6.png" class="tabLine animate__animated animate__zoomIn ani3" v-if="current==index">
            </div>
        </div>

        <cus-list ref="list" api="/api/withdraws" name="withdraws" :param="{apply_status:tabs[current].value}" v-slot="{ listData }">
            <div class="mainCard mb30" v-for="(item,index) in listData" :key="index">
                <div class="flex jb size28">
                    <div>{{ item.maddress }}</div>
                    <div class="mainColor" v-init="item.amount"></div>
                </div>
                <div class="flex jb size24 opc6 mt20">
                    <div v-init:time="item.created_at"></div>
                    <div>{{ item.ccy=='balance_usdt' ? 'USDT' : `${$t('收益')} USDT` }}</div>
                </div>
            </div>
        </cus-list>

    </div>
</template>

<script setup lang="ts">
import { t } from '@/locale';
import { computed, ref } from 'vue';

const current = ref(0)
const tabs = computed(()=>([
    {name:t('区块确认中'), value:1},
    {name:t('提取成功'), value:2},
    {name:t('提取失败'), value:3}
]))
const list = ref()
const tabsClick = (index:number)=>{
    if(current.value==index)return
    current.value = index
    list.value?.refresh()
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
.reason{
    width: 450px;
}
</style>