function add1(v1: number, v2: number): number {
    return v1 + v2
}

const resultf1 = add1(1, 2)
console.log(`resultf1 = ${resultf1}`)

const add2 = function(v1: number, v2: number): number {
    return v1 + v2
}

console.log(add2)

const resultf2 = add2(1, 2)
console.log(`resultf2 = ${resultf2}`)

const add3 = (v1: number, v2: number) => {
    return v1 + v2
}

const resultf3 = add3(1, 2)
console.log(`resultf3 = ${resultf3}`)
