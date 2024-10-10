import { configureStore } from "@reduxjs/toolkit";

const initialState = { comList: [], dragCom: null, selectComId: null };

const comReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "changeNowCom":
      return { ...state, dragCom: action.value };
    case "changeComList":
      return { ...state, comList: action.value };
    case "changeSelectComId":
      return { ...state, selectComId: action.value };
    default:
      return state;
  }
};

export default configureStore({
  reducer: comReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
