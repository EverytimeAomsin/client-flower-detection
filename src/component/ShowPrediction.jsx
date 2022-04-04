import React from "react";
const ShowPrediction = ({ predictedData }) => {
  const Probability = predictedData.Probability ;
  let ProbabilityFormatted=parseFloat(Probability).toFixed(2);
  return (
    <>
      <h4 className='Kanit-regular text-center'>ผลลัพธ์</h4>
      <h4 className='Kanit-regular'>ชนิดดอกไม้ : <span className="lightfont text-decoration-underline">{predictedData.Flower}</span></h4>
      <h4 className='Kanit-regular'>ความแม่นยำ : <span className="lightfont text-decoration-underline">{ProbabilityFormatted * 100} %</span></h4>
    </>
  );
};

export default ShowPrediction;
