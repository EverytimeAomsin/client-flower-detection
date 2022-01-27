import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
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
                  <div className="p-2 gap-2"> <MDBBtn color='secondary'><Link to="/scan" style={{color:'white'}}>Scan Here </Link></MDBBtn></div>
                  <div className="p-2 lightfont">ข้อมูลดอกไม้เพิ่มเติม o</div>
                </div>
              </div>

            </MDBCol>
          </MDBRow>
        </div>
        <div className='text-center mt-5 BG-hr'>
          <img className='mt-5' style={{ height: '400px' }} src='./img/etc/intro.png' />
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


        <div>
          <div className="d-flex justify-content-between mt-5">
            <div className="p-2 "><h1 className='intro-title'>Our collection of <br />flowers.</h1></div>
            <div className="p-2"></div>
            <div className="p-5">
              <MDBInput style={{width:'500px'}} size='lg' label='ค้นหา >>' id='form1' type='text' />
            </div>
          </div>
        </div>
      </MDBContainer>
    </MDBContainer>
  );
}
