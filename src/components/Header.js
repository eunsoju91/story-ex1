import React from "react";

// Images
import logo from '../assets/images/logo.png';

export default function Header({
}) {
  return (
    <div className="page-head">
      <div className="page-util">
        <ul className="util-list">
          <li className="util-item"><a href="#">Login</a></li>
          <li className="util-item"><a href="#">Join</a></li>
        </ul>
      </div>      
      <h1 className="page-subject">
        <a href="#"><img src={logo} alt="BOOK" /></a>
      </h1>
      <div className="page-navi">
        <ul className="gnb-list">
          <li className="gnb-item"><a href="#">BO. MAGAZINE</a></li>
          <li className="gnb-item"><a href="#">OK. BLOG</a></li>
          <li className="gnb-item"><a href="#">CONTACT</a></li>
          <li className="gnb-item"><a href="#">READ ME</a></li>
        </ul>
      </div>
      <div className="page-info">
        <ul className="data-list">
          <li className="data-item">Tel. 000-0000-0000</li>
          <li className="data-item">Fax. 00-0000-0000</li>
          <li className="data-item">E-mail. book@book.coom</li>
          <li className="data-item">Addr. Seoul, Korea</li>
          <li className="data-item">Hosting by I'MWEB</li>
        </ul>
      </div>
      <div className="page-sns">
        <ul className="data-list">
          <li className="data-item facebook">
            <a href="#">
              <svg id="그룹_4338" data-name="그룹 4338" xmlns="http://www.w3.org/2000/svg" width="11.007" height="21.08" viewBox="0 0 11.007 21.08">
                <path id="패스_233" data-name="패스 233" d="M37.163,166.95c.652-.022,1.3-.006,1.959-.007h.27v-3.4c-.35-.035-.715-.086-1.079-.1-.67-.029-1.341-.062-2.012-.048a4.936,4.936,0,0,0-2.838.877,4.248,4.248,0,0,0-1.705,2.837,9.971,9.971,0,0,0-.119,1.457c-.019.763,0,1.525,0,2.288v.286H28.385v3.794h3.232v9.537h3.949V174.95h3.22c.166-1.261.327-2.51.5-3.811-.26,0-.492,0-.725,0-.915,0-3.018,0-3.018,0s.009-1.881.032-2.7C35.6,167.324,36.266,166.982,37.163,166.95Z" transform="translate(-28.385 -163.393)" fill-rule="evenodd"/>
              </svg>
            </a>
          </li>
          <li className="data-item insta">
            <a href="#">
              <svg id="그룹_4340" data-name="그룹 4340" xmlns="http://www.w3.org/2000/svg" width="19.02" height="19.01" viewBox="0 0 19.02 19.01">
                <g id="그룹_768" data-name="그룹 768">
                  <path id="패스_235" data-name="패스 235" d="M100.866,168.681a5.039,5.039,0,0,0-1.538-3.245,5.268,5.268,0,0,0-3.486-1.416,68.692,68.692,0,0,0-9.408.1,4.8,4.8,0,0,0-4.114,3.694c-.453,1.618-.363,9.077-.1,10.676a4.815,4.815,0,0,0,3.82,4.148c1.5.386,8.873.337,10.528.07a4.822,4.822,0,0,0,4.166-3.8C101.171,177.248,101.019,170.18,100.866,168.681Zm-1.75,9.5a3.22,3.22,0,0,1-3.027,2.873c-1.534.168-8.385.26-9.809-.138a3.116,3.116,0,0,1-2.365-2.686,63.49,63.49,0,0,1,0-9.6,3.213,3.213,0,0,1,3.014-2.86,67.075,67.075,0,0,1,9.362.038,3.22,3.22,0,0,1,2.867,3.031A68.243,68.243,0,0,1,99.116,178.185Zm-7.6-9.642a4.876,4.876,0,1,0,4.873,4.879A4.876,4.876,0,0,0,91.513,168.543Zm-.033,8.027a3.154,3.154,0,1,1,3.181-3.126A3.155,3.155,0,0,1,91.48,176.569Zm6.241-8.211a1.142,1.142,0,1,1-1.139-1.145A1.142,1.142,0,0,1,97.721,168.358Z" transform="translate(-82.002 -163.912)"/>
                </g>
              </svg>
            </a>
          </li>
          <li className="data-item twiter">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="19.612" height="15.959" viewBox="0 0 19.612 15.959">
                <g id="ico_gjcenter_twitter_2" transform="translate(0 -3.756)">
                  <path id="패스_234" data-name="패스 234" d="M60.032,177.575a4.04,4.04,0,0,1-3.749-2.8,4.012,4.012,0,0,0,1.728-.051.481.481,0,0,0,.057-.028,4.017,4.017,0,0,1-2.616-1.848,3.919,3.919,0,0,1-.591-2.144,3.956,3.956,0,0,0,1.793.489,4.05,4.05,0,0,1-1.658-2.445,3.992,3.992,0,0,1,.433-2.919,11.536,11.536,0,0,0,8.311,4.211c-.024-.159-.049-.3-.065-.441a3.923,3.923,0,0,1,.589-2.636A3.873,3.873,0,0,1,67,165.147a3.922,3.922,0,0,1,3.527,1.123.206.206,0,0,0,.215.064,8.127,8.127,0,0,0,2.345-.9c.017-.01.035-.019.053-.028l.028,0a4.122,4.122,0,0,1-1.726,2.194,7.719,7.719,0,0,0,2.243-.6l.017.019c-.154.2-.3.408-.463.6a7.79,7.79,0,0,1-1.466,1.392.136.136,0,0,0-.065.128,11.019,11.019,0,0,1-.076,1.789,11.789,11.789,0,0,1-1.039,3.588,11.582,11.582,0,0,1-2.178,3.177,10.769,10.769,0,0,1-5.537,3.087,12.105,12.105,0,0,1-2.245.266,11.38,11.38,0,0,1-6.449-1.73l-.094-.061a8.151,8.151,0,0,0,4.031-.556A8,8,0,0,0,60.032,177.575Z" transform="translate(-54.085 -161.329)" fill-rule="evenodd"/>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}