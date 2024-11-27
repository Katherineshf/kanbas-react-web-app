import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const enrollInCourse = async (userId: string, courseId: string) => {
    //const response = await axiosWithCredentials.put(
       // `${COURSES_API}/${courseId}/enroll`, {userId}
    //);
    const url = `${COURSES_API}/${courseId}/enroll`;
    console.log('Calling API:', url); // Add this debug line
    const response = await axiosWithCredentials.put(
        url,
        { userId }
    );
    return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.delete(
        `${COURSES_API}/${courseId}/enroll`, {data: {userId}}
    );
    return response.data;
};
{/** 
export const checkEnrollmentStatus = async (courseId: string) => {
    const response = await axiosWithCredentials.get(
        `${COURSES_API}/${courseId}/enrollment-status`
    );
    return response.data;
};*/}


export const findEnrolledCourses = async () => {
    const response = await axiosWithCredentials.get(
        `${COURSES_API}/enrolled`
    );
    return response.data;
};