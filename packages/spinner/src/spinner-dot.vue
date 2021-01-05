<template>
    <div class="wg-spinner-dot-box">
        <span class="wg-spinner-dot-item"></span>
        <span class="wg-spinner-dot-item"></span>
        <span class="wg-spinner-dot-item"></span>
    </div>
</template>

<script>
export default {
    name: 'wg-spinner-dot',
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
.wg-spinner-dot-box{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wg-spinner-dot-item{
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .9);
        animation: spinner-dot-toop 1s linear infinite;
    }
    .wg-spinner-dot-item:nth-child(2){
        animation: spinner-dot-toop 1s linear .3s infinite;
    }
    .wg-spinner-dot-item:nth-child(3){
        animation: spinner-dot-toop 1s linear .6s infinite;
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
}
@keyframes spinner-dot-toop {
    0% { transform: scale(.5); }
    50% { transform: scale(1.5); }
    100% { transform: scale(.5); }
}
</style>
