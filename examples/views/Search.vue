<template>
    <div class="search-box">
        <wg-search placeholder="请输入关键字" v-model="searchVal" max="20"></wg-search>
        <div>{{searchVal}}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            searchVal: ''
        }
    }
}
</script>

<style>

</style>
