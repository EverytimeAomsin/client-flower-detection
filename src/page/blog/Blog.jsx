import React from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBBreadcrumb, MDBBreadcrumbItem} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import '../../css/Blog.css'
export default function Blog() {
  return (
    <MDBContainer fluid className='card-BG'>
       <nav className='navbar navbar-expand-lg navbar-light bg-light breadcrumb-blog'>
      <MDBContainer fluid>
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <Link to="/">Home</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
           <Link to="/intro">Intro</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>
          <Link to="/intro">Data</Link>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
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
                <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
                <h1 className='title-blog text-light '><span className='bg-dark '><span className='blog-titleML1'>Collection of flowers.</span></span></h1>
                <h3 ><span className='bg-dark'><span className='blog-titleC blog-titleML2'>Admin</span><span className='text-light blog-titleML3'>2020 Jan 25</span>  </span></h3>
              </div>
            </div>
            <h4 className='Kanit-regular mt-5 head-blog'>ลั่นทม หรือ ลีลาวดี</h4>
            <p className='mt-3 lightfont'>
              ลั่นทม หรือ ลีลาวดี เป็นไม้ดอกยืนต้นในวงศ์ตีนเป็ด หรือ วงศ์ไม้ลั่นทม (Apocynaceae)
              มีหลายชนิดด้วยกัน บางคนมีความเชื่อว่า ไม่ควรปลูกต้นลั่นทมในบ้านเพราะมีความเชื่อว่า เป็นอัปมงคล
              คือไปพ้องกับคำว่า 'ระทม' ซึ่งแปลว่า เศร้าโศก ทุกข์ใจ นิยมปลูกกันแพร่หลายอย่างมาก
              ชื่อพื้นเมืองอื่น ๆ ได้แก่ จำปา, จำปาลาว และจำปาขอม เป็นต้น (สำหรับชื่อภาษาอังกฤษ
              ได้แก่ Frangipani, Plumeria, Temple Tree, Graveyard Tree)

              ต้นลีลาวดีเป็นพืชนิยมปลูกเพราะดอกมีสีสันหลากหลาย สวยงาม
              ได้แก่ขาว เหลืองอ่อน แดง ชมพู สีขาวขุ่น ฯลฯ บางดอกมีมากกว่า 1 สี อาจมีมากถึงหลายสีในดอกเดียว

              ดอกลีลาวดียังเป็นดอกไม้ประจำชาติของประเทศลาว โดยเรียกว่า "ดอกจำปา"
              และพบได้มากบริเวณทางขึ้นพระธาตุที่เมืองหลวงพระบาง
              สำหรับในประเทศไทยนั้นมักพบต้นลั่นทมตามธรรมชาติทางภาคเหนือเป็นส่วนใหญ่</p>

            <h4 className='Kanit-regular mt-5 head-blog'>ลักษณะทั่วไป</h4>
            <p className='mt-3 lightfont'>
              ต้น เป็นไม้ยืนต้น มีขนาดตั้งแต่พุ่มเตี้ยแคระสูงประมาณ 0.9-1.2 เมตร
              จนถึงต้นที่สูงมาก อาจสูงถึง 12 เมตร ลำต้นแตกกิ่งก้านสขาและพุ่มใบสวยงาม
              มีน้ำยางสีขาวข้น เป็นไม้ผลัดที่สลัดใบในฤดูแล้งก่อนที่จะผลิดอกและผลิใบรุ่นใหม่
              กิ่งที่ยังไม่แก่มีสีเขียว อ่อนนุ่ม ดูเกือบจะอวบน้ำ กิ่งแก่มีสีเทามีรอยตะปุ่มตะป่ำ
              กิ่งไม่สามารถทานน้ำหนักได้ กิ่งเปราะ เปลือกลำต้นหนา ต้นที่โตเต็มที่แล้ว
              จะพัฒนาจนกระทั่งมีความแข็งแรงมากขึ้น

              ใบ เป็นใบเดี่ยว มีการเรียงตัวแบบสลับและหนาแน่นใกล้ปลายกิ่ง
              มีลักษณะแตกต่างกันไปทั้งรูปร่าง ขนาด สี และความหนาแน่น
              โดยทั่วไป ใบจะหนา เหนียวแข็ง และมีสีตั้งแต่สีเขียวอ่อนถึงสีเขียวเข้ม
              มีเส้นกลางใบแตกสาขาออกไปคล้ายขนนก ขนาดใบแตกต่างกันไม่มาก

              ช่อดอก ดอกจะผลิออกมาจากปลายยอดเหนือใบ เห็นเป็นช่อดอกใหญ่สวยงาม
              แต่ก็มีบางชนิดที่ออกช่อดอกระหว่างใบ หรือใต้ใบ
              บางชนิดห้อยลงบางชนิดตั้งขึ้น ในหนึ่งช่อจะมีดอกบานพร้อมกัน 10 – 30 ดอก
              บางต้นที่มีความสมบูรณ์เต็มที่อาจมีดอกมากกว่า 100 ดอก ต่อ 1 ช่อ
              ออกดอกประมาณเดือนกุมภาพันธ์ถึงเดือนเมษายน บางพันธุ์สามารถออกดอกได้ตลอดทั้งปี

              ดอก โดยทั่วไปจะมีขนาดใหญ่ถึงกลาง ยกเว้นบางพันธุ์ที่มีขนาดเล็ก
              กลีบดอกมี 5 กลีบ เกสรตัวผู้ เกสรตัวเมีย อยู่ลึกเข้าไปข้างใน
              ดอกมีลักษณะคล้ายท่อ ทำให้มองไม่เห็นเกสรตัวผู้และเกสรตัวเมีย โดยจะมีเกสรตัวผู้ 5 อัน อยู่ที่โคนก้านดอก
              ส่วนเกสรตัวเมียอยู่ลึกลงไปในก้านดอก เกสรตัวผู้และเกสรตัวเมียบานไม่พร้อมกัน
              ยากต่อการผสมตัวเอง ฝัก/ผลมีลักษณะคล้ายกับฝักต้นชวนชม ฝักอ่อนสีจะมีสีเขียวเมื่อแก่ฝักจะมีสีแดงถึงดำ</p>

            <h4 className='Kanit-regular mt-5 head-blog'>สรรพคุณ</h4>
            <p className='mt-3 lightfont'>
              1.ดอกลีลาวดีใช้ผสมกับพลู ทำเป็นยาแก้ไข้และไข้มาลาเรีย (ดอกลีลาวดี, เปลือกต้น)"<br />
              2.ช่วยรักษาไข้หวัด (ราก)<br />
              3.ใช้ปรุงเป็นยาแก้ไอ (เนื้อไม้)<br />
              4.ช่วยถ่ายเสมหะและโลหิต (ยางและแก่น)<br />
              5.ช่วยขับเหงื่อ แก้ร้อนใน (ราก)
            </p>
          </MDBCol>
          <MDBCol md='2' className='col-example'>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </MDBContainer>
  );
}
