<template>
    <div class="wg-search-box">
        <input type="search" class="wg-search-input" :placeholder="placeholder" v-model="curValue" :maxlength="max">
    </div>
</template>

<script>
export default {
    name: 'wg-search',
    props: ['placeholder', 'value', 'max'],
    data () {
        return {
            curValue: ''
        }
    },
    watch: {
        value (v) {
            this.curValue = v
        },
        curValue (v) {
            this.$emit('input', v)
        }
    }
}
</script>

<style>
.wg-search-box{
    height: 44px;
    line-height: 44px;
    background-color: #ddd;
    padding: 8px;
    box-sizing: border-box;
    position: relative;
}
.wg-search-box::before{
    content: '';
    position: absolute;
    left: 15px;
    top: 50%;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #ddd;
    box-sizing: border-box;
    transform: translateY(-50%);
}
.wg-search-box::after{
    content: '';
    position: absolute;
    left: 26px;
    top: calc(50% + 5px);
    width: 6px;
    height: 0;
    border-top: 2px solid #ddd;
    transform: rotate(45deg);
}
.wg-search-input{
    border: 0;
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 30px;
    box-sizing: border-box;
    outline: 0;
    appearance: none;
}
.wg-search-input::-webkit-search-cancel-button{
    appearance: none;
}
</style>
