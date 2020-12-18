// let isDragging = false;
// import Vue from 'vue';
let isDragging = false
export default function (el, options) {
    'ontouchstart' in window ? (function () {
        el.addEventListener('touchstart', e => {
            if (isDragging) return false
            isDragging = true
            if (options.start) {
                e.preventDefault()
                options.start(e.changedTouches[0] || e.touches[0])
            }
        })
        el.addEventListener('touchmove', e => {
            options.move && options.move(e.changedTouches[0] || e.touches[0])
        })
        const stopEven = e => {
            isDragging = false
            options.stop && options.stop(e.changedTouches[0] || e.touches[0])
        }
        el.addEventListener('touchend', stopEven)
        el.addEventListener('touchcancel', stopEven)
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
                document.removeEventListener('mousemove', moveEven)
                document.removeEventListener('mouseup', stopEven)
                document.onselectstart = null
                document.ondragstart = null
                isDragging = false
                options.stop && options.stop(ev)
            }
            document.addEventListener('mousemove', moveEven)
            document.addEventListener('mouseup', stopEven)
        })
    }())
}
