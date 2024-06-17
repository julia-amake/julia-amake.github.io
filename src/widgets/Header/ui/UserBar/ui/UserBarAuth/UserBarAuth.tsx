import React, { memo, useCallback, useEffect, useState } from 'react';
import cn from 'clsx';
import { login } from 'src/entities/User';
import { AuthForm } from 'src/features/forms/AuthForm';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/shared/consts/localStorage';
import { useAppDispatch } from 'src/shared/lib/hooks';
import { Button } from 'src/shared/ui/Button';
import { Modal } from 'src/shared/ui/Modal';
import menuStyles from 'src/shared/styles/common/menuList.module.scss';
import { useUserBarAuth } from '../../lib/hooks/useUserBarAuth';
import s from './UserBarAuth.module.scss';

export type UserBarAuthMode = 'signIn' | 'signUp';

interface UserBarAuthProps {
  className?: string;
}

export const UserBarAuth = memo(({ className }: UserBarAuthProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<UserBarAuthMode>('signIn');
  const isSingInMode = mode === 'signIn';
  const dispatch = useAppDispatch();

  const formManager = useUserBarAuth(mode);

  useEffect(() => {
    const userToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if (!userToken) return;
    dispatch(login(userToken));
  }, [dispatch]);

  useEffect(() => {
    return () => setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggleMode = useCallback(() => {
    setMode(isSingInMode ? 'signUp' : 'signIn');
  }, [isSingInMode]);

  return (
    <div className={cn(s.outer, className)}>
      <Button className={menuStyles.link} label="Войти" variant="clean" onClick={handleOpen} />
      <Modal visible={isOpen} onClose={handleClose}>
        <AuthForm title={isSingInMode ? 'Вход' : 'Регистрация'} formManager={formManager} />
        <div className={s.footer}>
          {isSingInMode ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
          <Button
            className={s.btn}
            label={isSingInMode ? 'Зарегистрироваться' : 'Войти'}
            variant="clean"
            size="s"
            onClick={handleToggleMode}
          />
        </div>
      </Modal>
    </div>
  );
});

UserBarAuth.displayName = 'UserBarAuth';
