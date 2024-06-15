import { StateSchema } from 'src/app/store/stateSchema';

export interface ThunkConfig<RejectValue = string> {
  state: StateSchema;
  rejectValue: RejectValue;
}
