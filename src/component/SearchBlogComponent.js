import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import renderHTML from "react-render-html"
import { getUser, getToken } from "../services/authorize";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRipple, MDBCardFooter, MDBBtnGroup, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit';

function SearchBlogComponent() {
  const [blogs, setBlogs] = useState([])

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/blogs`)
      .then(response => {
        setBlogs(response.data)
      })
      .catch(err => alert(err));
  }
  useEffect(() => {
    fetchData()
  }, [])

  const confirmDelete = (slug) => {
    Swal.fire({
      title: "คุณต้องการลบบทความหรือไม่ ?",
      icon: "warning",
      showCancelButton: true
    }).then((result) => {
      //กดปุ่ม ok หรือตกลง
      if (result.isConfirmed) {
        deleteBlog(slug)
      }
    })
  }

  const deleteBlog = (slug) => {
    //ส่ง request ไปที่ api เพื่อลบข้อมูล
    axios
      .delete(`${process.env.REACT_APP_API}/blog/${slug}`,
        {
          headers: {
            authorization: `Bearer ${getToken()}`
          }
        })
      .then(response => {
        Swal.fire("Deleted!", response.data.message, "success")
        fetchData()
      }).catch(err => console.log(err))
  }
  return (
    <MDBContainer>
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
          {blogs.map((blog, index) => (
            <MDBCol>
              <MDBCard style={{ minHeight: '100%' }} border='primary' className="shadow-4">
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay hover-zoom'>
                  <MDBCardImage
                    src={blog.photos[0]}
                    alt='...'
                    position='top'
                    style={{ maxHeight: '271px', objectFit: 'cover' }}
                  />

                  <Link to={`/intro/blog/${blog.slug}`}>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </Link>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>
                    <Link to={`/intro/blog/${blog.slug}`}>
                      <h2>{blog.title}</h2>
                    </Link></MDBCardTitle>
                  <MDBCardText>
                    <p><small className='text-muted'>Tag : {(blog.tags) + ("")}</small>
                    </p>

                    <div>{renderHTML(blog.content.substring(0, 250) + "...")}</div>

                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter background='transparent' border='success'>
                  <MDBBtnGroup shadow='0' className="d-grid gap-2">
                    <Link to={`/intro/blog/edit/${blog.slug}`} className="d-grid gap-2">  <MDBBtn size='lg' color='info'>แก้ไขบทความ</MDBBtn></Link>
                    <MDBBtn size='lg' color='danger' className="d-grid gap-2" onClick={() => confirmDelete(blog.slug)}>ลบบทความ</MDBBtn>
                  </MDBBtnGroup>
                </MDBCardFooter >
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
      <div style={{ height: '50px' }}></div>
    </MDBContainer>
  );
}

export default SearchBlogComponent;
