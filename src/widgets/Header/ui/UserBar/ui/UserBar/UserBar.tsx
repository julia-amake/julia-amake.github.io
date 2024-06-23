import React, { memo } from 'react';
import { selectToken } from 'src/entities/User';
import { useAppSelector } from 'src/shared/lib/hooks';
import { UserBarAuthWithQuery } from 'src/widgets/Header/ui/UserBar/ui/UserBarAuth/UserBarAuthWithQuery';
import { UserBarAuth } from '../UserBarAuth';
import { UserBarAuthWithThunk } from '../UserBarAuth/UserBarAuthWithThunk';
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
          <UserBarAuth />
          <UserBarAuthWithThunk />
          <UserBarAuthWithQuery />
        </div>
      )}
    </div>
  );
});

UserBar.displayName = 'UserBar';
