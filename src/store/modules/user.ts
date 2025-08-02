import { apiGet } from '@/utils/request'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref() // 用户信息

    const QA = ref() // 密保问题

    const updateUserInfo = async () => userInfo.value = await apiGet('/api/users/my') // 更新用户信息

    const updateQA = () => apiGet('/api/questions').then((res:any)=>QA.value=res.questions) // 更新密保问题

    const inviteUrl = computed(()=>`${window.origin}/ref/${userInfo.value?.referral_code}`)

    return {
        userInfo,
        QA,
        inviteUrl,
        updateUserInfo,
        updateQA
    }
})