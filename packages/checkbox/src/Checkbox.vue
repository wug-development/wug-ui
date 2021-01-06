<template>
    <div class="wg-checkbox-box" :style="{display: display}">
        <div class="wg-checkbox-warper" v-for="(item, i) in list" :key="i" :style="{display: display}">
            <label class="wg-checkbox-body">
                <span class="wg-checkbox">
                    <input type="checkbox" class="wg-input-checkbox" v-model="checkValue" :value="item.value">
                    <div class="wg-checkbox-cur"></div>
                </span>
                <span class="wg-checkbox-label">
                    {{item.label}}
                </span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wg-checkbox',
    props: ['options', 'type', 'value'],
    data () {
        return {
            checkValue: [],
            list: [],
            display: 'inline-block',
            default: {
                label: '',
                value: '',
                disabled: false,
                checked: false
            }
        }
    },
    beforeMount () {
        if (this.options && this.options.length > 0) {
            this.list = this.dealItemProperty(this.options)
        }
        this.type && (this.display = 'block')
        this.value && (this.checkValue = this.value)
    },
    methods: {
        dealItemProperty (v) {
            let arr = []
            let _proto = JSON.stringify(this.default)
            v.forEach(e => {
                let obj = typeof e === 'object' ? e : { label: e, value: e }
                arr.push(Object.assign(JSON.parse(_proto), obj))
            })
            return arr
        }
    },
    watch: {
        options (v) {
            this.list = this.dealItemProperty(this.options)
        },
        value (v) {
            this.checkValue = v
        },
        checkValue (v) {
            this.$emit('input', v)
        }
    }
}
</script>

<style lang="scss">
.wg-checkbox-box{
    display: inline-block;
    .wg-checkbox-warper{
        display: inline-block;
        padding-left: 20px;
        height: 40px;
        line-height: 40px;
        .wg-checkbox-body{
            display: flex;
            align-items: center;
            .wg-checkbox{
                width: 16px;
                height: 16px;
                display: block;
                position: relative;
                overflow: hidden;
                .wg-input-checkbox{
                    display: none;
                }
                .wg-checkbox-cur{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                }
                .wg-checkbox-cur::before{
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 8px;
                    height: 4px;
                    border-bottom: 2px solid #fff;
                    border-left: 2px solid #fff;
                    transform: translate(-50%, -60%) rotate(-45deg) scale(0);
                    transition: all .2s;
                }
                .wg-input-checkbox:checked+.wg-checkbox-cur{
                    border: 1px solid #409EFF;
                    background-color: #409EFF;
                }
                .wg-input-checkbox:checked+.wg-checkbox-cur::before{
                    transform: translate(-50%, -60%) rotate(-45deg) scale(1);
                }
            }
            .wg-checkbox-label{
                display: block;
                line-height: 1;
                margin-left: 8px;
            }
        }
    }
}
</style>
