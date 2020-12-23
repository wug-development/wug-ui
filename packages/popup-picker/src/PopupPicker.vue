<template>
    <div class="wg-popup-picker-box">
        <wg-popup :visible="isShow" :opacity="true">
            <transition name="wg-popup-slide">
                <wg-picker class="wg-popup-picker-bottom" v-show="isShow" :slots="lists" @cancel="cancel" @confirm="confirm" :bar="true"></wg-picker>
            </transition>
        </wg-popup>
    </div>
</template>

<script>
import picker from '../../picker/index.js'
import popup from '../../popup/index.js'
export default {
    name: 'wg-popup-picker',
    props: ['visible', 'slots'],
    data () {
        return {
            isShow: false,
            lists: []
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
        }
    },
    created () {
        this.isShow = this.visible || false
        this.lists = this.slots || []
    },
    watch: {
        visible (v) {
            this.isShow = v
        },
        slots (v) {
            this.lists = v || []
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
