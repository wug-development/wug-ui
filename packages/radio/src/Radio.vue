<template>
    <div class="wg-radio-box" :style="{display: display}">
        <div class="wg-radio-warper" v-for="(item, i) in list" :key="i" :style="{display: display}">
            <label class="wg-radio-body">
                <span class="wg-radio">
                    <input type="radio" class="wg-input-radio" v-model="checkValue" :disabled="item.disabled" :value="item.value">
                    <div class="wg-radio-cur"></div>
                </span>
                <span class="wg-radio-label">
                    {{item.label}}
                </span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wg-radio',
    props: ['options', 'type', 'value'],
    data () {
        return {
            checkValue: '',
            list: [],
            display: 'inline-block',
            default: {
                label: '',
                value: '',
                disabled: false
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
.wg-radio-box{
    display: inline-block;
    .wg-radio-warper{
        display: inline-block;
        padding-left: 20px;
        height: 40px;
        line-height: 40px;
        .wg-radio-body{
            display: flex;
            align-items: center;
            .wg-radio{
                width: 16px;
                height: 16px;
                display: block;
                border-radius: 50%;
                position: relative;
                overflow: hidden;
                .wg-input-radio{
                    display: none;
                }
                .wg-radio-cur{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                }
                .wg-radio-cur::before{
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #fff;
                    transform: translate(-50%, -50%) scale(0);
                    transition: all .3s;
                }
                .wg-input-radio:checked+.wg-radio-cur{
                    border: 1px solid #409EFF;
                    background-color: #409EFF;
                }
                .wg-input-radio:checked+.wg-radio-cur::before{
                    transform: translate(-50%, -50%) scale(1);
                }
                .wg-input-radio:disabled+.wg-radio-cur{
                    border: 1px solid #ccc;
                    background-color: #ccc;
                }
                .wg-input-radio:disabled,.wg-input-radio:checked+.wg-radio-cur::before{
                    transform: translate(-50%, -50%) scale(1);
                }
            }
            .wg-radio-label{
                display: block;
                line-height: 1;
                margin-left: 8px;
            }
        }
    }
}
</style>
