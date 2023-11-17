function solution(sides) {
    const arr1 = [];
    const arr2 = [];
    const maximum = Math.max(...sides)
    const minimum = Math.min(...sides)
    
    for(let lastSide=1; maximum+minimum>lastSide; lastSide++){
        arr1.push(lastSide)
    }
    const condition1 = arr1.filter(item => item>maximum).length;
    
    for(let lastSide=(maximum-minimum)+1; maximum<minimum+lastSide && lastSide<=maximum; lastSide++){
        arr2.push(lastSide)
    }
    const condition2 = arr2.length;
    
    return condition1+condition2
}