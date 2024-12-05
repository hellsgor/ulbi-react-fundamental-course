export function generateId(
  prefix: string | null,
  id: string | number | null = null,
): string {
  return `${prefix}${prefix && '-'}${
    id ? id : Math.floor(Math.random() * 1001)
  }`;
}
