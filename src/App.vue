<template>
    <RouterView v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" />
    </RouterView>
</template>

<script setup lang="ts">
import { setRef } from '@/config/storage'

const url = new URL(window.location.href)
const inviteCode = url.searchParams.get('ref')
if (inviteCode) setRef(inviteCode)
</script>

<style lang="scss" scoped></style>
