<template>
    <div class="toast-box">
        <span @click="show">点击弹出</span>
    </div>
</template>

<script>
export default {
    methods: {
        show () {
            this.$toast('提示')
        }
    }
}
</script>

<style lang="scss">
.toast-box{
    padding-top: 50%;
    span{
        padding: 5px 20px;
        border: 1px solid #999;
        border-radius: 4px;
        transform: translateY(-50%);
    }
}
</style>