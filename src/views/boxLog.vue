<template>
    <cus-nav :title="$t('开箱记录')"></cus-nav>
    <div class="pl30 pr30 pt40 rel">
 
        <div class="flex ac mb60">
            <div class="flex col jc ac bold mr40 rel" :class="current==index?'act':'size28'" v-for="(item,index) in tabs" :key="index" @click="tabsClick(index)">
                <div>{{ item.name }}</div>
                <img src="@/assets/layout/6.png" class="tabLine animate__animated animate__zoomIn ani3" v-if="current==index">
            </div>
        </div>

        <!-- <div class="card card1 mb30" v-for="(item,index) in 3" :key="index">
            <div class="flex jb">
                <div>
                    <div class="flex ac">
                        <img src="@/assets/usdt.png" class="img44 mr12">
                        <div class="size36 mainColor bold">100</div>
                    </div>
                    <div class="size24 mt20">{{ $t('累计收益') }}</div>
                </div>
                <div class="tag flex ac">
                    <div class="size24 mr10">2.3%</div>
                    <img src="@/assets/layout/23.png" class="img26">
                </div>
            </div>
            <div class="flex jb ac mt20">
                <div class="size28">
                    <span class="opc6">{{ $t('宝箱价格') }}</span>
                    <span class="ml20">100 USDT</span>
                </div>
                <div>
                    <div class="size28 tr">12/30 {{ $t('天') }}</div>
                    <div class="progress mt20">
                        <div class="progressLine" :style="{width:`${50}%`}"></div>
                    </div>
                </div>
            </div>
            <div class="flex jb size24 opc6 mt20">
                <div>2025.06.26 12:26:52</div>
                <div>{{ $t('释放天数') }}</div>
            </div>
        </div> -->

        <cus-empty></cus-empty>

    </div>
</template>

<script setup lang="ts">
import { t } from '@/locale';
import { computed, ref } from 'vue';

const current = ref(0)
const tabs = computed(()=>([
    {name:t('进行中')},
    {name:t('已完成')}
]))
const tabsClick = (index:number)=>{
    if(current.value==index)return
    current.value = index
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
    height: 321px;
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
}
.card1{
    background-image: url("@/assets/layout/21.png");
}
.card2{
    background-image: url("@/assets/layout/22.png");
}
</style>