import React from 'react';
import s from './AppLogo.module.scss';

export const AppLogo = () => {
  return (
    <a className={s.outer} href="/">
      <span className={s.title}>Fashionit.</span>
      <span className={s.subtitle}>Store</span>
    </a>
  );
};
