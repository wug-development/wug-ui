<template>
    <div class="button-box">
        <wg-button class="btn" icon="loading" :visibleIcon="showIcon">确定</wg-button>
        <wg-button class="btn" type="default">白色</wg-button>
        <wg-button class="btn" size="small" type="success">成功</wg-button>
        <wg-button class="btn" size="middle" type="warning">警告</wg-button>
        <wg-button class="btn" type="fail" radius="none">失败</wg-button>
        <wg-button class="btn" type="info">详情</wg-button>
        <wg-button class="btn" type="primary">主要</wg-button>
        <wg-button class="btn" type="rose">玫瑰</wg-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showIcon: false
        }
    },
    created () {
        setTimeout(() => {
            this.showIcon = true
        }, 3000)
    }
}
</script>

<style>
.button-box{
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.btn{
    width: 300px;
    margin: 40px auto;
}
</style>
