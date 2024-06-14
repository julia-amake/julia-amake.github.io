import React, { memo } from 'react';
import { selectToken } from 'src/entities/User';
import { useAppSelector } from 'src/shared/lib/hooks';
import { UserBarAuth } from '../UserBarAuth';
import { UserBarMenu } from '../UserBarMenu';

interface UserBarProps {
  className?: string;
}

export const UserBar = memo(({ className }: UserBarProps) => {
  const token = useAppSelector(selectToken);

  return (
    <div className={className}>
      {token && <UserBarMenu />}
      {!token && <UserBarAuth />}
    </div>
  );
});

UserBar.displayName = 'UserBar';
