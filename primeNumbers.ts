let primeNumbers: number[] = []

let i = 2

while(primeNumbers.length <= 100) {
  let isPrime = true
  for(let j = 2; j < i; j++) {
    if(i % j == 0) {
      isPrime = false
    }
  }

  if(isPrime) {
    primeNumbers.push(i)
  }
  i++
}

primeNumbers.map((prime, i) => console.log(`${i+1}- ${prime}`))
