
module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  }
  return matrix.map((row, index) => index % 2 === 0 ? row : row.reverse()).flat();
}
