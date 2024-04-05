import React, {useState} from "react";
import {Dropdown} from "flowbite-react";
import {EllipsisVertical} from "lucide-react";
import FileShareModal from "../Modals/FileShareModal";
import ImagePopUpModal from './../Modals/ImagePopUpModal'
const File = (props) => {
  const [open, setOpen] = useState(false);
  const [viewModal,setViewModal]=useState(false);
  const [path,setPath] = useState("");
  const closeViewModal=()=>{
    setViewModal(false);
  }
  const closeModal = () => {
    setOpen(false);
  }
  return (
    <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
      {
        props.type && props.type.startsWith("image") ? <a href="#">
          <img
            class="rounded-t-lg  max-h-48 w-64 object-fit"
            src={props?.path}
            alt=""
            onClick={()=>{setViewModal(true);setPath(props.path)}}
          />
        </a> : <a href="/file-share-icon-vector-37625001.jpg" download={``} >
          <img
            class="rounded-t-lg max-h-48 w-64 object-fit"
            src="/Placeholder-image.png"
            alt=""
          />
        </a>
      }


      <div class="p-2 flex justify-between">
        <a href="#">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
        <a className="hover:cursor-pointer mt-1">
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <span>
                <EllipsisVertical />
              </span>
            )}
          >
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item>Delete</Dropdown.Item>
            <Dropdown.Item>Download</Dropdown.Item>
            <Dropdown.Item onClick={() => {
              setOpen(true);
              console.log("Share button clicked");
            }}>
              Share
            </Dropdown.Item>
          </Dropdown>
        </a>
      </div>
      {open && <FileShareModal isOpen={open} fileId={"FILE123"} closeModal={closeModal} />}
      {viewModal && <ImagePopUpModal viewModal={viewModal} closeViewModal={closeViewModal} {...props}/>}
    </div>
  );
};

export default File;
