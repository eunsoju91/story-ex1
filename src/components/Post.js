import React from "react";



export default function Post({
  post: { id, imgSrc, alt, head, body },
}) {
  return (
    <li className="post-item" id={`postItem-${id}`}>
      <a href="#" className="post-wrap">
        <div className="post-figure"><img src={imgSrc} alt={alt} /></div>
        <h3 className="post-head">{head}</h3>
        <p className="post-body">{body}</p>
      </a>
    </li>
  );
}