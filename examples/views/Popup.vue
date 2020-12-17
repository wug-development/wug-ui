<template>
    <div class="popup-box">
        <ul>
            <li @click="shopTop = true">上侧弹出</li>
            <li @click="shopRight = true">右侧弹出</li>
            <li @click="shopBottom = true">下侧弹出</li>
            <li @click="shopLeft = true">左侧弹出</li>
        </ul>
        <wg-popup :visible="shopTop" transition="top" :opacity="true" height="100px" style="color: #fff">上侧弹出</wg-popup>
        <wg-popup :visible="shopRight" transition="right" title="right popup" @close="shopRight = false">
            <div>关闭</div>
        </wg-popup>
        <wg-popup :visible="shopBottom" transition="bottom" title="bottop popup" @close="shopBottom = false">下侧弹出</wg-popup>
        <wg-popup :visible="shopLeft" transition="left" title="left popup" @close="shopLeft = false">左侧弹出</wg-popup>
    </div>
</template>

<script>
export default {
    data () {
        return {
            shopTop: false,
            shopRight: false,
            shopBottom: false,
            shopLeft: false
        }
    },
    methods: {
        callback (v) {
            console.log(v)
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/css/set.scss';
.popup-box{
    height: 100%;
    li{
        line-height: 40px;
        border-bottom: 1px solid #f1f1f1;
        color: $color;
    }
}
</style>
