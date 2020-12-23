export default {
    getYear (minDate, maxDate, format) {
        let minY = 1991
        let maxY = 2030
        minDate && (minY = minDate.split(' ')[0].split(/-|\/|\./)[0])
        maxDate && (maxY = maxDate.split(' ')[0].split(/-|\/|\./)[0])
        let arr = []
        while (minY <= maxY) {
            let d = minY++
            arr.push({
                value: d,
                text: format ? format.replace('{value}', d) : d
            })
        }
        return arr
    },
    getMouth (format = '') {
        let arr = []
        let i = 1
        while (i <= 12) {
            let d = this.addSomeBefore(i++, 2)
            arr.push({
                value: d,
                text: format ? format.replace('{value}', d) : d
            })
        }
        return arr
    },
    getDay (month, year, format = '') {
        let minD = 1
        let maxD = 31
        let arr = []
        if (month === 2) {
            maxD = year % 4 === 0 ? 29 : 28
        } else if ([4, 6, 9, 11].indexOf(month) > -1) {
            maxD = 30
        }
        while (minD <= maxD) {
            let d = this.addSomeBefore(minD++, 2)
            arr.push({
                value: d,
                text: format ? format.replace('{value}', d) : d
            })
        }
        return arr
    },
    getHour () {
        let minH = 0
        let arr = []
        while (minH < 24) {
            let d = this.addSomeBefore(minH++, 2)
            arr.push({
                value: d,
                text: d
            })
        }
        return arr
    },
    getMinute () {
        let minM = 0
        let arr = []
        while (minM < 60) {
            let d = this.addSomeBefore(minM++, 2)
            arr.push({
                value: d,
                text: d
            })
        }
        return arr
    },
    addSomeBefore (str, len, v) {
        return new Array(len - String(str).length + 1).join(v || '0') + str
    }
}
