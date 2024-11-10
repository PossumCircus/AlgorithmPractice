function solution(s) {
    const arr = s.split(' ')
    let arr2 = [];
    const arr3 = [];
    for(let i = 0; i<arr.length; i++){
        arr2 = arr[i].split('');
        
        for(let j = 0; j<arr[i].length; j++){
            j%2 === 0 ? arr2[j] = arr2[j].toUpperCase() : arr2[j] = arr2[j].toLowerCase()
        }
        arr3.push(arr2.join(''))
        
    }
        return arr3.join(' ')
}