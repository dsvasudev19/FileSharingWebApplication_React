import React, {useEffect, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button,Badge } from "flowbite-react";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  first_name: Yup.string().required("First Name is Required"),
  last_name: Yup.string().required("Last Name is Required"),
  dob: Yup.date().required("Date of Birth is Required"),
  location: Yup.string().required("Location is Required"),
  username: Yup.string().required("Username is Required"),
});
const AccountsPage = () => {
    const [formLoading,setFormLoading]=useState(false);
    const {user,loading,logout} = useAuth();
    const navigate=useNavigate();
  const initialValues = {
    first_name: "Darse Shikari",
    last_name: "Vasudev",
    dob: "2001-10-19",
    location: "Hyderabad",
    email: "vasudevds1729@gmail.com",
    username: "vasudevds",
  };

  useEffect(()=>{
    if(!loading && !user){
      navigate("/login");
    }
  },[user,loading])

  return (
    <div className="block lg:flex justify-center gap-4 mt-5">
      <Toaster position="top-right" reverseOrder={false} />
      <div
        id="image"
        className="h-fit-content md:min-h-96 ml-16 lg:ml-0 w-[87%] lg:w-[40%] xl:w-[30%] border-2 border-red-400 rounded-lg pb-3 md:pb-0"
      >
        <div className="h-[40%] w-full mt-4 md:mt-0 mb-2 flex justify-center items-center">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="h-24 w-24 object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold">User Name</h1>
          <p className="text-center text-lg"></p>
        </div>

        <div className="flex justify-center items-center gap-2 mt-3 mb-3 md:mb-0">
          <Button outline gradientDuoTone="cyanToBlue">
            Friends
            <Badge color="success" className="ml-2 ">
              234
            </Badge>
          </Button>
          <Link to={"/files"}>
            <Button outline gradientDuoTone="greenToBlue">
              Files
              <Badge color="info" className="ml-2 ">
                12
              </Badge>
            </Button>
          </Link>
        </div>
        
        <div className="h-[33%] w-full rounded-b-lg flex flex-col justify-end items-center">
          <div className="h-1/3 w-full flex justify-center items-center">
            <Button outline gradientDuoTone="purpleToBlue" onClick={()=>{
              logout()
            }}>
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div
        id="text"
        className="w-[87%] mt-3 ml-16 lg:ml-0 md:mt-0 lg:w-[55%] xl:w-[70%] border-2 border-blue-400 rounded-lg pb-3 md:pb-0"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values, "values");
            setFormLoading(true);
            setTimeout(() => {
              setFormLoading(false);
            }, 1000);
            toast.success("Account Updated Successfully");
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="flex justify-between gap-6 p-5">
                <div className="justify-start text-left w-full">
                  <label className="required">First Name</label>
                  <Field
                    type="text"
                    name="first_name"
                    className="border-2 border-gray-400 rounded-lg w-full p-2"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="justify-start text-left w-full">
                  <label className="">Last Name</label>
                  <Field
                    type="text"
                    name="last_name"
                    className="border-2 border-gray-400 rounded-lg w-full p-2"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-6 p-5">
                <div className="justify-start text-left w-full">
                  <label className="required">Date of Birth</label>
                  <Field
                    type="date"
                    name="dob"
                    className="border-2 border-gray-400 rounded-lg w-full p-2"
                  />
                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="justify-start text-left w-full">
                  <label className="required">Location</label>
                  <Field
                    type="text"
                    name="location"
                    className="border-2 border-gray-400 rounded-lg w-full p-2"
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-6 p-5">
                <div className="justify-start text-left w-1/2">
                  <label className="required">Email</label>
                  <Field
                    type="text"
                    name="email"
                    className="border-2 border-gray-400 rounded-lg w-full p-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="justify-start text-left w-1/2">
                  <label className="required">Username</label>
                  <Field
                    type="text"
                    name="username"
                    className="border-2 border-gray-400 rounded-lg w-full p-2"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button outline gradientDuoTone="greenToBlue" type="submit">
                  {!formLoading ? "Save Changes" : "Saving Changes..."}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AccountsPage;
