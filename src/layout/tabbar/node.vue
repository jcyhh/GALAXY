<template>
    <img src="@/assets/layout/5.png" class="bg">
    <div class="tabs flex ac" ref="tabs">
        <div class="tabItem flex jc ac" :id="`tab${index}`" :class="current==index?'act':''" v-for="(item,index) in 10" :key="index" @click="tabsClick(index)">
            <span class="bold">节点{{ index+1 }}号</span>
            <img src="@/assets/layout/6.png" class="tabLine animate__animated animate__zoomIn ani3" v-if="current==index">
        </div>
    </div>

    <div class="gap50"></div>

    <swiper
        slidesPerView="auto"
        :centeredSlides="true"
        :spaceBetween="spaceBetween"
        @swiper="onSwiper"
        @slide-change="slideChange"
    >
        <swiper-slide v-for="(item,index) in 10" :key="index">
            <div class="card flex col jb">
                <img src="@/assets/layout/8.png" class="pic8">
                <div>
                    <div class="size40 bold tc">节点{{ index+1 }}号</div>
                    <div class="line mt40"></div>
                    <div class="pl30 pr30 mt46">
                        <div class="box">
                            <img src="@/assets/layout/9.png" class="pic9">
                            <div class="tag size28 bold flex ac">
                                <span>赠送</span>
                                <div class="pic10">V4</div>
                            </div>
                        </div>
                        <!-- <div class="flex jb ac mt42">
                            <div class="flex ac">
                                <img src="@/assets/usdt.png" class="img48 mr10">
                                <div class="size48 bold mainColor">100</div>
                            </div>
                            <div class="size24">—— 节点价格</div>
                        </div>
                        <div class="cell mt44 flex ac size26">
                            <div class="mr60">PE:120</div>
                            <div class="flex1">贡献值:120</div>
                            <div class="free bold">赠送</div>
                        </div> -->
                    </div>
                </div>
                <!-- <div class="pl30 pr30 pb60">
                    <div class="mainBtn">购买节点</div>
                </div> -->
                <div class="pl30 pr30 pb40">
                    <div class="stat size26">
                        <div class="pt20 pb20 flex jb ac">
                            <div class="txt">今日PE分红</div>
                            <div class="flex ac">
                                <div>1.06</div>
                                <van-icon name="arrow" />
                            </div>
                        </div>
                        <div class="pt20 pb20 flex jb ac">
                            <div class="txt">今日USDT分红</div>
                            <div class="flex ac">
                                <div>1.06</div>
                                <van-icon name="arrow" />
                            </div>
                        </div>
                        <div class="pt20 pb20 flex jb ac">
                            <div class="txt">累计PE分红</div>
                            <div class="flex ac">
                                <div>1.06</div>
                                <van-icon name="arrow" />
                            </div>
                        </div>
                        <div class="pt20 pb20 flex jb ac">
                            <div class="txt">累计USDT分红</div>
                            <div class="flex ac">
                                <div>1.06</div>
                                <van-icon name="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </swiper-slide>
    </swiper>
    
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// @ts-ignore
import 'swiper/css';

const current = ref(0)
const tabs = ref()
const mySwiper = ref()
const onTabChange = async (index:number) => {
    current.value = index;
    await nextTick()
    if(index > 1){
        const element = document.getElementById(`tab${index - 2}`);
        tabs.value.scrollTo({
            left: element?.offsetLeft || 0,
            behavior: 'smooth'
        });
    }
}
const tabsClick = (index:number)=>mySwiper.value.slideTo(index)
const onSwiper = (swiper:any) => mySwiper.value =swiper
const slideChange = (data:any) => onTabChange(data.activeIndex);


const spaceBetween = Math.floor(30 * window.innerWidth / 750 * 100) / 100;

</script>

<style lang="scss" scoped>
.bg{
    width: 120vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
}
.tabs{
    height: 100px;
    width: 100vw;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    .tabItem{
        padding: 0 20px;
        flex-shrink: 0;
        position: relative;
        font-size: 28px;
        .tabLine{
            width: 80px;
            height: 23px;
            position: absolute;
            bottom: -20px;
        }
    }
    .act{
        font-size: 44px;
        color: $main-color;
    }
}
.card{
    width: 630px;
    height: 940px;
    background-image: url("@/assets/layout/7.png");
    background-size: 100% 100%;
    position: relative;
    padding-top: 60px;
    .pic8{
        width: 66px;
        height: 71px;
        position: absolute;
        left: 274px;
        top: -37px;
    }
    .line{
        height: 20px;
        background-color: #D2D2D2;
    }
    .box{
        height: 316px;
        border: 2px solid $main-color;
        border-radius: 40px;
        overflow: hidden;
        position: relative;
        .pic9{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .tag{
            height: 50px;
            border-radius: 25px;
            border: 2px solid #FFFFFF;
            position: absolute;
            top: 25px;
            right: 30px;
            z-index: 1;
            padding: 0 60px 0 20px;
            background-color: #000000;
            .pic10{
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
    .cell{
        height: 80px;
        border-radius: 10px;
        border: 1px solid #FFFFFF;
        padding: 0 20px;
        .free{
            background: linear-gradient(120deg, #27F72D, #FFBF40, #8C55D4, #00FFBF);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            font-size: 28px;
        }
    }
    .stat{
        border: 1px solid #FFFFFF66;
        border-radius: 40px;
        background: linear-gradient(120deg, #00000033, #86EE331A, #00000080);
        padding: 20px 30px;
        .txt{
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
// .swiper-slide-active {
//     box-shadow: 0 0 10px #FFFFFF;
// }
</style>