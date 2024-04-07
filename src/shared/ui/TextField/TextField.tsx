import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useId,
  useState,
} from 'react';
import cn from 'clsx';
import s from './TextField.module.scss';

interface TextFieldClassNames {
  wrapper: string;
  field: string;
}

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'onFocus' | 'onBlur' | 'type'
>;

type TextFieldType = Extract<
  HTMLInputTypeAttribute,
  'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
>;

interface TextFieldProps extends HTMLInputProps {
  type?: TextFieldType;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  errorMessage?: string;
  classNames?: TextFieldClassNames;
  children?: never;
  onChange?: (value: string) => void;
  onFocus?: (value: string) => void;
  onBlur?: (value: string) => void;
}

export const TextField = ({
  type = 'text',
  label,
  defaultValue,
  placeholder,
  errorMessage,
  classNames,
  onChange,
  onFocus,
  onBlur,
  ...other
}: TextFieldProps) => {
  const [value, setValue] = useState<string>();
  const [isFocused, setIsFocused] = useState(false);
  const inputId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChange?.(e.currentTarget.value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e.target.value);
  };

  return (
    <div className={classNames?.wrapper}>
      <div className={cn(s.fieldWrapper, { [s.fieldWrapper_error]: errorMessage })}>
        {label && (
          <label
            className={cn(s.label, { [s.label_top]: isFocused || value || defaultValue })}
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
        <input
          className={cn(s.field, classNames?.field)}
          id={inputId}
          type={type}
          value={value}
          defaultValue={defaultValue}
          {...(!label && placeholder ? { placeholder } : {})}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...other}
        />
      </div>
      {errorMessage && <div className={s.error}>{errorMessage}</div>}
    </div>
  );
};
