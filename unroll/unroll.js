function unroll(squareArray) {
    const result = [];
    let startRow = 0,
      endRow = squareArray.length - 1,
      startCol = 0,
      endCol = squareArray[0].length - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      //right
      for (let i = startCol; i <= endCol; i++) {
        result.push(squareArray[startRow][i]);
      }
      startRow++;
  
      //down
      for (let i = startRow; i <= endRow; i++) {
        result.push(squareArray[i][endCol]);
      }
      endCol--;
  
      //left
      if (startRow <= endRow) {
        for (let i = endCol; i >= startCol; i--) {
          result.push(squareArray[endRow][i]);
        }
        endRow--;
      }
  
      //up
      if (startCol <= endCol) {
        for (let i = endRow; i >= startRow; i--) {
          result.push(squareArray[i][startCol]);
        }
        startCol++;
      }
    }
  
    return result;
  }

module.exports = unroll;
