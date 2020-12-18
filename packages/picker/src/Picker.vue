<template>
    <div class="wg-picker-box">
        <div class="wg-picker-body">
            <PickerSlot v-for="(l, i) in list" :key="i" :values="l.data" :flex="l.flex" :style="{textAlign: l.align}"></PickerSlot>
        </div>
    </div>
</template>

<script>
import PickerSlot from './Picker-slot.vue'

export default {
    name: 'wg-picker',
    props: ['value'],
    data () {
        return {
            list: [],
            len: 1
        }
    },
    components: {
        PickerSlot
    },
    methods: {
    },
    mounted () {
    },
    created () {
        console.log(this.value)
        this.list = this.value
        this.len = this.list.length
    }
}
</script>

<style lang="scss">
.wg-picker-box{
    padding: 0;
    margin: 0;
    .wg-picker-body{
        width: 100%;
        height: 200px;
        overflow: hidden;
        background-color: #fff;
        display: flex;
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
}
</style>
