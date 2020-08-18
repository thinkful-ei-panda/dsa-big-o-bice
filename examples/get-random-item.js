// Constant time O(1)

// Constant time complexity is the "holy grail". No matter the size of your input, 
// the algorithm will take the same amount of time to complete. Examples of O(1) 
// algorithms are accessing an array item or performing basic arithmetic operations 
// (e.g., adding 2 numbers). The following is an example of an algorithm with O(1) runtime complexity.

// The following is an example of an algorithm with O(1) runtime complexity.
function getRandomItem(array) {
    let ticks = 0;
    // Get a random number and access that element in the array
    const item = array[Math.floor(Math.random() * array.length)];
    ticks++;
    return {
        result: item,
        ticks: ticks
    };
}