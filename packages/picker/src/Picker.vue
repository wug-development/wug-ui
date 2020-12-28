<template>
    <div class="wg-picker-box">
        <div class="wg-picker-bar" v-if="bar">
            <div class="wg-picker-bar-btn wg-picker-btn-cancel" @click="cancel">取消</div>
            <div class="wg-picker-bar-btn wg-picker-btn-confirm" @click="confirm">确定</div>
        </div>
        <div class="wg-picker-body" :style="{height: boxHeight + 'px'}">
            <div class="wg-picker-line wg-picker-line-top" :style="{height: pad + 'px'}"></div>
            <div class="wg-picker-line wg-picker-line-bottom" :style="{height: pad + 'px'}"></div>
            <PickerSlot v-for="(l, i) in list" :key="i" :index="i" :valuekey="l.valuekey || valueKey" :defaultValue="l.defaultValue" :defaultindex="l.defaultIndex" :values="l.values" :content="l.content" :flex="l.flex" :style="{textAlign: l.align || 'center'}" :visible-item-num="visibleItemNum" :item-height="itemHeight" @change="valueChange" :min="l.minValue" :max="l.maxValue" :disables="l.disableValues"></PickerSlot>
        </div>
    </div>
</template>

<script>
import PickerSlot from './Picker-slot.vue'

export default {
    name: 'wg-picker',
    props: ['slots', 'visibleItemNum', 'itemHeight', 'valueKey', 'bar'],
    data () {
        return {
            list: [],
            len: 1,
            pad: 72,
            boxHeight: 180,
            values: [],
            timer: 0
        }
    },
    components: {
        PickerSlot
    },
    methods: {
        valueChange (v) {
            this.values[v.index] = v.value
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.$emit('change', {
                    key: v.index,
                    value: JSON.parse(JSON.stringify(this.values))
                })
            }, 1)
        },
        confirm () {
            this.$emit('confirm', JSON.parse(JSON.stringify(this.values)))
        },
        cancel () {
            this.$emit('cancel', false)
        },
        getSlotValues () {
            let v = []
            this.list.forEach(item => {
                item.defaultValue = typeof item.selected === 'number' ? item.values[item.selected] : (item.values ? item.values[0] : item.content)
                v.push(item.defaultValue)
            })
            this.values = v
        }
    },
    mounted () {
        this.valueChange({
            index: 0,
            value: this.values[0]
        })
    },
    created () {
        this.list = this.slots
        this.getSlotValues()
        this.len = this.list.length
        if (this.visibleItemNum && Number(this.visibleItemNum) > 2) {
            let num = parseInt(this.visibleItemNum)
            this.boxHeight = num * (this.itemHeight || 36)
            this.pad = (num - 1) / 2 * (this.itemHeight || 36)
        }
    },
    watch: {
        slots (v) {
            this.list = v
            this.getSlotValues()
        }
    }
}
</script>

<style lang="scss">
.wg-picker-box{
    padding: 0;
    margin: 0;
    user-select:none;
    position: relative;
    background-color: #fff;
    .wg-picker-bar{
        display: flex;
        height: 36px;
        line-height: 36px;
        border-bottom: 1px solid #eaeaea;
        position: relative;
        z-index: 2;
        .wg-picker-bar-btn{
            flex: 1;
            text-align: center;
            font-size: 14px;
            color: #414141;
        }
        .wg-picker-btn-confirm{
            background-color: #414141;
            color: #fff;
        }
    }
    .wg-picker-body{
        width: 100%;
        height: 180px;
        overflow: hidden;
        background-color: #fff;
        display: flex;
        position: relative;
        // padding: 72px 0;
        box-sizing: border-box;
        position: relative;
        .wg-picker-list{
            flex: 1;
            .wg-picker-item{
                padding: 8px 10px;
                border-top: 1px solid #eee;
            }
            .wg-picker-item:first-child{
                border: 0;
            }
        }
        .wg-picker-list:first-child{
            border: 0;
        }
    }
    .wg-picker-line{
        position: absolute;
        left: 0;
        width: 100%;
        height: 72px;
        z-index: 1;
        pointer-events: none;
    }
    .wg-picker-line-top{
        top: 0;
        border-bottom: 1px solid #ccc;
        background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, .5));
    }
    .wg-picker-line-bottom{
        bottom: 0;
        border-top: 1px solid #ccc;
        background-image: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, 1));
    }
}
</style>
