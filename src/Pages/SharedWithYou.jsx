import React, {useState,useEffect} from 'react';
import File from './../Components/File';
import {useAuth} from '../AuthContext'
import {axiosInstance} from './../axiosInstance'
import {useNavigate} from 'react-router-dom';
const SharedWithYou = () => {
    const {user,loading} = useAuth();
    const [files,setFiles]=useState([]);
    const navigate=useNavigate();


    const getAllFilesSharedWithYou=async()=>{
        try {
            const response=await axiosInstance.get("/api/share/shared/user");
            console.log(response)
            if(response.status===200){
                setFiles((prev)=>{
                    return response.data.data
                })
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        if(user){
            getAllFilesSharedWithYou()
        }
    },[user])

    useEffect(()=>{
        if(!user && !loading){
            navigate("/login")
        }
    },[])
    return (
        <div className='mt-5 border-2 border-slate-600 rounded-lg'>
            <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl m-5'>Files Shared with You</h1>
            <h2 className='justify-start text-left ml-3 text-2xl font-bold'>Today</h2>
            <div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-3 pl-3 pb-3'>
                
                   {
                    files.map((pointer,index)=>{
                        return <File name={pointer.file.original_name} id={pointer.file.id} refe={pointer.file.fileRef} key={index} type={pointer.file.file_type} path={pointer.file.path} />
                    })
                   }
                       
                  
            </div>
            {/* <h2 className='justify-start text-left ml-3 text-2xl font-bold'>Earlier This Month</h2>
            <div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-3 pl-3 pb-3'>
                {
                    Array.from({length: 5}).map((_, index) => (
                        <File />
                    ))

                }
            </div>
            <h2 className='justify-start text-left ml-3 text-2xl font-bold'>Earlier</h2>
            <div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-3 pl-3 pb-3'>
                {
                    Array.from({length: 5}).map((_, index) => (
                        <File />
                    ))

                }
            </div> */}
        </div>
    );
};

export default SharedWithYou;