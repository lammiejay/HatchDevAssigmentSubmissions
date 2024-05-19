function selectionSort(arr: number[]): void {
    const n: number = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx: number = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
}

// Example usage
const arr: number[] = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", arr);
selectionSort(arr);
console.log("Sorted array:", arr);
