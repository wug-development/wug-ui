<template>
    <div class="wg-message-box wg-popup-bg" v-if="visible">
        <div class="wg-message-body">
            <div class="wg-message-title" v-show="options.title">{{options.title}}</div>
            <div class="wg-message-content">{{options.message}}</div>
            <div class="wg-message-btns">
                <button class="wg-btn-confirm" @click="handleAction('confirm')">{{options.confirmName}}</button>
                <button class="wg-btn-cancel" v-show="options.cancelName" @click="handleAction('cancel')">{{options.cancelName}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            visible: false,
            options: {
                title: '',
                message: '',
                cancelName: '取消',
                confirmName: '确定',
                callback: null
            }
        }
    },
    methods: {
        handleAction (v) {
            this.visible = false
            typeof this.options.callback === 'function' && this.options.callback(v)
        }
    }
}
</script>

<style lang="scss">
.wg-popup-bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .45);
}
.wg-message-body{
    width: 80%;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    .wg-message-title{
        height: 36px;
        line-height: 36px;
        padding-left: 15px;
        font-weight: bold;
        box-shadow: 0 0 2px rgba(0, 0, 0, .3);
        font-size: 14px;
        color: #808080;
    }
    .wg-message-content{
        text-align: center;
        padding: 40px 0;
    }
    .wg-message-btns{
        display: flex;
        >button{
            flex: 1;
            height: 40px;
            line-height: 40px;
            text-align: center;
            user-select: none;
            border: 0;
        }
        .wg-btn-confirm{
            color: #fff;
            background-color: #b42c25;
            transition: all .2s;
        }
        .wg-btn-confirm:active{
            color: #fff;
            background-color: #952C25;
        }
        .wg-btn-cancel{
            border-top: 1px solid #999;
        }
    }
}
</style>
