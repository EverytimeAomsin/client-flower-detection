import React from 'react';
import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardHeader, MDBCardFooter, MDBCardText } from 'mdb-react-ui-kit';
import '../../css/Scan.css'

function Scan() {
  return (
    <div>
      <MDBContainer fluid className='BG-intro'>
        <MDBContainer>
          <div className="d-inline-flex p-2  mt-5 " >
            <img style={{ height: '50px' }} src='./img/etc/Logo1.png' />
          </div>
          <div className='search-margin'>
            <MDBInput label='กรอกหรือวางได้ลิ้งที่นี่' id='typeText' type='text' size='lg' contrast />
          </div>
          <div className='search-img'>
            <MDBRow className='mb-3'>
              <MDBCol size='5' className='col-example text-center'>


                <MDBCard className='mb-3'>
                  <MDBCardBody>
                    <MDBCardTitle><h4 className='Kanit-regular'>ภาพตัวอย่าง</h4></MDBCardTitle>

                    <MDBCardText>

                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardImage position='bottom' src='https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03013819_1.jpeg' alt='...' />
                </MDBCard>
              </MDBCol>
              <MDBCol size='2' className='col-example'>

              </MDBCol>
              <MDBCol size='5' className='col-example '>
                <MDBCard>
                  <MDBCardBody>
                    <h4 className='Kanit-regular text-center'>ผลลัพธ์</h4>
                    <h4 className='Kanit-regular'>- Rose 75%</h4>
                    </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
          <div className='prediction-margin text-center'>
          <a href="#" className="prediction-button Kanit-regular ">สแกนอีกครั้ง</a>
          </div>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
}

export default Scan;
