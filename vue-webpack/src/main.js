import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'font-awesome/css/font-awesome.css'

//注册全局组件
import treeItem from "./element-vue/treeItem.vue";  // header
Vue.component("treeItem", treeItem);

//手动安装VueRouter
Vue.use(VueRouter);

//导入自定义的路由模块
import router from './router.js'


//修改vue的写法
//创建vue实例并且将其挂载到app节点上
const vm = new  Vue({
	el: '#app',
	render: h => h(App),
	//将路由对象挂载到vm上
	router
})





