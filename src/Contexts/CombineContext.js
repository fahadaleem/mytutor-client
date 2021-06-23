import { JobFormContextProvider } from "./JobFormContext";
import { AuthContextProvider } from "./AdminAuthContexts";
import {JobRequestContextProvider} from "./JobRequestContext"
import {ApplicantDetailsContextProvider} from "./ApplicantDetailsContext"
import {TeacherAuthContextProvider} from "./TeacherAuthContext"
import { AppAuthContextProvider } from "./AuthContext";

const CombineContext = (props) => {
  return (
    <AppAuthContextProvider>
    <AuthContextProvider>
      <TeacherAuthContextProvider>
      <JobRequestContextProvider>
      <JobFormContextProvider>
        <ApplicantDetailsContextProvider>
            {props.children}
            </ApplicantDetailsContextProvider>
      </JobFormContextProvider>
      </JobRequestContextProvider>
      </TeacherAuthContextProvider>
    </AuthContextProvider>
    </AppAuthContextProvider>
  );
};


export default CombineContext