import { JobFormContextProvider } from "./JobFormContext";
import { AuthContextProvider } from "./AdminAuthContexts";
import {JobRequestContextProvider} from "./JobRequestContext"
import {ApplicantDetailsContextProvider} from "./ApplicantDetailsContext"
import {TeacherAuthContextProvider} from "./TeacherAuthContext"

const CombineContext = (props) => {
  return (
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
  );
};


export default CombineContext