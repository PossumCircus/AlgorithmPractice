function solution(sizes) {
    let w = 0;
    let h = 0;
    for(let i = 0; i<sizes.length; i++){
        Math.max(...sizes[i]) > w ? w = Math.max(...sizes[i]) : w;
        Math.min(...sizes[i]) > h ? h = Math.min(...sizes[i]) : h;
    }
    return w*h
}