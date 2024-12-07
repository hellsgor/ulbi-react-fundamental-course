export type GetClassNamesProps<T> = {
  mods?: Record<keyof T, boolean>;
  classes: Record<keyof T, string>;
  root: string;
};

export function getClassNames<T>({
  mods,
  classes,
  root,
}: GetClassNamesProps<T>): string {
  return mods
    ? [root]
        .concat(
          (Object.entries(mods) as [keyof T, boolean][])
            .filter(([, value]) => value)
            .map(([key]) => classes[key]),
        )
        .join(' ')
    : root;
}
