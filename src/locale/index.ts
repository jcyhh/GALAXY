import { createI18n } from 'vue-i18n'
import { getLang } from '../config/storage';

import en from './modules/en.json';
import ko from './modules/ko.json';
import ja from './modules/ja.json';
// import id from './modules/id.json';
// import es from './modules/es.json';
// import tr from './modules/tr.json';
// import hk from './modules/hk.json';
import zh from './modules/zh.json';
// import vi from './modules/vi.json';
// import th from './modules/th.json';

const messages = {
    en,
    ko,
    ja,
    // id,
    // es,
    // tr,
    // hk,
    zh,
    // vi,
    // th
}

/**
 * name => 名称
 * lang => 前端使用的多语言值
 * value => 请求头传给后端的值
 */
export const langs = [
    { name: 'English', lang: 'en', value: 'en' }, // 英语
    { name: 'French', lang: 'fr', value: 'fr' }, // 法语
    { name: 'Spanish', lang: 'es', value: 'es' }, // 西班牙语
    { name: 'Bahasa Indonesia', lang: 'id', value: 'id' }, // 印尼语
    { name: '한국어', lang: 'ko', value: 'ko' }, // 韩语
    { name: '日本語', lang: 'ja', value: 'ja' }, // 日语
    { name: 'Tiếng Việt', lang: 'vi', value: 'vi' }, // 越南
    { name: 'Монгол', lang: 'mn', value: 'mn' }, // 蒙古语
    { name: '繁体中文', lang: 'hk', value: 'zh-HK' }, // 繁体中文
    { name: '简体中文', lang: 'zh', value: 'zh-CN' }, // 简体中文
]

// 获取当前请求头要传的值
export function getHeaderLang(): string {
    let lang = getLang()
    const langInfo = langs.find( item => item.lang == lang )!
    return langInfo.value
}

export const i18n = createI18n({
    legacy: false,
    locale: getLang(),
    messages
})

export const t = i18n.global.t