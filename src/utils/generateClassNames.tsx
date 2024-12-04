type Classes = Record<string, string>;
type BaseClass = keyof Classes;

interface GenerateClassNamesProps {
  classes: Classes;
  baseClass: BaseClass;
  mods?: Record<string, boolean>;
}

/**
 * Функция для генерации строки классов с учётом модификаторов.
 * @description Эта функция собирает строку классов, начиная с базового класса и добавляя к нему модификаторы, если они активны.
 *
 * @param {Object} props - Объект параметров.
 * @param {Record<string, string>} props.classes - Объект, где ключами являются имена классов,  а значениями - соответствующие CSS классы.
 * @param {keyof Classes} props.baseClass - Ключ (имя класса), который является базовым для компонента.
 * @param {Record<string, boolean>} [props.mods] - (Необязательный) Объект, содержащий модификаторы для базового класса. Ключи — это имена модификаторов, значения — булевы значения, которые указывают, активен ли модификатор.
 *
 * @returns {string} Возвращает строку, состоящую из базового класса и активных модификаторов, если они есть. Если модификаторы не указаны, возвращается только базовый класс. Если базовый класс не найден, возвращается имя базового класса как есть.
 *
 * @example
 * const classes = {
 *   button: 'btn',
 *   button_secondary: 'btn_secondary',
 *   button_primary: 'btn_primary',
 * };
 * const mods = { secondary: true };
 * const classNames = generateClassNames({
 *   classes,
 *   baseClass: classes.button,
 *   mods,
 * });
 * console.log(classNames); // 'btn btn_secondary'
 */

export function generateClassNames({
  classes,
  baseClass,
  mods,
}: GenerateClassNamesProps): string {
  const activeMods = mods ? Object.keys(mods).filter((mod) => mods[mod]) : [];

  const baseClassKey = Object.keys(classes).find(
    (key) => classes[key] === baseClass,
  );

  return baseClassKey
    ? [
        classes[baseClassKey],
        ...activeMods.map((mod) => classes[`${baseClassKey}_${mod}`]),
      ].join(' ')
    : baseClass;
}
