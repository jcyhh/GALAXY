<template>
    <cus-nav :title="$t('公告列表')"></cus-nav>
    <div class="pl30 pr30 pt40">

        <cus-list api="/api/notices" name="notices" v-slot="{ listData }">
            <div class="mainCard mb20 flex jb ac" v-for="(item,index) in listData" :key="index">
                <div>
                    <div class="size28 line1 title">{{ item.title }}</div>
                    <div class="size24 opc6 mt14" v-init:time="item.updated_at"></div>
                </div>
                <van-icon class="size28 opc6" name="arrow" />
            </div>
        </cus-list>
        
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.title{
    width: 400px;
}
</style>