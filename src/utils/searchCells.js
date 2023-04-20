const coords = [
  [0, 2, 1],
  [3, 5, 1],
  [6, 8, 1],
  [0, 6, 3],
  [1, 7, 3],
  [2, 8, 3],
  [0, 8, 4],
  [2, 6, 2],
];

export function searchCells(array, i) {
  let [num, max, sum] = coords[i];
  let tic = [];
  let tac = [];
  while (!(num > max)) {
    if (array.at(num) === "❌") {
      tac.push(array.at(num));
    }
    if (array.at(num) === "⭕") {
      tic.push(array.at(num));
    }
    num += sum;
  }
  if (tic.length === 3) return "⭕";

  if (tac.length === 3) return "❌";

  if (i === coords.length - 1) return null;

  return searchCells(array, i + 1);
}
