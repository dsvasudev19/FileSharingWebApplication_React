
"use client";

import {Sidebar, Tooltip} from "flowbite-react";
import {FolderInput, Waypoints, FolderOpen, Settings, CircleUserRound, Share, FolderPlus} from "lucide-react";
import CreateFolderModal from "../Modals/CreateFolderModal";
import {useState} from "react";

function SideBar() {
    const [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
    }
    return (
        <Sidebar aria-label="Default sidebar example" className="bg-transparent bg-white" style={{backgroundColor: 'white'}}>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Tooltip content="File Upload" placement="right">
                        <Sidebar.Item href="/file-upload" icon={FolderInput} className="text-left">
                            <span className="hidden lg:block">
                                File Upload
                            </span>
                        </Sidebar.Item>
                    </Tooltip>
                    <Tooltip content="Create Folder" placement="right">

                        <Sidebar.Item
                            icon={FolderPlus} className="text-left">
                            <button onClick={() => setOpenModal(true)}><span className="hidden lg:block">Create Folder</span></button>
                        </Sidebar.Item>
                    </Tooltip>
                    <Tooltip content="Share File" placement="right">
                        <Sidebar.Item href="/share-direct" icon={Share} className="text-left">
                            <span className="hidden lg:block">
                                Share File
                            </span>
                        </Sidebar.Item>
                    </Tooltip>
                    <Tooltip content="Shared With You" placement="right">
                        <Sidebar.Item href="/shares" icon={Waypoints} className="text-left">
                            <span className="hidden lg:block">
                                Shared With You
                            </span>
                        </Sidebar.Item>
                    </Tooltip>
                    <Tooltip content="Folders & Files" placement="right">
                        <Sidebar.Item href="/files" icon={FolderOpen} className="text-left">
                            <span className="hidden lg:block">
                                Folders & Files
                            </span>
                        </Sidebar.Item>
                    </Tooltip>
                    <Tooltip content="Settings" placement="right">
                        <Sidebar.Item href="#" icon={Settings} className="text-left">
                            <span className="hidden lg:block">
                                Settings
                            </span>
                        </Sidebar.Item>
                    </Tooltip>
                    <Tooltip content="Account" placement="right">
                        <Sidebar.Item href="/account" icon={CircleUserRound} className="text-left">
                            <span className="hidden lg:block">
                                Account
                            </span>
                        </Sidebar.Item>
                    </Tooltip>
                </Sidebar.ItemGroup>
                {openModal && <CreateFolderModal isOpen={openModal} closeModal={closeModal} />}
            </Sidebar.Items>
        </Sidebar >
    );
}


export default SideBar;