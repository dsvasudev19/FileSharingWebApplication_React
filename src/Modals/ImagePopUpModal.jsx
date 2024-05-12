
"use client";

import {Button, Modal, Select} from "flowbite-react";
import {useState} from "react";
import { axiosInstance } from "../../axiosInstance";
import fileDownload from "js-file-download";

function Component({viewModal, closeViewModal, ...props}) {
    console.log(props)
    const [openModal, setOpenModal] = useState(viewModal);
    const [modalPlacement, setModalPlacement] = useState('center')
    const downloadFile = async() => {
        try {
            const response=await axiosInstance.get("/api/share/download/"+props.id,{
                responseType: 'blob',
            });
            const blob = new Blob([response.data], {type: 'application/octet-stream'});
            fileDownload(blob,props.name);
            // fileDownload(new Blob(response.data))
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <Modal
                show={openModal}
                size="4xl"
                position={modalPlacement}
                onClose={() => {setOpenModal(false); closeViewModal()}}
            >
                <Modal.Header>{props.name.split('.')[0]}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 p-6">
                        <img src={props.path} alt={props.original_name} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <a onClick={()=>{downloadFile()}}><Button>Download</Button></a>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Component;


// const [values,setValues]=useState({
//     name:"",
//     email:"",
//     phone:"",
//     message:""
// })


// const handleChange=(e)=>{
//     const {name,value}=e.target;
//     setValues({
//        ...values,
//         [name]:value
//     })
// }