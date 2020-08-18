// Logarithmic time O(log(n))

// Logarithmic time complexity (O(log n)) is the next best thing after constant time. 
// While logarithmic time complexity algorithms do take longer with larger inputs, 
// running time increases slowly. For instance, if myLogRunTimeAlgo takes 1 second 
// to complete with an input of size 10, when we increase our input by 10x to 100, 
// the running time only grows to 2 seconds. When we increase the input size to 1000, the time only grows to 3 seconds.

// It is also characteristic of logarithmic algorithms that they cut the problem size in half each round through.

// The following function howManyLessThanNitems has logarithmic time complexity. 
// It takes a sorted array of integers (arr) and a less than value (n) as arguments, 
// and returns the number of elements from the array whose value is less than n. So
// howManyLessThanNitems([1, 2, 3, 4], 3) should be 2 because 1 and 2 are both less than 3.
const howManyLessThanNitems=(arr,n)=>{
    let ticks = 0;
    /* If the 1st element in the array is greater than `n`, return 0,
       because no items in the array are less than `n`. */
    if (!arr.length || arr[0] >= n) {
        ticks++;
        return 0;
    }

    let lowIndex = 0, highIndex = arr.length;

    while (highIndex > lowIndex) {
        // Find midpoint
        let midIndex = Math.floor((highIndex + lowIndex) / 2);
        /* If `midIndex` element is greater than `n`, that means all elements
           to the right of `midIndex` are also greater than `n`, so
           we only need to focus on elements to the left of `midIndex`.
           We set `highIndex` to the current value of `midIndex` so next time
           through the loop, we'll only look at the left half */
        if (arr[midIndex] >= n) {
            highIndex = midIndex;
            ticks++;
        }

        /* If the element to the right of `midIndex` is less than `n`, then we
           know that we need to check the items to the right of `midIndex`, so
           we set `lowIndex` to the current value of `midIndex`, so that next
           time through the loop we only look at the right side */
        else if (arr[midIndex + 1] < n) {
            lowIndex = midIndex;
            ticks++;
        }

        /* Otherwise, if the element to the right of `midIndex` is greater
           than or equal to `n`, we know that the item at `midIndex` is the last
           item that's less than `n`, so we return `midIndex +  1` to get the total
           number of items that are less than `n` */
        else {
            ticks++;
            return {
                result: midIndex + 1,
                ticks: ticks
            }
        }
	}
}
debugger