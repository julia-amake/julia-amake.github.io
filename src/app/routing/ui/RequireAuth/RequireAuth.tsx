import React, { ReactNode, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuth, selectUserData, UserRoles } from 'src/entities/User';
import { getRouteForbidden, getRouteMain } from 'src/shared/consts/router';
import { useAppSelector } from 'src/shared/lib/hooks';
import { selectIsAppInited } from '../../../model/slices/appSlice';

interface RequireAuthProps {
  redirectTo?: string;
  children: ReactNode;
  requiredRoles?: UserRoles[];
}

export const RequireAuth = ({
  redirectTo = getRouteMain(),
  children,
  requiredRoles = [],
}: RequireAuthProps) => {
  const isAppInited = useAppSelector(selectIsAppInited);
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();
  const user = useAppSelector(selectUserData);

  const hasRequiredRoles = (() => {
    if (!user) return false;
    if (!requiredRoles?.length) return true;
    return requiredRoles.some((role) => user.roles.includes(role));
  })();

  const navigateTo = useMemo(() => {
    if (!isAuth) return redirectTo;
    if (!hasRequiredRoles) return getRouteForbidden();
  }, [hasRequiredRoles, isAuth, redirectTo]);

  if (!isAppInited) return null;
  if (navigateTo) return <Navigate to={navigateTo} replace state={{ from: location }} />;
  return children;
};
