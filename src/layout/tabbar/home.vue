<template>
    <img src="@/assets/layout/1.png" class="bg scaleDown ani10">
    <div class="pl30 pr30 mt20 rel">

        <div class="card">

            <div class="top pl28 flex jb ac">
                <div class="mainColor size44 bold7">“宝箱_抽奖”</div>
                <div class="logo flex jc ac">
                    <img src="@/assets/layout/2.png" class="img56">
                    <div class="size26 ml10 black">{{ appName }}</div>
                </div>
            </div>

            <div class="mt30 flex jc">
                <div class="title bold7 size70">惊喜好礼 等您来抽</div>
            </div>

            <div class="flex jc rel mt115">
                <img src="@/assets/layout/3.png" class="pic3 smoothFloat">
                <img src="@/assets/layout/box.png" class="box animate__animated" :class="{ 'animate__swing': isAniShow }">
            </div>

            <div class="pl30 pr30 mt154">
                <div class="flex ac">
                    <img src="@/assets/usdt.png" class="img60 mr20">
                    <div class="size60 bold7 mainColor">100-10000</div>
                </div>

                <div class="flex jb size28 mt30">
                    <div>宝箱金额</div>
                    <div class="red">100的倍数</div>
                </div>

                <div class="inpbox mt40 flex">
                    <input type="number" placeholder="请输入开箱金额" class="flex1 tc size28">
                </div>

                <div class="btn flex jb ac mt30">
                    <img src="@/assets/layout/4.gif" class="pic4 gif4">
                    <div class="size26 black">立即开箱</div>
                    <img src="@/assets/layout/4.gif" class="pic4">
                </div>

                <div class="flex jc mt40">
                    <div class="flex ac mainColor size24" @click="routerPush('/boxLog')">
                        <div>开箱记录</div>
                        <van-icon name="arrow-double-right" />
                    </div>
                </div>
            </div>
            <div class="gap50"></div>
        </div>

    </div>

    <div class="gap80"></div>

    <van-popup>

    </van-popup>
</template>

<script setup lang="ts">
import { appName } from '@/config';
import { routerPush } from '@/router';
import { onUnmounted, ref } from 'vue';

const isAniShow = ref(true);
setTimeout(() => {
    isAniShow.value = false
}, 1000);

let timer:number|null = setInterval(() => {
    isAniShow.value = true
    setTimeout(() => {
        isAniShow.value = false
    }, 1000);
}, 3000);

onUnmounted(()=>{
    if(timer){
        clearInterval(timer);
        timer = null;
    }
})
</script>

<style lang="scss" scoped>
.bg{
    width: 100vw;
    height: 1624px;
    position: fixed;
    top: 0;
    left: 0;
}
.card{
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    .top{
        height: 98px;
        border-bottom: 2px solid #FFFFFF;
        .logo{
            width: 250px;
            height: 98px;
            background-color: #FFFFFF;
            border-radius: 0 10px 0 0;
        }
    }
    .title{
        text-align: center;
        background: linear-gradient(to right, #7CFFE9, #EFFEEC, #C8FF9C);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
    }
    .box{
        width: 388px;
        height: 304px;
        position: relative;
        z-index: 1;
        transform-origin: center center;
    }
    .pic3{
        width: 690px;
        height: 690px;
        position: absolute;
        top: -174px;
    }
    .inpbox{
        height: 92px;
        border: 1px solid #FFFFFF;
        border-radius: 10px;
        background-color: #000000;
    }
    .btn{
        height: 80px;
        border-radius: 10px;
        background-color: #FFFFFF;
        position: relative;
        .pic4{
            width: 101px;
            height: 120px;
            transform: translateX(30px);
        }
        .gif4{
            transform: rotateY(180deg);
            margin-left: -30px;
        }
    }
}
</style>