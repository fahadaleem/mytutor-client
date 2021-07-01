import { JobFormContextProvider } from "./JobFormContext";
import { AuthContextProvider } from "./AdminAuthContexts";
import { JobRequestContextProvider } from "./JobRequestContext";
import { ApplicantDetailsContextProvider } from "./ApplicantDetailsContext";
import { TeacherAuthContextProvider } from "./TeacherAuthContext";
import { AppAuthContextProvider } from "./AuthContext";
import { TeachersContextProvider } from "./TeachersContext";
import { CourseContextProvider } from "./CourseContext";

const CombineContext = (props) => {
  return (
    <AppAuthContextProvider>
      <AuthContextProvider>
        <TeachersContextProvider>
          <TeacherAuthContextProvider>
            <JobRequestContextProvider>
              <JobFormContextProvider>
                <CourseContextProvider>
                  <ApplicantDetailsContextProvider>
                    {props.children}
                  </ApplicantDetailsContextProvider>
                </CourseContextProvider>
              </JobFormContextProvider>
            </JobRequestContextProvider>
          </TeacherAuthContextProvider>
        </TeachersContextProvider>
      </AuthContextProvider>
    </AppAuthContextProvider>
  );
};

export default CombineContext;
