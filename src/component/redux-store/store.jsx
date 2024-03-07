import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const toastConfig = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const persistConfig = {
  key: "react",
  storage,
};

const signUpFormData = {
  signupdata: [],
};

const loginFormData = {
  isloggedIn: false,
  data: {},
};

const cartItems = {
  cart: [],
  totalAmount: 0,
};

const LoginSlice = createSlice({
  name: "login",
  initialState: loginFormData,
  reducers: {
    loginButtonHandlerReducers(state, action) {
      state.isloggedIn = action.payload.status;
      state.data = action.payload.userdata;
    },
  },
});

const SignUpSlice = createSlice({
  name: "signUp",
  initialState: signUpFormData,
  reducers: {
    signupButtonHandlerReducer(state, action) {
      console.log("action payload>>>>>>>>>", action.payload);
      const newSignUp = {
        consumerId: action.payload.consumerId,
        billNumber: action.payload.billNumber,
        title: action.payload.title,
        customerName: action.payload.customerName,
        email: action.payload.email,
        countryCode: action.payload.countryCode,
        password: action.payload.password,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address,
      };
      console.log("new signup data>>>", newSignUp);
      state.signupdata = [...state.signupdata, newSignUp];
    },
  },
});

const rootReducer = combineReducers({
  loginStore: LoginSlice.reducer,
  signupStore: SignUpSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const loginReducers = LoginSlice.actions;
export const signUpReducers = SignUpSlice.actions;

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export default store;
export { persistor };
