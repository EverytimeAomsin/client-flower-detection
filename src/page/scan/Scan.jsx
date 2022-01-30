import React from 'react';
import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import '../../css/Scan.css'

function Scan() {
  return (
    <div>
      <MDBContainer fluid className='BG-intro'>
        <MDBContainer>
          <div className="d-inline-flex p-2  mt-5 " >
          <Link to="/intro"> <img style={{ height: '50px' }} src='./img/etc/Logo1.png' /></Link>
          </div>
          <div className='search-margin'>
            <h3 className='text-center text-light'>ใส่ลิ้งรูปภาพ</h3>
            <MDBInput label='กรอกหรือวางได้ลิ้งที่นี่' id='typeText' type='url' size='lg' contrast />
          </div>
          <div className='search-img'>
            <MDBRow className='mb-3'>
              <MDBCol md='5' className='col-example text-center'>


                <MDBCard className='mb-3' >
                  <MDBCardBody>
                    <MDBCardTitle><h4 className='Kanit-regular'>ภาพตัวอย่าง</h4></MDBCardTitle>

                    <MDBCardText>

                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardImage position='bottom' src='https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013819_1.jpeg' alt='...' />
                </MDBCard>
              </MDBCol>
              <MDBCol md='2' className='col-example'>

              </MDBCol>
              <MDBCol md='5' className='col-example '>
                <MDBCard>
                  <MDBCardBody>
                    <h4 className='Kanit-regular text-center'>ผลลัพธ์</h4>
                    <h4 className='Kanit-regular'>- Rose 75%</h4>
                    </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
         
        </MDBContainer>
        <div className='fixed-bottom  end-0 text-end'>
          <a href='#' class='prediction-button'>สแกนอีกครั้ง</a>
          </div>
      </MDBContainer>
    </div>
  );
}

export default Scan;
