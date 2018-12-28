const routerData = [
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            { path: '/user', redirect: '/user/login' },
            { path: '/user/login', component: './Login/Login' }
        ]
    },
    {
        path: '/home',
        component: '../layouts/BasicLayout',
        routes: [
            { path: '/home', redirect: '/home/homePage' },
            { path: '/home/homePage', component: './HomePage/HomePage'  }
        ] 
    }
]

export default routerData