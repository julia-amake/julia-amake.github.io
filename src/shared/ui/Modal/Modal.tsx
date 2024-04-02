import React, { ReactNode } from 'react';
import cn from 'clsx';
import { usePreventPageScrolling } from 'src/shared/lib/hooks';
import { Button } from 'src/shared/ui/Button';
import { Portal } from 'src/shared/ui/Portal';
import CloseIcon from 'src/shared/assets/icons/Close.svg';
import s from './Modal.module.scss';

interface ModalProps {
  children: ReactNode;
  visible?: boolean;
}

export const Modal = ({ children, visible = false }: ModalProps) => {
  usePreventPageScrolling(visible);

  return (
    <Portal>
      <div className={cn(s.outer, { [s.outer_visible]: visible })}>
        <div className={s.overlay}>
          <Button
            className={s.close}
            icon={{ element: CloseIcon }}
            variant="clean"
            size="m"
            title="Закрыть"
          />
        </div>
        <div className={s.inner}>{children}</div>
      </div>
    </Portal>
  );
};
