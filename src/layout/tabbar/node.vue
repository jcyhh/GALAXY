<template>
    <img src="@/assets/layout/5.png" class="bg">
    <div class="tabs flex ac" ref="tabs">
        <div class="tabItem flex jc ac" :id="`tab${index}`" :class="current == index ? 'act' : ''"
            v-for="(item, index) in list" :key="item.id" @click="tabsClick(index)">
            <span class="bold">{{ item.name }}</span>
            <img src="@/assets/layout/6.png" class="tabLine animate__animated animate__zoomIn ani3"
                v-if="current == index">
        </div>
    </div>

    <div class="gap50"></div>

    <swiper slidesPerView="auto" :centeredSlides="true" :spaceBetween="spaceBetween" @swiper="onSwiper"
        @slide-change="slideChange">
        <swiper-slide v-for="(item, index) in list" :key="index">
            <div class="card flex col jb">
                <img src="@/assets/layout/8.png" class="pic8">
                <div>
                    <div class="size40 bold tc">{{ item.name }}</div>
                    <div class="line mt40"></div>
                    <div class="pl30 pr30 mt46">
                        <div class="box">
                            <img :src="item.image" class="pic9">
                            <div class="tag size28 bold flex ac" v-if="userInfo?.node?.id != item.id">
                                <span>{{ $t('赠送') }}</span>
                                <div class="pic10">{{ item?.level?.name }}</div>
                            </div>
                        </div>
                        <div class="pt30" v-if="userInfo?.node && userInfo?.node?.id == item.id">
                            <div class="stat size26">
                                <div class="pt20 pb20 flex jb ac">
                                    <div class="txt">{{ tokenName }} {{ $t('今日分红') }}</div>
                                    <div class="flex ac" @click="routerPush('/nodeLog')">
                                        <div v-init="info?.today_stats?.node_dividend_token"></div>
                                        <van-icon name="arrow" />
                                    </div>
                                </div>
                                <div class="pt20 pb20 flex jb ac">
                                    <div class="txt">USDT {{ $t('今日分红') }}</div>
                                    <div class="flex ac" @click="routerPush('/nodeLog')">
                                        <div v-init="info?.today_stats?.node_dividend_u"></div>
                                        <van-icon name="arrow" />
                                    </div>
                                </div>
                                <div class="pt20 pb20 flex jb ac">
                                    <div class="txt">{{ tokenName }} {{ $t('累计分红') }}</div>
                                    <div class="flex ac" @click="routerPush('/nodeLog')">
                                        <div v-init="info?.total_stats?.node_dividend_token"></div>
                                        <van-icon name="arrow" />
                                    </div>
                                </div>
                                <div class="pt20 pb20 flex jb ac">
                                    <div class="txt">USDT {{ $t('累计分红') }}</div>
                                    <div class="flex ac" @click="routerPush('/nodeLog')">
                                        <div v-init="info?.total_stats?.node_dividend_u"></div>
                                        <van-icon name="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt42" v-else>
                            <div class="flex jb ac">
                                <div class="flex ac">
                                    <img src="@/assets/usdt.png" class="img48 mr10">
                                    <div class="size48 bold mainColor" v-init="item.price"></div>
                                </div>
                                <div class="size24">—— {{ $t('节点价格') }}</div>
                            </div>
                            <div class="cell mt44 flex ac size26">
                                <div class="mr60">{{ tokenName }} : <span v-init="item.token"></span></div>
                                <div class="flex1">{{ $t('贡献值') }} : <span v-init="item.gxz"></span></div>
                                <div class="free bold">{{ $t('赠送') }}</div>
                            </div>
                            <div class="mainBtn mt40" style="color: #999999;background-color: rgba(255, 255, 255, 0.2);" v-if="userInfo?.node">{{ $t('购买节点') }}</div>
                            <div class="mainBtn mt40" @click="openpop" v-else>{{ $t('购买节点') }}</div>
                        </div>

                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>

    <van-popup v-model:show="show" :destroy-on-close="true" position="bottom"
        style="background-color: transparent !important;">
        <div class="pop flex col jb">
            <div>
                <div class="flex je">
                    <img src="@/assets/layout/close.png" class="img32" @click="show = false">
                </div>

                <div class="mt58" v-if="isSuccess">
                    <div class="flex jc mt58">
                        <Vue3Lottie :animationData="success" class="pic24" :speed="1" :loop="false" :autoPlay="true" />
                    </div>
                    <div class="tc size48 mt8">{{ $t('购买成功') }}</div>
                </div>

                <div class="mt30" v-else>
                    <div class="flex jc mt30">
                        <img src="@/assets/usdt.png" class="img64">
                    </div>
                    <div class="tc size48 mt28"><span v-init="list[current].price"></span> USDT</div>
                    <div class="tc mt20 opc6">{{ $t('支付金额') }}</div>
                    <div class="mainCard mt60 flex jb ac">
                        <div class="flex ac">
                            <img src="@/assets/usdt.png" class="img40 mr15">
                            <div class="size24 opc6">{{ $t('可用') }} USDT</div>
                        </div>
                        <div class="size26" v-init="userInfo?.balance_usdt"></div>
                    </div>
                </div>

            </div>
            <div>
                <div class="mainBtn" v-scale v-delay="{ fun: submit }">{{ isSuccess ? $t('去查看') : $t('确认购买') }}</div>
                <div class="safeBottom"></div>
            </div>
        </div>
    </van-popup>

