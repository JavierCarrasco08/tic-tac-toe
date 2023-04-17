export function cellsFormat(cell, callback) {
  return cell
    .map((e, index) => {
      return {
        letter: e,
        id: index,
      };
    })
    .filter(callback);
}
