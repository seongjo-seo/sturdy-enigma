import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import {BsPersonCircle} from "react-icons/bs";
import "./MemberHeader.css"

// Header 부분
const MemberHeader = () => {
  return (
    <>
      <div className="headerContainer">
        <Link to={"/"} className="headerText">Home</Link>
        <div className="member-photo">
        <BsPersonCircle/>
        <img src="" alt="..."/>
        </div>
        <div className="headerIdBox">
          아이디
        </div>
      </div>
    </>
  );
};

export default MemberHeader;
