function demo() {
    let arr = [name = "niroshasistu",age = 22,course = "frontenddeveloper"];
  
    arr[2]="react developer";
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
demo();
// output
// niroshasistu
// 22
// frontenddeveloper
// output
// niroshasistu
// 22
// React developer/////replaced the index of the array 2