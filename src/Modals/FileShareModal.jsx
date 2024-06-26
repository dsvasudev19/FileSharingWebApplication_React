"use client";

import {Button, Checkbox, Label, Modal, TextInput} from "flowbite-react";
import {useState} from "react";
import {axiosInstance} from "../../axiosInstance";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import toast, {Toaster} from 'react-hot-toast'

function FileShareModal({isOpen, fileId, closeModal, fileName, fileRef, ...props}) {
  const [openModal, setOpenModal] = useState(isOpen);
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const share = async () => {
    try {
      let values = {
        email: email,
        fileRef:fileRef
      }
      if (password) {
        values = {password, ...values}
      }
      if(email){
        if(isPasswordEnabled && !password){
          toast.error("Please Fill the Password or else Uncheck the Enable Password")
        }
        else{
          const response = await axiosInstance.post("/api/share/uploaded/user", values);
          console.log(response)
          if (response.status === 200) {
            toast.success("File Shared Successfully")
          }
        }
      }else{
        toast.error("Receiver Email shoulnot be left empty")
      }
    } catch (error) {
      console.log(error)
      toast.error("Error while sharing the file")
    }
  }



  return (
    <>
      <Toaster position={"top-right"} reverseOrder={true} />
      <Modal dismissible show={openModal} onClose={() => {setOpenModal(false); closeModal()}}>
        <Modal.Header>Share File</Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fileName" value="FILE" />
              <TextInput
                id="fileName"
                placeholder="File Id you want to Share"
                value={fileName || "File Name"}
                required
                contentEditable={false}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Receiver email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" onChange={(e)=>{setEmail((prev)=>{return e.target.value})}} />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id="passwordEnable"
                checked={isPasswordEnabled}
                onChange={(e) => {
                  setIsPasswordEnabled(e.target.checked);
                }}
              />
              <Label htmlFor="passwordEnable">Enable Password</Label>
            </div>
          </div>
          {isPasswordEnabled && (
            <div className="mt-3">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" onChange={(e)=>{setPassword((prev)=>{return e.target.value})}} />
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {share(),setOpenModal(false)}}>Share</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default FileShareModal;