let str = "naman"
let beg = ""
for (let i = str.length - 1; i >= 0; i--) {
  beg += str[i]
}
if(str==beg){
console.log("Palindrome")
}
else{
console.log("Not Palindrome")
}