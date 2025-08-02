<template>
    <cus-nav :title="$t('注册')">
        <CusLang></CusLang>
    </cus-nav>
    <Register></Register>
    <div class="gap100"></div>
</template>

<script setup lang="ts">
import Register from './Register.vue'
import CusLang from '@/components/CusLang/index.vue'
</script>

<style lang="scss" scoped>
</style>