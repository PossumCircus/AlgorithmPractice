function solution(arr)
{
    return [...arr].filter( (e, i, src) => e !== src[i - 1])
}