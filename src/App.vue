<template>
    <RouterView v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" />
    </RouterView>
</template>

<script setup lang="ts">
import { getToken } from './config/storage'
import { useUserStore } from './store'

const useStore = useUserStore()
useStore.updateQA()
if(getToken())useStore.updateUserInfo()
</script>

<style lang="scss" scoped></style>
