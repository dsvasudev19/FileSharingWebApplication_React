import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import FileUpload from './Pages/FileUpload'
import FilePreview from './Pages/FilePreview'
import {AuthProvider} from "./AuthContext";
import Layout from "./Pages/Layout";
import Files from "./Pages/Files";  
export default function App() {
    return (
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/file-upload" element={<FileUpload />} />
                    <Route path="/file-preview" element={<FilePreview />} />
                    <Route path="/files" element={<Files />} />
                    <Route path="/account" element={<Login />} /> 
                </Route>
                </Routes>
            </BrowserRouter>
    );
}
