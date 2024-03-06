import React from "react";

export default function Footer({
}) {
  return (
  <div className="page-foot">
    <div className="line_box holder"><p></p></div>
      <ul className="nav-list">
        <li className="nav-item"><a href="#">BO. MAGAZINE</a></li>
        <li className="nav-item"><a href="#">OK. BLOG</a></li>
        <li className="nav-item"><a href="#">CONTACT</a></li>
        <li className="nav-item"><a href="#">READ ME</a></li>
      </ul>
      <div className="search">
        <p>Get the latest news and various benefits here. </p>
        <input type="text" placeholder='E-mail'/>
        <button>Subscribe</button>
      </div>
    </div>
  );
}