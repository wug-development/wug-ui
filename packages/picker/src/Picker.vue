<template>
    <div class="wg-picker-box">
        <div class="wg-picker-body" :style="{height: boxHeight + 'px'}">
            <div class="wg-picker-line" :style="{top: pad + 'px'}"></div>
            <div class="wg-picker-line" :style="{bottom: pad + 'px'}"></div>
            <PickerSlot v-for="(l, i) in list" :key="i" :index="i" :valuekey="l.valuekey || valueKey" :selected="l.defaultIndex" :values="l.values" :flex="l.flex" :style="{textAlign: l.align}" :visible-item-num="visibleItemNum" :item-height="itemHeight" @change="valueChange"></PickerSlot>
        </div>
    </div>
</template>

<script>
import PickerSlot from './Picker-slot.vue'

export default {
    name: 'wg-picker',
    props: ['slots', 'visibleItemNum', 'itemHeight', 'valueKey'],
    data () {
        return {
            list: [],
            len: 1,
            datas: [],
            pad: 72,
            boxHeight: 180
        }
    },
    components: {
        PickerSlot
    },
    methods: {
        valueChange (v) {
            this.datas[v.index] = v.value
            this.$emit('change', {
                key: v.index,
                value: v.value
            })
        }
    },
    mounted () {
    },
    created () {
        this.list = this.slots
        this.len = this.list.length
        for (let i in this.list) {
            let _index = this.list[i].defaultIndex || 0
            this.datas.push(this.list[i].values[_index])
        }
        if (this.visibleItemNum && Number(this.visibleItemNum) > 2) {
            let num = parseInt(this.visibleItemNum)
            this.boxHeight = num * (this.itemHeight || 36)
            this.pad = (num - 1) / 2 * (this.itemHeight || 36)
        }
    },
    watch: {
        slots (v) {
            this.list = v
        }
    }
}
</script>

<style lang="scss">
.wg-picker-box{
    padding: 0;
    margin: 0;
    user-select:none;
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
        border-top: 1px solid #ccc;
    }
}
</style>
