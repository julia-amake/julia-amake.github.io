import React, { memo, useCallback } from 'react';
import cn from 'clsx';
import { NavLink } from 'react-router-dom';
import { logout } from 'src/entities/User';
import { getRouteProfileSettings } from 'src/shared/consts/router';
import { useAppDispatch } from 'src/shared/lib/hooks';
import { Button } from 'src/shared/ui/Button';
import menuStyles from 'src/shared/styles/common/menuList.module.scss';

interface UserBarMenuProps {
  className?: string;
}

export const UserBarMenu = memo(({ className }: UserBarMenuProps) => {
  const dispatch = useAppDispatch();

  const linkClassNames = ({ isActive }: { isActive: boolean }) =>
    cn(menuStyles.link, { [menuStyles.link_active]: isActive });

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className={cn(menuStyles.menu, className)}>
      <NavLink className={linkClassNames} to={getRouteProfileSettings()}>
        Профиль
      </NavLink>
      <Button
        className={menuStyles.link}
        variant="clean"
        size="s"
        label="Выйти"
        onClick={handleLogout}
      />
    </div>
  );
});

UserBarMenu.displayName = 'UserBarMenu';
