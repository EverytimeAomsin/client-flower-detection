import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import VideoPlayer from "react-background-video-player";
import { Link } from "react-router-dom";
import '../../css/Home.css'
import '../../css/Font.css'
import BeeBG from '../../video/BeeBG.mp4'

export default function Home() {
  return (

    <MDBContainer className='BG-home' >
      <VideoPlayer
        className="video"
        src={BeeBG}
        autoPlay={true}
        muted={true}
      />
      <div class="vertical-center">
        <div class="d-flex flex-row mb-3">
          <div class="p-2 ">
            <h1 className='font-home SegoeUi-bold'>SCAN<br />FLOWER</h1>
            <div className='mt-5'>
              <hr style={{ height: '4px', width: '100%', borderWidth: 0, color: 'DarkGoldenRod', backgroundColor: 'DarkGoldenRod' }} />
            </div>
            <div className='mt-5 text-uppercase '>
              <MDBRow>
                <MDBCol md='6' className='col-example d-grid gap-2'>

                  
                    <MDBBtn outline rounded className='mx-2' size='lg' color='light'>
                      <span className='Segoe-ui home-buttom'><Link to="/intro" style={{color:'white'}}>enter </Link></span>
                    </MDBBtn>
                 
                </MDBCol>
              </MDBRow>

            </div>


          </div>

        </div>
      </div>
    </MDBContainer>
  );
}