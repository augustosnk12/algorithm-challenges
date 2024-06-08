const primes = []
let count = 1;
let isPrime = false

do {
    if (count == 2) primes.push(2)
    else {
        for (let i in primes) {
            if (count % primes[i] == 0) {
                isPrime = false
                break
            } else {
                isPrime = true
            }
        } 
        
        if (isPrime) primes.push(count)
    }
    
    count++
    isPrime = false
    
} while (primes.length < 100)

console.log(primes)
