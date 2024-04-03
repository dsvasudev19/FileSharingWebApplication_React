
"use client";

import {Avatar, Dropdown, Navbar} from "flowbite-react";

function NavigationMenu() {
    return (
        <Navbar fluid rounded className="h-max-content text-xl border-2 border-black-900 sticky top-0">
            <Navbar.Brand className="">
                {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FileUpload</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {/* <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    
                </Dropdown> */}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
                <Navbar.Link href="/file-upload" className="block md:hidden">File Upload</Navbar.Link>
                <Navbar.Link href="/folder-create" className="block md:hidden">Create Folder</Navbar.Link>
                <Navbar.Link href="/file-preview" className="block md:hidden">Shared With You</Navbar.Link>
                <Navbar.Link href="#" className="block md:hidden">Files</Navbar.Link>
                <Navbar.Link href="#" className="block md:hidden">Settings</Navbar.Link>
                <Navbar.Link href="/account" className="block md:hidden">Account</Navbar.Link>
                
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavigationMenu;