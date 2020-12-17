<template>
    <div class="wg-exa-main-box">
        <div class="wg-exa-main-title">
            <i @click="back"></i>
            {{title}}
        </div>
        <div class="wg-exa-main-body">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: ''
        }
    },
    methods: {
        back () {
            this.$router.go(-1)
        }
    },
    mounted () {
        let t = this.$route.name
        this.title = t
    }
}
</script>

<style lang="scss">
@import '@/assets/css/set.scss';
.wg-exa-main-box{
    height: 100%;
    position: relative;
    .wg-exa-main-title{
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        i{
            position: absolute;
            top: 50%;
            left: 15px;
            display: block;
            width: 10px;
            height: 10px;
            border-left: 1px solid $color;
            border-bottom: 1px solid $color;
            transform: rotate(45deg) translateY(-50%);
        }
    }
    .wg-exa-main-body{
        height: 100%;
        padding-top: 40px;
        box-sizing: border-box;
        overflow: hidden;
    }
}
</style>
