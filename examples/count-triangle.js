// Exponential time O(2^n)

// Algorithms with exponential time complexity (O(2^n)) have running times that grow 
// rapidly with any increase in input size. For an input of size 2, an exponential 
// time algorithm will take 2^2 = 4 time. With an input of size 10, the same 
// algorithm will take 2^10 = 1024 time, and with an input of size 100, it will 
// take 2^100 = 1.26765060022823 * 1030 time. Yikes!

// The following countTriangle is meant to count the number of points in a triangle that looks like this:

// 			      *
// 			     * *
// 			   * * * *
// 		   * * * * * * * *
// * * * * * * * * * * * * * * * *

const countTriangle=layers=>{
    let ticks = 1;
    let count = 0; // the number of dots we've counted so far
    let layer = 0; // the current layer we're on
    let lastLayer = 1; // the number of dots we counted in the previous layer
    while (layer < layers) {
        ticks++;
        let newLayer = 0; // the number of dots we've counted so far in the current layer
        for (let i = 0; i < lastLayer; i++) {
            ticks++;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer++;
    }
    return {
        result: count,
        ticks: ticks
    };
}
debugger