import axios from "axios"
import { useState, useEffect } from "react"
import { Router, Link } from "react-router-dom"
import Swal from "sweetalert2"
import renderHTML from "react-render-html"
import { getUser, getToken } from "../services/authorize";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRipple, MDBCardFooter, MDBBtnGroup } from 'mdb-react-ui-kit';

function SearchBlogComponent() {
  const [getBlogs, setBlogs] = useState([])
  const [filteredBlog, setFilteredData] = useState(getBlogs);

  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const [search, setSearch] = useState("");
  const keyword = () => {
    console.log(query);
  };

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/blogs`)
      .then(response => {
        setBlogs(response.data)
        setFilteredData(response.data);
      })
      .catch(err => alert(err));
  }

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    
    result = getBlogs.filter((data) => {
      return data.title.search(value) != -1;
    });
    setSearch(value);
    setTag("")
    setFilteredData(result);
    console.log(result);
  }

  const handleSearch2 = (event) => {
    let value = event.target.value.toLowerCase();
    let result2 = [];
    console.log(value);
    
    result2 = getBlogs.filter((data) => {
      return data.tag.search(value) != -1;
    });
    setFilteredData(result2);
    setSearch("");
    setTag(value)
    console.log(result2);
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
          <MDBRow className="mt-5">
        <MDBCol size='8' className='col-example'>
        <MDBInput  className=' sticky-top' size='lg' label='ค้นหา >>' id='form1' type='text' onChange={(event) => handleSearch(event)}  />
        </MDBCol>
        <MDBCol size='4' className='col-example'>
        <MDBBtn onClick={(event) => handleSearch(event)} value="">เคลียร์คำค้นหา X</MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBInput   size='sm' label={"คำที่ค้นหา :" +tag + search} id='formControlDisabled' type='text' onChange={(event) => handleSearch2(event)}   disabled />
          <div id='textExample1' className='form-text'>
            ช่องค้นหา คุณสามารถค้นหาสิ่งที่คุณต้องการได้
          </div>
        </MDBCol>
      </MDBRow>

      <div>
        {query}
        <MDBRow className='mt-4'>
          <h3 className='Kanit-regular'>หัวข้อที่อาจสนใจ</h3>
          <MDBCol md='3' className='col-example d-grid gap-2 '>
            <MDBBtn size='lg' outline className='mx-2 ' color='danger' onClick={(event) => handleSearch2(event)} value="แดง">
              สีแดง
            </MDBBtn>
          </MDBCol>
          <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
            <MDBBtn size='lg' outline className='mx-2' color='warning' onClick={(event) => handleSearch2(event)} value="เหลือง" > 
              สีเหลือง
            </MDBBtn>
          </MDBCol>
          <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
            <MDBBtn size='lg' outline className='mx-2' style={{color:'#FF9100',borderColor:'#FF9100'}} onClick={(event) => handleSearch2(event)} value="ส้ม">
              สีส้ม
            </MDBBtn>
          </MDBCol>
          <MDBCol md='3' className='col-example d-grid gap-2 mt-tag'>
            <MDBBtn size='lg' outline className='mx-2' style={{color:'#E040FB',borderColor:'#E040FB'}} onClick={(event) => handleSearch2(event)} value="ชมพู">
              สีชมพู
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>

      <div className='mt-4'>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 '>

          {filteredBlog.map((blog, index) => (
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
                    
                  {/* <p><small className='text-muted'><span className="fw-bold fs-6">Tag : </span> {blog.tags.map((tag, idTag) =>
                         
                         <Link  onClick={() => setQuery(getBlogs[index].tags[idTag])}  onClick={keyword}><span >{" " + tag + ","}</span></Link >
                       
                     )}</small>
                    </p> */}
                   
                    <div>{renderHTML(blog.content.substring(0, 250) + "...")}</div>

                  </MDBCardText>
                </MDBCardBody>
                {getUser() && (
                  <MDBCardFooter background='transparent' border='success'>
                    <MDBBtnGroup shadow='0' className="d-grid gap-2">
                      <Link to={`/intro/blog/edit/${blog.slug}`} className="d-grid gap-2">  <MDBBtn size='lg' color='info'>แก้ไขบทความ</MDBBtn></Link>
                      <MDBBtn size='lg' color='danger' className="d-grid gap-2" onClick={() => confirmDelete(blog.slug)}>ลบบทความ</MDBBtn>
                    </MDBBtnGroup>
                  </MDBCardFooter >
                )}
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
