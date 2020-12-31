<template>
    <div class="wg-spinner-box" :style="{width: circleSize, height: circleSize}">
        <div v-for="(n, i) in 12" :key="i" class="wg-circle-dot"></div>
    </div>
</template>

<script>
export default {
    name: 'wg-spinner',
    props: ['size'],
    data () {
        return {
            circleSize: '32px'
        }
    },
    created () {
        this.size && (this.circleSize = this.size)
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
    .wg-circle-dot{
        width: 100%;
        height: 100%;
        position: absolute;
        &::before{
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #f1f1f1;
            animation: toop 1.2s infinite ease-in-out both;
        }
    }
    @for $i from 1 to 12 {
        .wg-circle-dot:nth-child(#{$i}) {
            transform: rotate(calc(30deg * #{$i}));
            &::before{
                animation-delay: calc(-1.2s + 1.2s / 12 * #{$i});
            }
        }
    }
}
@keyframes toop {
    0%, 39%, 100% { opacity: 0 }
    40% { opacity: 1 }
}
</style>
