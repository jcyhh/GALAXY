<template>
    <van-popup v-model:show="show" :destroy-on-close="true" style="background-color: transparent !important;">
        <div class="pt2 pb2 pl2 pr2">
            <div class="mainPop">
                <div class="flex jb ac">
                    <div class="size32">{{ $t('安全密码') }}</div>
                    <img src="@/assets/layout/close.png" class="img32" @click="show=false">
                </div>
                <div class="popinp flex mt60">
                    <input type="password" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :placeholder="$t('请输入安全密码')" class="flex1 tc size28">
                </div>
                <div class="mainBtn mt50" @click="$emit('submit')">{{ $t('确认') }}</div>
            </div>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['modelValue', 'tips', 'psw'])
defineEmits(['update:modelValue', 'submit'])

const show = ref(false)

const open = () => show.value = true
const close = () => show.value = false

defineExpose({
    open,
    close
})
</script>

<style lang="scss" scoped>

</style>