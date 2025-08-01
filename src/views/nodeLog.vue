<template>
    <cus-nav title="明细"></cus-nav>
    <div class="pl30 pr30 pt40 rel">

        <div class="mainCard mb20" v-for="(item,index) in 3" :key="index">
            <div class="flex jb size28">
                <div>备注</div>
                <div class="mainColor">1.2</div>
            </div>
            <div class="flex jb mt14 opc6">
                <div>2025.06.26 12:26:56</div>
                <div>USDT</div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>