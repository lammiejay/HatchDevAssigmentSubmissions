type ImageMatrix = number[][];


function printImage(matrix: ImageMatrix): void {
    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

// Function to flip the image horizontally
function flipHorizontal(matrix: ImageMatrix): ImageMatrix {
    const flippedMatrix = matrix.map(row => row.slice().reverse());
    return flippedMatrix;
}

// Function to flip the image vertically
function flipVertical(matrix: ImageMatrix): ImageMatrix {
    const flippedMatrix = matrix.slice().reverse();
    return flippedMatrix;
}

// Sample image matrix
const image: ImageMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Original Image:');
printImage(image);

const horizontalFlippedImage = flipHorizontal(image);
console.log('\nImage after Horizontal Flip:');
printImage(horizontalFlippedImage);

const verticalFlippedImage = flipVertical(image);
console.log('\nImage after Vertical Flip:');
printImage(verticalFlippedImage);
