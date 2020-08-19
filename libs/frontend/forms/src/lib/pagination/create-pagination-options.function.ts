export function createPaginationOptions(
  currentPage: number,
  totalPages: number
): number[] {
  const temp: number[] = [currentPage];
  let negativePointer = currentPage - 1;
  let positivePointer = currentPage + 1;
  while (
    temp.length < 5 &&
    (negativePointer > 0 || positivePointer <= totalPages)
  ) {
    if (negativePointer > 0) {
      temp.unshift(negativePointer);
    }
    if (positivePointer <= totalPages) {
      temp.push(positivePointer);
    }
    negativePointer--;
    positivePointer++;
  }
  return temp;
}
