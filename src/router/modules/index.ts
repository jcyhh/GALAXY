/**
 * keepAlive: true —— 跳转别的页面后，本页面不销毁
 */

import tabbar from './tabbar';
import login from './login';

export default [
    ...tabbar,
    ...login,
    {
        path:'/ref/:code',
        component: () => import('@/views/login/ref.vue')
    },
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
    },
    {
        path:'/invite',
        component: () => import('@/views/invite.vue')
    },
    {
        path:'/setting',
        component: () => import('@/views/setting.vue')
    },
    {
        path:'/withdrawLog',
        component: () => import('@/views/withdrawLog.vue')
    },
    {
        path:'/download',
        component: () => import('@/views/download.vue')
    },
    {
        path:'/notice',
        component: () => import('@/views/notice/index.vue')
    },
    {
        path:'/notice/:id',
        component: () => import('@/views/notice/detail.vue')
    }
]