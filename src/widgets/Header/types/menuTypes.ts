import {
  getRouteAddProduct,
  getRouteCart,
  getRouteCatalog,
  getRouteProfileSettings,
} from 'src/shared/consts/router';

interface MenuListItem {
  id: string;
  name: string;
  link: string;
  end?: boolean;
}

export const MENU_LIST: MenuListItem[] = [
  {
    id: '1',
    name: 'Каталог',
    link: getRouteCatalog(),
  },
  {
    id: '2',
    name: 'Добавить',
    link: getRouteAddProduct(),
  },
  {
    id: '3',
    name: 'Корзина',
    link: getRouteCart(),
  },
  {
    id: '4',
    name: 'Профиль',
    link: getRouteProfileSettings(),
  },
] as const;
