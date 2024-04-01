
"use client";

import {Sidebar} from "flowbite-react";
import {FolderInput, Waypoints, FolderOpen, Settings, CircleUserRound, Share} from "lucide-react";

function SideBar() {
    return (
        <Sidebar aria-label="Default sidebar example" className="bg-transparent bg-white" style={{backgroundColor:'white'}}>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/file-upload" icon={FolderInput } className="text-left">
                        File Upload
                    </Sidebar.Item>
                    <Sidebar.Item href="/share-direct" icon={Share} className="text-left">
                        Share without Upload
                    </Sidebar.Item>
                    <Sidebar.Item href="/shares" icon={Waypoints} className="text-left">
                        Shared With You
                    </Sidebar.Item>
                    <Sidebar.Item href="/files" icon={FolderOpen} className="text-left">
                        Files
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={Settings} className="text-left">
                        Settings
                    </Sidebar.Item>
                    <Sidebar.Item href="/account" icon={CircleUserRound} className="text-left">
                        Account
                    </Sidebar.Item>
                    
                    
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}


export default SideBar;