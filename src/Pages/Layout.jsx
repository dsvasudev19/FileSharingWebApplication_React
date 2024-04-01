import React from "react";
import NavigationMenu from "../Components/NavigationMenu";
import {Outlet} from "react-router-dom";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
export default function Layout() {
    return (
        <div className="align-items-center justify-items-center">
            <NavigationMenu className="sticky top-0"/>
            <div className='flex flex-row justify-between align-center'>
                <div id='sideBar' className='hidden lg:block w-[15%] rounded-lg bg-white mt-5'>
                    <SideBar />
                </div>
                <div id='mainContent' className='w-[80%] rounded-lg xs:ml-10 ml-0'>

                    <Outlet />
                </div>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Footer />

        </div>
    );
}