import React, { useEffect } from 'react';
import Post from './Post';


export default function PostList({post}) {
  const postInOrder = [
    ...post
  ];

  useEffect(() => {
    var postList = document.querySelector('.post-list');
    var postItems = document.querySelectorAll('.post-list > .post-item');

    if (postList) {
      postList.classList.add('on');
    }

    postItems.forEach(function(postItem, i) {
      postItem.style.setProperty("--char-index", i);
    });
  }, []);

  return (
    <ul id="columns" className="post-list">
      {postInOrder.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
