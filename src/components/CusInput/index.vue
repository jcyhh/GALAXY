<template>
    <div class="cusinput flex ac" :class="focus?'cusinputAct':''">
        <input :type="(psw && !show) ? 'password' : 'text'" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :placeholder="tips"
            class="flex1 size28" @blur="focus=false" @focus="focus=true">
        <div class="flex0 ml30" @click="show = !show" v-if="psw">
            <img src="@/assets/imgs/5.png" class="img38 animate__animated animate__zoomIn ani3" v-if="show">
            <img src="@/assets/imgs/4.png" class="img38" v-else>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['modelValue', 'tips', 'psw'])
defineEmits(['update:modelValue'])

const show = ref(false)

const focus = ref(false)
</script>

<style lang="scss" scoped>
.cusinput {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: #FFFFFF14;
    padding: 0 30px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    transition: all 0.3s;
}
.cusinputAct{
    border-color: $main-color;
}
</style>