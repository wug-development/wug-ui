<template>
    <div>
        <wg-header class="mtop" :icon="['back', 'more']" @back="backEven" @more="moveEven">标题这么长超了怎么办呀</wg-header>
        <wg-header :icon="['back']" :position="true" @back="backEven">标题置顶</wg-header>
        <wg-header class="mtop">标题</wg-header>
    </div>
</template>

<script>
export default {
    methods: {
        backEven () {
            this.$router.go(-1)
        },
        moveEven () {
            console.log('更多')
        }
    }
}
</script>

<style>
.mtop{
    margin-top: 15px;
}
</style>
