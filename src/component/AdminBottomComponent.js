import { useState } from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { getUser,logout } from "../services/authorize";


export default function AdminBottomComponent(history) {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <div>
             { getUser() && (
            <div className="fixed-bottom d-flex flex-row-reverse">
                <MDBBtn onClick={toggleShow}><h5 className="Kanit-regular">เปิดเมนูแอดมิน</h5></MDBBtn>
            </div>
            )}

            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>เมนูแอดมิน</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div class="d-grid gap-2">
                                <MDBBtn size='lg' href='/create'>เพิ่มบทความ &nbsp;&nbsp; &nbsp;&nbsp;<MDBIcon fas icon="pen" /></MDBBtn>
                                <MDBBtn size='lg' color='danger'  onClick={()=>logout(()=>history.push("/"))}>ออกจากระบบ  &nbsp;&nbsp; <MDBIcon fas icon="sign-out-alt" /></MDBBtn>
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            
        </div>
    )
}
