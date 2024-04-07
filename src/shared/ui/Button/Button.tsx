import React, { memo } from 'react';
import cn from 'clsx';
import s from './Button.module.scss';

export type ButtonSize = 'xs' | 's' | 'm';
type ButtonVariant = 'primary' | 'secondary' | 'clean';
type IconPosition = 'left' | 'right';

export interface ButtonProps {
  /**
   * Текст на кнопке
   */
  label?: string;
  icon?: SVGType;
  iconPosition?: IconPosition;
  iconClassName?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  rounded?: boolean;
  full?: boolean;
  /**
   * Подсказка при наведении
   */
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children?: never;
}

export const Button = memo(
  ({
    label,
    icon: Icon,
    iconPosition = 'left',
    iconClassName,
    size = 'm',
    variant = 'primary',
    rounded = false,
    full = false,
    title,
    disabled,
    onClick,
    className,
  }: ButtonProps) => {
    if (!label && !Icon) return null;

    const buttonClassNames = cn(
      s.outer,
      className,
      s[`outer_size-${size}`],
      s[`outer_variant-${variant}`],
      {
        [s[`outer_noLabel-${size}`]]: !label,
        [s.outer_full]: full,
        [s.outer_disabled]: disabled,
        [s.outer_rounded]: rounded,
      }
    );

    const buttonInner = (() => {
      if (!Icon) return label;

      const iconElem = (
        <Icon
          className={cn(
            s.icon,
            iconClassName,
            s[`icon_variant-${variant}`],
            s[`icon_size-${size}`],
            {
              [s.icon_right]: iconPosition === 'right',
              [s.icon_withLabel]: label,
              [s.icon_noLabel]: !label,
            }
          )}
        />
      );

      if (!label) return iconElem;

      return (
        <>
          {iconElem}
          <span>{label}</span>
        </>
      );
    })();

    return (
      <button
        className={buttonClassNames}
        title={title}
        disabled={disabled}
        type="button"
        onClick={() => onClick?.()}
      >
        {buttonInner}
      </button>
    );
  }
);

Button.displayName = 'Button';
