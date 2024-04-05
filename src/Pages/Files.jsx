import React, {useEffect,useState} from 'react';
import File from './../Components/File';
import FileShareModal from './../Modals/FileShareModal';
import Folder from './../Components/Folder';
import {Link, useNavigate} from 'react-router-dom';
import { axiosInstance } from '../../axiosInstance';
import {useAuth} from '../AuthContext';
import toast,{Toaster} from 'react-hot-toast'
import Loader from '../Loaders/InfinityLoader';
const Files = (props) => {
    const {user,loading} = useAuth();
    const navigate=useNavigate();
    const [folders,setFolders]=useState([]);
    const [files,setFiles]=useState([]);
    const [check,setCheck] =useState(true)
    const getAllRootFiles = async () => {
        try {
            const response = await axiosInstance.get("/api/file/by/folderRef/root");
            console.log(response);
            if (response.status === 200) {
                setFiles(response.data.data)
            }
        } catch (error) {
            console.log(error);
            toast.error("Error while fetching your files")
        }
    }
    const getAllFolders=async()=>{
        try {
            const response = await axiosInstance.get("/api/folder/getFoldersByUserId");
            console.log(response);
            if(response.status === 200){
                const data=response.data.data;
                setFolders(data);
                
            }
        } catch (error) {
            console.log(error);
            toast.error("Error occured while fetching folders")
        }
    }


   useEffect(()=>{
    if(user && !loading){
        getAllFolders();
        getAllRootFiles();
    }
   },[user,loading])


    useEffect(()=>{
        if (!user && !loading) {
            navigate('/login')
        }
    },[user,loading])
    return (
        <>
            {
                !check?File(
                    <div className='mt-5 border-2 border-slate-600 rounded-lg'>
                        <Toaster position='top-right' reverseOrder={true} />
                        <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl m-5 '><span className='text-blue-700 font-bold'>Folder's</span> and <span className='text-blue-700 font-bold'>Files</span> Created By <span className='text-green-700 font-semibold'>You</span>❤️</h1>
                        <h2 className='justify-start text-left ml-3 text-2xl font-bold'>Folders</h2>
                        <div className='grid grid-flow-row grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 pr-3 pl-3 pb-3'>

                            {
                                folders?.map((folder, index) => (
                                    <Folder name={folder.name} id={folder.id} key={index} />
                                ))
                            }
                        </div>
                        <h2 className='justify-start text-left ml-3 text-2xl font-bold'>Recent</h2>
                        <div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-3 pl-3 pb-3'>
                            {
                                files?.map((file, index) => (
                                    <File name={file.original_name} id={file.id} refe={file.ref} key={index} type={file.file_type} path={file.path} />
                                ))

                            }

                        </div>
                    </div>
                ) : <div className='flex justify-center text-center align-middle'><Loader /></div>
            }
        </>
    );
};

export default Files;