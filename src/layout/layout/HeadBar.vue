<template>
    <div class="headBar">
        <div class="safeTop"></div>
        <div class="bar flex jb ac">
            <div class="flex ac">
                <img src="@/assets/logo.png" class="img44 mr4">
                <div class="size24">{{ appName }}</div>
            </div>
            <img src="@/assets/layout/lang.png" class="img52">
        </div>
    </div>

    <div v-if="gap">
        <div class="safeTop"></div>
        <div class="gap100"></div>
    </div>
</template>

<script setup lang="ts">
import { appName } from '@/config';

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
    z-index: 10;
    background-color: #00000080;
    .bar{
        height: 100px;
        padding: 0 28px;
    }
}
</style>