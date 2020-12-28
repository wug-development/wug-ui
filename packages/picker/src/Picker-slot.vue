<template>
    <div :style="{flex: isBox?isBox:'none'}">
        <ul class="wg-picker-slot-box" ref="wgPickerSlot" :style="{paddingTop: pad + 'px', paddingBottom: pad + 'px'}">
            <template v-if="content">
                <li class="wg-picker-slot-item wg-picker-slot-cur" :style="{height: itemH + 'px', lineHeight: itemH + 'px'}">{{content}}</li>
            </template>
            <template v-else>
                <li class="wg-picker-slot-item" :class="i === checkValues?'wg-picker-slot-cur':''" :style="{height: itemH + 'px', lineHeight: itemH + 'px'}" v-for="(item, i) in list" :key="i">
                    <template v-if="dataKey">{{item[dataKey] || item}}</template>
                    <template v-else>{{item}}</template>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import touchMethod from './touch'

export default {
    name: 'wg-picker-slot',
    props: ['values', 'flex', 'index', 'defaultValue', 'defaultindex', 'valuekey', 'visibleItemNum', 'itemHeight', 'content', 'min', 'max', 'disables'],
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
            pad: 0,
            currentIndex: -1,
            oldValue: '',
            currentValue: null,
            maxValue: '',
            minValue: '',
            disableValues: []
        }
    },
    methods: {
        valueChange () {
            this.checkData(this.list[this.checkValues])
            this.$emit('change', {
                index: this.index,
                value: this.list[this.checkValues]
            })
            this.oldValue = this.list[this.checkValues]
        },
        checkData (v) {
            this.currentValue = null
            if (v !== undefined) {
                this.dataKey && (v = v[this.dataKey])
                if (this.minValue !== '' && v < this.minValue) {
                    this.currentValue = this.minValue
                } else if (this.maxValue !== '' && v > this.maxValue) {
                    this.currentValue = this.maxValue
                } else if (this.disableValues.length > 0 && this.disableValues.includes(v)) {
                    this.currentValue = this.getToValue(v)
                }
            } else if (this.minValue !== '') {
                this.currentValue = this.minValue
            }
            this.currentValue !== null && this.setCheckValues('v')
        },
        getToValue (v) {
            let i = this.list.findIndex(e => {
                let m = this.dataKey ? e[this.dataKey] : e
                return m === v
            })
            let _v = ''
            let value = ''
            for (; i < this.list.length; i++) {
                _v = this.dataKey ? this.list[i][this.dataKey] : this.list[i]
                if (!this.disableValues.includes(_v) && this.maxValue && _v < this.maxValue) {
                    value = _v
                    break
                }
            }
            if (value === '') {
                for (; i > 0; i--) {
                    _v = this.dataKey ? this.list[i][this.dataKey] : this.list[i]
                    if (!this.disableValues.includes(_v) && this.maxValue && _v < this.maxValue) {
                        value = _v
                        break
                    }
                }
            }
            return value
        },
        bindEven () {
            let touchData = {}
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
                    this.transformsTop()
                    this.valueChange()
                }
            })
        },
        transformsTop () {
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
        },
        changeTop (v, s) {
            this.el.style.transform = `translate(0px, ${v}px)`
            this.el.style.transition = `all ${s}s`
        },
        getBoxHeight () {
            this.boxH = (this.list.length - 1) * this.itemH
        },
        setCheckValues (v) {
            if (this.list && this.list.length > 0) {
                let i = this.currentIndex
                if ((i < 0 && this.currentValue !== null) || (v && this.currentValue !== null)) {
                    i = this.list.findIndex(e => {
                        return this.dataKey ? String(e[this.dataKey]) === String(this.currentValue) : String(e) === String(this.currentValue)
                    })
                }
                if (i > -1) {
                    this.checkValues = i
                    this.changeTop(-this.itemH * this.checkValues, '.2')
                } else {
                    this.checkValues = 0
                    this.changeTop(0, '.2')
                }
            } else {
                this.checkValues = 0
                this.changeTop(0, '.2')
            }
        }
    },
    mounted () {
        this.el = this.$refs.wgPickerSlot
        if (this.values && this.values.length > 1) {
            this.getBoxHeight()
            this.bindEven()
            this.checkData()
            this.setCheckValues()
        }
    },
    created () {
        this.dataKey = this.valuekey
        this.list = this.values
        this.isBox = this.content ? 'none' : (this.flex || '1')
        this.itemH = this.itemHeight || 36
        let itemNum = this.visibleItemNum || 5
        let num = parseInt(itemNum || 5)
        this.boxHeight = num * (this.itemHeight || 36)
        this.pad = (num - 1) / 2 * (this.itemHeight || 36)
        this.defaultindex && (this.currentIndex = this.defaultindex)
        this.defaultValue && (this.currentValue = this.defaultValue)
        this.min && (this.minValue = this.min)
        this.max && (this.maxValue = this.max)
        this.disables && (this.disableValues = this.disables)
    },
    watch: {
        values (v) {
            this.list = v
            if (typeof v === 'object') {
                this.getBoxHeight()
                this.transformsTop()
            }
        },
        defaultindex (v) {
            this.currentIndex = v
            this.setCheckValues()
            this.valueChange()
        },
        defaultValue (v) {
            if (v !== null) {
                this.currentValue = v
                this.setCheckValues('v')
                this.valueChange()
            }
        },
        min (v) {
            this.minValue = v
        },
        max (v) {
            this.maxValue = v
        },
        disables (v) {
            this.disableValues = v
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
        color: #000;
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
