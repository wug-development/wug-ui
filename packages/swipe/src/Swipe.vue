<template>
    <div class="wg-swipe-box" :style="{width: swipeWidth, height: swipeHeight + 'px'}">
        <div class="wg-swipe-body" ref="wgSwipeWrap">
            <slot></slot>
        </div>
        <div class="wg-swipe-indicators" v-show="isShowIndicators">
            <span class="wg-swipe-dot" v-for="(item, i) in pages" :key="i" :class="i===currentIndex?'cur':''"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wg-swipe',
    props: ['auto', 'speed', 'indicators', 'defaultIndex', 'width', 'height'],
    data () {
        return {
            autoPlay: true,
            currentIndex: 0,
            speedSecond: 3000,
            isShowIndicators: true,
            swipeWidth: '100%',
            swipeHeight: 200,
            timer: 0,
            pages: [],
            nextPage: '',
            currentPage: '',
            prevPage: '',
            itemLen: 0,
            isTouching: false,
            isTransing: false
        }
    },
    methods: {
        bindAutoPlay () {
            if (this.autoPlay) {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    if (!this.isTouching && !this.isTransing) {
                        this.changeSwipe()
                    }
                }, this.speedSecond)
            }
        },
        changeSwipe () {
            this.prevPage = this.currentPage
            this.currentIndex++
            if (this.currentIndex >= this.itemLen) {
                this.currentIndex = 0
            }
            this.currentPage = this.pages[this.currentIndex]
            if ((this.currentIndex + 1) < this.itemLen) {
                this.nextPage = this.pages[this.currentIndex + 1]
            } else {
                this.nextPage = this.pages[0]
            }
            this.swipeTransition()
        },
        swipeTransition () {
            this.isTransing = true
            this.changePage(4)
            this.stopTransition()
        },
        changeStyle (el, x, s = 0) {
            el.style.webkitTransition = `transform ${s}s`
            el.style.transform = `translate(${x}, 0)`
        },
        clearStyle (el) {
            el.style.webkitTransition = ``
            el.style.transform = ``
        },
        stopTransition () {
            setTimeout(() => {
                this.isTransing = false
                this.clearStyle(this.prevPage)
            }, 400)
        },
        getChild () {
            let el = this.$children
            this.itemLen = el.length
            el.forEach((item, i) => {
                if (!this.height && item.$el.clientHeight > this.swipeHeight) {
                    this.swipeHeight = item.$el.clientHeight
                }
                this.addClass(item.$el)
                this.pages.push(item.$el)
                this.bindTouch(item.$el, i)
            })
            this.getPage()
        },
        getPage () {
            this.currentPage = this.pages[this.currentIndex]
            let _next = this.currentIndex + 1
            let _prev = this.currentIndex - 1
            if (_next >= this.itemLen) {
                _next = 0
            }
            if (_prev < 0) {
                _prev = this.itemLen - 1
            }
            this.nextPage = this.pages[_next]
            this.prevPage = this.pages[_prev]
        },
        changePage (v) {
            if (v === 1) {
                this.changeStyle(this.nextPage, `0`, '.3')
                this.changeStyle(this.currentPage, `-100%`, '.3')
                this.currentIndex++
                if (this.currentIndex >= this.itemLen) {
                    this.currentIndex = 0
                }
            } else if (v === 2) {
                this.changeStyle(this.currentPage, `0`, '.3')
                this.changeStyle(this.nextPage, `100%`, '.3')
            } else if (v === 3) {
                this.changeStyle(this.currentPage, `100%`, '.3')
                this.changeStyle(this.prevPage, `0`, '.3')
                this.currentIndex--
                if (this.currentIndex < 0) {
                    this.currentIndex = this.itemLen - 1
                }
            } else if (v === 4) {
                this.changeStyle(this.currentPage, `0`, '.3')
                this.changeStyle(this.prevPage, `-100%`, '.3')
                this.changeStyle(this.nextPage, '100%')
            }
            this.getPage()
            this.$emit('change', this.currentIndex)
        },
        addClass (p) {
            p.className = 'item'
        },
        bindTouch (element, i) {
            let x = 0
            let moveX = 0
            let tm = 0
            element.addEventListener('touchstart', (e) => {
                if (!this.isTouching) {
                    this.isTouching = true
                    clearTimeout(tm)
                    clearInterval(this.timer)
                    let t = e.changedTouches[0] || e.touches[0]
                    x = t.clientX
                }
            }, false)
            element.addEventListener('touchmove', (e) => {
                if (this.isTouching) {
                    let t = e.changedTouches[0] || e.touches[0]
                    moveX = x - t.clientX
                    this.changeStyle(element, `${-moveX}px`)
                    if (moveX > 0) {
                        this.changeStyle(this.nextPage, `${this.swipeWidth - moveX}px`)
                    } else {
                        this.changeStyle(this.prevPage, `${-this.swipeWidth - moveX}px`)
                    }
                }
            }, false)
            element.addEventListener('touchend', (e) => {
                if (this.isTouching) {
                    this.isTouching = false
                    if (moveX > 0) {
                        if (Math.abs(moveX) > this.swipeWidth / 2) {
                            this.changePage(1)
                        } else {
                            this.changePage(2)
                        }
                    } else {
                        if (Math.abs(moveX) > this.swipeWidth / 2) {
                            this.changePage(3)
                        } else {
                            this.changePage(4)
                        }
                    }
                    clearTimeout(tm)
                    tm = setTimeout(() => {
                        this.bindAutoPlay()
                    }, 3000)
                }
            }, false)
        }
    },
    mounted () {
        bindResizeEvent(this)
        this.getChild()
        this.swipeTransition()
        this.bindAutoPlay()
    },
    beforeDestroy () {
        clearInterval(this.timer)
    },
    created () {
        typeof this.auto !== 'undefined' && (this.autoPlay = this.auto)
        typeof this.speed !== 'undefined' && (this.speedSecond = this.speed)
        typeof this.indicators !== 'undefined' && (this.isShowIndicators = this.indicators)
        typeof this.defaultIndex !== 'undefined' && (this.currentIndex = this.defaultIndex)
        if (typeof this.width !== 'undefined') {
            this.swipeWidth = this.width + 'px'
        } else {
            this.swipeWidth = window.innerWidth
        }
        if (typeof this.height !== 'undefined') {
            this.swipeHeight = this.height
        }
    },
    watch: {
        auto (v) {
            this.autoPlay = v
        },
        speed (v) {
            this.speedSecond = v
        },
        indicators (v) {
            this.isShowIndicators = v
        },
        defaultIndex (v) {
            this.currentIndex = v
        },
        width (v) {
            this.swipeWidth = v + 'px'
        },
        height (v) {
            this.swipeHeight = v
        }
    }
}
function bindResizeEvent (vue) {
    window.addEventListener('resize', () => {
        if (typeof vue.width === 'undefined') {
            vue.swipeWidth = window.innerWidth
        }
    })
}
</script>

<style lang="scss">
.wg-swipe-box{
    width: 100%;
    height: 200px;
    overflow-x: hidden;
    position: relative;
    .wg-swipe-body{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .wg-swipe-indicators{
        position: absolute;
        left: 0;
        bottom: 4px;
        width: 100%;
        display: flex;
        justify-content: center;
        .wg-swipe-dot{
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin: 0 2px;
            background-color: rgba($color: #000000, $alpha: .4);
        }
        .wg-swipe-dot.cur{
            background-color: rgba($color: #ffffff, $alpha: .4);
        }
    }
}
.item {
    position: absolute;
    left: 0 ;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translate(-100%, 0);
}
.curItem {
    transform: none;
}
.prevItem {
    transform: translate(-100%, 0);
    transition: transform .3s;
}
</style>
