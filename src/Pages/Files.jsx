import React from 'react';
import File from './../Components/File';
import FileShareModal from './../Modals/FileShareModal';
import Folder from './../Components/Folder';
import {Link} from 'react-router-dom';
const Files = () => {
    return (
        <div className='mt-3 border-2 border-slate-600 rounded-lg'>
            <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl m-5 '><span className='text-blue-700 font-bold'>Folder's</span> and <span className='text-blue-700 font-bold'>Files</span> Created By <span className='text-green-700 font-semibold'>You</span>❤️</h1>
            <h2 className='justify-start text-left ml-3 text-2xl font-bold'>Folders</h2>
            <div className='grid grid-flow-row grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-7 gap-4 pr-3 pl-3 pb-3'>
                {
                    Array.from({length: 5}).map((_, index) => (
                        
                            <Folder name={`Folder${index+1}`} id={index+1} />
                       
                    ))

                }
            </div>
            <h2 className='justify-start text-left ml-3 text-2xl font-bold'>Earlier This Month</h2>
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

export default Files;