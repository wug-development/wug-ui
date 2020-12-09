import MessageBox from './src/MessageBox.vue'
const messagebox = {
    install: Vue => {
        // 扩展 Vue 插件
        const MessageBoxCon = Vue.extend(MessageBox)
        const ins = new MessageBoxCon()
        // 挂载dom
        ins.$mount(document.createElement('div'))
        // 添加到body 后面
        document.body.appendChild(ins.$el)
        // 给 vue 原型添加 message 方法
        Vue.prototype.$message = (options) => {
            ins.options = options
            ins.visible = true
        }
    }
}