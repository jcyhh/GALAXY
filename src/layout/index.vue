<template>
    <head-bar></head-bar>
    <router-view />
    <tab-bar></tab-bar>
</template>

<script setup lang="ts">
import { getToken } from '@/config/storage';
import HeadBar from './layout/HeadBar.vue';
import TabBar from './layout/TabBar.vue';
import { useUserStore } from '@/store';
import { routerReplace } from '@/router';

const useStore = useUserStore()

if(getToken())useStore.updateUserInfo()
else routerReplace('/login')
</script>

<style lang="scss" scoped>

</style>