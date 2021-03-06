// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
function Permutation(str) {
    if(str === ''){
        return [];
    }
    let arr = str.split('');
    arr.sort();
    let ans = []
    PermutationArr(arr, ans);
    return ans;
}

function PermutationArr(arr, ans) {
    arr.sort();
    while(1) {
        ans.push(arr.join(''))
        let len = arr.length;
        let index = -1;
        let j = null
        for(let i = len - 2; i >= 0; i--) {
            if(arr[i] < arr[i + 1]){
                index = i;
                break;
            } else if(i === 0){
                return;
            }
        }
        for(j = len - 1; j >= 0 ;j--) {
            if(arr[j] > arr[index]){
                break;
            }
        }
        swap(arr, j, index);
        Reverse(arr, index + 1)
    }
}

function Reverse(arr,left){
    let right = arr.length - 1;
    while(left < right) {
        swap(arr, left, right);
        left++;
        right--;
    }

}

function swap(arr, i ,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
