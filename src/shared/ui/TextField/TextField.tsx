import React, {
  ChangeEvent,
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useId,
  useState,
} from 'react';
import cn from 'clsx';
import s from './TextField.module.scss';

interface TextFieldClassNames {
  wrapper?: string;
  field?: string;
}

type TextFieldType = Extract<
  HTMLInputTypeAttribute,
  'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
>;

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  type?: TextFieldType;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  errorMessage?: ReactNode;
  classNames?: TextFieldClassNames;
  children?: never;
  value?: never;
}

export const TextField = memo(
  forwardRef<HTMLInputElement, TextFieldProps>(
    (
      {
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
      }: TextFieldProps,
      ref
    ) => {
      const [value, setValue] = useState<string>(defaultValue || '');
      const [isFocused, setIsFocused] = useState(false);
      const inputId = useId();

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        onChange?.(e);
      };

      const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      };

      const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(e);
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
              ref={ref}
              className={cn(s.field, classNames?.field)}
              id={inputId}
              type={type}
              value={value}
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
    }
  )
);
