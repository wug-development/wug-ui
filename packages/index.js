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
import toast from './toast'
import messagebox from './message-box'
import lazyload from './lazyload'
import indicator from './indicator'
import popup from './popup'
import picker from './picker'
import PopupPicker from './popup-picker'
import DatetimePicker from './datetime-picker'
import Swipe from './swipe'
import SwipeItem from './swipe-item'
import Button from './button'
import Spinner from './spinner'
import Header from './header'
import Radio from './radio'
import Checkbox from './checkbox'
import Switch from './switch'
import Search from './search'
import Footer from './footer'
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    // components.map(component => Vue.component(component.name, component))
    Vue.use(toast)
    Vue.use(messagebox)
    Vue.use(indicator)
    Vue.use(lazyload)
    Vue.component(popup.name, popup)
    Vue.component(picker.name, picker)
    Vue.component(PopupPicker.name, PopupPicker)
    Vue.component(DatetimePicker.name, DatetimePicker)
    Vue.component(Swipe.name, Swipe)
    Vue.component(SwipeItem.name, SwipeItem)
    Vue.component(Button.name, Button)
    Vue.component(Spinner.name, Spinner)
    Vue.component(Header.name, Header)
    Vue.component(Radio.name, Radio)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Switch.name, Switch)
    Vue.component(Search.name, Search)
    Vue.component(Footer.name, Footer)
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    toast,
    messagebox,
    lazyload,
    popup,
    picker,
    PopupPicker,
    DatetimePicker,
    Swipe,
    SwipeItem,
    Button,
    Spinner,
    Header,
    Radio,
    Checkbox,
    Switch,
    Search,
    Footer
}
