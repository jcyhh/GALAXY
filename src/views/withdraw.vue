<template>
    <cus-nav title="提现">
        <img src="@/assets/layout/25.png" class="img52">
    </cus-nav>

    <div class="pl30 pr30 pt40">

        <div class="mainCard size28">
            <div class="flex jb">
                <div class="opc6">币种</div>
                <div class="flex ac" @click="show=true">
                    <div>USDT</div>
                    <van-icon name="arrow" color="#999999" />
                </div>
            </div>
            <div class="flex jb mt30">
                <div class="opc6">链</div>
                <div>BEP20</div>
            </div>
        </div>

        <div class="mt60">提现数量</div>

        <div class="flex jb ac mt40">
            <input type="number" placeholder="0.00" class="flex1 size40 bold">
            <div class="mainColor">全部</div>
        </div>

        <div class="mainLine mt30"></div>

        <div class="tr size24 mt30">可用: 125.68 USDT</div>

        <div class="mainBtn mt120">确认</div>

    </div>

    <van-popup v-model:show="show" position="bottom" style="background-color: transparent !important;">
        <div class="pop flex col jb">
            <div>
                <div class="flex jb mb68">
                    <div class="size30">选择代币</div>
                    <img src="@/assets/layout/close.png" class="img32" @click="show=false">
                </div>
                <div class="mainCard flex jb ac mb27" v-for="(item,index) in ccys" :key="index" @click="current=index">
                    <div>{{ item.name }}</div>
                    <img src="@/assets/layout/28.png" class="img36 animate__animated animate__zoomIn ani3" v-if="current==index">
                </div>
            </div>
            <div>
                <div class="mainBtn">确认购买</div>
                <div class="safeBottom"></div>
            </div>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const show = ref(false)

const current = ref(0)
const ccys = computed(()=>([
    {name:'USDT'},
    {name:'收益USDT'}
]))
</script>

<style lang="scss" scoped>
.pop{
    width: 100vw;
    height: 920px;
    padding: 40px;
    border-radius: 40px 40px 0 0;
    background-color: #121212;
}
</style>