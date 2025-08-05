import axios from 'axios'

import { getToken, getAddress, delToken, delAddress } from '@/config/storage'

import httpConfig from '@/config/http'
import { getHeaderLang } from '../locale'

import { closeToast, showLoadingToast, showToast } from 'vant';
import { routerReplace } from '@/router';

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: httpConfig.timeOut
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 如果是上传请求，不设置 Content-Type
        if (!(config.data instanceof FormData)) {
            config.headers['Content-Type'] = "application/json; charset=UTF-8"
        }
        config.headers[httpConfig.tokenKey] = httpConfig.tokenBearer + getToken()
        if(httpConfig.addressKey)config.headers[httpConfig.addressKey] = getAddress()
        if(httpConfig.langKey)config.headers[httpConfig.langKey] = getHeaderLang()
        return config
    },
    error => {
        // 请求失败
        console.log(error)
        return Promise.reject(error)
    }
)


// 响应拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        const code = error.status
        if (code == 401) {
            // 登录失效
            logout()
            return Promise.reject(new Error(error.response.data || 'Error'))
        } else {
            if (error.response.data) {
                showToast(error.response.data)
            }
            return Promise.reject(new Error(error.response.data || 'Error'))
        }
    }
)

const logout = () => { // 退出登录前清除缓存
    delToken()
    delAddress()
    routerReplace('/login')
}

export const apiGet = (url: string, params:any = '') => service({ url, method: 'get', params })
export const apiPost = (url: string, data:any = {}) => service({ url, method: 'post', data })
export const apiDel = (url: string, data:any = {}) => service({ url, method: 'delete', data })
export const apiPut = (url: string, data:any = {}) => service({ url, method: 'put', data })

// 上传单张图片
export const upload = () => {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        
        input.onchange = async (e:Event) => {
            const file = (e.target as HTMLInputElement)?.files?.[0]
            if (!file) {
                input.remove() // 删除 input 元素
                reject(new Error('未选择文件'))
                return
            }
            
            const formData = new FormData()
            formData.set(httpConfig.uploadFileName, file, file.name)
            
            try {
                showLoadingToast({
                    overlay: true,
                    forbidClick: true,
                    duration: 0,
                    zIndex: 10000000000 
                });
                const response = await service({
                    url: httpConfig.uploadApi,
                    method: 'post',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                closeToast()
                input.remove() // 删除 input 元素
                resolve(response)
            } catch (error) {
                input.remove() // 删除 input 元素
                closeToast()
                reject(error)
            }
        }
        
        input.click()
    })
}