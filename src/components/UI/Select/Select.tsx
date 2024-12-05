import { generateId } from '../../../utils/generateId';
import classes from './Select.module.css';

export type SelectOption = { value: string; text: string };

export interface SelectProps<T> {
  options: SelectOption[];
  defaultValue?: SelectOption | null;
  label?: string | null;
  id?: string | null;
  name?: string | null;
  value: T;
  onChange: (value: T) => void;
}

export const Select = <T extends string>({
  options,
  value,
  onChange,
  defaultValue = null,
  label = null,
  id = null,
  name = null,
}: SelectProps<T>) => {
  const ids = id ? id.toString() : generateId('select', id);

  return (
    <div className={classes.select}>
      {label && <label htmlFor={ids}>{label}</label>}

      <select
        name={name || ids}
        id={ids}
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
      >
        {defaultValue?.value && defaultValue?.text && (
          <option value={defaultValue.value}>{defaultValue.text}</option>
        )}

        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};
