import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  tagTypes: [
    "users",
    "teachers",
    "students",
    "courses",
    "resources",
    "user",
    "course",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("authToken")}`
      );
      headers.set("Content-Type", "Application/json");
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/users",
      providesTags: ["user"],
    }),
    login: builder.mutation({
      query: (data: { email: string; password: string }) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    register: builder.mutation({
      query: (data: { email: string; password: string }) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (data: { deletedUserId: string }) => ({
        url: "/users",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    getAllUsers: builder.query({
      query: () => "/users/get-all-users",
      providesTags: ["users"],
    }),
    updateUserRole: builder.mutation({
      query: (data: {
        userEmail: string;
        userRole: "student" | "teacher";
      }) => ({
        url: "/users/update-user-role",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    beAnAdmin: builder.mutation({
      query: (data: { key: string }) => ({
        url: "/users/be-an-admin",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),

    // student related queries/mutations

    getStudent: builder.query({
      query: () => "/students",
      providesTags: ["students"],
    }),
    postStudentPhaseOne: builder.mutation({
      query: (data: {
        firstName: string;
        lastName: string;
        dateOfBirth: number;
        bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
      }) => ({
        url: "/students/auth-phase/one",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["students"],
    }),
    postStudentPhaseTwo: builder.mutation({
      query: (data: { roll: string; session: "2020" | "2021" }) => ({
        url: "/students/auth-phase/two",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["students"],
    }),
    getTeacher: builder.query({
      query: () => "/teachers",
      providesTags: ["teachers"],
    }),
    updateTeacher: builder.mutation({
      query: (data: {
        firstName: string;
        lastName: string;
        bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
        title: "Professor" | "Assistant Professor" | "Lecturer";
      }) => ({
        url: "/teachers",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["teachers"],
    }),
    postCourse: builder.mutation({
      query: (data) => ({
        url: "/courses",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),
    getCourses: builder.query({
      query: () => "/courses/get-all-courses",
      providesTags: ["courses"],
    }),
    getSingleCourse: builder.query({
      query: ({ courseId }: { courseId: string }) => `/courses/${courseId}`,
      providesTags: ["course"],
    }),
    getAllTeachers: builder.query({
      query: () => "/teachers/all",
      providesTags: ["teachers"],
    }),
    deleteCourse: builder.mutation({
      query: (data: { courseId: string }) => ({
        url: `/courses/${data.courseId}`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),
    assignTeacher: builder.mutation({
      query: (data: {
        courseId: string, 
        teacherId: string
      }) => ({
        url: `/courses/assign-teacher/${data.courseId}`,
        method: "PATCH",
        body: {
          teacherId: data.teacherId,
        },
      }),
      invalidatesTags: ["course"]
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useRegisterMutation,
  useGetUserQuery,
  useLoginMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useBeAnAdminMutation,
  useGetStudentQuery,
  usePostStudentPhaseOneMutation,
  usePostStudentPhaseTwoMutation,
  useGetTeacherQuery,
  useUpdateTeacherMutation,
  usePostCourseMutation,
  useGetCoursesQuery,
  useGetSingleCourseQuery,
  useDeleteCourseMutation,
  useAssignTeacherMutation
} = appApi;
