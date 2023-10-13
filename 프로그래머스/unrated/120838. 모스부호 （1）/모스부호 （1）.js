function solution(letter) {
    const A = [];
    const morse ={
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    };
    
    for(let i = 0; i<letter.split(" ").length; i++){
        for(let j = 0; j<=Object.values(morse).length; j++){
            if(letter.split(" ")[i] === Object.keys(morse)[j]){
            A.push(Object.values(morse)[j])
        }
        }
    }
    return A.join('')
}