function solution(n, arr1, arr2) {
    const arr = [];
    
    for(let i = 0; i<arr1.length; i++){
        arr.push( Number(arr1[i].toString(2))+Number(arr2[i].toString(2)))
    }
    return arr.map(v =>{
        let str = ''
        for(let i = 0; i<v.toString().length; i++){
            if(Number(v.toString()[i])>=1) str += '#'
            else str += ' '
        }
        v = str
        return v.padStart(n, ' ')
    })
}
// ["#####","# # #","### #","#  ##","#####"]
// ["#####","###","####","###","#####"]
// ["######", "###  #", "##  ##", " #### ", " #####", "### # "]
// ["######","####","####","####","#####","####"]