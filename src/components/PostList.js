
import React from 'react';
import Post from './Post';

export default function PostList({post}) {
  const postInOrder = [
    ...post
  ];
  return (
    <ul id="columns" className="post-list">
      {postInOrder.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
