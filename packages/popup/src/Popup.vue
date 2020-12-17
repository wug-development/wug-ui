<template>
    <transition :name="transitionName" :style="{paddingTop: name?'40px':''}">
        <div class="wg-popup-box" :class="bgOpacity?'wg-oppup-box-bg-opacity':''" v-show="isShow" :style="{width: boxWidth, height: boxHeight}">
            <div v-if="name" class="wg-popup-header">
                <i class="icon-close" :class="transitionName + '-icon'" @click="closePopup"></i>
                {{name}}
            </div>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['visible', 'title', 'transition', 'opacity', 'width', 'height'],
    name: 'wg-popup',
    data () {
        return {
            isShow: false,
            name: '',
            transitionName: 'wg-popup-slide-right',
            bgOpacity: false,
            boxWidth: '100%',
            boxHeight: '100%'
        }
    },
    beforeMount () {
        console.log(this.$slots)
    },
    created () {
        this.title && (this.name = this.title)
        if (this.transition) {
            this.transitionName = 'wg-popup-' + this.transition
            if (this.transition !== 'fade') {
                this.transitionName = 'wg-popup-slide-' + this.transition
            }
        }
        if (this.opacity) {
            this.bgOpacity = true
        }
        if (this.width) {
            this.boxWidth = this.width
        }
        if (this.height) {
            this.boxHeight = this.height
        }
    },
    methods: {
        closePopup () {
            this.$emit('close', false)
        }
    },
    watch: {
        visible (v) {
            this.isShow = v
        },
        title (v) {
            this.name = this.title
        },
        transition (v) {
            if (v !== 'fade') {
                this.transitionName = 'wg-popup-slide-' + v
            } else {
                this.transitionName = 'wg-popup-' + v
            }
        },
        opacity (v) {
            this.bgOpacity = true
        }
    }
}
</script>

<style lang="scss">
@import '../../../src/utils/set.scss';

.wg-popup-box{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: #FFFFFF;
    transition: all .3s;
    box-shadow: 0 0 3px rgba(0, 0, 0, .4);
    .wg-popup-header{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        background-color: #FFFFFF;
        position: relative;
        .icon-close {
            position: absolute;
            top: 50%;
            width: 10px;
            height: 10px;
            display: block;
            transform: translateY(-50%);
            box-sizing: border-box;
        }
        .wg-popup-slide-right-icon {
            border-right: 1px solid $color;
            border-top: 1px solid $color;
            left: 10px;
            transform: rotate(45deg) translateY(-50%);
        }
        .wg-popup-slide-left-icon {
            border-left: 1px solid $color;
            border-bottom: 1px solid $color;
            right: 15px;
            transform: rotate(45deg) translateY(-50%);
        }
        .wg-popup-slide-icon,
        .wg-popup-slide-top-icon,
        .wg-popup-slide-bottom-icon {
            left: 15px;
            width: 20px;
            height: 1px;
            background: $color;
            transform: rotate(45deg);
        }
        .wg-popup-slide-icon::after,
        .wg-popup-slide-top-icon::after,
        .wg-popup-slide-bottom-icon::after {
            content: '';
            position: absolute;
            left: 0px;
            top: 0px;
            display: block;
            width: 20px;
            height: 1px;
            background: $color;
            transform: rotate(-90deg);
        }
    }
}
.wg-oppup-box-bg-opacity{
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
}
.wg-popup-slide-enter,
.wg-popup-slide-leave-active,
.wg-popup-slide-top-enter,
.wg-popup-slide-top-leave-active {
    transform: translate(0, -100%);
}

.wg-popup-slide-right-enter,
.wg-popup-slide-right-leave-active {
    transform: translate(100%, 0);
}

.wg-popup-slide-bottom-enter,
.wg-popup-slide-bottom-leave-active {
    transform: translate(0, 100%);
}

.wg-popup-slide-left-enter,
.wg-popup-slide-left-leave-active {
    transform: translate(-100%, 0);
}

.wg-popup-fade-enter,
.wg-popup-fade-leave-active {
    opacity: 0;
}
</style>
