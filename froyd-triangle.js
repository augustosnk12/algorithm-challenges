function createFroydTriangle(totalNumbers) {
    let lastRowAmount = 1
    let currentRow = []
    
    for (let i = 0; i < totalNumbers; i++) {
        currentRow.push(i)
        
        if (currentRow.length > lastRowAmount) {
            console.log(currentRow)
            lastRowAmount = currentRow.length
            currentRow = []
        }
    }
}

createFroydTriangle(10)
