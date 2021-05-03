function maxone(str) {
    let count = 0;
    let max = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "1")
            count++;
        else {
            if (count > max) {
                max = count
            }
            count = 0
        }
    }
    if (count > max)
        return count
    return max
}
//Testcase1
str1 = "00110001001110"
console.log("Testcase1:", str1)
console.log("output:", maxone(str1))
//Testcase2
str2 = "1000010001"
console.log("Testcase1:", str2)
console.log("output:", maxone(str2))
//Testcase3
str3 = "0000000"
console.log("Testcase1:", str3)
console.log("output:", maxone(str3))