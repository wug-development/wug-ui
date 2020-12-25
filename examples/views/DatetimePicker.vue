<template>
    <div>
        <div @click="showPicker">弹出</div>
        <wg-datatime-picker :visible="isShow" :slots="pickerData" yearFormat="{value} 年" monthFormat="{value} 月" dayFormat="{value} 日" @cancel="isShow = false" @confirm="confirm"></wg-datatime-picker>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isShow: false,
            endDate: '2020-12-12',
            pickerData: [
                {
                    align: 'right',
                    flex: 1,
                    values: []
                },
                {
                    align: 'center',
                    values: []
                },
                {
                    align: 'left',
                    defaultIndex: 4,
                    flex: 1,
                    values: []
                }
            ]
        }
    },
    methods: {
        getArr (min, max) {
            let arr = []
            for (;min <= max; min++) {
                arr.push(min)
            }
            return arr
        },
        showPicker () {
            this.isShow = true
        },
        confirm (v) {
            this.isShow = false
            console.log(v)
        }
    },
    created () {
        this.pickerData[0].values = this.getArr(1991, 2021)
        this.pickerData[1].values = this.getArr(1, 12)
        this.pickerData[2].values = this.getArr(1, 31)
    }
}
</script>

<style>

</style>
