<template>
    <div class="wg-popup-picker-box">
        <wg-popup :visible="isShow" :opacity="true">
            <transition name="wg-popup-slide">
                <wg-picker class="wg-popup-picker-bottom" valueKey="text" v-show="isShow" @change="valueChange" :slots="lists" @cancel="cancel" @confirm="confirm" :bar="true"></wg-picker>
            </transition>
        </wg-popup>
    </div>
</template>

<script>
import picker from '../../picker/index.js'
import popup from '../../popup/index.js'
import DateDeal from './date.js'
export default {
    name: 'wg-datatime-picker',
    props: ['visible', 'type', 'startDate', 'endDate', 'disables', 'yearFormat', 'monthFormat', 'dayFormat'],
    data () {
        return {
            isShow: false,
            lists: [],
            datetimeType: 'date',
            minDate: '',
            maxDate: '',
            disableDate: []
        }
    },
    components: {
        'wg-popup': popup,
        'wg-picker': picker
    },
    methods: {
        confirm (v) {
            this.$emit('confirm', v)
        },
        cancel (v) {
            this.$emit('cancel', v)
        },
        valueChange (v) {
            if (this.datetimeType.indexOf('date') > -1 && v.key < 2 && this.lists.length > 2) {
                let days = DateDeal.getDay(Number(v.value[1].value), Number(v.value[0].value), this.dayFormat)
                this.lists[2].values = days
            }
        },
        initDate () {
            let years = DateDeal.getYear(this.minDate, this.maxDate, this.yearFormat || '')
            let months = DateDeal.getMouth(this.monthFormat)
            let days = DateDeal.getDay(months[0], years[0], this.dayFormat)
            let hours = DateDeal.getHour()
            let minutes = DateDeal.getMinute()
            if (this.datetimeType === 'datetime') {
                this.lists = [{
                    flex: 2,
                    values: years
                }, {
                    flex: 2,
                    values: months
                }, {
                    flex: 2,
                    values: days
                }, {
                    align: 'right',
                    values: hours
                }, {
                    content: ':'
                }, {
                    align: 'left',
                    values: minutes
                }]
            } else if (this.datetimeType === 'year') {
                this.lists = [{
                    values: years
                }]
            } else if (this.datetimeType === 'yearMonth') {
                this.lists = [{
                    values: years
                }, {
                    values: months
                }]
            } else {
                this.lists = [{
                    align: 'right',
                    values: years
                }, {
                    values: months
                }, {
                    align: 'left',
                    values: days
                }]
            }
        }
    },
    beforeMount () {
        this.initDate()
    },
    created () {
        this.isShow = this.visible
        this.type && (this.datetimeType = this.type)
        this.startDate && (this.minDate = this.startDate)
        this.endDate && (this.maxDate = this.endDate)
        this.disables && (this.disableDate = this.disables)
    },
    watch: {
        visible (v) {
            this.isShow = v
        },
        startDate (v) {
            this.minDate = v
        },
        endDate (v) {
            this.maxDate = v
        },
        disables (v) {
            this.disableDate = v
        }
    }
}
</script>

<style lang="scss">
.wg-popup-picker-bottom{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    transition: all .3s;
}
.wg-popup-slide-enter,
.wg-popup-slide-leave-active {
    transform: translate(0, 100%);
}
</style>
