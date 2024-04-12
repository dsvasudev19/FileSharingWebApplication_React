import React, {useState} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {useAuth} from "./../AuthContext";
import {useNavigate} from "react-router-dom"; 
import {useGoogleLogin} from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});


const Login = ({className}) => {
  const [loading,setLoading]=useState(false);
  const {login} = useAuth();
  const [status,setStatus] = useState("");
  const navigate=useNavigate();
  const handleSubmit = async (values) => {
    try {
      console.log("values", values)
      await login(values);
    } catch (error) {
      console.log(error);
      setStatus(error.message)
    }
  };
  const authLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const token = codeResponse.access_token;
    },
    onFailure: error => console.log(error)
  });
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto rounded-lg"
          src="/file-share-icon-vector-37625001.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-red-700">
          {status !== "" ? status : ""}
        </h2>
        <button className="text-xl font-semibold border-2 border-blue-300 rounded-md p-2 m-3 bg-blue-300 hover:bg-white">Sign in with Google 🚀</button>
        <br></br>
        <span className="text-xl">or</span>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{email: "", password: ""}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({setFieldValue}) => (
            <Form className="space-y-6">
              <div className="relative">
                <Field
                  type="text"
                  id="floating_filled"
                  name="email"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Email
                </label>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="relative">
                <Field
                  type="password"
                  id="floating_filled"
                  name="password"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Password
                </label>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {!loading ? "Login":"Please Wait"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
