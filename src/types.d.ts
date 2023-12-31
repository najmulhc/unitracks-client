export type Role = "admin" | "unassigned" | "teacher" | "student";

export type IconProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
};

export type User = {
  email: string;
  role: "unassigned" | "admin" | "teacher" | "student";
  _id: string;
};

export interface FetchingError extends FetchBaseQueryError {
  data: {
    message: string;
  };
}

export interface DeleteUserProps {
  email: string;
  _id: string;
}
export interface ModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  children?: React.ReactNode;
}

 

export type Role = "unassigned" | "admin" | "teacher" | "student";

export interface UserType {
  _id: ObjectId;
  name?: string;
  hashedPassword: string;
  role: Role;
  email: string;
  details:string;
  refreshToken: string | undefined;
}

export interface StudentType {
  role: "student";
  authStage: "one" | "two" | "completed";
  roll: string;
  session: "2021" | "2020";
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  dateOfBirth: number;
  firstName: string;
  lastName: string;
  courses:string[];
  email: string;
  _id:string;
}

// not created the Schema
export interface TeacherType {
  _id:string;
  firstName: string;
  lastName: string;
  email: string;
  courses:string[];
  role: "teacher";
  title: "Professor" | "Assistant Professor" | "Lecturer";
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  authStage: "one" | "completed";
}

export interface NotificationType {
  _id: ObjectId;
  title: string;
  time: number;
  setter:string; // the person set the notification
  studentsFor:string[];
  views:string[]; // if there is in view, that meens seen.
}

export interface QuestionType {
  _id: ObjectId;
  question: string;
  options: string[];
  correctAnswer: number; // index of the right answer in the options
}

export interface StudentQuizType {
  _id: ObjectId;
  student:string;
  attempted: number;
  correct: number;
  wrong: number;
  score: number;
}

export interface QuizType {
  _id: ObjectId;
  teacher:string;
  course:string;
  questions: QuestionType[];
  participents: StudentQuizType[];
  name: string;
}

export interface CourseType {
  teacher:string;
  session: "2020" | "2021";
  students: [mongoose.Schema.Types.ObjectId];
  courseCode: 101 | 102 | 103 | 104 | 105;
  name: string;
  _id: ObjectId;
  resources: [mongoose.Types.ObjectId];
  coverImage: string;
}

export interface AdminType {
  email: string;
  _id: ObjectId;
  role: "admin";
}

export interface UserRequest extends Request {
  user: UserType;
  student?: StudentType;
  admin?: AdminType;
  teacher?: TeacherType;
  course?: CourseType;
}

export interface ResourceType {
  title: string;
  link: string; // stored link
  teacher:string;
  course:string;
  _id: ObjectId;
}

export interface CourseColorType {
  code: string;
}
