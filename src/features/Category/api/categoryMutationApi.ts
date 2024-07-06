import { categoriesApi } from 'src/entities/Category/api/categoriesApi';
import { CategoryParams } from 'src/entities/Category/model/types/categoriesTypes';
import { Category } from 'src/entities/Product';
import { transformErrorResponse } from 'src/shared/lib/utils/axios/axiosErrorHandler';

const categoryMutationApi = categoriesApi.injectEndpoints({
  endpoints: (build) => ({
    editCategory: build.mutation<Category, { values: CategoryParams; id?: string }>({
      query: ({ values, id }) => ({
        url: id ? `/categories/${id}` : '/categories',
        method: id ? 'PUT' : 'POST',
        body: values,
      }),
      invalidatesTags: [{ type: 'Category' }, { type: 'Product' }],
      transformErrorResponse,
    }),
    deleteCategory: build.mutation<Category, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      transformErrorResponse,
      invalidatesTags: [{ type: 'Category' }, { type: 'Product' }],
    }),
  }),
});

export const { useEditCategoryMutation, useDeleteCategoryMutation } = categoryMutationApi;
