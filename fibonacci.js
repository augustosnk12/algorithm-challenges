// Display the first 100 Fibonacci numbers

function firstHundredFibonacci() {
	let firstHundred = []
	
	for (let i = 0; i <= 100; i++) {
	    if (!firstHundred.length) firstHundred.push(0)
	    if (firstHundred.length == 1) firstHundred.push(1)
	    
	    firstHundred.push(firstHundred[firstHundred.length - 1] + firstHundred[firstHundred.length - 2])
	}
	
	console.log(firstHundred)
}

firstHundredFibonacci()