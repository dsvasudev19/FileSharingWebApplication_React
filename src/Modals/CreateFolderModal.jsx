"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import {FolderPlus} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast,{Toaster} from 'react-hot-toast'
import {axiosInstance} from './../axiosInstance'


function CreateFolderModal({ isOpen, closeModal }) {
  const [openModal, setOpenModal] = useState(isOpen);
  const [passwordEnabled, setPasswordEnabled] = useState(false);
  const folderNameInputRef = useRef(null);
  const [name,setName]=useState("");
  const [password,setPassword]=useState("")
  
  const handleSubmit=async()=>{
    const createToast=toast.loading("Creating folder for you");
    if (!name || (passwordEnabled && !password)){
    toast.error("Folder name or Password is missing",{
      id: createToast
    })
   }
   else{
    try {
      const response=await axiosInstance.post("/api/folder",{name,password});
      if(response.status===201){
        console.log("success");
        toast.success("Successfully Created the Folder",{
          id: createToast
        })
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while creating the Folder",{
        id: createToast
      })
    }finally{
      setOpenModal(false);
      closeModal();
    }
   }
   
  }
  
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => {
          setOpenModal(false);
          closeModal();
        }}
        initialFocus={folderNameInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white flex ">
              <FolderPlus className="mr-2 ml-2 mt-1 text-green-500" /> Create
              New Folder
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Folder Name" />
              </div>
              <TextInput
                id="name"
                placeholder="Ex:MyFiles"
                required
                ref={folderNameInputRef}
                onChange={(e)=>{
                  setName(e.target.value)
                }}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="passwordEnabled"
                  checked={passwordEnabled}
                  onChange={(e) => {
                    setPasswordEnabled(e.target.checked);
                  }}
                />
                <Label htmlFor="passwordEnabled">Secure Me</Label>
              </div>
            </div>
            {passwordEnabled && (
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" name="password" required onChange={(e)=>{
                  console.log(e.target.value)
                  setPassword(e.target.value)
                }}/>
              </div>
            )}
            <div className="w-full">
              <Button type="submit" onClick={handleSubmit}>Create</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateFolderModal;
