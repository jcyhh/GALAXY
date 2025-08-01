<template>
    <div class="tabbar">
        <div class="bar flex ac">
            <div class="flex1 flex col jc ac" v-for="(item,index) in tabbar" :key="index" @click="routerReplace(item.path)">
                <img :src="$route.path==item.path ? item.activeIcon : item.icon"
                :class="$route.path==item.path ? 'act' : ''"
                class="img40 item">
                <div class="size24 mt6">{{ item.name }}</div>
            </div>
        </div>
        <div class="safeBottom"></div>
    </div>

    <div v-if="gap">
        <div class="gap100"></div>
        <div class="safeBottom"></div>
    </div>
</template>

<script setup lang="ts">
import homeIcon from '@/assets/layout/home.png'
import homeActIcon from '@/assets/layout/homeHL.png'
import nodeIcon from '@/assets/layout/node.png'
import nodeActIcon from '@/assets/layout/nodeHL.png'
import assetIcon from '@/assets/layout/asset.png'
import assetActIcon from '@/assets/layout/assetHL.png'
import mineIcon from '@/assets/layout/mine.png'
import mineActIcon from '@/assets/layout/mineHL.png'
import { computed } from 'vue'
import { routerReplace } from '@/router'

defineProps({
    gap: {
        type: Boolean,
        default: true
    }
})

const tabbar = computed(()=>([
    {name:'宝箱',icon:homeIcon, activeIcon:homeActIcon, path:'/home'},
    {name:'节点',icon:nodeIcon, activeIcon:nodeActIcon, path:'/node'},
    {name:'资产',icon:assetIcon, activeIcon:assetActIcon, path:'/asset'},
    {name:'我的',icon:mineIcon, activeIcon:mineActIcon, path:'/mine'}
]))
</script>

<style lang="scss" scoped>
.tabbar{
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: linear-gradient(#1F1F1F, #000000);
    .bar{
        height: 100px;
        .item{
            transition: all 0.3s;
            transform: scale(1);
            transform-origin: center bottom;
        }
        .act{
            transform: scale(1.5);
        }
    }
}
</style>