<template>
    <div class="picker-box">
        <wg-picker :slots="pickerData" @change="pickerChange" :visibleItemNum="7" :itemHeight="30"></wg-picker>
        <wg-picker :slots="pickerDatas" :bar="true" @change="pickerChanges" :visibleItemNum="5" @confirm="pickerConfirm" :itemHeight="30"></wg-picker>
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
            ],
            pickerDatas: [
                {
                    align: 'right',
                    valuekey: 'name',
                    flex: 1,
                    values: []
                },
                {
                    values: '-'
                },
                {
                    align: 'left',
                    valuekey: 'name',
                    defaultIndex: 4,
                    flex: 1,
                    values: []
                }
            ],
            status: false,
            len: 0
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
        pickerConfirm (v) {
            console.log(v)
        },
        pickerChange (v) {
            console.log(v)
        },
        pickerChanges (v) {
            if (v.key === 0) {
                if (v.value[0].name === '北京') {
                    this.pickerDatas[2].values = [{ name: '北京', age: 22 }, { name: '海淀', age: 26 }]
                } else {
                    this.pickerDatas[2].values = [{ name: '石家庄', age: 22 }, { name: '秦皇岛', age: 26 }]
                }
            }
            // this.status = !this.status
        }
    },
    created () {
        this.pickerData[0].values = this.getArr(1991, 2021)
        this.pickerData[1].values = this.getArr(1, 12)
        this.pickerData[2].values = this.getArr(1, 31)

        this.pickerDatas[0].values = [{ name: '北京', age: 22 }, { name: '河北', age: 26 }, { name: '山西', age: 26 }, { name: '湖北', age: 26 }, { name: '河南', age: 26 }, { name: '天津', age: 26 }, { name: '上海', age: 26 }]
        this.pickerDatas[2].values = [{ name: '北京', age: 22 }, { name: '海淀', age: 26 }]
    },
    watch: {
        status (v) {
            console.log('watch')
            this.isShow = v
            v && (this.len = this.pickerDatas[2].values.length)
        }
    }
}
</script>

<style>
.picker-box{
    height: 100%;
    overflow: hidden;
}
.wg-picker-box{
    overflow: hidden;
    margin-top: 40px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
}
*{
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -khtml-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
</style>
