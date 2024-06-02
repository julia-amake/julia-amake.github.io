export const getRouteMain = () => '/';
export const getRouteProfileSettings = () => '/profile/settings';
export const getRouteCatalog = () => '/catalog';
export const getRouteProduct = (id: string) => `/catalog/${id}`;
export const getRouteAddProduct = () => '/catalog/add';
export const getRouteEditProduct = (id: string) => `/catalog/edit/${id}`;
export const getRouteCart = () => '/cart';
export const getRouteNotFound = () => '*';
