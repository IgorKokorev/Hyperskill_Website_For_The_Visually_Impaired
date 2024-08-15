function three(arr) {
    //write your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) return i;
    }
    return -1;
}