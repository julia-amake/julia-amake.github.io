import React, { ReactElement, useContext } from 'react';
import { TranslationsContext } from 'src/shared/lib/context';
import s from './BaseLayout.module.scss';

interface BaseLayoutProps {
  header: ReactElement;
}

export const BaseLayout = ({ header }: BaseLayoutProps) => {
  const { t } = useContext(TranslationsContext);
  return (
    <div className={s.outer}>
      <div className={s.header}>{header}</div>
      <main className={s.main}>{t('Основной контент страницы')}</main>
    </div>
  );
};
