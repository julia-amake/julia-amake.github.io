import { all } from 'redux-saga/effects';
import { authSaga } from 'src/widgets/Header/ui/UserBar';

export function* rootWatcher() {
  yield all([authSaga()]);
}
