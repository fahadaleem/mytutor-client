import React, { createContext, useState, useEffect } from "react";
import firebase from "../Components/firebaseconfig";
import baseUrl from "../mytutor-backend";
import axios from "axios";
import Swal from "sweetalert2";
import handleSendEmail from "../email";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  // to check if the user is login or not
  const [isLogin, setIsLogin] = useState(true);

  // save admin info
  const [admin, setAdmin] = useState({
    role:'',
  });

  // used for loader, it runs till the response comes from the firebase
  const [loading, setLoading] = useState(null);

  // this is used for error checking
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
    errorCode: 0,
  });

  // function that will execute when the form is submitted
  const handleLogin = (credentials) => {
    setLoading(true);

    if (credentials.email === "" && credentials.password === "") {
      setError({
        isError: true,
        errorMessage: "Please Enter Email and Password",
        errorCode: 104,
      });
      setLoading(false);

      return false;
    } else if (credentials.email === "") {
      setError({
        isError: true,
        errorMessage: "Please Enter Email",
        errorCode: 102,
      });
      setLoading(false);

      return false;
    } else if (credentials.password === "") {
      setError({
        isError: true,
        errorMessage: "Please Enter Password",
        errorCode: 103,
      });
      setLoading(false);

      return false;
    } else if (credentials.email && credentials.password) {
      const resp = axios
        .get(`${baseUrl}/get-all-admin?email=${credentials.email}`)
        .then((resp) => {
          if (resp.data.code === "201") {
            setLoading(false);
            setError({
              isError: true,
              errorMessage: "Email does not exist!",
              errorCode: 102,
            });
          } else if (resp.data.code === "200") {
            firebase
              .auth()
              .signInWithEmailAndPassword(
                credentials.email,
                credentials.password
              )
              .then((data) => {
                setLoading(false);
                setIsLogin(true);
                console.log(resp.data, 'fahad')
                setAdmin(resp.data.admin_info);
                if (credentials.rememberMe) {
                  window.localStorage.setItem("isLogin", true);
                  window.localStorage.setItem(
                    "admin_info",
                    JSON.stringify(resp.data.admin_info)
                  );
                }
              })
              .catch((error) => {
                setLoading(false);
                setError({
                  isError: true,
                  errorMessage: error.message,
                  errorCode: 101,
                });
              });
          }

          console.log(resp);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleGenerateEmailMessage = (role, email, password) => {
    const messages = {
      Moderator: `<p style="font-size:20px">You are now ${role} of Mytutor. As ${role} you can do the following things at myTutor platform</p>
      <ul>
      <li style="font-size:18px">You can view teachers details</li>
      <li style="font-size:18px">You can view course details</li>
      <li style="font-size:18px">You can edit course details</li>
      <li style="font-size:18px">You can add new course</li>
      <li style="font-size:18px">You can hire a new teacher</li>
      <li style="font-size:18px">You can view student details</li>
      <li style="font-size:18px">You can contact with anyone teacher/student from mytutor chat application feature.</li>
      </ul>
      <p style="font-size:20px">Following are the login credentials of your account:</p>
      <p style="font-size:20px"><strong>Email: ${email};</strong></p>
      <p style="font-size:20px"><strong>Password: ${password}</strong></p>
      <p style="font-size:20px">To login you account <a href="https://my-tutor-iad.herokuapp.com/admin" target="_blank" rel="noopener">click here</a></p>
      <p>&nbsp;</p>
      <p style="font-size:20px">Regards:&nbsp;<br />Muhammad Fahad Aleem.</p>`,
      Viewer: `<p font-size:20px>You are now ${role} of Mytutor. As ${role}&nbsp;you can do the following things at myTutor platform</p>
      <ul>
      <li style="font-size:18px">You can view teachers details</li>
      <li style="font-size:18px">You can view course details</li>
      <li style="font-size:18px">You can view Applicant Details</li>
      <li style="font-size:18px">You can view student details</li>
      </ul>
      <p style="font-size:20px">Following are the login credentials of your account:</p>
      <p style="font-size:20px"><strong>Email: ${email}</strong></p>
      <p style="font-size:20px"><strong>Password: ${password}</strong></p>
      <p style="font-size:20px">To login you account <a href="https://my-tutor-iad.herokuapp.com/admin" target="_blank" rel="noopener">click here</a></p>
      <p>&nbsp;</p>
      <p style="font-size:20px">Regards:&nbsp;<br />Muhammad Fahad Aleem.</p>`,
      Administrator: `<p style="font-size:20px">You are now ${role} of Mytutor. As ${role}&nbsp;you can do the following things at myTutor platform</p>
      <ul>
      <li style="font-size:18px">You can view applicants</li>
      <li style="font-size:18px">You can hire new applicants as teacher</li>
      <li style="font-size:18px">You can view teachers details</li>
      <li style="font-size:18px">You can delete teachers</li>
      <li style="font-size:18px">You can assign new course to teacher</li>
      <li style="font-size:18px">You can view course details</li>
      <li style="font-size:18px">You can edit course details</li>
      <li style="font-size:18px">You can delete courses</li>
      <li style="font-size:18px">You can view student details</li>
      <li style="font-size:18px">You can delete student</li>
      <li style="font-size:18px">You can contact with anyone teacher/student from mytutor chat application feature.</li>
      </ul>
      <p style="font-size:20px">Following are the login credentials of your account:</p>
      <p style="font-size:20px"><strong>Email: ${email}</strong></p>
      <p style="font-size:20px"><strong>Password: ${password}&nbsp;</strong></p>
      <p style="font-size:20px">To login you account <a href="https://my-tutor-iad.herokuapp.com/admin" target="_blank" rel="noopener">click here</a></p>
      <p>&nbsp;</p>
      <p style="font-size:20px">Regards:&nbsp;<br />Muhammad Fahad Aleem.</p>`,
    };
    return messages[role];
  };

  async function handleAddNewAdmin(data) {
    console.log(data);
    let isError = false;
    try {
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/add-new-admin`,
        data: data,
      });

      if (response.data.code === "200") {
        firebase
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(userCredential);
            const message = handleGenerateEmailMessage(
              data.role,
              data.email,
              data.password
            );
            console.log(message);
            handleSendEmail("general", data.name, data.email, message);

            Swal.fire({
              icon: "success",
              title: "Success",
              text: `New ${data.role} added successfully!`,
            }).then(() => {});

            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            isError = true;
            Swal.fire({
              icon: "error",
              title: "Error",
              text: errorMessage,
            }).then(() => {});
            // ..
          });
      } else if (response.data.code === "201") {
        isError = true;
        Swal.fire({
          icon: "error",
          title: "error",
          text: `This user is already added!`,
        }).then(() => {});
      }

      return isError;
    } catch (error) {
      console.log(error);
      // alert(error)
    }
  }

  const handleLogOut = () => {
    setIsLogin(false);
    window.localStorage.setItem("isLogin", false);
  };

  const handleResetPassword = (emailAddress) => {
    // login to reset the password.
    firebase
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        // Email sent.
        alert("Email has be sent to your email!");
      })
      .catch(function (error) {
        alert(error.message);
        // An error happened.
      });
  };

  useEffect(() => {
    const checkLogin = window.localStorage.getItem("isLogin");
    const adminInfo = window.localStorage.getItem("admin_info");
    setIsLogin(JSON.parse(checkLogin));
    setAdmin(JSON.parse(adminInfo));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        handleSubmit: handleLogin,
        loading,
        error,
        handleSetError: setError,
        isLogin,
        handleLogOut,
        handleResetPassword,
        handleAddNewAdmin,
        admin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
