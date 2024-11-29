function solution(name, yearning, photo) {
    const map = new Map()
    for(let i =0; i<name.length; i++){
        map.set(name[i], yearning[i])
    }
    const arr = [];
    for(let i = 0; i<photo.length;i++){
        let count = 0;
        for(let j = 0; j<photo[i].length; j++){
            if(map.has(photo[i][j])) count += map.get(photo[i][j])
        }
        arr.push(count)
    }
    return arr
}