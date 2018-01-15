import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element);

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

import booklist from './modules/book/booklist.vue';
import search from './modules/search/searchengines.vue';
import bookdetail from './modules/book/detail/bookdetail.vue';


// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            redirect: '/booklist'
        },
        {
            path: '/booklist',
            component: booklist,
            // children: [
            //     {
            //         name: 'detail',
            //         path: '/booklist/detail',
            //         component: bookdetail
            //     }
            // ]
        },
        {
            name: 'detail',
            path: '/booklist/detail',
            component: bookdetail
        },
        {
            path: '/search',
            component: search
        },
    ]
});


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
