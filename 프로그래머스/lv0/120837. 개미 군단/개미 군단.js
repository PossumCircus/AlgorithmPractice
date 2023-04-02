function solution(hp) {
    var x = Math.floor(hp/5);
    var y = 0;
    var z = 0;
    if(hp%5>=3) {
        y = Math.floor(hp%5/3);
        z = hp%5%3
    } else if (hp%5<=2) {
        z = hp%5
    }
    
return x+y+z
}