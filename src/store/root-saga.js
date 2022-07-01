import { all, call } from "reduxSaga/effects";

import { categoriesSaga } from "./categories/category.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
