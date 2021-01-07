<template>
    <div class="switch-box">
        <div class="switch-box-item">
            <wg-switch type="large" v-model="isOpen"></wg-switch>
            <span>{{isOpen ? '打开' : '关闭'}}</span>
        </div>
        <div class="switch-box-item">
            <wg-switch type="small" v-model="isOpen1"></wg-switch>
            <span>{{isOpen1 ? '显示' : '隐藏'}}</span>
        </div>
        <div class="switch-box-item">
            <wg-switch v-model="isOpen2"></wg-switch>
            <span>{{isOpen2 ? '出售' : '不出售'}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isOpen: true,
            isOpen1: false,
            isOpen2: false
        }
    }
}
</script>

<style lang="scss">
.switch-box{
    padding: 15px 0;
    box-sizing: border-box;
}
.switch-box-item{
    line-height: 30px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    span{
        display: block;
    }
}
</style>
