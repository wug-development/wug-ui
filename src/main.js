import Toast from '../packages/toast'
import MessageBox from '../packages/message-box'

const version = '0.1.11'
const install = function (Vue, config = {}) {
    if (install.installed) return

    Vue.$messagebox = Vue.prototype.$messagebox = MessageBox
    Vue.$toast = Vue.prototype.$toast = Toast
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    version,
    Toast,
    MessageBox
}
