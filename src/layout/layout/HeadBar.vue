<template>
    <div class="headBar">
        <div class="safeTop"></div>
        <div class="bar flex jb ac">
            <img src="@/assets/layout/logo.png" class="logo">
            <div class="flex ac">
                <!-- <div class="node mr20 flex ac size20">
                    <div class="dot mr6"></div>
                    <div class="mr6">TokenPocket</div>
                    <van-icon name="arrow" />
                </div> -->
                <CusLang></CusLang>
            </div>
        </div>
    </div>

    <div v-if="gap">
        <div class="safeTop"></div>
        <div class="gap100"></div>
    </div>
</template>

<script setup lang="ts">
import CusLang from '@/components/CusLang/index.vue'
defineProps({
    gap: {
        type: Boolean,
        default: true
    }
})
</script>

<style lang="scss" scoped>
.headBar{
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #00000080;
    .bar{
        height: 100px;
        padding: 0 28px;
    }
    .logo{
        width: 278px;
        height: 48px;
    }
    .node{
        height: 52px;
        border-radius: 26px;
        border: 1px solid #FFFFFF1A;
        background-color: #FFFFFF1A;
        padding: 0 12px;
        .dot{
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #00FF2F;
        }
    }
}
</style>