
"use client";

import {Button, Modal, Select} from "flowbite-react";
import {useState} from "react";

function Component({viewModal, closeViewModal, ...props}) {
    const [openModal, setOpenModal] = useState(viewModal);
    const [modalPlacement, setModalPlacement] = useState('center')
    const downloadFile = () => {
        fetch(props.path)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = props.path;
                a.download = props.name;
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error downloading file:', error));
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
                    <a href={props.path} download={`"${props.name}"`}><Button>Download</Button></a>
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