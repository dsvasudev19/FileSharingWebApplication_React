import React, {useEffect, useState} from 'react';
import SideBar from '../Components/SideBar';
import {FileImage, FileMusic, FileVideo2, FolderHeart, Layers, Music2} from 'lucide-react';
import Footer from './../Components/Footer';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from './../AuthContext'
import {axiosInstance} from '../../axiosInstance';
import toast, {Toaster} from 'react-hot-toast';
import File from './../Components/File'
const Home = () => {
  const {user, loading} = useAuth();
  const navigate = useNavigate();
  const [files, setFiles] = useState([])

  const getAllRootFiles = async () => {
    try {
      const response = await axiosInstance.get("/api/file/by/folderRef/root");
      console.log(response);
      if (response.status === 200) {
        setFiles(response.data.data)
        toast.success("files fetched")
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user && !loading) {
      getAllRootFiles();
    }
  }, [user, loading])

  useEffect(() => {
    if (!user && !loading) {
      navigate('/login')
    }
  }, [user, loading])

  return (
    <div className='border-2 border-blue-500 rounded-md p-5 mt-5'>
      <Toaster position='top-right' reverseOrder={true} />
      <div className='justify-center'>
        <h1 className='h-10 sm:text-lg md:text-xl lg:text-3xl rounded-full'>File <span className='text-blue-500'>Upload</span> and <span className='text-blue-500'>Transfer</span> made easier</h1>
      </div>
      <div className='mt-5 justify-start text-left'>
        <p className='sm:text-lg md:text-xl lg:text-3xl font-semibold '><span className='text-blue-700'>Quick</span> Access</p>
      </div>
      <div className='flex flex-wrap flex-row justify-start gap-6'>
        <Link to='/quick-access?type=Favourites'>
          <div className='box-content h-12 w-12 p-4 mt-3 border-2 border-blue-400 rounded-2xl bg-blue-300'>
            <FolderHeart size={48} strokeWidth={1} />
          </div>
        </Link>
        <Link to='/quick-access?type=Music'>
          <div className='box-content h-12 w-12 p-4 mt-3 border-2 border-blue-400 rounded-2xl bg-blue-300'>
            <FileMusic size={48} strokeWidth={1} />
          </div>
        </Link>
        <Link to='/quick-access?type=Videos'>
          <div className='box-content h-12 w-12 p-4 mt-3 border-2 border-blue-400 rounded-2xl bg-blue-300'>
            <FileVideo2 size={48} strokeWidth={1} />
          </div>
        </Link>
        <Link to='/quick-access?type=Images'>
          <div className='box-content h-12 w-12 p-4 mt-3 border-2 border-blue-400 rounded-2xl bg-blue-300'>
            <FileImage size={48} strokeWidth={1} />
          </div>
        </Link>
        <Link to='/quick-access?type=Documents'>
          <div className='box-content h-12 w-12 p-4 mt-3 border-2 border-blue-400 rounded-2xl bg-blue-300'>
            <Layers size={48} strokeWidth={1} />

          </div>
        </Link>
      </div>
      <div className='mt-5 justify-start text-left'>
        <p className='sm:text-lg md:text-xl lg:text-3xl font-semibold '>Recently Uploaded</p>
      </div>
      <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {
          files?.map((file, index) => (
            <File name={file.original_name} id={file.id} refe={file.ref} key={index} type={file.file_type} path={file.path} />
          ))

        }


      </div>
    </div>
  );
};

export default Home;