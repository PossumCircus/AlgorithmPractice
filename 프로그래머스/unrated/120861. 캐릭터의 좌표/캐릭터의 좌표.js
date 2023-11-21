function solution(keyinput, board) {
    var answer = [0,0];
    var limit = [~~(board[0]/2), ~~(board[1]/2), ~~(-board[0]/2), ~~(-board[1]/2)]
    keyinput.forEach(item => {
        if(item === 'right' && answer[0]<limit[0]){
            answer[0]++
        } else if(item === 'left'&& answer[0]>limit[2]){
            answer[0]--
        } else if(item === 'up'&& answer[1]<limit[1]){
            answer[1]++
        } else if(item === 'down'&& answer[1]>limit[3]){
            answer[1]--
        }
     })
    return answer
}