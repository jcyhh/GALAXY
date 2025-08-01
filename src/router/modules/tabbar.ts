export default [
    {
        path:'/',
        component: () => import('@/layout/index.vue'),
        redirect: '/home',
        children:[
            {
                path:'home',
                component: () => import('@/layout/tabbar/home.vue')
            },
            {
                path:'node',
                component: () => import('@/layout/tabbar/node.vue')
            },
            {
                path:'asset',
                component: () => import('@/layout/tabbar/asset.vue')
            },
            {
                path:'mine',
                component: () => import('@/layout/tabbar/mine.vue')
            }
        ]
    }
]