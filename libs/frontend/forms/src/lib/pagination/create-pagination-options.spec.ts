import { createPaginationOptions } from './create-pagination-options.function';

interface TestBuilderParams {
  currentPage: number;
  totalPages: number;
  expectedResult: number[];
}

describe('createPaginationOptions()', () => {
  const testBuilder = ({
    currentPage,
    totalPages,
    expectedResult,
  }: TestBuilderParams) => {
    const result = createPaginationOptions(currentPage, totalPages);
    expect(result).toEqual(expectedResult);
  };

  test('just one page', () => {
    testBuilder({ currentPage: 1, totalPages: 1, expectedResult: [1] });
  });

  test('3 pages', () => {
    testBuilder({ currentPage: 2, totalPages: 3, expectedResult: [1, 2, 3] });
  });

  test('5 pages', () => {
    testBuilder({
      currentPage: 2,
      totalPages: 5,
      expectedResult: [1, 2, 3, 4, 5],
    });
  });

  test('1000 pages, currentpage: 1000', () => {
    testBuilder({
      currentPage: 1000,
      totalPages: 1000,
      expectedResult: [996, 997, 998, 999, 1000],
    });
  });

  test('1000 pages, currentpage: 1', () => {
    testBuilder({
      currentPage: 1,
      totalPages: 1000,
      expectedResult: [1, 2, 3, 4, 5],
    });
  });

  test('1000 pages, currentpage: 500', () => {
    testBuilder({
      currentPage: 500,
      totalPages: 1000,
      expectedResult: [498, 499, 500, 501, 502],
    });
  });
});
