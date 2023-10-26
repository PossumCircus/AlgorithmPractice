function solution(emergency) {
    const a= [];
    const arr = [...emergency].sort( (a,b) => b-a)
    for(let i=0; i<emergency.length; i++){
        a.push(arr.indexOf(emergency[i]))
    }
    return a.map( item => item+1)
}