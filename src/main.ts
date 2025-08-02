import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

/**
 * VantUI
 */
import '@vant/touch-emulator'; // 电脑端mouse事件转touch事件
import 'vant/es/toast/style';

// import 'swiper/css';

/**
 * 公共样式
 */
import '@/styles/index.scss';
import '@/styles/ui.scss'; // 直接覆盖UI组件的样式
import '@/styles/base.scss';
import '@/styles/animation.scss';

/**
 * 动画库
 */
import 'animate.css';

/**
 * 指令
 */
import { copy, delay, scale, filter, onShow, clickOutside } from '@/directives';
app.directive('scale', scale);
app.directive('copy', copy);
app.directive('delay', delay);
app.directive('init', filter);
app.directive('on-show', onShow);
app.directive('click-outside', clickOutside);

/**
 * 多语言
 */
import { i18n } from '@/locale'
app.use(i18n)

/**
 * pinia
 */
import { setupStore } from '@/store'
setupStore(app)

/**
 * vue-router
 */
import { router } from '@/router'
app.use(router)

/**
 * 全局组件
 */
import { CusList, CusData, CusEmpty, CusNav } from '@/components'
app.component('CusList', CusList)
app.component('CusData', CusData)
app.component('CusEmpty', CusEmpty)
app.component('CusNav', CusNav)

/**
 * 正式环境禁用console
 */
if(import.meta.env.PROD){
    console.log = ()=>{}
    console.warn = ()=>{}
    console.error = ()=>{}
    console.debug = ()=>{}
}

// import VConsole from 'vconsole'
// new VConsole()

app.mount('#app')
