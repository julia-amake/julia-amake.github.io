import { getRouteAddProduct, getRouteCart, getRouteCatalog } from 'src/shared/consts/router';

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
] as const;
