<template>
    <div class="download">
        <img src="@/assets/imgs/6.png" class="bg"></img>
        <img src="@/assets/imgs/7.png" class="pic7" v-scale @click="download">
    </div>
</template>

<script setup lang="ts">
import { apiGet } from '@/utils/request';
import { ref } from 'vue';

const url = ref()
apiGet('/api/config/download_url').then((res:any)=>url.value = res.android_download_url)
const download = () => location.href = url.value
</script>

<style lang="scss" scoped>
.download{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .bg{
        width: 100vw;
        height: auto;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .pic7{
        width: 480px;
        height: 120px;
        position: fixed;
        left: 135px;
        top: calc(50vh + 200px);
        z-index: 1;
    }
}
</style>