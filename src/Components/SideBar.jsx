
"use client";

import {Sidebar} from "flowbite-react";
import {FolderInput, Waypoints, FolderOpen, Settings, CircleUserRound} from "lucide-react";

function SideBar() {
    return (
        <Sidebar aria-label="Default sidebar example" className="bg-transparent bg-white" style={{backgroundColor:'white'}}>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/file-upload" icon={FolderInput }>
                        File Upload
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={Waypoints} >
                        Shared With You
                    </Sidebar.Item>
                    <Sidebar.Item href="/files" icon={FolderOpen}>
                        Files
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={Settings} >
                        Settings
                    </Sidebar.Item>
                    <Sidebar.Item href="/account" icon={CircleUserRound}>
                        Account
                    </Sidebar.Item>
                    
                    
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}


export default SideBar;