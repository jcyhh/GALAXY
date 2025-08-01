import { publicPath } from '@/config'
import { apiGet } from '@/utils/request'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref() // 用户信息

    const updateUserInfo = async () => userInfo.value = await apiGet('/api/users/my') // 更新用户信息

    const inviteUrl = computed(()=>`${window.origin}${publicPath}?ref=${userInfo.value?.referral_code}`)

    return {
        userInfo,
        inviteUrl,
        updateUserInfo
    }
})