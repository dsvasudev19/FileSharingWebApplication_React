"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

function FileShareModal({isOpen,fileId,...props}) {
  const [openModal, setOpenModal] = useState(isOpen);
  const [isPasswordEnabled,setIsPasswordEnabled] = useState(true)
  console.log(isOpen)
  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Share File</Modal.Header>
        <Modal.Body>
          {/* <div>
            <div className="mb-2 block">
              <Label htmlFor="fileId" value="FILE_ID" />
              <TextInput
                id="fileId"
                placeholder="File Id you want to Share"
                value={fileId}
                required
              />
            </div>
          </div> */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fileName" value="FILE" />
              <TextInput
                id="fileName"
                placeholder="File Id you want to Share"
                value={props?.fileName||"File Name"}
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
              <TextInput id="email" placeholder="name@company.com" required />
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
                <TextInput id="password" type="password" required />
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Share</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default FileShareModal;