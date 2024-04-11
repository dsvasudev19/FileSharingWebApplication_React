import React, {useState} from "react";
import {Dropdown} from "flowbite-react";
import {EllipsisVertical} from "lucide-react";
import {Link,useNavigate} from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast';
import {axiosInstance} from "../../axiosInstance";
const Folder = (props) => {
    const navigate=useNavigate();
    const deleteFolder = async (fileRef) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {

            if (result.isConfirmed) {
                const deleteToast = toast.loading("Deleting File for you")
                try {
                    const response = await axiosInstance.delete("/api/folder/" + fileRef);
                    console.log(response);
                    if (response.status === 200) {
                        toast.success("File deleted successfully", {
                            id: deleteToast
                        });
                        props.getFolders();
                    }
                } catch (error) {
                    console.log(error);
                    toast.error("Error deleting the file", {
                        id: deleteToast
                    })
                }
            }
        });

    }

    return (
        <div class="w-24 md:w-32 h-auto bg-white rounded-lg shadow-gray-900 mt-3" onDoubleClick={(e) => {
            navigate(`/view-folder?folder=${ props?.name }&_f_Id=${ props.id }`)
        }}>
            <Link>
                <a >
                    <img
                        class="rounded-t-lg"
                        src="/folder.png"
                        alt=""
                    />
                </a>
            </Link>
            <div class="p-2 flex justify-between">
                <a href="#">
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {props?.name || "folder"}
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
                        <Dropdown.Item onClick={() => {deleteFolder(props.refe); console.log("clicked")}}>Delete</Dropdown.Item>
                        <Dropdown.Item>Download</Dropdown.Item>
                    </Dropdown>
                </a>
            </div>
        </div>
    );
};

export default Folder;