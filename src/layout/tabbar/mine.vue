<template>
    <img src="@/assets/layout/5.png" class="bg">
    <div class="gap80"></div>
    <div class="pl30 pr30 rel">

        <div class="top pt22">
            <div class="pl178 pr30 flex jb ac">
                <div>
                    <div class="size36 bold">{{ userInfo?.maccount || '--' }}</div>
                    <div class="mt10 flex ac" v-copy="userInfo?.referral_code">
                        <div class="opc6 size24">{{ $t('分享码') }} : {{ userInfo?.referral_code || '--' }}</div>
                        <img src="@/assets/layout/26.png" class="img24 ml10">
                    </div>
                </div>
                <div class="tag flex ac" @click="routerPush('/setting')">
                    <div class="mr10 size20">{{ $t('设置') }}</div>
                    <img src="@/assets/layout/18.png" class="img36">
                </div>
            </div>
            <div class="line mt22">
                <img src="@/assets/layout/17.png" class="pic17">
            </div>
            <div class="mt40 bold size48 pl30">{{ info?.referral_count }}</div>
            <div class="pl30 mt10 opc6 size24">{{ $t('社区人数') }}</div>
            <div class="size24 pl30 mt40">
                <span class="opc6 mr20">{{ $t('小区业绩') }}</span>
                <span class="size28 mr50" v-init="info?.xq_kpi"></span>
                <span class="opc6 mr20">{{ $t('社区业绩') }}</span>
                <span class="size28" v-init="info?.team_kpi"></span>
            </div>
            <div class="level flex col jc ae">
                <div class="mainColor size36 bold">{{ userInfo?.level?.name || '--' }}</div>
                <div class="size24 mt8">{{ $t('当前等级') }}</div>
            </div>
        </div>

        <div class="share mt40 flex col jc" @click="routerPush('/invite')">
            <div class="size28 bold">{{ $t('分享好友一起玩吧!') }}</div>
            <div class="flex mt24">
                <div class="btn">{{ $t('去分享') }}</div>
            </div>
        </div> 

        <div class="stat mt40 flex col jb size26">
            <div class="flex jb">
                <div class="opc8">{{ $t('今日宝箱收益') }}</div>
                <div v-init="info?.today_stats?.order_jt"></div>
            </div>
            <div class="flex jb">
                <div class="opc8">{{ $t('今日分享收益') }}</div>
                <div v-init="info?.today_stats?.order_referral"></div>
            </div>
            <div class="flex jb">
                <div class="opc8">{{ $t('今日社区收益') }}</div>
                <div v-init="info?.today_stats?.order_team"></div>
            </div>
            <div class="flex jb">
                <div class="opc8">{{ $t('累计宝箱收益') }}</div>
                <div v-init="info?.total_stats?.order_jt"></div>
            </div>
            <div class="flex jb">
                <div class="opc8">{{ $t('累计分享收益') }}</div>
                <div v-init="info?.total_stats?.order_team"></div>
            </div>
            <div class="flex jb">
                <div class="opc8">{{ $t('累计社区收益') }}</div>
                <div v-init="info?.total_stats?.order_referral"></div>
            </div>
        </div>

        <div class="mt40">
            <div class="card">
                <div class="size30 bold tabs flex ac">{{ $t('社区列表') }}</div>
                <cus-list api="/api/users/my/referrals" name="referrals" v-slot="{ listData }">
                    <div class="pl30 pr30">
                        <div class="item" v-for="(item,index) in listData" :key="index">
                            <div class="flex jb size28">
                                <div>{{ item.maccount }}</div>
                                <div class="mainColor" v-init="item.self_and_team_kpi"></div>
                            </div>
                            <div class="flex jb opc8 size20 mt14">
                                <div v-init:time="item.created_at"></div>
                                <div>USDT</div>
                            </div>
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
import { useUserStore } from '@/store';
import { apiGet } from '@/utils/request';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const useStore = useUserStore()
const { userInfo } = storeToRefs(useStore)

const info = ref()
apiGet('/api/users/my/stats').then(res=>info.value=res)
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
    background-image: url("@/assets/layout/16.png");
    background-size: 100% 100%;
    position: relative;
    .tag{
        height: 56px;
        border: 1px solid #FFFFFF;
        border-radius: 28px;
        padding: 0 20px;
    }
    .line{
        height: 18px;
        background-color: #FFFFFF;
        position: relative;
        .pic17{
            width: 126px;
            height: 208px;
            position: absolute;
            left: 28px;
            bottom: -30px;
        }
    }
    .level{
        width: 220px;
        height: 108px;
        background: linear-gradient(to right, #86EE3300, #86EE3333);
        position: absolute;
        right: 1px;
        top: 178px;
        padding-right: 28px;
    }
}
.share{
    height: 160px;
    background-image: url("@/assets/layout/19.png");
    background-size: 100% 100%;
    padding-left: 30px;
    .btn{
        height: 40px;
        border-radius: 10px;
        padding: 0 20px;
        background-color: $main-color;
        color: #000000;
        font-size: 20px;
        line-height: 40px;
    }
}
.stat{
    height: 468px;
    background-image: url("@/assets/layout/20.png");
    background-size: 100% 100%;
    padding: 40px 30px;
}
.card{
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    background-color: #00000033;
    .tabs{
        height: 98px;
        background-color: #FFFFFF1A;
        padding: 0 30px;
    }
    .item{
        padding: 40px 0 30px 0;
        border-bottom: 1px solid #FFFFFF4D;
    }
}
</style>