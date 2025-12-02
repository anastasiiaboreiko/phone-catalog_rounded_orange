export const getIndexes = (perPage: number, currentPage: number) => {
  let lastIndex = 0;
  let firstIndex = 0;

  if (perPage < 3) {
    firstIndex = currentPage - 1;
    lastIndex = firstIndex + 2;
  } else if (perPage < 4) {
    firstIndex = currentPage - 1;
    lastIndex = firstIndex + 3;
  } else {
    lastIndex = currentPage * perPage;
    firstIndex = lastIndex - perPage;
  }

  return { firstIndex, lastIndex };
};
