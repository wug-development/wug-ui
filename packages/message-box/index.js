/**
* MIT License
*
* Copyright (c) 2020 guangwu_dev
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
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
        Vue.prototype.$messagebox = (options) => {
            if (options && typeof options === 'object') {
                ins.options = Object.assign(ins.options, options)
            } else {
                Object.assign(ins.options, { message: options, cancelName: '' })
            }
            ins.visible = true
        }
    }
}

export default messagebox
