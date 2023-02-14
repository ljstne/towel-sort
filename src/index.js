
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix==undefined){return []}
  let resArray = [];
    for (i = 1;i<matrix.length;i+=2) {matrix[i] = matrix[i].reverse()}
      resArray= matrix.flat()
  return resArray;
}