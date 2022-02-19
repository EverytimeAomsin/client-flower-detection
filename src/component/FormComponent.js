import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, MDBNavbar, MDBInput } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { getUser, getToken } from "../services/authorize";

const FormComponent = () => {
    const [state, setState] = useState({
        title: "",
        intro: "",
        properties: "",
        author: getUser()
    })
    const { title, author } = state

    const [content, setContent] = useState('')
    const [intro, setIntro] = useState('')
    const [properties, setProperties] = useState('')

    //กำหนดค่าให้กับ state
    const inputValue = name => event => {
        setState({ ...state, [name]: event.target.value });
    }
    const submitIntro = (event) => {
        setIntro(event)
    }
    const submitContent = (event) => {
        setContent(event)
    }
    const submitProperties = (event) => {
        setProperties(event)
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log("API URL = ", process.env.REACT_APP_API)
        axios
            .post(`${process.env.REACT_APP_API}/create`,
                { title,intro, content,properties, author },
                {
                    headers: {
                        authorization: `Bearer ${getToken()}`
                    }
                }
            )
            .then(response => {
                Swal.fire('แจ้งเตือน', "บันทึกข้อมูลบทความเรียบร้อย", 'success')
                setState({ ...state, title: "", author: "" })
                setContent("")
            })
            .catch(err => {
                Swal.fire('แจ้งเตือน', err.response.data.error, 'error')
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
                        <MDBBreadcrumbItem active className="fw-bold">
                            ชนิดดอกไม้ : {title}
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
                        <form onSubmit={submitForm}>
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
                            <MDBInput
                                label='ใส่ชื่อดอกไม้'
                                className="bg-light mt-5"
                                id='form1'
                                type='text'
                                value={title}
                                onChange={inputValue("title")} />
                            <h4 className="Kanit-regular  head-blog mt-5">รายละเอียด</h4>
                            <ReactQuill
                                value={intro}
                                onChange={submitIntro}
                                theme="snow"
                                className="pb-5 mb-3 bg-white "
                                placeholder="เขียนรายละเอียดบทความของคุณ"
                                style={{ border: '1px solid #666' }}
                            />

                            <h4 className='Kanit-regular mt-5 head-blog'>ลักษณะทั่วไป</h4>
                            <ReactQuill
                                value={content}
                                onChange={submitContent}
                                theme="snow"
                                className="pb-5 mb-3 bg-white"
                                placeholder="เขียนรายละเอียดบทความของคุณ"
                                style={{ border: '1px solid #666' }}
                            />

                            <h4 className='Kanit-regular mt-5 head-blog'>สรรพคุณ</h4>
                            <label>รายละเอียด</label>
                            <ReactQuill
                                value={properties}
                                onChange={submitProperties}
                                theme="snow"
                                className="pb-5 mb-3 bg-white"
                                placeholder="เขียนรายละเอียดบทความของคุณ"
                                style={{ border: '1px solid #666' }}
                            />
                            <input type="submit" value="บันทึก" className="btn btn-primary" />
                        </form>
                        <div style={{height:'40px'}}></div>
                    </MDBCol>

                    <MDBCol md='2' className='col-example'>
                    </MDBCol>
                </MDBRow>


                {/* <div className="container p-5">
            
            <div>
                <h1>{blog.title}</h1>
                <div className="pt-3">{renderHTML(blog.content)}</div>
                <p className="text-muted"> ผู้เขียน: {blog.author} , เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
            </div>
        </div>
         */}
            </MDBContainer>
            {/* <div className="container p-5">
                <h1>เขียนบทความ</h1>
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
                            value={content}
                            onChange={submitContent}
                            theme="snow"
                            className="pb-5 mb-3"
                            placeholder="เขียนรายละเอียดบทความของคุณ"
                            style={{ border: '1px solid #666' }}
                        />
                    </div>
                    <div className="form-group">
                        <label>ผู้แต่ง</label>
                        <input type="text" className="form-control"
                            value={author}
                            onChange={inputValue("author")}
                        />
                    </div>
                    <br />
                    <input type="submit" value="บันทึก" className="btn btn-primary" />
                </form>
            </div> */}
        </MDBContainer>

    );
}

export default FormComponent;