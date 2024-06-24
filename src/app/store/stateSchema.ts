import { AppSchema } from 'src/app/model/types/appTypes';
import { CartSchema } from 'src/entities/Cart/model/types/CartTypes';
import { CatalogSchema } from 'src/entities/Product';
import { UserSchema } from 'src/entities/User';
import { ProfileSchema } from 'src/entities/User/model/types/profileTypes';
import { rtkApi } from 'src/shared/api/rtkApi';

export interface StateSchema {
  app: AppSchema;
  user: UserSchema;
  profile: ProfileSchema;
  cart: CartSchema;
  catalog: CatalogSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
