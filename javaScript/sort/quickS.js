let arr = [2, 3, 5, 1, 4, 97, 124, 3, 5, 32, 1, 4, 3];

function quickSort(arr){
    return qsort(arr, 0, length - 1)
}

function qsort(arr, left, right){
    if(left < right) {
        let i = partition(arr, left, right);
        partition(arr, left, i - 1);
        partition(arr, i + 1, right);
    }
}


function partition(arr, left, right){
    let pivot = arr[left];
    let i = left;
    let j = right;
    while(i < j){
        while(arr[j] >= pivot && i < j) {
            j--;
        }
        while(arr[i] <= pivot && i < j) {
            i++
        }
        if(i < j){
            swap(arr, i, j)
        }
    }
    swap(arr, left, i);
    return i;
}

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}