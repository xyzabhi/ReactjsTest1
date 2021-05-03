//Creating a array with 101 consecutive elements  and a duplicate element also pushed
//Array looks like [1,2,......100]
let list = []
let i = 100
while (i > 0) {
    list.push(i)
    i--;
}
list.push(13);//Duplicate element pushed
unique_elem = list.length - 1;
sum_of_first_n = (unique_elem * (unique_elem + 1)) / 2;
sum_of_list = 0;
for (let j = 0; j < list.length; j++)
    sum_of_list += list[j];
console.log("Duplicate element is :", sum_of_list - sum_of_first_n)
