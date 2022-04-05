import React, { useState } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText } from 'mdb-react-ui-kit';
import ShowPrediction from "./ShowPrediction";

const Preview = ({ searchState }) => {
  const [predictedData, setPredictedData] = useState({
    Flower: "",
    Probability: "0",
  });

  const handlePredict = function () {
    if (searchState === "") {
      return;
    }

    console.log(searchState);
    const data = {
      ImageUrl: searchState,
    };
    const requesOptions = {
      method: "POST",
      Accept: "application/json",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "cors",
    };

    fetch(`${process.env.REACT_APP_API}/image/classify`, requesOptions).then(
      (response) => {
        if (response.status !== 200) {
          setPredictedData({
            Flower: "ขออภัยไม่สามารถระบุรูปภาพได้",
            Probability: 0,
          });
          console.log("Something went wrong!");
        } else {
          response.json().then((data) => {
            // debugger;
            setPredictedData({
              Flower: data[0].class,
              Probability: data[0].score,
            });
          });
        }
      }
    );
  };
  return (
    <>
      <div className='search-img'>
        <MDBRow className='mb-3'>
          <MDBCol md='5' className='col-example text-center'>

            <MDBCard className='mb-3' >
              <MDBCardBody>
                <MDBCardTitle><h4 className='Kanit-regular'>ภาพตัวอย่าง</h4></MDBCardTitle>

                <MDBCardText>

                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage position='bottom' src={searchState} alt='...' />
            </MDBCard>
          </MDBCol>
          <MDBCol md='2' className='col-example'>

          </MDBCol>
          <MDBCol md='5' className='col-example '>
            <MDBCard>
              <MDBCardBody>

                <ShowPrediction predictedData={predictedData} />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <div className='fixed-bottom  end-0 text-end'>
        <button className='prediction-button' onClick={handlePredict}>สแกนอีกครั้ง</button>
      </div>
    </>
  );
};
export default Preview;
