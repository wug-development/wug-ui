<template>
    <div class="radio-box">
        <wg-radio type="block" v-model="sex" :options="options"></wg-radio>
        <div class="radio-check">选中：{{sex}}</div>
        <wg-radio v-model="sex1" :options="options1"></wg-radio>
        <div class="radio-check">选中：{{sex1}}</div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            sex: '',
            options: [
                {
                    label: '男',
                    value: 1,
                    disabled: false,
                    checked: false
                },
                {
                    label: '女',
                    value: 0,
                    disabled: false,
                    checked: true
                }
            ],
            sex1: '',
            options1: ['男', '女']
        }
    }
}
</script>

<style>
.radio-box{
    padding-top: 20px;
    text-align: left;
}
.radio-check{
    text-align: left;
    padding-left: 15px;
    margin-bottom: 40px;
}
</style>
