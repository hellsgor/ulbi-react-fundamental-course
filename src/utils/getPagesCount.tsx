export const getPagesCount = (totalCount: string, limit: number): number =>
  Math.ceil(Number(totalCount) / limit);
