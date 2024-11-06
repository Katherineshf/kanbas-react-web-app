import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";

const initialState = {
    enrollments: enrollments,
    showAllCourses: false
};


const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollStudent: (state, action) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.userId,
        course: action.payload.courseId
      };
      state.enrollments.push(newEnrollment);
    },
    unenrollStudent: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => 
          !(enrollment.user === action.payload.userId && 
            enrollment.course === action.payload.courseId)
      );
    }
  }
});

export const { toggleShowAllCourses, enrollStudent, unenrollStudent } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;