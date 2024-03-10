import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "react",
  storage,
};

const pendingBills = {
  billingAddress: "",
  unitsUsed: "",
  startDate: "",
  endDate: "",
  dueDate: "", //end date + 15
  inVoiceNumber: "",
  invoiceDate: "", //ending date+3
  invoiceTotal: "",
  totalAmount: "", //bill amount+additionalExpenses
  additionalExpenses: [],
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
        userId: action.payload.userId.toString(),
        pendingBills: [...action.payload.pendingBills],
        paidBills: [...action.payload.pendingBills],
      };
      console.log("new signup data>>>", newSignUp);
      state.signupdata = [...state.signupdata, newSignUp];
    },
  },
});

const ComplaintSlice = createSlice({
  name: "complaint",
  initialState: complaintInitials,
  reducers: {
    addComplaint(state, action) {
      //now check if object with the action.payload.userId exist
      //then update the array , either enter new one

      const indexOFItem = state.complaintData.findIndex(
        (item) => item.userId === action.payload.userId
      );

      let newItem;

      if (indexOFItem !== -1) {
        //user ID already have an complaints array
        const temp = state.complaintData[indexOFItem];
        // console.log("item already in ", temp.userId);
        newItem = {
          ...temp,
          complaintDetails: [
            ...temp.complaintDetails,
            action.payload.complaintDetails,
          ],
        };
        console.log("item>>>", newItem);
        const updatedItems = [...state.complaintData];
        updatedItems[indexOFItem] = newItem;
        state.complaintData = updatedItems;
      } else {
        console.log("Action payload", action.payload);
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

//login file

// const currentDate = new Date();

// const samplePendingBill = {
//   billingAddress: "",
//   unitsUsed: "67",
//   startDate: new Date(),
//   endDate: new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
//   dueDate: new Date(currentDate.setDate(currentDate.getDate() + 15)), //end date + 15
//   inVoiceNumber: "#AB2324-01",
//   invoiceDate: new Date(
//     new Date().setDate(currentDate.getDate() + 3, new Date().getMonth() + 1)
//   ), //ending date+3
//   invoiceTotal: 67 * 10,
//   totalAmount: 67 * 10, //bill amount+additionalExpenses
//   additionalExpenses: [],
// };
// const signUpSubmitHandler = (values, resetForm) => {
//   console.log({ values });
//   if (
//     checkingIfAlreadyUser(signUpStore, values.email, values.phoneNumber) ==
//     "nothing"
//   ) {
//     console.log("user doesnt exist");

//     const payload = {
//       ...values,
//       userId: getRandom(13),
//       pendingBills: [
//         {
//           ...samplePendingBill,
//         },
//       ],
//       paidBills: [],
//     };
//     setUserId(payload.userId);
//     dispatcher(signUpReducers.signupButtonHandlerReducer(payload));
//     resetForm();
//     setshowSignUpModal(true);
//   } else {
//     toast.error(
//       `User exist with the given ${checkingIfAlreadyUser(
//         signUpStore,
//         values.email,
//         values.phoneNumber
//       )}`,
//       toastConfig
//     );
//   }
// };

//complaintRegister.jsx
// function getRandom(length) {
//   return Math.floor(
//     Math.pow(10, length - 1) +
//       Math.random() * 9 * Math.pow(10, length - 1).toString()
//   );
// }

// const complaintRegisteredSubmtHandler = (values) => {
//   const payload = {
//     userId: values.complaintUserId,
//     complaintDetails: {
//       complaintId: getRandom(5),
//       complaintStatus: "Pending",
//       category: values.complaintCategory,
//       subCategory: values.complaintSubCategory,
//       problemDescription: values.problemDescription,
//       contactPersonName: values.contactPersonName,
//       contactPersonNumber: values.contactPersonNumber,
//       complaintAddress: values.complaintAddress,
//       complaintAddressLandmark: values.complaintAddressLandmark,
//     },
//   };
//   setuniqueComplaintId(payload.complaintDetails.complaintId);
//   dispatcher(complaintReducers.addComplaint(payload));
//   setshowComplaintRegisteredModal(true);
// };
