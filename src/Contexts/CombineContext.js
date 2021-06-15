import { JobFormContextProvider } from "./JobFormContext";
import { AuthContextProvider } from "./AdminAuthContexts";
import {JobRequestContextProvider} from "./JobRequestContext"
import {ApplicantDetailsContextProvider} from "./ApplicantDetailsContext"


const CombineContext = (props) => {
  return (
    <AuthContextProvider>
      <JobRequestContextProvider>
      <JobFormContextProvider>
        <ApplicantDetailsContextProvider>
            {props.children}
            </ApplicantDetailsContextProvider>
      </JobFormContextProvider>
      </JobRequestContextProvider>
    </AuthContextProvider>
  );
};


export default CombineContext