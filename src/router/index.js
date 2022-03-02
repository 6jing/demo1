//1.导入vue和VueRouter的包
import Vue from 'vue'
import VueRouter from 'vue-router'
import Analysis from '@/components/mult-Analysis.vue'
import Association from '@/components/mult-Association.vue'
import Completion from '@/components/mult-Completion.vue'
import Intruduction from '@/components/mult-Intruduction.vue'


//2.调用Vue.use()函数，把VueRouter安装为Vue插件
Vue.use(VueRouter)

//3.构建路由的实例对象
const router = new VueRouter({
    //挂载路由模块
    routes: [
        { path: '/', redirect: '/analysis' },

        { path: '/analysis', component: Analysis },
        {
            path: '/association',
            component: Association,

        },
        { path: '/completion', component: Completion },
        { path: '/intruduction', component: Intruduction },
    ]
})

//4.向外共享路由的实例对象
export default router