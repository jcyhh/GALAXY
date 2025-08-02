<template>
    <div class="cusnav">
        <div class="nav flex jb ac">
            <div class="flex1">
                <img src="@/assets/layout/back.png" class="img52" @click="routerGo()">
            </div>
            <div class="flex2 size32 tc">{{ title }}</div>
            <div class="flex1 flex je ac">
                <slot></slot>
            </div> 
        </div>
    </div>
    <div v-if="gap">
        <div class="safeTop"></div>
        <div class="gap100"></div>
    </div>
    <img src="@/assets/layout/5.png" class="bg" v-if="bg">
</template>

<script setup lang="ts">
import { routerGo } from '@/router'

defineProps({
    gap: {
        type: Boolean,
        default: true
    },
    bg: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.cusnav{
    width: 100vw;
    background-color: #00000080;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    .nav{
        height: 100px;
        padding: 0 30px;
    }
}
.bg{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
}
</style>