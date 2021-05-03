var objs = [
    { id: 4, name: "abc" },
    { id: 10, name: "ab2" },
    { id: 5, name: "abc3" },
    { id: 6, name: "abc5" },
    { id: 1, name: "abc5" },
    { id: 3, name: "abc5" },
    { id: 2, name: "abc5" },
    { id: 9, name: "abc5" },
    { id: 7, name: "abc5" },

]
function comparator(a, b) {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    return 0;
}
new_obj = objs.sort(comparator)
console.log(new_obj)