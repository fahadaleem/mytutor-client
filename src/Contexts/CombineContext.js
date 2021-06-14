import { JobFormContextProvider } from "./JobFormContext";
import { AuthContextProvider } from "./AdminAuthContexts";
import {JobRequestContextProvider} from "./JobRequestContext"


const CombineContext = (props) => {
  return (
    <AuthContextProvider>
      <JobRequestContextProvider>
      <JobFormContextProvider>
            {props.children}
      </JobFormContextProvider>
      </JobRequestContextProvider>
    </AuthContextProvider>
  );
};


export default CombineContext