let primeNumbers: number[] = []


for (let i = 1; i < 1000; i++) {
  let isPrime = true
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false
      break
    }
  }
  if (isPrime) primeNumbers.push(i)
  if (primeNumbers.length === 100) break
}
primeNumbers.map((primeNumber:number, i:number) => console.log(`${i+1}- ${primeNumber}`)  )
