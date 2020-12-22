// let isDragging = false;
// import Vue from 'vue';
let isDragging = false
export default function (el, options) {
    'ontouchstart' in window ? (function () {
        el.addEventListener('touchstart', e => {
            document.onselectstart = function () { return false }
            document.ondragstart = function () { return false }
            e.preventDefault()
            if (isDragging) return false
            isDragging = true
            if (options.start) {
                options.start(e.changedTouches[0] || e.touches[0])
            }
        }, false)
        el.addEventListener('touchmove', e => {
            options.move && options.move(e.changedTouches[0] || e.touches[0])
        }, false)
        const stopEven = e => {
            isDragging = false
            document.onselectstart = null
            document.ondragstart = null
            options.stop && options.stop(e.changedTouches[0] || e.touches[0])
        }
        el.addEventListener('touchend', stopEven, false)
        el.addEventListener('touchcancel', stopEven, false)
    }()) : (function () {
        el.addEventListener('mousedown', e => {
            if (isDragging) return false
            isDragging = true
            if (options.start) {
                e.preventDefault()
                options.start(e)
            }
            const moveEven = ev => {
                options.move && options.move(ev)
            }
            const stopEven = ev => {
                document.removeEventListener('mousemove', moveEven, false)
                document.removeEventListener('mouseup', stopEven, false)
                document.onselectstart = null
                document.ondragstart = null
                isDragging = false
                options.stop && options.stop(ev)
            }
            document.addEventListener('mousemove', moveEven, false)
            document.addEventListener('mouseup', stopEven, false)
        }, false)
    }())
}
