<template>
    <cus-nav :title="`${type==13?'USDT':tokenName} ${$t('明细')}`"></cus-nav>
    <div class="pl30 pr30 pt40 rel">

        <cus-list ref="list" api="/api/balance_logs" name="balance_logs" :param="{ccy:'balance_usdt',type}" v-slot="{ listData }">
            <div class="mainCard mb20" v-for="(item,index) in listData" :key="index">
                <div class="flex jb size28">
                    <div>{{ item.content }}</div>
                    <div class="mainColor" v-if="item.is_inc">+ <span v-init="item.amount"></span></div>
                    <div v-else>- <span v-init="item.amount"></span></div>
                </div>
                <div class="flex jb opc6 size20 mt14">
                    <div v-init:time="item.created_at"></div>
                    <div>{{ type==13?'USDT':tokenName }}</div>
                </div>
            </div>
        </cus-list>
        
    </div>
</template>

<script setup lang="ts">
import { tokenName } from '@/config';
import { useRoute } from 'vue-router';

const { query } = useRoute()

const type:any = query.type
</script>

<style lang="scss" scoped>

</style>