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
                },
                {
                    path: '/popup',
                    name: 'popup',
                    component (resolve) {
                        require(['@/views/Popup'], resolve)
                    }
                },
                {
                    path: '/picker',
                    name: 'picker',
                    component (resolve) {
                        require(['@/views/Picker'], resolve)
                    }
                },
                {
                    path: '/popuppicker',
                    name: 'popuppicker',
                    component (resolve) {
                        require(['@/views/PopupPicker'], resolve)
                    }
                },
                {
                    path: '/datetimepicker',
                    name: 'datetimepicker',
                    component (resolve) {
                        require(['@/views/DatetimePicker'], resolve)
                    }
                },
                {
                    path: '/swipe',
                    name: 'swipe',
                    component (resolve) {
                        require(['@/views/Swipe'], resolve)
                    }
                },
                {
                    path: '/button',
                    name: 'button',
                    component (resolve) {
                        require(['@/views/Button'], resolve)
                    }
                },
                {
                    path: '/header',
                    name: 'header',
                    component (resolve) {
                        require(['@/views/Header'], resolve)
                    }
                },
                {
                    path: '/radio',
                    name: 'radio',
                    component (resolve) {
                        require(['@/views/Radio'], resolve)
                    }
                },
                {
                    path: '/checkbox',
                    name: 'checkbox',
                    component (resolve) {
                        require(['@/views/Checkbox'], resolve)
                    }
                }
            ]
        }
    ]
})
