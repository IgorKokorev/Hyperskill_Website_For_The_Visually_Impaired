function upCase(str) {
    console.log(str.toUpperCase());
}
function yourFunction(arr) {
    //write your code here
    arr.forEach(function(item) {
        upCase(item);
    })
}