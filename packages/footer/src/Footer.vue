<template>
    <div class="wg-footer-box">
        <ul class="wg-footer-list">
            <li class="wg-footer-item" v-for="(item, i) in options" :key="i" @click="toPage(item.path)">
                <span class="wg-footer-icon" v-if="item.icon"><img class="wg-footer-img" :src="item.icon" alt=""></span>
                <div class="wg-footer-label">{{item.label || item}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'wg-footer',
    props: ['options'],
    methods: {
        toPage (v) {
            if (v) {
                this.$router.push({
                    path: v
                })
            }
        }
    }
}
</script>

<style>
.wg-footer-box{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9;
    width: 100%;
    height: 55px;
}
.wg-footer-list{
    background-color: #414141;
    color: #fff;
    display: flex;
    height: 100%;
    align-items: center;
}
.wg-footer-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    height: 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.wg-footer-icon{
    display: block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-style: normal;
}
.wg-footer-img{
    display: block;
    margin: 0 auto;
    height: 20px;
}
.wg-footer-label{
    width: 100%;
    height: 24px;
    line-height: 18px;
    padding-top: 6px;
    box-sizing: border-box;
}
</style>
