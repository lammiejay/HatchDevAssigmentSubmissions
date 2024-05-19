function insertionSort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
        const key: number = arr[i];
        let j: number = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Example usage
const arr: number[] = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", arr);
insertionSort(arr);
console.log("Sorted array:", arr);
