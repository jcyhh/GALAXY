<template>
    <img src="@/assets/layout/lang.png" class="img52" @click="openpop">

    <van-popup v-model:show="show" position="bottom" :destroy-on-close="true" style="background-color: transparent !important;">
        <div class="pop flex col jb">
            <div>
                <div class="flex jb mb68">
                    <div class="size30">{{ $t('切换语言') }}</div>
                    <img src="@/assets/layout/close.png" class="img32" @click="show=false">
                </div>
                <div class="scroll" ref="scroll">
                    <div class="mainCard flex jb ac mb27" :id="`lang${index}`" :class="current==index?'act':''" v-for="(item,index) in langs" :key="index" @click="current=index">
                        <div>{{ item.name }}</div>
                        <img src="@/assets/layout/28.png" class="img36 animate__animated animate__zoomIn ani3" v-if="current==index">
                    </div>
                </div>
            </div>
            <div>
                <div class="mainBtn" @click="submit">确认</div>
                <div class="safeBottom"></div>
            </div>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { langs } from "@/locale/index"
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';

const useStore = useAppStore()
const { lang } = storeToRefs(useStore)

const show = ref(false)
const current = ref(0)

const scroll = ref()
const openpop = async () => {
    const index = langs.findIndex(item=>item.lang==lang.value)
    current.value = index
    show.value = true
    await nextTick()
    if(index>0){
        const element = document.getElementById(`lang${index-1}`);
        setTimeout(() => {
            scroll.value.scrollTo({
                top: (element?.offsetTop || 0) - 20,
                behavior: 'smooth'
            });
        }, 300);
    }
}

const submit = () => {
    show.value = false
    useStore.setLocale(langs[current.value].lang)
}
</script>

<style lang="scss" scoped>
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
    .act{
        border: 1px solid $main-color;
    }
}
</style>