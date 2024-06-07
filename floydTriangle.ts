function floydTriangle(nLines: number) {
  var count = 1
  let line: number[] = [];
  for(let i = 1; i <= nLines; i++) {
    line = []
    while(line.length < i){
      line.push(count++)
    }
    console.log(line)
  }
}
