/**
 * keepAlive: true —— 跳转别的页面后，本页面不销毁
 */

import tabbar from './tabbar';

export default [
    ...tabbar,
    {
        path:'/boxLog',
        component: () => import('@/views/boxLog.vue')
    },
    {
        path:'/nodeLog',
        component: () => import('@/views/nodeLog.vue')
    },
    {
        path:'/rechange',
        component: () => import('@/views/rechange.vue')
    },
    {
        path:'/withdraw',
        component: () => import('@/views/withdraw.vue')
    },
    {
        path:'/exchange',
        component: () => import('@/views/exchange.vue')
    },
    {
        path:'/transfer',
        component: () => import('@/views/transfer.vue')
    }
]