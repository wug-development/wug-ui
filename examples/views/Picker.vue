<template>
    <div class="picker-box">
        <wg-picker :value="pickerData"></wg-picker>
    </div>
</template>

<script>
export default {
    data () {
        return {
            pickerData: [
                {
                    align: 'right',
                    flex: 1,
                    data: []
                },
                {
                    align: 'center',
                    data: []
                },
                {
                    align: 'left',
                    flex: 1,
                    data: []
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
        }
    },
    created () {
        this.pickerData[0].data = this.getArr(1991, 2021)
        this.pickerData[1].data = this.getArr(1, 12)
        this.pickerData[2].data = this.getArr(1, 31)
    }
}
</script>

<style>
</style>
