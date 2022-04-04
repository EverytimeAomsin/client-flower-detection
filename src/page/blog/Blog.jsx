import axios from "axios";
import { useState,useEffect } from "react";
import renderHTML from "react-render-html";
import { MDBContainer, MDBRow, MDBCol,MDBBreadcrumb, MDBBreadcrumbItem, MDBNavbar} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import '../../css/Blog.css'

export default function Blog(props) {
  const [blog,setBlog] = useState('')

  useEffect(()=>{
    document.title = "อ่าน "+(blog.slug)
      axios
      .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
      .then(response=>{
          setBlog(response.data)
      })
      .catch(err=>props.history.push("/404NotFound"))
      // .catch(err=>alert(err))
      // eslint-disable-next-line
      
  },[])
  return (
    <MDBContainer fluid className='card-BG'>
       <MDBNavbar fixed='top' light bgColor='light'>
      <MDBContainer fluid>
      <MDBBreadcrumb style={{marginLeft:'80px',}}>
          <MDBBreadcrumbItem>
            <Link to="/" >Home</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
           <Link to="/intro" >Intro</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active className="fw-bold">
          ชนิดดอกไม้ : {blog.title}
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </MDBContainer>
    </MDBNavbar>
       <nav className='navbar navbar-expand-lg navbar-light bg-light breadcrumb-blog '>
      <MDBContainer fluid>
        
      </MDBContainer>
    </nav>
      <MDBContainer>
      {blog && 
        <MDBRow>

          <MDBCol md='2' className='col-example'>
            <div className="fixed-top sidebar">  <Link to="/intro"><img style={{ height: '50px' }} src='https://cdn.discordapp.com/attachments/556546837247426635/937082320966529095/Logo1.png' />
            </Link></div>
            <img className='img-logoblog' style={{ height: '50px' }} src='https://cdn.discordapp.com/attachments/556546837247426635/937082320966529095/Logo1.png' />
          </MDBCol>
          <MDBCol md='8' className='col-example'>
            <div className='d-flex justify-content-center margin-imgblog'>
              <div>
                <img src={blog.photos[0]} style={{minWidth: '450px'}} className='img-fluid shadow-4' alt='...' />
                <h1 className='title-blog text-light '><span className='bg-dark '><span className='blog-titleML1'>Collection of flowers.</span></span></h1>
                <h3 ><span className='bg-dark'><span className='blog-titleC blog-titleML2'>Admin</span><span className='text-light blog-titleML3'>2020 Jan 25</span>  </span></h3>
              </div>
            </div>
            <h4 className='Kanit-regular mt-5 head-blog'>{blog.title}</h4>
            <p className='mt-3 lightfont'>
            {renderHTML(blog.intro)}</p>

            <h4 className='Kanit-regular mt-5 head-blog'>ลักษณะทั่วไป</h4>
            <p className='mt-3 '>
            {renderHTML(blog.content)}</p>

            <h4 className='Kanit-regular mt-5 head-blog'>สรรพคุณ</h4>
            <p className='mt-3 lightfont'>
            {renderHTML(blog.properties)}
            </p>
          </MDBCol>
          <MDBCol md='2' className='col-example'>
          </MDBCol>
          <p className="text-muted" style={{marginTop:'20px'}}>บทความนี้อัพเดตล่าสุดเมื่อ : {new Date(blog.updatedAt).toLocaleString()}</p>
        </MDBRow>
        
      }
       {/* <div className="container p-5">
            
            <div>
                <h1>{blog.title}</h1>
                <div className="pt-3">{renderHTML(blog.content)}</div>
                <p className="text-muted"> ผู้เขียน: {blog.author} , เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
            </div>
        </div>
         */}
      </MDBContainer>
    </MDBContainer>
  );
}
