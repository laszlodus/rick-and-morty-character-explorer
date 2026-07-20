export function getPageNumber(url: string): number {
  const urlObject = new URL(url);
  const page = Number(urlObject.searchParams.get("page"));
  return page;
}
