<template>
    <div class="home-box">
        <div class="home-title">组件库</div>
        <ul class="comp-list">
            <li @click="showLayer">Toast</li>
            <li>Message box</li>
            <li>Lazy load</li>
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    // components: {
    //     HelloWorld
    // },
    methods: {
        showLayer () {
            this.$toast('OK')
        }
    }
}
</script>

<style lang="scss">
.home-box{
    height: 100%;
    position: relative;
    padding-top: 44px;
    background-color: #f1f1f1;
    .home-title{
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: #fff;
        font-size: 16px;
        box-shadow: 0 1px 2px rgba(0,0,0,.25);
    }
    .comp-list{
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
        li{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #eee;
            text-align: left;
            padding-left: 15px;
            color: #2FA2F5;
            position: relative;
        }
        li::after{
            content: '';
            position: absolute;
            top: 15px;
            right: 15px;
            display: block;
            width: 8px;
            height: 8px;
            border-top: 1px solid #999;
            border-right: 1px solid #999;
            transform: rotate(45deg);
        }
        li:active{
            background-color: #f3f3f3;
        }
    }
}
</style>
