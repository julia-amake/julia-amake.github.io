import React from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';
import { AddProductPage } from 'src/pages/AddProductPage/ui/AddProductPage';
import { CartPage } from 'src/pages/CartPage/ui/CartPage';
import { CatalogPage } from 'src/pages/CatalogPage/ui/CatalogPage';
import { ProfileSettingsPage } from 'src/pages/profile/ui/ProfileSettingsPage';
import {
  getRouteAddProduct,
  getRouteCart,
  getRouteCatalog,
  getRouteMain,
  getRouteProduct,
  getRouteProfileSettings,
} from 'src/shared/consts/router';
import { BaseLayout } from 'src/shared/ui/layouts/BaseLayout';
import { Header } from 'src/widgets/Header';

export const routerConfig = createHashRouter([
  {
    path: getRouteMain(),
    element: <BaseLayout header={<Header />} />,
    children: [
      {
        index: true,
        element: <Navigate to={getRouteCatalog()} />,
      },
      {
        path: getRouteProfileSettings(),
        element: <ProfileSettingsPage />,
      },
      {
        path: getRouteCatalog(),
        element: <CatalogPage />,
      },
      {
        path: getRouteProduct(':id'),
        element: 'Карточка товара',
      },
      {
        path: getRouteCart(),
        element: <CartPage />,
      },
      {
        path: getRouteAddProduct(),
        element: <AddProductPage />,
      },
    ],
  },
]);
