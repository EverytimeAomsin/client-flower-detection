import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText,MDBRipple } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import '../../css/Font.css'
import '../../css/Intro.css'

export default function Intro() {
  return (
    <MDBContainer fluid className='BG-intro'>
      <MDBContainer >
        <div className="d-inline-flex p-2  mt-5 " >
          <img style={{ height: '50px' }} src='./img/etc/Logo1.png' />
        </div>
        <div className='mt-5'>
          <MDBRow className='mt-2' >
            <MDBCol md='6 ' className='col-example menu-titlecolor'>
              <div style={{ marginLeft: '50px' }}>
                <h1 className='intro-title'>Gallery</h1>
                <h1 className='intro-title'> and detection of</h1>
                <h1 className='intro-title'>flowers.</h1>
              </div>

            </MDBCol>
            <MDBCol md='6' className='col-example  menu-scancolor'>
              <div className='mt-5 '>
                <p className='menu-scan '>พวกเราได้รวบรวมข้อมูลดอกไม้แต่ละ<br />
                  สายพันธุ์พร้อม AI สแกนหาดอกไม้ที่ผู้ใช้สนใจ</p>
                <div className="d-flex flex-row mb-3">
                  <div className="p-2 gap-2"> <MDBBtn color='secondary'><Link to="/scan" style={{ color: 'white' }}>Scan Here </Link></MDBBtn></div>
                  <div className="p-2 lightfont">ข้อมูลดอกไม้เพิ่มเติม o</div>
                </div>
              </div>

            </MDBCol>
          </MDBRow>
        </div>
        <div className='text-center mt-5 BG-hr'>
          <img className='mt-5 height-imgintro'  src='./img/etc/intro.png' />
        </div>
        <div className='mt-5'>
          <MDBRow className='text-center'>
            <MDBCol size='md' className='col-example stat-color mt-5'>
              <h2 className='stat-intro Kanit-regular'>4,000+</h2>
              <p className='menu-scan'>ข้อมูลรูปดอกไม้ </p>
            </MDBCol>
            <MDBCol size='md' className='col-example stat-color mt-5'>
              <h2 className='stat-intro Kanit-regular'>100+</h2>
              <p className='menu-scan'>สายพันธุ์ดอกไม้</p>
            </MDBCol>
            <MDBCol size='md' className='col-example stat-color mt-5'>
              <h2 className='stat-intro Kanit-regular'>60%</h2>
              <p className='menu-scan'>ค่าความถูกต้องมากกว่า </p>
            </MDBCol>
          </MDBRow>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <hr style={{ height: '4px', width: '50%', borderWidth: 0, color: 'BlueViolet', backgroundColor: 'BlueViolet' }} />
        </div>

        <MDBRow className='mt-5'>
          <MDBCol md='4' className='col-example'>
            <h1 className='intro-title'>Our collection of <br />flowers.</h1>
          </MDBCol>
          <MDBCol md='3' className='col-example'>
          </MDBCol>
          <MDBCol md='5' className='col-example'>
            <MDBInput style={{ width: '500px' }} className='mt-5' size='lg' label='ค้นหา >>' id='form1' type='text' />
            <div id='textExample1' className='form-text'>
        ช่องค้นหา คุณสามารถค้นหาสิ่งที่คุณต้องการได้
      </div>
          </MDBCol>
        </MDBRow>

        <div>
        <MDBRow className='mt-4'>
          <h3 className='Kanit-regular'>หัวข้อที่อาจสนใจ</h3>
        <MDBCol md='3' className='col-example d-grid gap-2 '>
        <MDBBtn size='lg' outline className='mx-2 ' color='dark'>
        สีแดง
      </MDBBtn>
        </MDBCol>
        <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
        <MDBBtn size='lg' outline className='mx-2' color='dark'>
        สีเหลือง
      </MDBBtn>
        </MDBCol>
        <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
        <MDBBtn size='lg' outline className='mx-2' color='dark'>
        สีส้ม
      </MDBBtn>
        </MDBCol>
        <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
        <MDBBtn size='lg' outline className='mx-2' color='dark'>
        สีชมพู
      </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className='mt-2'>
        <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
        <MDBBtn size='lg' outline className='mx-2' color='dark'>
        สีม่วง
      </MDBBtn>
        </MDBCol>
        <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
        <MDBBtn size='lg' outline className='mx-2' color='dark'>
         สีขาว
      </MDBBtn>
        </MDBCol>
        <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
        <MDBBtn size='lg' outline className='mx-2' color='dark'>
        ไม้ประดับ 
      </MDBBtn>
        </MDBCol>
        <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
        <MDBBtn size='lg' outline className='mx-2 ' color='dark'>
        ไม้ดอก
      </MDBBtn>
        </MDBCol>
      </MDBRow>
      </div>

        <div className='mt-4'>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4 '>
            <MDBCol>
              <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay hover-zoom'>
                <MDBCardImage
                  src='https://cdn.discordapp.com/attachments/556546837247426635/937094023007567882/unknown.png'
                  alt='...'
                  position='top'
                />
                  <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    <p><small className='text-muted'>Tag :</small>
                    </p>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardImage
                  src='https://cdn.discordapp.com/attachments/556546837247426635/937120637217042442/unknown.png'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardImage
                  src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardImage
                  src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </MDBContainer>
  );
}
