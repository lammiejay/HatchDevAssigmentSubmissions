function bubbleSort(arr: number[]): void {
    const n: number = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// Example usage
const arr: number[] = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", arr);
bubbleSort(arr);
console.log("Sorted array:", arr);
