export default function getValidatedPage(urlPageNumber: string | null): number {
  const pageNumber = Number(urlPageNumber);

  if (
    !Number.isNaN(pageNumber) &&
    pageNumber > 0 &&
    Number.isInteger(pageNumber)
  ) {
    return pageNumber;
  }
  return 1;
}
