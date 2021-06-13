import { JobFormContextProvider } from "./JobFormContext";
import { AuthContextProvider } from "./AdminAuthContexts";



const CombineContext = (props) => {
  return (
    <AuthContextProvider>
      <JobFormContextProvider>
            {props.children}
      </JobFormContextProvider>
    </AuthContextProvider>
  );
};


export default CombineContext