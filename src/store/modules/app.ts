import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { getLang, getToken, setLang } from '@/config/storage'
import { i18n } from '@/locale'
import { useUserStore } from './user'

export const useAppStore = defineStore('app', () => {
    const language = getLang()

    const lang = ref(language) // 当前多语言

    const token = getToken()
    const isLogin = ref<Boolean>(true) // 是否已登录
    isLogin.value = token ? true : false

    // 修改多语言
    function setLocale(locale:any, reload:boolean = true){
        lang.value = locale
        setLang(locale)
        i18n.global.locale = locale
        if(reload){
            location.reload()
        }
    }

    // 登录后更新用户信息
    watch(isLogin, (newVal)=> newVal && useUserStore().updateUserInfo(), {immediate:true})

    return {
        lang,
        setLocale,
        isLogin
    }
})