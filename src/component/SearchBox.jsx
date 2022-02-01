import React, { useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';

const SearchBox = ({ setSearchState }) => {
  const [inputUrl, setInputUrl] = useState("");

  const handleChange = function (e) {
    setSearchState(e.target.value);
    setInputUrl(e.target.value);
  };
  const handleClear = function () { };
  return (
    <>
      <h3 className='text-center text-light'>ใส่ลิงก์รูปภาพ</h3>
      <MDBInput
        value={inputUrl}
        onChange={handleChange.bind(this)}
        label='กรอกหรือวางได้ลิงก์ที่นี่' id='typeText' type='url' size='lg' contrast />
      
    </>
  );
};

export default SearchBox;
