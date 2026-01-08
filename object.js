
function func() {
    let student = {
        name: "nirosha",
        age: 22,
        course: "btech"
    };
    for (let key in student) {
        console.log(key+":"+student[key]); 
    }
       return "done"
}
console.log(func());
// output of object:
// name:nirosha
// age:22
// course:btech
// done
// 