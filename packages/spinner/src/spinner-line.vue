<template>
    <div class="wg-spinner-line-box" :class="type"></div>
</template>

<script>
export default {
    name: 'wg-spinner-line',
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
.wg-spinner-line-box{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: relative;
    border: 4px solid transparent;
    border-left-color: rgba(64, 158, 255, .5);
    border-right-color: rgba(64, 158, 255, .9);
    border-top-color: rgba(64, 158, 255, .7);
    border-radius: 50%;
    animation: spinner-line-toop .8s linear infinite;
    box-sizing: border-box;
}
.wg-spinner-line-box.small{
    border-width: 3px;
}
.wg-spinner-line-box.large{
    border-width: 6px;
}
@keyframes spinner-line-toop {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
