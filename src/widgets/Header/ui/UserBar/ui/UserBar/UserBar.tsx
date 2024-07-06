import React, { memo } from 'react';
import { selectToken } from 'src/entities/User';
import { useAppSelector } from 'src/shared/lib/hooks';
import { UserBarAuthWithQuery } from '../UserBarAuth/UserBarAuthWithQuery';
import { UserBarMenu } from '../UserBarMenu';
import s from './UserBar.module.scss';

interface UserBarProps {
  className?: string;
}

export const UserBar = memo(({ className }: UserBarProps) => {
  const token = useAppSelector(selectToken);

  return (
    <div className={className}>
      {token && <UserBarMenu />}
      {!token && (
        <div className={s.temp}>
          <UserBarAuthWithQuery />
        </div>
      )}
    </div>
  );
});

UserBar.displayName = 'UserBar';
