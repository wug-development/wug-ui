<template>
    <div class="wg-button-box" :class="buttonType + buttonSize + borderRadius">
        <span class="wg-button-text" :class="buttonIcon"><slot></slot></span>
        <template v-if="icon">
            <wg-spinner size="16px" v-show="showIcon" :type="buttonIcon"></wg-spinner>
        </template>
    </div>
</template>

<script>
import Spinner from '../../spinner/index.js'

export default {
    props: ['type', 'icon', 'size', 'radius', 'visibleIcon'],
    name: 'wg-button',
    data () {
        return {
            buttonType: '',
            buttonIcon: '',
            buttonSize: '',
            borderRadius: '',
            showIcon: true
        }
    },
    components: {
        'wg-spinner': Spinner
    },
    beforeMount () {
        this.type && (this.buttonType = this.type)
        this.icon && (this.buttonIcon = this.icon)
        this.size && (this.buttonSize = ' ' + this.size)
        this.radius === 'none' && (this.borderRadius = ' border-radius-none')
        typeof this.visibleIcon === 'boolean' && (this.showIcon = this.visibleIcon)
    },
    watch: {
        visibleIcon (v) {
            this.showIcon = v
        }
    }
}
</script>

<style lang="scss">
.wg-button-box{
    width: 100%;
    height: 40px;
    border-radius: 4px;
    text-align: center;
    line-height: 38px;
    background-color: #414141;
    border: 1px solid #414141;
    color: #fff;
    font-size: 14px;
    box-sizing: border-box;
    position: relative;
    .wg-button-text{
        padding: 0 5px;
    }
    .wg-spinner-box{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
.wg-button-box.small{
    width: 66px;
    height: 30px;
    line-height: 28px;
    font-size: 12px;
}
.wg-button-box.middle{
    width: 120px;
}
.wg-button-box.border-radius-none{
    border-radius: 0;
}
.wg-button-box.default{
    background-color: #fff;
    border: 1px solid #414141;
    color: #414141;
}
.wg-button-box.success{
    background-color: #07c160;
    border: 1px solid #07c160;
    color: #fff;
}
.wg-button-box.fail{
    background-color: #F56C6C;
    border: 1px solid #F56C6C;
    color: #fff;
}
.wg-button-box.warning{
    background-color: #E6A23C;
    border: 1px solid #E6A23C;
    color: #fff;
}
.wg-button-box.info{
    background-color: #909399;
    border: 1px solid #909399;
    color: #fff;
}
.wg-button-box.primary{
    background-color: #409EFF;
    border: 1px solid #409EFF;
    color: #fff;
}
.wg-button-box.rose{
    background-color: #c10c06;
    border: 1px solid #c10c06;
    color: #fff;
}
.wg-button-box:active{
    background-color: #000;
    border: 1px solid #000;
}
.wg-button-box.default:active{
    color: #414141;
    background-color: rgba($color: #414141, $alpha: .1);
}
.wg-button-box.success:active{
    background-color: #06AD56;
    border: 1px solid #06AD56;
}
.wg-button-box.fail:active{
    background-color: #DD6161;
    border: 1px solid #DD6161;
}
.wg-button-box.warning:active{
    background-color: #CF9236;
    border: 1px solid #CF9236;
}
.wg-button-box.info:active{
    background-color: #82848A;
    border: 1px solid #82848A;
}
.wg-button-box.primary:active{
    background-color: #3A8EE6;
    border: 1px solid #3A8EE6;
}
.wg-button-box.rose:active{
    background-color: #A00C06;
    border: 1px solid #A00C06;
}
</style>
