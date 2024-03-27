import React from 'react';
import cn from 'clsx';
import s from './Button.module.scss';

export type ButtonSize = 'xs' | 's' | 'm';
type ButtonVariant = 'primary' | 'secondary' | 'clean';
type IconPosition = 'left' | 'right';

interface ButtonIcon {
  element: SVGType;
  position?: IconPosition;
}

export interface ButtonProps {
  /**
   * Текст на кнопке
   */
  label?: string;
  icon?: ButtonIcon;
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

export const Button = ({
  label,
  icon,
  size = 'm',
  variant = 'primary',
  rounded = false,
  full = false,
  title,
  disabled,
  onClick,
  className,
}: ButtonProps) => {
  if (!label && !icon) return null;

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
    if (!icon) return label;

    const { element: Icon, position = 'left' } = icon;

    const iconElem = (
      <Icon
        className={cn(s.icon, s[`icon_variant-${variant}`], s[`icon_size-${size}`], {
          [s.icon_right]: position === 'right',
          [s.icon_withLabel]: label,
          [s.icon_noLabel]: !label,
        })}
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
};
