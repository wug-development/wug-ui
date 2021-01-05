<template>
    <div class="wg-spinner-circle-box">
        <div v-for="(n, i) in 12" :key="i" class="wg-circle-dot" :class="type"></div>
    </div>
</template>

<script>
export default {
    name: 'wg-spinner-circle',
    props: ['size'],
    data () {
        return {
            type: ''
        }
    },
    created () {
        if (typeof this.size === 'string') {
            switch (this.size) {
            case 's': this.type = 'small'; break
            case 'l': this.type = 'large'; break
            default: this.type = ''; break
            }
        }
    }
}
</script>

<style lang="scss">
.wg-spinner-circle-box{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: relative;
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
    .wg-circle-dot.small{
        &::before{
            width: 3px;
            height: 3px;
        }
    }
    .wg-circle-dot.large{
        &::before{
            width: 6px;
            height: 6px;
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
