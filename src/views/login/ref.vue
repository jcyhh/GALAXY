<template>
    <img src="@/assets/layout/5.png" class="bg">
    <div class="lang">
        <CusLang></CusLang>
    </div>
    <div class="gap100"></div>
    <Register></Register>
    <div class="flex jc size24 mt30">
        <span>已注册？</span>
        <span class="mainColor" v-if="ios">去登录</span>
        <span class="mainColor" v-else @click="routerPush('/download')">下载APP</span>
    </div>
    <div class="gap100"></div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Register from './Register.vue'
import CusLang from '@/components/CusLang/index.vue'
import { setRef } from '@/config/storage';
import { isIOS } from '@/utils';
import { routerPush } from '@/router';

const { params } = useRoute()
const code:any = params?.code
if(code)setRef(code)

const ios = isIOS()
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
.lang{
    position: fixed;
    top: 56px;
    right: 30px;
    z-index: 11;
}
</style>