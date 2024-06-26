import React, { memo } from 'react';
import { LangSwitcher } from 'src/features/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher/ui/ThemeSwitcher';
import { AppLogo } from 'src/shared/ui/AppLogo';
import { HeaderMenu } from '../HeaderMenu';
import { UserBar } from '../UserBar';
import s from './Header.module.scss';

export const Header = memo(() => {
  return (
    <div className={s.outer}>
      <div className={s.container}>
        <HeaderMenu />
        <AppLogo className={s.logo} />
        <div className={s.right}>
          <UserBar />
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
});

Header.displayName = 'Header';
