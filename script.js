function fibonacci(num) {
// your code here
	function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 0;
    if (num === 2) return 1;
    
    let prevPrev = 0;
    let prev = 1;
    let current = 1;
    
    for (let i = 3; i <= num; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }
    
    return prevPrev;
}


