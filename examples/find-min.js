// Linear time O(n)

// Algorithms with linear time complexity (O(n)) have running times that are directly 
// proportional to the size (n) of the input. Given input a and input b, where b is 
// twice as large as a, it will take a linear algorithm 2 times as long to process b compared to a.

// Some examples of linear complexity algorithms are summing the elements in an array 
// and finding the minimum or maximum value in an array.
const findMin=array=>{
    let min = array[0], ticks = 1;
    for (let i = 1; i < array.length; i++) {
        ticks++;
        if (array[i] < min) {
            min = array[i];
        }
    }
    return {
        result: min,
        ticks: ticks
    };
}

debugger