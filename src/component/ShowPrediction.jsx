import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShowPrediction = ({ predictedData }) => {
  const [detail, setDetail] = useState("");
  const [flower, setFlower] = useState("");
  const [bloglink, setBloglink] = useState("");
  const [check, setcheck] = useState("T");

  const Probability = predictedData.Probability;
  if ( check === "T") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("ไม่พบบทความดอกไม้นี้");
    setBloglink("#")
    setFlower(predictedData.Flower)
    setcheck("F")
  }
  if (predictedData.Flower === "ดอกทานตะวัน ..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดอกทานตะวัน");
    setBloglink("/intro/blog/(sunflower)")
    setFlower("ดอกทานตะวัน")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกดาวเรือง ..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดาวเรือง");
    setBloglink("/intro/blog/(marigold)")
    setFlower("ดาวเรือง ")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกชบา (hibi..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดชบา ");
    setBloglink("/intro/blog/(hibiscus)")
    setFlower("ชบา")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกบัว (lotu..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดอกบัว");
    setBloglink("/intro/blog/(lotus)")
    setFlower("ดอกบัว")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกมะลิ (jas..." && check === "F") { 
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดมะลิ");
    setBloglink("/intro/blog/(jasmine)")
    setFlower("มะลิ")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกลีลาวดี (..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดลีลาวดี หรือ ลั่นทม");
    setBloglink("/intro/blog/(plumeria)")
    setFlower("ลีลาวดี หรือ ลั่นทม")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกไฮเดรนเยี..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดไฮเดรนเยีย หรือ ไฮเดรนเจีย");
    setBloglink("/intro/blog/(hydrangea)")
    setFlower("ไฮเดรนเยีย หรือ ไฮเดรนเจีย")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกกุหลาบ (r..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดอกกุหลาบ");
    setBloglink("/intro/blog/(rose)")
    setFlower("กุหลาบ")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกแดนดิไลออ..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดแดนดิไลออน");
    setBloglink("/intro/blog/(dandelion)")
    setFlower("แดนดิไลออน")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกทิวลิป (t..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดอกทิวลิป");
    setBloglink("/intro/blog/(tulip)")
    setFlower("ดอกทิวลิป")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกเดซี่ (da..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดอกเดซี่");
    setBloglink("/intro/blog/(common-daisy)")
    setFlower("ดอกเดซี่")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกเฟื่องฟ้า..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดอกเฟื่องฟ้า");
    setBloglink("/intro/blog/(bougainvillea)")
    setFlower("ดอกเฟื่องฟ้า")
    setcheck("z")
  }

  if (predictedData.Flower === "ดอกกาสะลอง (..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดอกกาสะลอง ");
    setBloglink("/intro/blog/(indian-cork)")
    setFlower("ดอกกาสะลอง ")
    setcheck("z")
  }
  if (predictedData.Flower === "ดอกเบญจมาศ (..." && check === "F") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดอกเบญจมาศ ");
    setBloglink("/intro/blog/(chrysanthemum)")
    setFlower("ดอกเบญจมาศ ")
    setcheck("z")
  }
 
  
  let ProbabilityFormatted = parseFloat(Probability).toFixed(2);
  return (
    <>
      <h4 className='Kanit-regular text-center'>ผลลัพธ์</h4>
      <h4 className='Kanit-regular'>ชนิดดอกไม้ : <span className="lightfont text-decoration-underline">{predictedData.Flower}</span></h4>
      <h4 className='Kanit-regular'>ความแม่นยำ : <span className="lightfont text-decoration-underline">{ProbabilityFormatted * 100} %</span></h4>
      <h4 className='Kanit-regular'>บทความที่เกี่ยวข้อง : <span className="lightfont text-decoration-underline"><Link to={bloglink} >{detail} </Link></span></h4>
    </>
  );
};

export default ShowPrediction;
