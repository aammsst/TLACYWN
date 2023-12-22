export default function bubble_sort(arr: number[]): void {

    let len = arr.length;
    if (len <= 1) return;

    while (len > 0) {
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] >= arr[i+1]) {
                let tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
            }
        }
        len--;
    }

}
