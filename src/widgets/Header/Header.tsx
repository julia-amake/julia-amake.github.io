import React from 'react';
import { AppLogo } from 'src/shared/ui/AppLogo';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.outer}>
      <div className={s.container}>
        <AppLogo />
      </div>
    </div>
  );
};
