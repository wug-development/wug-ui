<template>
    <div class="wg-switch-box">
        <div class="wg-switch-body" :class="[isCur? 'cur' : '', boxSize]" @click="change">
            <div class="wg-switch-bg"></div>
            <div class="wg-switch-cur"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wg-switch',
    props: ['value', 'type'],
    data () {
        return {
            isCur: false,
            boxSize: ''
        }
    },
    methods: {
        change (v) {
            // this.isCur = !this.isCur
            this.$emit('input', !this.isCur)
        }
    },
    beforeMount () {
        this.value && (this.isCur = true)
        switch (this.type) {
        case 'small': this.boxSize = 'wg-switch-type-small'; break
        case 'large': this.boxSize = 'wg-switch-type-large'; break
        default: this.boxSize = 'wg-switch-type-middle'; break
        }
    },
    watch: {
        value (v) {
            this.isCur = !!v
        }
    }
}
</script>

<style lang="scss">
$mwidth: 24px;
$swidth: 20px;
$lwidth: 30px;
.wg-switch-box{
    display: flex;
    .wg-switch-body{
        display: inline-block;
        position: relative;
        .wg-switch-cur{
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 50%;
            box-shadow: 0 0 3px rgba(0, 0, 0, .7);
            background-color: #fff;
            transition: all .2s;
        }
        .wg-switch-bg{
            width: 100%;
            height: 100%;
            border: 1px solid #ccc;
            box-sizing: border-box;
            background-color: #fff;
            transition: all .2s;
        }
    }
}
.wg-switch-body.cur{
    background-color: #409EFF;
    .wg-switch-cur{
        transform: translateX(80%);
    }
    .wg-switch-bg{
        transform: scale(0);
    }
}
.wg-switch-body.wg-switch-type-middle{
    width: calc(#{$mwidth} * 1.8);
    height: $mwidth;
    border-radius: $mwidth;
    .wg-switch-cur{
        width: $mwidth;
        height: $mwidth;
    }
    .wg-switch-bg{
        border-radius: $mwidth;
    }
}
.wg-switch-body.wg-switch-type-small{
    width: calc(#{$swidth} * 1.8);
    height: $swidth;
    border-radius: $swidth;
    .wg-switch-cur{
        width: $swidth;
        height: $swidth;
    }
    .wg-switch-bg{
        border-radius: $swidth;
    }
}
.wg-switch-body.wg-switch-type-large{
    width: calc(#{$lwidth} * 1.8);
    height: $lwidth;
    border-radius: $lwidth;
    .wg-switch-cur{
        width: $lwidth;
        height: $lwidth;
    }
    .wg-switch-bg{
        border-radius: $lwidth;
    }
}
</style>
