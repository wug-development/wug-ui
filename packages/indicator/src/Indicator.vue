<template>
    <div class="wg-indicator-box" v-if="visible">
        <div class="wg-indicator-body">
            <div class="wg-circle-body">
                <div v-for="(n, i) in 12" :key="i" class="wg-circle-dot"></div>
            </div>
            <div class="wg-indicator-text" v-if="message">{{message}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            visible: false,
            message: ''
        }
    }
}
</script>

<style lang="scss">
.wg-indicator-box{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .02);
    .wg-indicator-body{
        position: absolute;
        left: 50%;
        top: 50%;
        padding: 16px;
        border-radius: 8px;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, .7);
        .wg-circle-body{
            margin: 0 auto;
            width: 32px;
            height: 32px;
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
            @for $i from 1 to 12 {
                .wg-circle-dot:nth-child(#{$i}) {
                    transform: rotate(calc(30deg * #{$i}));
                    &::before{
                        animation-delay: calc(-1.2s + 1.2s / 12 * #{$i});
                    }
                }
            }
        }
        .wg-indicator-text{
            font-size: 14px;
            font-weight: 600;
            padding-top: 15px;
            color: rgba(255, 255, 255, .9);
        }
    }
    @keyframes toop {
      0%, 39%, 100% { opacity: 0 }
      40% { opacity: 1 }
    }
}
</style>
