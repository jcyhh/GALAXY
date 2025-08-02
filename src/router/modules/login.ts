export default [
    {
        path:'/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path:'/register',
        component: () => import('@/views/login/signin.vue')
    },
    {
        path:'/forget',
        component: () => import('@/views/login/forget.vue')
    },
    {
        path:'/forgetPay',
        component: () => import('@/views/login/forgetPay.vue')
    },
    {
        path:'/updatePsw',
        component: () => import('@/views/login/updatePsw.vue')
    },
    {
        path:'/updatePay',
        component: () => import('@/views/login/updatePay.vue')
    },
    {
        path:'/updateQA',
        component: () => import('@/views/login/updateQA.vue')
    }
]