import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Kanbas/Courses/Modules/reducer";
import accountReducer from "./Kanbas/Account/reducer";
import assignmentsReducer from "./Kanbas/Courses/Assignments/reducer";
import enrollmentsReducer from "./Kanbas/Courses/Enrollments/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;