import { JobFormContextProvider } from "./JobFormContext";
import { AuthContextProvider } from "./AdminAuthContexts";
import {JobRequestContextProvider} from "./JobRequestContext"
import {ApplicantDetailsContextProvider} from "./ApplicantDetailsContext"
import {TeacherAuthContextProvider} from "./TeacherAuthContext"
import { AppAuthContextProvider } from "./AuthContext";
import {TeachersContextProvider} from "./TeachersContext"

const CombineContext = (props) => {
  return (
    <AppAuthContextProvider>
    <AuthContextProvider>
      <TeachersContextProvider>
      <TeacherAuthContextProvider>
      <JobRequestContextProvider>
      <JobFormContextProvider>
        <ApplicantDetailsContextProvider>
            {props.children}
            </ApplicantDetailsContextProvider>
      </JobFormContextProvider>
      </JobRequestContextProvider>
      </TeacherAuthContextProvider>
      </TeachersContextProvider>
    </AuthContextProvider>
    </AppAuthContextProvider>
  );
};


export default CombineContext