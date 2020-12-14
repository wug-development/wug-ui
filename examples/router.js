import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: Home
        },
        {
            path: '/main',
            name: '',
            component (resolve) {
                require(['@/views/Main'], resolve)
            },
            children: [
                {
                    path: '/lz',
                    name: 'lazyload',
                    component (resolve) {
                        require(['@/views/Lazyload'], resolve)
                    }
                }
            ]
        }
    ]
})