</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// @ts-ignore
import 'swiper/css';
import { routerPush } from '@/router';
import success from '@/assets/svga/success.json'
import { Vue3Lottie } from 'vue3-lottie';
import { apiGet, apiPost } from '@/utils/request';
import { tokenName } from '@/config';
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';

const useStore = useUserStore()
const { userInfo } = storeToRefs(useStore)

const info = ref()
apiGet('/api/users/my/stats').then(res=>info.value=res)

/**
 * 选项卡及轮播逻辑
 */
const current = ref(0)
const tabs = ref()
const mySwiper = ref()
const onTabChange = async (index: number) => {
    current.value = index;
    await nextTick()
    if (index > 0) {
        const element = document.getElementById(`tab${index - 1}`);
        tabs.value.scrollTo({
            left: element?.offsetLeft || 0,
            behavior: 'smooth'
        });
    }
}
const tabsClick = (index: number) => mySwiper.value.slideTo(index)
const onSwiper = (swiper: any) => mySwiper.value = swiper
const slideChange = (data: any) => onTabChange(data.activeIndex);
const spaceBetween = Math.floor(30 * window.innerWidth / 750 * 100) / 100;

const show = ref(false) // 弹窗
const openpop = () => {
    isSuccess.value = false
    show.value = true
}

// 节点列表
const list = ref()
apiGet('/api/nodes').then((res: any) => list.value = res.nodes)

// 是否购买成功
const isSuccess = ref(false)

// 购买节点
const submit = () => {
    if (isSuccess.value) {
        const index = list.value.findIndex((item: any) => item.id == userInfo.value?.node.id)
        tabsClick(index)
    } else {
        apiPost(`/api/nodes/${list.value[current.value].id}/buy`).then(() => {
            isSuccess.value = true
            useStore.updateUserInfo()
        })
    }

}

</script>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
}

.tabs {
    height: 100px;
    width: 100vw;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    .tabItem {
        padding: 0 20px;
        flex-shrink: 0;
        position: relative;
        font-size: 28px;

        .tabLine {
            width: 80px;
            height: 23px;
            position: absolute;
            bottom: -20px;
        }
    }

    .act {
        font-size: 44px;
        color: $main-color;
    }
}

.card {
    width: 630px;
    height: 940px;
    background-image: url("@/assets/layout/7.png");
    background-size: 100% 100%;
    position: relative;
    padding-top: 60px;
    border-radius: 40px;

    .pic8 {
        width: 66px;
        height: 71px;
        position: absolute;
        left: 274px;
        top: -37px;
    }

    .line {
        height: 20px;
        background-color: #D2D2D2;
    }

    .box {
        height: 316px;
        border: 2px solid $main-color;
        border-radius: 40px;
        overflow: hidden;
        position: relative;

        .pic9 {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .tag {
            height: 50px;
            border-radius: 25px;
            border: 2px solid #FFFFFF;
            position: absolute;
            top: 25px;
            right: 30px;
            z-index: 1;
            padding: 0 60px 0 20px;
            background-color: #000000;

            .pic10 {
                width: 60px;
                height: 60px;
                background-image: url("@/assets/layout/10.png");
                background-size: 100% 100%;
                text-align: center;
                line-height: 60px;
                position: absolute;
                right: -8px;
                text-shadow: 0 0 10px #000000;
            }
        }
    }

    .cell {
        height: 80px;
        border-radius: 10px;
        border: 1px solid #FFFFFF;
        padding: 0 20px;

        .free {
            background: linear-gradient(120deg, #27F72D, #FFBF40, #8C55D4, #00FFBF);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            font-size: 28px;
        }
    }

    .stat {
        border: 1px solid #FFFFFF66;
        border-radius: 40px;
        background: linear-gradient(120deg, #00000033, #86EE331A, #00000080);
        padding: 20px 30px;

        .txt {
            color: #C5C5C5;
        }
    }
}

.swiper {
    width: 100%;
    height: 1000px;
}

.swiper-slide {
    width: 630px;
    height: 977px;
    padding-top: 37px;
}

.swiper-slide-active {
    .card {
        box-shadow: 0 0 30px rgba($color: #FFFFFF, $alpha: 0.5);
    }
}

.pop {
    width: 100vw;
    height: 920px;
    padding: 40px;
    border-radius: 40px 40px 0 0;
    background-color: #121212;

    .pic24 {
        width: 306px;
        height: 306px;
    }
}
</style>