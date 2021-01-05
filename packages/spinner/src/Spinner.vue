<template>
    <div class="wg-spinner-box" :style="{width: circleSize, height: circleSize}">
        <template v-if="spinnerType === 'dot'">
            <spinner-dot :size="spType"></spinner-dot>
        </template>
        <template v-else-if="spinnerType === 'line'">
            <spinner-line :size="spType"></spinner-line>
        </template>
        <template v-else>
            <spinner-circle :size="spType"></spinner-circle>
        </template>
    </div>
</template>

<script>
import spinnerCircle from './spinner-circle'
import spinnerDot from './spinner-dot'
import spinnerLine from './spinner-line'
export default {
    name: 'wg-spinner',
    props: ['size', 'type'],
    data () {
        return {
            circleSize: '32px',
            spinnerType: 'circle',
            spType: ''
        }
    },
    components: {
        'spinner-circle': spinnerCircle,
        'spinner-dot': spinnerDot,
        'spinner-line': spinnerLine
    },
    created () {
        if (this.size) {
            this.circleSize = this.size
            var n = Number(this.size.replace(/[^\d]/g, ''))
            if (n >= 0) {
                if (n < 30) {
                    this.spType = 's'
                } else if (n > 50) {
                    this.spType = 'l'
                }
            }
        }
        if (typeof this.type === 'string') {
            if (this.type === 'snake') {
                this.spinnerType = 'line'
            } else if (this.type === 'bounce') {
                this.spinnerType = 'dot'
            } else {
                this.spinnerType = 'circle'
            }
        }
    }
}
</script>

<style lang="scss">
.wg-spinner-box{
    margin: 0 auto;
    width: 32px;
    height: 32px;
    position: relative;
    display: inline-block;
}
</style>
