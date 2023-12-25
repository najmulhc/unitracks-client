import { useNavigate } from "react-router";
import { useGetStudentQuery } from "../../../redux/services/apiSlice";
import { FetchingError } from "../../../types";
import DashboardContainer from "../../containers/DashboardContainer";
import { useEffect } from "react";
import DashboardSidebar from "../sidebar/DashboardSidebar";
const StudentDashboard = () => {
  const { data: studentData, error } = useGetStudentQuery({});
  const student = studentData?.data?.student;
  const navigate = useNavigate();

  // error handling while fetching the student.
  const studentLoadingError: FetchingError = error as FetchingError;
  if (studentLoadingError) {
    console.log(studentLoadingError.data);
  }

  // will send the student to the specific register form based on the auth stage
  useEffect(() => {
    const authStage = student?.authStage;
    if (authStage === "one") {
      navigate("/student/register/one");
    } else if (authStage === "two") {
      navigate("/student/register/two");
    }
  }, [student, navigate]);
  return (
    <DashboardContainer>
      <DashboardSidebar />
      <div className="prose">
        <h2>
          Hi, {student?.firstName} {student?.lastName}!
        </h2>
      </div>
    </DashboardContainer>
  );
};

export default StudentDashboard;