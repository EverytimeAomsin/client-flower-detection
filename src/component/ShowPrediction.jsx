import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShowPrediction = ({ predictedData }) => {
  const [detail, setDetail] = useState("");
  const [flower, setFlower] = useState("");
  const [bloglink, setBloglink] = useState("");
  const [check, setcheck] = useState("T");

  const Probability = predictedData.Probability;
  if (predictedData.Flower === "ดอกทานตะวัน ..." && check === "T") {
    // setBlog("/intro/blog/(sunflower)")
    setDetail("รายละเอียดดอกทานตะวัน");
    setBloglink("/intro/blog/(sunflower)")
    setFlower("ดอกทานตะวัน")
    setcheck("F")
  }
  if (predictedData.Flower === "ดอกกุหลาบ (r..." && check === "T") {
    setBloglink("/intro/blog/(sunflower)")
    setcheck("F")
  }
  
  let ProbabilityFormatted = parseFloat(Probability).toFixed(2);
  return (
    <>
      <h4 className='Kanit-regular text-center'>ผลลัพธ์</h4>
      <h4 className='Kanit-regular'>ชนิดดอกไม้ : <span className="lightfont text-decoration-underline">{flower}</span></h4>
      <h4 className='Kanit-regular'>ความแม่นยำ : <span className="lightfont text-decoration-underline">{ProbabilityFormatted * 100} %</span></h4>
      <h4 className='Kanit-regular'>บทความที่เกี่ยวข้อง : <span className="lightfont text-decoration-underline"><Link to={bloglink} >{detail} </Link></span></h4>
    </>
  );
};

export default ShowPrediction;
