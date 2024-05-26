import React, { memo } from 'react';
import cn from 'clsx';
import { ChangePasswordForm } from 'src/features/forms/ChangePasswordForm/ui/ChangePasswordForm';
import { ProfileForm } from 'src/features/forms/ProfileForm';
import s from './ProfileSettingsPage.module.scss';

interface ProfileSettingsPageProps {
  className?: string;
}

export const ProfileSettingsPage = memo(({ className }: ProfileSettingsPageProps) => {
  return (
    <div className={cn(s.outer, className)}>
      <ProfileForm />
      <ChangePasswordForm />
    </div>
  );
});

ProfileSettingsPage.displayName = 'ProfileSettingsPage';
