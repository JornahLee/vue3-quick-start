// 1. 定义路由组件.
// 也可以从其他文件导入
import TestRouteView from '@/components/content/TestRouteView.vue'
import TestRouteView2 from '@/components/content/TestRouteView2.vue'
import Transition from '@/components/content/Transition.vue'
import Notification from '@/components/content/Notification.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {path: '/', redirect: '/route1'},
    {path: '/route1', component: TestRouteView},
    {path: '/route2/:testParam', component: TestRouteView2, props: true},
    {path: '/transition', component: Transition},
    {path: '/notification', component: Notification},
    //这个需要放到最后，路由规则是按顺序逐个匹配
    {path: '/*', redirect: '/'},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
