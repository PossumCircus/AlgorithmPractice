function solution(cipher, code) {
    var answer=''
    for(let i =1; i<=cipher.length; i++){
       answer += cipher.substr(code*i-1, 1)
    }
    return answer 
}