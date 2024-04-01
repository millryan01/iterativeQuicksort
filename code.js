// References:
// https://github.com/COSC3020/quicksort-IshitaPatel18
// https://www.geeksforgeeks.org/java-program-for-iterative-quick-sort/

function partition(arr, low, high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    let i = low - 1;
    for (let j = low; j < high; j++){
        if (arr[j] <= arr[high]) {
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}
  
function quicksort(arr) {
    if (arr.length <= 1) { return arr; }    
    let stack = [];
    stack.push(0);
    stack.push(arr.length-1);
    while (stack.length > 0) {
        let upper = stack.pop();
        let lower = stack.pop();
        let pivIndex = partition(arr, lower, upper);
        if (pivIndex + 1 < upper) {
            stack.push(pivIndex + 1);
            stack.push(upper);
        } if (lower < pivIndex - 1) {
            stack.push(lower);
            stack.push(pivIndex - 1);
        }
    }
    return arr;
}
