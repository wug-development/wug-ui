<template>
    <transition name="alert-fade">
        <div id="toast" v-if="visible" class="dialog-tips dialog-center">
            {{ message }}
        </div>
    </transition>
</template>
<script>
export default {
    data () {
        return {
            visible: false,
            message: ''
        }
    }
}
</script>
<style lang="scss">
.alert-fade-enter-active,
.alert-fade-leave-active {
    transition: opacity 0.3s;
}
.alert-fade-enter,
.alert-fade-leave-to {
    opacity: 0;
}
.dialog-tips {
    position: fixed;
    z-index: 100;
    min-width: 100px;
    padding: 10px;
    border-radius: 8px;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, .7);
    box-shadow: 0px 8px 30px 0 rgba(0, 0, 0, 0.363);
    text-align: center;
    color: #fff;
    font-size: 14px;
}
.dialog-center {
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
