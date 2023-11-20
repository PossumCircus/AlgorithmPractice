function solution(spell, dic) {
    return dic.some( v=> [...v].sort() === [...spell].sort()) ? 1:2;
}