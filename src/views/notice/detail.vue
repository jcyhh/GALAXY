<template>
    <cus-nav :title="$t('公告详情')"></cus-nav>
    <div class="pl30 pr30 pt40">
        <div class="size44 bold lh80">{{ info?.title }}</div>
        <div class="size24 opc6 mt20">{{ $t('发布时间') }} : <span v-init:time="info?.updated_at"></span></div>
        <div class="mt60" v-html="info?.content"></div>
    </div>
    <div class="gap40"></div>
</template>

<script setup lang="ts">
import { apiGet } from '@/utils/request';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const { params } = useRoute()

const info = ref()
apiGet(`/api/notices/${params.id}`).then(res=>info.value=res)
</script>

<style lang="scss" scoped>

</style>