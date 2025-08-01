<template>
    <div v-if="modelValue">
        <div class="cusPop animate__animated ani3" :class="aniName" v-if="fullPage">
            <slot></slot>
        </div>
        <div class="cusPop animate__animated ani3 flex col jc ac" :class="aniName" @click="clickMask" v-else>
            <div class="popContent" @click.stop>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue:{
        type:Boolean,
        default:false
    },
    fullPage:{
        type:Boolean,
        default:false
    },
    closeble:{
        type:Boolean,
        default:true
    }
})
const emits = defineEmits(['update:modelValue'])

const aniName = ref('')

const showPop = () => {
    aniName.value = 'animate__fadeIn'
    setTimeout(() => {
        emits('update:modelValue', true)
    }, 300);
}

const hidePop = () => {
    aniName.value = 'animate__fadeOut'
    setTimeout(() => {
        emits('update:modelValue', false)
    }, 300);
}

const clickMask = () => {
    if(props.closeble)hidePop()
}

watch(()=>props.modelValue, (val:boolean)=>{
    if(val)showPop()
    else hidePop()
})
</script>

<style lang="scss" scoped>
.cusPop{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    background-color: rgba(0, 0, 0, 0.16); /* 半透明背景 */
    backdrop-filter: blur(20px); /* 模糊效果 */
    -webkit-backdrop-filter: blur(20px); /* 兼容Safari */
    .popContent{
        width: 350px;
        border-radius: 16px;
        padding: 22px 15px 25px 15px;
        border: 1px solid #FFFFFF2E;
        background-color: rgba(255, 255, 255, 0.16); /* 半透明背景 */
        backdrop-filter: blur(20px); /* 模糊效果 */
        -webkit-backdrop-filter: blur(20px); /* 兼容Safari */
    }
}
</style>