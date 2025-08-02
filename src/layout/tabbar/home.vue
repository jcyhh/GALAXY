<template>
    <img src="@/assets/layout/1.png" class="bg scaleDown ani10">
    <div class="pl30 pr30 mt20 rel">

        <div class="card">

            <div class="top pl28 flex jb ac">
                <div class="mainColor size44 bold7">“{{ $t('宝箱_抽奖') }}”</div>
                <div class="logo flex jc ac" @click="routerPush('/notice')">
                    <img src="@/assets/svga/2.gif" class="img64">
                </div>
            </div>

            <div class="mt30 flex jc">
                <div class="title bold7 size70">{{ $t('惊喜好礼 等您来抽') }}</div>
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

                <div class="size28 mt30">{{ $t('宝箱金额') }}</div>

                <div class="inpbox mt40 flex">
                    <input type="number" :placeholder="`${$t('请输入开箱金额')}(${$t('100的倍数')})`" class="flex1 tc size28">
                </div>

                <div class="btn flex jb ac mt30" v-scale v-delay="{fun:openBox}">
                    <img src="@/assets/layout/4.gif" class="pic4 gif4">
                    <div class="size26 black">{{ $t('立即开箱') }}</div>
                    <img src="@/assets/layout/4.gif" class="pic4">
                </div>

                <div class="flex jc mt40">
                    <div class="flex ac mainColor size24" @click="routerPush('/boxLog')">
                        <div>{{ $t('开箱记录') }}</div>
                        <van-icon name="arrow-double-right" />
                    </div>
                </div>
            </div>
            <div class="gap50"></div>
        </div>

    </div>

    <div class="gap80"></div>

    <van-popup v-model:show="noticeShow" style="background-color: transparent !important;">
        <div class="noticepop flex jc ac">
            <div class="mainPop">
                <div class="flex jb ac rel">
                    <img src="@/assets/svga/3.gif" class="pic3">
                    <div class="size32 pl110">{{ $t('最新公告') }}</div>
                    <img src="@/assets/layout/close.png" class="img32" @click="noticeShow=false">
                </div>
                <div class="mainColor size32 bold mt60 lh50 br">{{ notice?.title }}</div>
                <div class="size24 opc6 mt20">{{ $t('发布时间') }} : <span v-init:time="notice?.updated_at"></span></div>
                <div class="scroll mt40" v-html="notice?.content"></div>
                <div class="mainBtn mt40" v-scale v-delay="{fun:submit}">{{ $t('知道了') }}</div>
            </div>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
import { t } from '@/locale';
import { routerPush } from '@/router';
import { apiGet, apiPost } from '@/utils/request';
import { showToast } from 'vant';
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

const noticeShow = ref(false)
const notice = ref()
apiGet('/api/notices/pop').then((res:any)=>{
    if(res.is_show){
        notice.value = res.notice
        noticeShow.value = true
    }
})
const submit = () => apiPost(`/api/notices/${notice.value?.id}/read`).then(()=>notice.value=false)

const openBox = () => showToast(t('暂未开放'))

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
            height: 98px;
            background-color: #FFFFFF;
            border-radius: 0 10px 0 0;
            padding: 0 30px;
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

.noticepop{
    width: 600px;
    height: 900px;
    .scroll{
        width: 100%;
        height: 420px;
        overflow-y: scroll;
        &::-webkit-scrollbar{
            display: none;
        }
    }
}
.pic3{
    width: 130px;
    height: 130px;
    position: absolute;
    left: -30px;
    top: -56px;
}
</style>