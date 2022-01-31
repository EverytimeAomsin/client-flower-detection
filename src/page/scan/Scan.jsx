import React, { useState } from "react";
import { MDBContainer } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import '../../css/Scan.css'
import SearchBox from '../../component/SearchBox'
import Preview from '../../component/Preview'

function Scan() {
  const [searchState, setSearchState] = useState("");
  return (
    <div>
      <MDBContainer fluid className='BG-intro'>
        <MDBContainer>
          <div className="d-inline-flex p-2  mt-5 " >
          <Link to="/intro"> <img style={{ height: '50px' }} src='./img/etc/Logo1.png' /></Link>
          </div>
          <div className='search-margin'>
            <SearchBox setSearchState={setSearchState}/>
          </div>
          <Preview searchState={searchState}></Preview>
        </MDBContainer>
       
      </MDBContainer>
    </div>
  );
}

export default Scan;
