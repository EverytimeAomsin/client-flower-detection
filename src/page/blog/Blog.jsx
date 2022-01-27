import React from 'react';
import { MDBContainer, MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../../css/Blog.css'
export default function Blog() {
  return (
    <MDBContainer>
       <div className="d-inline-flex p-2  mt-5 " >
          <img style={{ height: '70px' }} src='https://cdn.discordapp.com/attachments/556546837247426635/936188631226413077/Logo2.png' />
        </div>
      <div className=" d-flex justify-content-between" >
        <div className="p-4">
          <h2 className='blog-title'>Collocation of </h2>
          <h2 className='blog-title'>Red flowers</h2>
        </div>
        <div className="p-2"></div>
        <div className="p-2" style={{marginRight:'50px',marginTop:'80px'}}>
          <MDBBtn outline className='mx-2' color='dark' size='lg'>
            กลับไปเมนูหลัก
          </MDBBtn>
        </div>
      </div>
      <div style={{marginTop:'20px',marginLeft:'50px',marginRight:'50px',marginBottom:'50px'}}>
      <MDBCard style={{ maxWidth: '100%' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src='https://cdn.discordapp.com/attachments/556546837247426635/935829009881772042/pexels.jpg' alt='...' fluid />
          </MDBCol>
          <MDBCol md='8' className='card-BG '>
            <MDBCardBody>
              <MDBCardTitle>   <h1 className='Kanit-regular' style={{ color: 'white',fontSize:'45px' }}>เฟื่องฟ้า</h1></MDBCardTitle>
              <MDBCardText>
                <p style={{ color: 'white' }}>ชื่อวิทยาศาสตร์: Bougainvillea hybrida <br />
                  ถิ่นกำเนิด : อเมริกาใต้ <br />
                  ชื่อสามัญ: ดอกเฟื่องฟ้า (อังกฤษ: Bougainvillea, Paper flower)  <br />
                  ชื่อพื้นเมืองอื่นๆ: Peper Flower, Kertas, ตรุษจีน  <br />
                  ลักษณะ: ไม้ยืนต้นประเภทพุ่มกึ่งเลื้อย ขนาดตั้งแต่พุ่มเล็กถึงพุ่มใหญ่ <br />
                  มีหนามขึ้นตามลำต้นอยู่ตำแหน่ง
                </p>
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'></small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      </div>
    </MDBContainer>
  );
}
