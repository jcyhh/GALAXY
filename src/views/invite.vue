<template>
    <cus-nav :title="$t('分享好友')"></cus-nav>
    <div class="pl30 pr30 pt60">

        <div class="flex jb ac">
            <div class="bold size48">
                <div>
                    <span>{{ $t('体验') }}</span>
                    <span class="mainColor">{{ $t('玩赚') }}</span>
                </div>
                <div class="mt20">SPARK PROTOCOL</div>
            </div>
            <img src="@/assets/imgs/1.png" class="pic1">
        </div>

        <div class="size32 mt60">{{ $t('分享人数') }}</div>

        <div class="flex jb ac mt30">
            <img src="@/assets/imgs/2.png" class="pic2">
            <div class="size48 bold">+0</div>
        </div>

        <div class="mainLine mt40"></div>

        <div class="box mt40 flex jb ac" v-copy="userInfo?.referral_code">
            <div>{{ $t('分享码') }}</div>
            <div class="flex ac">
                <div class="size28 bold">{{ userInfo?.referral_code || '--' }}</div>
                <img src="@/assets/layout/26.png" class="img24 ml20">
            </div>
        </div>

        <div class="mt40 card">
            <div class="flex jc">
                <QRCode :value="inviteUrl" :size="200" :bordered="false" />
            </div>
            <div class="tc mt80 size28">{{ $t('分享链接') }}</div>
            <div class="tc mt30 size26 br lh40">{{ inviteUrl }}</div>
            <div class="mainBtn mt60" v-scale v-copy="inviteUrl">{{ $t('复制链接') }}</div>
        </div>

    </div>

    <div class="gap40"></div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';

const useStore = useUserStore()
const { userInfo, inviteUrl } = storeToRefs(useStore)
</script>

<style lang="scss" scoped>
.pic1{
    width: 80px;
    height: 121px;
}
.pic2{
    width: 180px;
    height: 68px;
}
.box{
    height: 96px;
    border-radius: 10px;
    background-color: #FFFFFF1A;
    padding: 0 30px;
}
.card{
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF1A;
    padding: 80px 30px 40px 30px;
    border-radius: 10px;
}
</style>