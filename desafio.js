
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


Array.prototype.myMap = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        const value = callback(this[i], i)
        if (value !== undefined) {
            result.push(value)
        }
    }
    return result
}

const map = numbers.myMap((num) => num * 2)
console.log(map)

Array.prototype.myFilter = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i)) {
            result.push(this[i])
        }
    }
    return result
}

const filter = numbers.myFilter((num) => num % 2 === 0)
console.log(filter)




Array.prototype.myReduce = function (callback, acc) {
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i])
    }
    return acc
}

const reduce = numbers.myReduce((acc, num) => acc + num, 0)
console.log(reduce)
