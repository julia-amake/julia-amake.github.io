import React, { memo } from 'react';
import cn from 'clsx';
import s from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <a className={cn(s.outer, className)} href="/">
      <span className={s.title}>Fashionit.</span>
      <span className={s.subtitle}>Store</span>
    </a>
  );
});

AppLogo.displayName = 'AppLogo';
