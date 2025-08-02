<template>
    <img src="@/assets/layout/5.png" class="bg">
    <div class="gap30"></div>
    <div class="top">
        <div class="size24">USDT</div>
        <div class="flex ac mt20">
            <img src="@/assets/usdt.png" class="img44 mr12">
            <div class="size48 bold mainColor" v-init="userInfo?.userInfo"></div>
        </div>
        <div class="flex ac mt50">
            <div class="mr64">
                <div class="size24 opc6">{{ $t('收益') }} USDT</div>
                <div class="size28 mt12" v-init="userInfo?.balance_sy"></div>
            </div>
            <div>
                <div class="size24 opc6">{{ tokenName }}</div>
                <div class="size28 mt12" v-init="userInfo?.balance_token"></div>
            </div>
        </div>
    </div>
    <div class="pl40 pr40 mt40 flex jb ac size26">
        <div class="flex col ac" @click="routerPush('/rechange')">
            <img src="@/assets/layout/12.png" class="img88">
            <div class="mt10">{{ $t('充值') }}</div>
        </div>
        <div class="flex col ac" @click="routerPush('/withdraw')">
            <img src="@/assets/layout/13.png" class="img88">
            <div class="mt10">{{ $t('提取') }}</div>
        </div>
        <div class="flex col ac" @click="routerPush('/exchange')">
            <img src="@/assets/layout/14.png" class="img88">
            <div class="mt10">{{ $t('兑换') }}</div>
        </div>
        <div class="flex col ac" @click="routerPush('transfer')">
            <img src="@/assets/layout/15.png" class="img88">
            <div class="mt10">{{ $t('转账') }}</div>
        </div>
    </div>
    <div class="pl30 pr30 mt60">
        <div class="card">
            <div class="tabs flex ac size30">
                <div class="flex col jc ac rel" :class="{
                    'mr80':index<2,
                    'mainColor':current==index
                }" v-for="(item,index) in tabs" :key="index" @click="tabsClick(index)">
                    <div>{{ item.name }}</div>
                    <div class="tabLine animate__animated animate__zoomIn ani3" v-if="current==index"></div>
                </div>
            </div>
            <div class="pl30 pr30">
                <cus-list ref="list" api="/api/balance_logs" name="balance_logs" :param="{ccy:tabs[current].value}" v-slot="{ listData }">
                    <div class="item" v-for="(item,index) in listData" :key="index">
                        <div class="flex jb size28">
                            <div>{{ item.content }}</div>
                            <div class="mainColor" v-if="item.is_inc">+ <span v-init="item.amount"></span></div>
                            <div v-else>- <span v-init="item.amount"></span></div>
                        </div>
                        <div class="flex jb opc8 size20 mt14">
                            <div v-init:time="item.created_at"></div>
                            <div>{{ tabs[current].name }}</div>
                        </div>
                    </div>
                </cus-list>
            </div>
        </div>
    </div>
    <div class="gap40"></div>
</template>

<script setup lang="ts">
import { routerPush } from '@/router';
import { computed, ref } from 'vue';
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';
import { t } from '@/locale';
import { tokenName } from '@/config';

const useStore = useUserStore()
const { userInfo } = storeToRefs(useStore)

const current = ref(0)
const tabs = computed(()=>([
    {name:'USDT', value:'balance_usdt'},
    {name:`${t('收益')} USDT`,value:'balance_sy'},
    {name:tokenName, value:'balance_token'}
]))
const list = ref()
const tabsClick = (index:number)=>{
    if(current.value==index)return
    current.value = index
    list.value.refresh()
}
</script>

<style lang="scss" scoped>
.bg{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
}
.top{
    height: 420px;
    background-image: url("@/assets/layout/11.png");
    background-size: 100% 100%;
    padding: 78px 0 0 60px;
}
.card{
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    background-color: #00000033;
    .tabs{
        height: 98px;
        background-color: #FFFFFF1A;
        padding: 0 30px;
        .tabLine{
            width: 50%;
            height: 4px;
            border-radius: 2px;
            background-color: $main-color;
            position: absolute;
            bottom: -16px;
        }
    }
    .item{
        padding: 40px 0 30px 0;
        border-bottom: 1px solid #FFFFFF4D;
    }
}
</style>