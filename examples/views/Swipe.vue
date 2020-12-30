<template>
    <div>
        <wg-swipe @change="changeItem">
            <wg-swipe-item><div class="d1"><img src="http://img.huakai.com/m/2020-12-04/1607073253571-0702775720074267.jpg" alt=""></div></wg-swipe-item>
            <wg-swipe-item><div class="d2"><img src="http://img.huakai.com/m/2020-11-25/1606277139318-750-928-2.jpg" alt=""></div></wg-swipe-item>
            <wg-swipe-item><div class="d3">3</div></wg-swipe-item>
            <wg-swipe-item><div class="d4">4</div></wg-swipe-item>
            <wg-swipe-item><div class="d5">5</div></wg-swipe-item>
        </wg-swipe>
    </div>
</template>

<script>
export default {
    methods: {
        changeItem (v) {
            window.log(v)
        }
    }
}
</script>

<style>
img{
    display: block;
    width: 100%;
}
.d1{
    background-color: #f00;
    color: #fff;
}
.d2{
    background-color: #0f0;
}
.d3{
    height: 100%;
    background-color: #00f;
    color: #fff;
}
.d4{
    height: 100%;
    background-color: #999;
    color: #fff;
}
.d5{
    height: 100%;
    background-color: #000;
    color: #fff;
}
</style>
