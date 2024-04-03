import {Zap} from "lucide-react";
import React, {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const fileUploadValidationSchema = Yup.object({
  file: Yup.mixed().required("File is Required"),
});

const initialValues = {
  file: "",
  password: "",
};

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [enablePassword, setEnablePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [fileSize,setFileSize]=useState(0);
  return (
    <div className="justify-center text-center p-3 mt-3">
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className="text-3xl font-bold mb-6">Upload Single File</div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values,{resetForm}) => {
          if (!file) {
            toast.error("Please select a file");
          } else if (enablePassword && !values.password) {
            toast.error("Please enter a password");
          } else {
            
            let formData=new FormData();
            formData.append("file",file);
            formData.append("password",values.password);
            
            const toastId = toast.loading("Uploading File...");
            try{
              // const 
              toast.success("File Uploaded Successfully", {
                id: toastId,
              });
            }catch(error){
              console.log(error)
            }
              
            
            setFile(null);
            resetForm();
          }
        }}
      >
        {({setFieldValue}) => (
          <Form>
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-3/4">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">
                        Click to <span className="text-blue-900 fw-bold">upload</span>
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      console.log(e.target.files[0]);
                      setFieldValue('file', e.target.files[0])
                      const fileSizeInBytes = e.target.files[0].size;
                      const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
                      setFileSize(fileSizeInMB);
                    }}
                  />
                </label>
              </div>
            </div>
            {file && (
              <div className="flex justify-center">
                <div className="flex justify-center mt-6 max-w-fit border-2 border-black p-5 rounded-lg">
                  <div className="w-24 h-24 rounded-sm ">
                    <img
                      src="/google-docs.png"
                      className="w-full h-full object-cover"
                      alt="file"
                    />
                  </div>
                  <div className="justify-start ml-5 text-left">
                    <a>
                      <div className="text-xl font-bold">{file?.name}</div>
                      <div className="flex justify-start text-lg text-red-700">
                        {file?.type}
                      </div>
                      <div className="flex justify-start text-lg">
                        Size:{" "}{fileSize >= 1
                          ? `${ fileSize.toFixed(2) } MB`
                          : `${ Math.ceil(fileSize * 1024) } KB`}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {file && (
              <div>
                <div className="flex justify-center m-5">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-blue-600"
                    checked={enablePassword}
                    onChange={(e) => {
                      setEnablePassword(e.target.checked);
                    }}
                  />
                  <label className="text-sm text-gray-500 dark:text-gray-400">
                    <a href="#" className="text-blue-600 ml-2 text-md font-bold">
                      {" "}
                      Enhance your file's Protection by providing a password
                    </a>
                  </label>
                </div>
                {enablePassword && (
                  <div className="flex justify-center m-5">
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="border-2 border-gray-300 rounded-lg p-2 w-80"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setFieldValue("password", e.target.value);
                      }}
                    />
                  </div>
                )}
              </div>
            )}
            <div className="flex justify-center m-5">
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                // disabled={!file}
                type="submit"
                // onClick={handleSubmit}
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Upload
                </span>
              </button>
            </div>
          </Form>)}
      </Formik>
    </div>
  );
};

export default FileUpload;
