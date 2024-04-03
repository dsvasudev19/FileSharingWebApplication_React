"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import {FolderPlus} from "lucide-react";
import { useRef, useState } from "react";

function CreateFolderModal({ isOpen, closeModal }) {
  const [openModal, setOpenModal] = useState(isOpen);
  const [passwordEnabled, setPasswordEnabled] = useState(false);
  const folderNameInputRef = useRef(null);


  return (
    <>
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
                <TextInput id="password" type="password" required />
              </div>
            )}
            <div className="w-full">
              <Button>Create</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateFolderModal;
