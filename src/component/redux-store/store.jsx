import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const complaintInitials = {
  complaintData: [],
};

const LoginSlice = createSlice({
  name: "login",
  initialState: loginFormData,
  reducers: {
    loginButtonHandlerReducers(state, action) {
      state.isloggedIn = action.payload.status;
      state.data = action.payload.userdata;
    },
    logoutButtonHandler(state) {
      state.isloggedIn = false;
      state.data = {};
    },
    billPaidHandler(state) {
      const allData = { ...state.data };
      allData.paidBills = { ...allData.pendingBills[0] };
      state.isloggedIn = true;
      state.data = allData;
    },
  },
});

const SignUpSlice = createSlice({
  name: "signUp",
  initialState: signUpFormData,
  reducers: {
    signupButtonHandlerReducer(state, action) {
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
        userId: action.payload.userId.toString(),
        pendingBills: [...action.payload.pendingBills],
        paidBills: null,
      };
      state.signupdata = [...state.signupdata, newSignUp];
    },
    editProfileHandler(state, action) {
      console.log("action payload >>>", action.payload);
      const indexOFItem = state.signupdata.findIndex(
        (item) => item.userId === action.payload.userId
      );
      const newSignUpData = {
        ...state.signupdata[indexOFItem],
        address: action.payload.address,
        password: action.payload.password,
        name: action.payload.name,
        email: action.payload.email,
        phoneNumber: action.payload.contactNo,
      };
      const newSignUp = [...state.signupdata];
      newSignUp[indexOFItem] = newSignUpData;
      state.signupdata = newSignUp;
    },
  },
});

const ComplaintSlice = createSlice({
  name: "complaint",
  initialState: complaintInitials,
  reducers: {
    addComplaint(state, action) {
      const indexOFItem = state.complaintData.findIndex(
        (item) => item.userId === action.payload.userId
      );

      let newItem;

      if (indexOFItem !== -1) {
        //user ID already have an complaints array
        const temp = state.complaintData[indexOFItem];
        newItem = {
          ...temp,
          complaintDetails: [
            action.payload.complaintDetails,
            ...temp.complaintDetails,
          ],
        };
        const updatedItems = [...state.complaintData];
        updatedItems[indexOFItem] = newItem;
        state.complaintData = updatedItems;
      } else {
        //new item to add in cart
        const newItem = {
          userId: action.payload.userId,
          complaintDetails: [
            {
              ...action.payload.complaintDetails,
            },
          ],
        };
        const updatedItems = state.complaintData.concat(newItem);
        console.log(updatedItems);
        state.complaintData = updatedItems;
      }
    },
    deleteComplaintById(state, action) {
      // action.payload={userid:"", complaintId:""}
    },
    clearComplaintData(state) {
      state.complaintData = [];
    },
  },
});

const rootReducer = combineReducers({
  loginStore: LoginSlice.reducer,
  signupStore: SignUpSlice.reducer,
  complaintStore: ComplaintSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const loginReducers = LoginSlice.actions;
export const signUpReducers = SignUpSlice.actions;
export const complaintReducers = ComplaintSlice.actions;

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export default store;
export { persistor };
