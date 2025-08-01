<template>
    <div>
        <div class="cusNav flex jb ac">
            <div class="flex1" @click="back">
                <van-icon name="arrow-left" color="#FFFFFF" :size="20" />
            </div>
            <div class="flex2 size18 bold tc">{{ title }}</div>
            <div class="flex1 flex je ac">
                <slot></slot>
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * 二级页面导航栏
 */
import { routerGo } from '@/router'

defineProps(['title'])

// 返回按钮
function back(){
    routerGo()
}
</script>

<style lang="scss" scoped>
.cusNav{
    width: 100vw;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.16); /* 半透明背景 */
    backdrop-filter: blur(10px); /* 模糊效果 */
    -webkit-backdrop-filter: blur(10px); /* 兼容Safari */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 0 28px;
}
</style>