function solution(my_string) {
    const a= [...my_string].map( val => val.match(/[0-9]/gi)).reduce( (init, curr) => init+curr)
    
    if(a === 0){
        return 0
    } else {
        return a.split('null').reduce( (init, curr) => Number(init)+Number(curr),0)
    }
    
    // .split('null').reduce( (init, curr) => Number(init)+Number(curr),0)
}