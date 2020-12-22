<template>
    <div :style="{flex: isBox?isBox:'none'}">
        <ul class="wg-picker-slot-box" ref="wgPickerSlot" :style="{paddingTop: pad + 'px', paddingBottom: pad + 'px'}">
            <li class="wg-picker-slot-item" :class="i === checkValues?'wg-picker-slot-cur':''" :style="{height: itemH + 'px', lineHeight: itemH + 'px'}" v-for="(item, i) in list" :key="i">
                <template v-if="dataKey">{{item[dataKey]}}</template>
                <template v-else>{{item}}</template>
            </li>
        </ul>
    </div>
</template>

<script>
import touchMethod from './touch'

export default {
    name: 'wg-picker-slot',
    props: ['values', 'flex', 'index', 'selected', 'valuekey', 'visibleItemNum', 'itemHeight'],
    data () {
        return {
            list: [],
            isBox: false,
            checkValues: 0,
            itemH: 36,
            dataKey: '',
            el: '',
            touchData: {},
            boxH: 0,
            boxHeight: 0,
            pad: 0
        }
    },
    methods: {
        /* touchstart (event) {
            event.preventDefault()
            let e = event.changedTouches[0] || event.touches[0]
            let trans = this.el.style.transform
            this.touchData = {
                startLeft: e.pageX,
                startTop: e.pageY,
                transY: trans.replace(/translate|\(|\)|px| /g, '').split(',')[1]
            }
        },
        touchmove (event) {
            let e = event.changedTouches[0] || event.touches[0]
            this.touchData.left = e.pageX
            this.touchData.top = e.pageY
            let y = this.touchData.startTop - this.touchData.top - (this.touchData.transY || 0)
            this.changeTop(-y, 0)
        },
        touchend () {
            let trans = this.el.style.transform
            let nums = trans.replace(/translate|\(|\)|px| /g, '').split(',')[1]
            let _top = Math.abs(nums)
            let ys = _top % this.itemH
            if (nums > 0) {
                this.changeTop(0, '.2')
                this.checkValues = 0
            } else if (nums < -this.boxH) {
                this.changeTop(-this.boxH, '.2')
                this.checkValues = this.list.length - 1
            } else if (ys < 18) {
                let h = _top - ys
                this.changeTop(-h, '.2')
                this.checkValues = parseInt(_top / this.itemH)
            } else {
                let h = _top - ys + this.itemH
                this.changeTop(-h, '.2')
                this.checkValues = parseInt(_top / this.itemH) + 1
            }
            this.valueChange()
        }, */
        valueChange () {
            this.$emit('change', {
                index: this.index,
                value: this.list[this.checkValues]
            })
        },
        bindEven () {
            let touchData = {}
            let boxH = this.el.offsetHeight
            boxH = (this.list.length - 1) * this.itemH
            touchMethod(this.el, {
                start: e => {
                    let trans = this.el.style.transform
                    touchData = {
                        startLeft: e.pageX,
                        startTop: e.pageY,
                        transY: trans.replace(/translate|\(|\)|px| /g, '').split(',')[1]
                    }
                },
                move: e => {
                    touchData.left = e.pageX
                    touchData.top = e.pageY
                    let y = touchData.startTop - touchData.top - (touchData.transY || 0)
                    this.changeTop(-y, 0)
                },
                stop: e => {
                    let trans = this.el.style.transform
                    let nums = trans.replace(/translate|\(|\)|px| /g, '').split(',')[1]
                    let _top = Math.abs(nums)
                    let ys = _top % this.itemH
                    if (nums > 0) {
                        this.changeTop(0, '.2')
                        this.checkValues = 0
                    } else if (nums < -boxH) {
                        this.changeTop(-boxH, '.2')
                        this.checkValues = this.list.length - 1
                    } else if (ys < 18) {
                        let h = _top - ys
                        this.changeTop(-h, '.2')
                        this.checkValues = parseInt(_top / this.itemH)
                    } else {
                        let h = _top - ys + this.itemH
                        this.changeTop(-h, '.2')
                        this.checkValues = parseInt(_top / this.itemH) + 1
                    }
                    this.valueChange()
                }
            })
        },
        changeTop (v, s) {
            this.el.style.transform = `translate(0px, ${v}px)`
            this.el.style.transition = `all ${s}s`
        }
    },
    mounted () {
        this.el = this.$refs.wgPickerSlot
        // let boxHeight = this.el.offsetHeight
        // this.boxH = this.list.length * this.itemH - boxHeight
        this.bindEven()
        if (this.selected && this.list && this.selected < this.list.length) {
            this.checkValues = this.selected
            this.changeTop(-this.itemH * this.checkValues, '.2')
        } else {
            this.changeTop(0, '.2')
        }
    },
    created () {
        this.dataKey = this.valuekey
        this.list = this.values
        this.isBox = this.flex
        this.itemH = this.itemHeight || 36
        if (this.visibleItemNum && Number(this.visibleItemNum) > 2) {
            let num = parseInt(this.visibleItemNum)
            this.boxHeight = num * (this.itemHeight || 36)
            this.pad = (num - 1) / 2 * (this.itemHeight || 36)
        }
    },
    watch: {
        values (v) {
            this.list = v
        }
    }
}
</script>

<style lang="scss">
.wg-picker-slot-box{
    padding: 0;
    margin: 0;
    position: relative;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    backface-visibility: hidden;
    .wg-picker-slot-item{
        pointer-events: none;
        position: relative;
        padding: 0 10px;
        height: 36px;
        line-height: 36px;
        color: rgba(0, 0, 0, .5);
        transform-origin: center center;
        backface-visibility: hidden;
        transition-timing-function: ease-out
    }
    .wg-picker-slot-cur {
        color: #000;
    }
    .wg-log{
        position: fixed;
        bottom: 0;
        left: 0;
        text-align: left;
        color: #000;
        z-index: 1;
    }
}
</style>
