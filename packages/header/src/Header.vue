<template>
    <div class="wg-header-box" :class="siteType">
        <div class="wg-header-left">
            <div class="wg-header-block" v-if="isShowBack" @click="back">
                <div class="wg-header-back"></div>
            </div>
        </div>
        <div class="wg-header-center">
            <slot></slot>
        </div>
        <div class="wg-header-right">
            <div class="wg-header-block" v-if="isShowMore" @click="more">
                <div class="wg-header-more"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wg-header',
    props: ['icon', 'position'],
    data () {
        return {
            isShowBack: false,
            isShowMore: false,
            siteType: ''
        }
    },
    methods: {
        back (e) {
            this.$emit('back', e)
        },
        more (e) {
            this.$emit('more', e)
        }
    },
    beforeMount () {
        if (this.icon) {
            this.icon.indexOf('back') > -1 && (this.isShowBack = true)
            this.icon.indexOf('more') > -1 && (this.isShowMore = true)
        }
        if (this.position) {
            this.siteType = 'wg-header-site-top'
        }
    }
}
</script>

<style lang="scss">
.wg-header-site-top{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
}
.wg-header-box{
    background-color: #409EFF;
    color: #fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding: 0 12px 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wg-header-block{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .wg-header-left,.wg-header-right{
        flex: .5;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .wg-header-right{
        justify-content: flex-end;
    }
    .wg-header-center{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        height: 100%;
        text-align: center;
    }
    .wg-header-back{
        width: 10px;
        height: 10px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(45deg);
    }
    .wg-header-more,.wg-header-more::before,.wg-header-more::after{
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #fff;
        display: block;
        position: absolute;
    }
    .wg-header-more{
        right: 8px;
    }
    .wg-header-more::before{
        top: 0;
        right: 8px;
        content: '';
    }
    .wg-header-more::after{
        position: absolute;
        top: 0;
        right: -8px;
        content: '';
    }
}
</style>
