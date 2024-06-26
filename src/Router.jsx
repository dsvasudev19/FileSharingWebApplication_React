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
import ShareDirectly from "./Pages/ShareDirectly";
import SharedWithYou from "./Pages/SharedWithYou";
import AccountsPage from "./Pages/AccountsPage";
import FolderContent from "./Pages/FolderContent";
import QuickAccess from "./Pages/QuickAccess";
export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/file-upload" element={<FileUpload />} />
                    <Route path="/file-preview" element={<FilePreview />} />
                    <Route path="/files" element={<Files />} />
                    <Route path="/account" element={<AccountsPage />} /> 
                    <Route path="/share-direct" element={<ShareDirectly />} />
                    <Route path="/shares" element={<SharedWithYou />} />
                    <Route path="/view-folder" element={<FolderContent />} />
                    <Route path="/quick-access" element={<QuickAccess />} />
                </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
