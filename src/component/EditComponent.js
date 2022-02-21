import { useState,useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"
import ReactQuill from "react-quill"
import { MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, MDBNavbar, MDBInput } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css"
import { getToken } from "../services/authorize";

const EditComponent=(props)=>{
    const [state,setState] = useState({
        title:"",
        author:"",
        slug:""
    })
    const {title,author,slug} = state

    const [content,setContent] = useState('')
    const [intro, setIntro] = useState('')
    const [properties, setProperties] = useState('')

    const submitIntro = (event) => {
        setIntro(event)
    }
    const submitContent = (event) => {
        setContent(event)
    }
    const submitProperties = (event) => {
        setProperties(event)
    }

    //ดึงข้อมูลบทความที่ต้องการแก้ไข
    useEffect(()=>{
        document.title = "แก้ไขบทความ"
        axios
        .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
        .then(response=>{
            const {title,intro,content,properties,author,slug} = response.data
            setState({...state,title,author,slug})
            setIntro(intro)
            setContent(content)
            setProperties(properties)
        })
        .catch(err=>props.history.push("/404NotFound"))
        // eslint-disable-next-line
    },[])

    const showUpdateForm=()=>(
        <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>ชื่อบทความ</label>
                    <input type="text" className="form-control" 
                        value={title} 
                        onChange={inputValue("title")}
                    />
                </div>
                <div className="form-group">
                    <label>รายละเอียด</label>
                    <ReactQuill 
                        value={intro}
                        onChange={submitIntro}
                        theme="snow"
                        className="pb-5 mb-3"
                        style={{border:'1px solid #666'}}
                    />
                </div>
                <div className="form-group">
                    <label>ลักษณะทั่วไป</label>
                    <ReactQuill 
                        value={content}
                        onChange={submitContent}
                        theme="snow"
                        className="pb-5 mb-3"
                        style={{border:'1px solid #666'}}
                    />
                </div>
                <div className="form-group">
                    <label>สรรพคุณ</label>
                    <ReactQuill 
                        value={properties}
                        onChange={submitProperties}
                        theme="snow"
                        className="pb-5 mb-3"
                        style={{border:'1px solid #666'}}
                    />
                </div>
                <br/>
                <input type="submit" value="อัพเดต" className="btn btn-primary"/>
            </form>
    )
    //กำหนดค่าให้กับ state
    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value});
    }
    // http://localhost:5500/api/blog/slug => put
    const submitForm=(e)=>{
        e.preventDefault();
        console.log("API URL = ",process.env.REACT_APP_API)
        axios
        .put(`${process.env.REACT_APP_API}/blog/${slug}`,{title,content,author},
        {
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(response=>{
            Swal.fire('แจ้งเตือน',"อัพเดตบทความเรียบร้อย",'success')
            const {title,content,author,slug} = response.data
            setState({...state,title,author,slug})
            setContent(content)
        })
        .catch(err=>{
            alert(err)
        })
    }
    return (
        <MDBContainer fluid className='card-BG'>
        <MDBNavbar fixed='top' light bgColor='light'>
            <MDBContainer fluid>
                <MDBBreadcrumb style={{ marginLeft: '80px', }}>
                    <MDBBreadcrumbItem>
                        <Link to="/" >Home</Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                        <Link to="/intro" >Intro</Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active className="fw-bold text-primary">
                        แก้ไขบทความ : {title}
                    </MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBContainer>
        </MDBNavbar>
        <nav className='navbar navbar-expand-lg navbar-light bg-light breadcrumb-blog '>
            <MDBContainer fluid>

            </MDBContainer>
        </nav>
        <MDBContainer>

            <MDBRow>


                <MDBCol md='2' className='col-example'>

                    <div className="fixed-top sidebar">  <Link to="/intro"><img style={{ height: '50px' }} src='https://cdn.discordapp.com/attachments/556546837247426635/937082320966529095/Logo1.png' />
                    </Link></div>
                    <img className='img-logoblog' style={{ height: '50px' }} src='https://cdn.discordapp.com/attachments/556546837247426635/937082320966529095/Logo1.png' />
                </MDBCol>
                <MDBCol md='8' className='col-example'>
                <div className='d-flex justify-content-center margin-imgblog'>
                                <div>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBZgpadvnLQBPqEzSM5yQ32yOUqH5tGtEFKpGIiqQ8ReSGPQHn-N8XvxAjHoZ9lBFu_g&usqp=CAU' style={{ width:'600px' }} className='img-fluid shadow-4' alt='...' />
                                    <p class="note note-light mt-3">
                                        <strong>Note:</strong> ไม่มีระบบ<strong> อัพรูป</strong> ให้ไปเพิ่มที่ database เอง
                                    </p>
                                </div>
                                <div>

                                </div>
                            </div>
                {showUpdateForm()}
                    <div style={{height:'40px'}}></div>
                </MDBCol>

                <MDBCol md='2' className='col-example'>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
       
    </MDBContainer>
        
      );
}

export default EditComponent;