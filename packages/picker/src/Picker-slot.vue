<template>
    <ul class="wg-picker-slot-box" ref="wgPickerSlot" :style="{flex: isBox?isBox:'none'}">
        <li class="wg-picker-slot-item" v-for="(item, i) in list" :key="i">{{item}}</li>
    </ul>
</template>

<script>
import touchMethod from './touch'

export default {
    name: 'wg-picker-slot',
    props: ['values', 'flex'],
    data () {
        return {
            list: [],
            isBox: false
        }
    },
    methods: {
        valueChange (v) {
            console.log(v)
        },
        bindEven () {
            const el = this.$refs.wgPickerSlot
            let touchData = {}
            let boxH = el.offsetHeight
            // let pickerItems = []
            touchMethod(el, {
                start (e) {
                    let trans = el.style.transform
                    console.log(trans)
                    touchData = {
                        startLeft: e.pageX,
                        startTop: e.pageY,
                        transY: trans.replace(/translate|\(|\)|px| /g, '').split(',')[1]
                    }
                    // pickerItems = el.querySelectorAll('wg-picker-slot-item')
                },
                move (e) {
                    touchData.left = e.pageX
                    touchData.top = e.pageY
                    // let x = touchData.left
                    let y = touchData.startTop - touchData.top - (touchData.transY || 0)
                    el.style.transform = `translate(0px, ${-y}px)`
                    el.style.transition = 'all 0s'
                },
                stop: e => {
                    this.valueChange()
                    let trans = el.style.transform
                    let nums = trans.replace(/translate|\(|\)|px| /g, '').split(',')[1]
                    console.log(nums)
                    let h = this.list.length * 36 - boxH
                    let ys = nums % 36
                    console.log(ys)
                    if (nums > 0) {
                        el.style.transform = `translate(0px, 0px)`
                    } else if (nums < -h) {
                        el.style.transform = `translate(0px, ${-h}px)`
                    } else if (ys < 18) {
                        h = h - ys
                        el.style.transform = `translate(0px, ${-h}px)`
                    } else {
                        h = h + ys
                        el.style.transform = `translate(0px, ${-h}px)`
                    }
                    el.style.transition = 'all .2s'
                }
            })
        }
    },
    mounted () {
        this.bindEven()
    },
    created () {
        this.list = this.values
        this.isBox = this.flex
    }
}
</script>

<style lang="scss">
.wg-picker-slot-box{
    padding: 0;
    margin: 0;
    height: 100%;
    .wg-picker-slot-item{
        padding:10px;
        height: 36px;
        line-height: 36px;
    }
}
</style>
