import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    enrollments: [] as string[],
};
const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});
export const {setCurrentUser} = accountSlice.actions;
export default accountSlice.reducer;


{/**        enrollCourse: (state, action) => {
            const courseId = action.payload as string;
            if (!state.enrollments.includes(courseId)) {
                state.enrollments.push(courseId);
            }
        },
        unenrollCourse: (state, action) => {
            const courseId = action.payload as string;
            state.enrollments = state.enrollments.filter((id) => id !== courseId);
        },
 */}