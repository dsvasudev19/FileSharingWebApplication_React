import React, {useEffect} from 'react';
import SideBar from '../Components/SideBar';
import {FileImage, FileMusic, FileVideo2, FolderHeart, Layers, Music2} from 'lucide-react';
import Footer from './../Components/Footer';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from './../AuthContext'
const Home = () => {
  const {user,loading}=useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    if (!user && !loading){
      navigate('/login')
    }
  },[user,loading])
  return (
    <div className='border-2 border-blue-500 rounded-md p-5 mt-5'>
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


        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>

        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>

        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph" alt="" />
          </a>
          <div class="p-2">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Image</h5>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;