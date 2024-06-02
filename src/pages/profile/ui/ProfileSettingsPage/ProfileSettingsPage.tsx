import React, { memo } from 'react';
import cn from 'clsx';
import { ChangePasswordForm } from 'src/features/forms/ChangePasswordForm/ui/ChangePasswordForm';
import { ProfileForm } from 'src/features/forms/ProfileForm';
import { Heading } from 'src/shared/ui/Heading';
import { ContentLayout } from 'src/shared/ui/layouts/ContentLayout';
import s from './ProfileSettingsPage.module.scss';

interface ProfileSettingsPageProps {
  className?: string;
}

export const ProfileSettingsPage = memo(({ className }: ProfileSettingsPageProps) => {
  return (
    <ContentLayout
      className={cn(s.outer, className)}
      sidebarLeft={
        <Heading as="h1" size="h2">
          Настройки профиля
        </Heading>
      }
    >
      <div className={s.forms}>
        <ProfileForm />
        <ChangePasswordForm />
      </div>
    </ContentLayout>
  );
});

ProfileSettingsPage.displayName = 'ProfileSettingsPage';
