import React, { memo, useCallback, useEffect, useState } from 'react';
import cn from 'clsx';
import { login } from 'src/entities/User';
import { AuthForm } from 'src/features/forms/AuthForm';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/shared/consts/localStorage';
import { useAppDispatch } from 'src/shared/lib/hooks';
import { Button } from 'src/shared/ui/Button';
import { Modal } from 'src/shared/ui/Modal';
import { useUserBarAuthWithSaga } from 'src/widgets/Header/ui/UserBar/lib/hooks/useUserBarAuthWithSaga';
import menuStyles from 'src/shared/styles/common/menuList.module.scss';
import s from './UserBarAuth.module.scss';

export type UserBarAuthMode = 'signIn' | 'signUp';

interface UserBarAuthProps {
  className?: string;
}

export const UserBarAuthWithSaga = memo(({ className }: UserBarAuthProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<UserBarAuthMode>('signIn');
  const isSingInMode = mode === 'signIn';
  const dispatch = useAppDispatch();

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

  const formManager = useUserBarAuthWithSaga(mode, handleClose);

  const { setErrors, initialErrors, setStatus, initialStatus } = formManager;

  const handleToggleMode = useCallback(() => {
    setMode(isSingInMode ? 'signUp' : 'signIn');
    setErrors(initialErrors);
    setStatus(initialStatus);
  }, [initialErrors, initialStatus, isSingInMode, setErrors, setStatus]);

  return (
    <div className={cn(s.outer, className)}>
      <Button className={menuStyles.link} label="Войти 4" variant="clean" onClick={handleOpen} />
      <Modal visible={isOpen} onClose={handleClose}>
        <AuthForm
          title={isSingInMode ? 'Вход (saga)' : 'Регистрация (saga) '}
          formManager={formManager}
        />
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

UserBarAuthWithSaga.displayName = 'UserBarAuthWithSaga';
