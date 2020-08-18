// Polynomial time O(n^k)

// An algorithm with polynomial time complexity has a running time that would be some 
// input size n raised to some constant power k. The easiest way to understand 
// polynomial time complexity is with nested loops. An algorithm that requires 2 
// levels of looping over an input would be O(n^2) while one requiring 3 levels of 
// looping would be O(n^3). In both cases, we have polynomial time complexity.

// The following hasDuplicates function has a polynomial time complexity of O(n^2):

const hasDuplicates=array=>{
    let ticks = 0, result = false;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        for (let j = 0; j < array.length; j++) {
            ticks++;
            if (array[i] === array[j] && i !== j) {
                result = true;
            }
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}

debugger