// we have a linear relationship between the length of the input array and the number of operations 
// required for the loop part of the function to complete. The time complexity of the algorithm 
// grows in direct, linear proportion to the size of the input.

const sum=array=>{
	let sum = 0, ticks=1;    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        ticks++;
    }
    return {result: sum, ticks};
}
debugger