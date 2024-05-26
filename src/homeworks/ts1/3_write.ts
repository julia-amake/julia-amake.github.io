import { faker } from '@faker-js/faker';
import { categories, products } from 'src/homeworks/ts1/mocks';

/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 */

export type CategoryName = 'Face' | 'Hair' | 'Body' | 'Makeup' | 'Perfumery';

export interface Category {
  id: string;
  name: CategoryName;
  photo?: string;
}

/**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */

export interface Product {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
}

/**
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 */

type Operation = Cost | Profit;

interface OperationBase {
  id: string;
  name: string;
  desc: string;
  createdAt: string;
  amount: number;
  category: Category;
}

/**
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 */

interface Cost extends OperationBase {
  type: 'Cost';
}

/**
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 */

interface Profit extends OperationBase {
  type: 'Profit';
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const getCategory = (): Category => faker.helpers.arrayElement(categories);

const getProductImage = (category: CategoryName): string =>
  faker.helpers.arrayElement(products[category]);

export const createRandomProduct = (createdAt: string): Product => {
  const category = getCategory();
  const oldPrice = +faker.commerce.price({ min: 980, max: 8900, dec: 0 });

  return {
    id: faker.string.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}`,
    photo: getProductImage(category.name),
    ...(faker.datatype.boolean() ? { description: faker.commerce.productDescription() } : {}),
    createdAt,
    ...(faker.datatype.boolean() ? { oldPrice } : {}),
    price: +faker.commerce.price({
      min: oldPrice - oldPrice * 0.5,
      max: oldPrice - 100,
      dec: 0,
    }),
    category,
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  return {
    id: faker.string.uuid(),
    name: faker.finance.transactionType(),
    desc: faker.finance.transactionDescription(),
    createdAt,
    amount: +faker.commerce.price({ min: 980, max: 8900, dec: 0 }),
    category: getCategory(),
    type: faker.helpers.arrayElement(['Cost', 'Profit']),
  };
};
