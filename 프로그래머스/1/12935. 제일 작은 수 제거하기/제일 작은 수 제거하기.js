function solution(arr) {
    const min = Math.min(...arr)
    let index = arr.findIndex( v=> v===min);
    const spliced = arr.splice(index, 1)
    return arr.length <1 ? [-1] : arr
}