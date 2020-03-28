import Vue from 'vue'
// 导入vue-router包
import VueRouter from 'vue-router';
// 手动安装VueRouter
Vue.use(VueRouter);




// 创建路由对象
var router = new VueRouter({
    routes: [
		//重定向显示首页
		{
		  path: '/',
		  redirect: '/account'
		},
        {
            path: '/account',
			name: 'account',
            component: resolve => require(['./view/account.vue'], resolve),
            children: [
                { path: 'login', component: resolve => require(['./view/login.vue'], resolve) },
                { path: 'register', component: resolve => require(['./view/register.vue'], resolve) }
            ]
        },
        { path: '/goodslist', 
		  component: resolve => require(['./view/goodslist.vue'], resolve),
		  children: [
			  {path: 'index',component: resolve => require(['./view/index.vue'],resolve) }
		  ]
		},
    ],
	//mode:'history' //去除路径上的#号     如果有子目录的话  还需要加上 base: '/history',
})
 
// 把路由对象暴露出去
export default router
