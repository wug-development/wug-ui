<template>
    <div class="footer-box">
        <wg-footer :options="menus"></wg-footer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            menus: [{
                label: '首页',
                icon: 'https://www.roseonly.com.cn/upload/syspic_new/15324923569143400.svg',
                path: '/'
            }, {
                label: '分类',
                icon: 'https://www.roseonly.com.cn/upload/syspic_new/15324923569143400.svg',
                path: '/search'
            }, {
                label: '购物车',
                icon: 'https://www.roseonly.com.cn/upload/syspic_new/15324923569143400.svg',
                path: '/picker'
            }, {
                label: '我的',
                icon: 'https://www.roseonly.com.cn/upload/syspic_new/15324923569143400.svg',
                path: '/switch'
            }]
        }
    }
}
</script>

<style>
.footer-box{
    height: 100%;
}
</style>
