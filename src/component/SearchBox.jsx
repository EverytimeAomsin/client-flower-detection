import React, { useState } from "react";
import { MDBInput, MDBContainer, MDBFile ,MDBRow, MDBCol,MDBBtn  } from 'mdb-react-ui-kit';

import { storage } from "../services/firebase"

const SearchBox = ({ setSearchState }) => {
  const [inputUrl, setInputUrl] = useState("");

  const handleChange = function (e) {
    setSearchState(e.target.value);
    setInputUrl(e.target.value);

  };

  const handleChange2 = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleClear = function () { };
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);


  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url)
            setInputUrl(url)
            setSearchState(url)
          });
      }
    );
  };

  console.log(url);
  console.log("image: ", image);

  return (
    <>
      <MDBRow className='mb-3'>
        <MDBCol size='6' className='col-example'>
          <h3 className='text-center text-light'>ใส่ลิงก์รูปภาพ</h3>
          <MDBInput
            value={inputUrl}
            onChange={handleChange.bind(this)}
            label='กรอกหรือวางได้ลิงก์ที่นี่' id='typeText' type='url' size='lg' contrast />
        </MDBCol>

        <MDBCol size='6' className='col-example'>
          <MDBContainer>
          <h3 className='text-center text-light'>สำหรับอัปโหลดรูปภาพ</h3>
          <MDBRow className='mb-3'>
        <MDBCol size='8' className='col-example'>
        <MDBFile  id='customFile' onChange={handleChange2} />
            <progress value={progress} max="100" />
        </MDBCol>
        <MDBCol size='4' className='col-example'>
        <div class="d-grid gap-2">
      <MDBBtn onClick={handleUpload} color="secondary">Upload</MDBBtn>
    </div>   
        </MDBCol>
      </MDBRow>
      </MDBContainer>
        </MDBCol>
      </MDBRow>


    </>
  );
};

export default SearchBox;
