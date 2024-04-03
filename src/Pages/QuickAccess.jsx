import React from 'react';
import File from './../Components/File';
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
const QuickAccess = (props) => {

    const [folderName, setFolderName] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const folderType = urlParams.get("type");
        console.log(folderType);
        if (folderType) {
            setFolderName(folderType);
        }
    }, []);


    return (
        <div className='mt-5 border-2 border-slate-600 rounded-lg'>
            <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl m-5 font-bold'>Content's of {folderName} </h1>
            <h2 className='justify-start text-left ml-3 text-2xl font-bold'>Today</h2>
            <div className='grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-3 pl-3 pb-3'>
                {
                    Array.from({length: 5}).map((_, index) => (
                        <File />
                    ))

                }
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className='grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-3 pl-3 pb-3'>
                {
                    Array.from({length: 5}).map((_, index) => (
                        <File />
                    ))

                }
            </div>
            <h2 className='justify-start text-left ml-3 text-2xl font-bold'>Earlier</h2>
            <div className='grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-3 pl-3 pb-3'>
                {
                    Array.from({length: 5}).map((_, index) => (
                        <File />
                    ))

                }
            </div>
        </div>
    );
};

export default QuickAccess;