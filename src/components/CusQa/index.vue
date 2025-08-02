<template>
    <div class="cusqa flex jb ac size28" @click="show=true">
        <div v-if="currentData">{{ currentData.title }}</div>
        <div class="opc6" v-else>{{ $t('请选择密保问题') }}</div>
        <van-icon name="arrow" class="opc6" />
    </div>

    <van-popup v-model:show="show" position="bottom" :destroy-on-close="true" style="background-color: transparent !important;">
        <div class="pop flex col jb">
            <div>
                <div class="flex jb mb68">
                    <div class="size30">{{ $t('密保问题') }}</div>
                    <img src="@/assets/layout/close.png" class="img32" @click="show=false">
                </div>
                <div class="scroll">
                    <div class="mainCard flex jb ac mb27" v-for="(item,index) in QA" :key="index" @click="current=index">
                        <div>{{ item.title }}</div>
                        <img src="@/assets/layout/28.png" class="img36 animate__animated animate__zoomIn ani3" v-if="current==index">
                    </div>
                </div>
            </div>
            <div>
                <div class="mainBtn" @click="submit">{{ $t('确认') }}</div>
                <div class="safeBottom"></div>
            </div>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const emits = defineEmits(['change'])

const useStore = useUserStore()
const { QA } = storeToRefs(useStore)

const show = ref(false)
const currentData = ref()
const current = ref(0)

const submit = () => {
    currentData.value = QA.value[current.value]
    emits('change', currentData.value)
    show.value = false
}
</script>

<style lang="scss" scoped>
.cusqa {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: #FFFFFF14;
    padding: 0 30px;
}
.pop{
    width: 100vw;
    height: 920px;
    padding: 40px;
    border-radius: 40px 40px 0 0;
    background-color: #121212;
    .scroll{
        height: calc(600px - env(safe-area-inset-bottom));
        overflow-y: scroll;
        &::-webkit-scrollbar{
            display: none;
        }
    }
}
</style>