// import React from "react";
// import NavigationMenu from "../Components/NavigationMenu";
// import {Outlet} from "react-router-dom";
// import SideBar from "../Components/SideBar";
// import Footer from "../Components/Footer";
// import './../App.css'
// export default function Layout() {
//     return (
//         <div className="align-items-center justify-items-center max-h-100">
//             <NavigationMenu className="sticky top-0"/>
//             <div className='flex flex-row '>
//                 <div id='sideBar' className='w-[16%] md:w-[18%] rounded-lg bg-white mt-5 overflow-hidden'>
//                     <SideBar className="bg-white"/>
//                 </div>
//                 <div id='mainContent' className='w-[82%] rounded-lg ml-2 max-h-[90vh] overflow-y-auto'>

//                     <Outlet />
//                 </div>
//             </div>
//             <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//             <Footer />

//         </div>
//     );
// }

import React from "react";
import NavigationMenu from "../Components/NavigationMenu";
import {Outlet} from "react-router-dom";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";


export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationMenu className="sticky top-0 z-10" />
            
            <div className="flex flex-col md:flex-row flex-1 max-w-screen px-4 py-5">
                <div id="sideBar" className="w-full md:w-64 lg:w-72 mb-4 md:mb-0 md:mr-4 rounded-lg bg-white shadow-sm">
                    <SideBar />
                </div>
                
                <div id="mainContent" className="flex-1 rounded-lg bg-white shadow-sm overflow-y-auto max-h-[calc(100vh-12rem)]">
                    <Outlet />
                </div>
            </div>
            
            <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
            <Footer />
        </div>
    );
}
