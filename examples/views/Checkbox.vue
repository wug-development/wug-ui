<template>
    <div class="checkbox-box">
        <wg-checkbox type="block" v-model="sex" :options="options" @change="change"></wg-checkbox>
        <div class="checkbox-check">选中：{{sex}}</div>
        <wg-checkbox v-model="sex1" :options="options1"></wg-checkbox>
        <div class="checkbox-check">选中：{{sex1}}</div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            sex: [1],
            options: [
                {
                    label: '男',
                    value: 1,
                    disabled: false
                },
                {
                    label: '女',
                    value: 0,
                    disabled: true
                }
            ],
            sex1: [],
            options1: ['男', '女']
        }
    },
    methods: {
        change (v) {
            console.log(v)
        }
    }
}
</script>

<style>
.checkbox-box{
    padding-top: 20px;
    text-align: left;
}
.checkbox-check{
    text-align: left;
    padding-left: 15px;
    margin-bottom: 40px;
}
</style>
