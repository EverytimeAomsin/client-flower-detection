import React, { useEffect } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function NotFound404(props) {


  useEffect(() => {
    document.title = "NotFound404"
  })
  return (
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <h1 style={{ fontSize: '200px' }}>404</h1>
      <h4>page not found</h4>
      <p>อืม...เหมือนหน้าที่คุณกำลังหาไม่มีอยู่</p>
      <Link to="/" >
        <MDBBtn className='mx-2' size='lg' >
          ไปสู่หน้าแรก
        </MDBBtn>

      </Link>
      <div className='pt-3'>
      </div>
    </div>
  )
}
