function solution(my_string) {
   return my_string.split(/\D+/).reduce( (acc, curr) => Number(acc)+Number(curr), 0)
}