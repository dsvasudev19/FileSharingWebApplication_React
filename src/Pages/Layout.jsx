import React from "react";
import NavigationMenu from "../Components/NavigationMenu";
import {Outlet} from "react-router-dom";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import './../App.css'
export default function Layout() {
    return (
        <div className="align-items-center justify-items-center max-h-100">
            <NavigationMenu className="sticky top-0"/>
            <div className='flex flex-row '>
                <div id='sideBar' className='w-[16%] md:w-[18%] rounded-lg bg-white mt-5 overflow-hidden'>
                    <SideBar className="bg-white"/>
                </div>
                <div id='mainContent' className='w-[82%] rounded-lg ml-2 max-h-[90vh] overflow-y-auto'>

                    <Outlet />
                </div>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Footer />

        </div>
    );
}