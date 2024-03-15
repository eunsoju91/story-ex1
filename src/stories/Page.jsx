import React, { useEffect } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from '../components/PostList';

// Images
import post1 from '../assets/images/post1.png';
import post2 from '../assets/images/post2.png';
import post3 from '../assets/images/post3.png';
import post4 from '../assets/images/post4.png';
import post5 from '../assets/images/post5.gif';
import post6 from '../assets/images/post6.png';
import post7 from '../assets/images/post7.gif';
import post8 from '../assets/images/post8.png';
import post9 from '../assets/images/post9.png';
import post10 from '../assets/images/post10.png';
import post11 from '../assets/images/post11.png';
import post12 from '../assets/images/post12.png';

export const Page = () => {
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
    <div className="page">
      <Header />
      <div className="page-body">
        <PostList
          post={[
            {
              alt: 'post1',
              body: 'Est placerat in egestas erat imperdietNisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
              head: 'Est placerat in egestas erat imperdiet',
              id: 1,
              imgSrc: post1
            },
            {
              alt: 'post2',
              body: 'Nisi scelerisque euquisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac. We',
              head: 'Nisi scelerisque eu',
              id: 2,
              imgSrc: post2
            },
            {
              alt: 'post3',
              body: 'platea dictumst quisque sagittis purus. Pulvinar elementum integer Wells Blog Senectus et netus',
              head: 'Elit at imperdiet',
              id: 3,
              imgSrc: post3
            },
            {
              alt: 'post4',
              body: 'Elit at imperdietplatea dictumst quisque sagittis purus. Pulvinar elementum integer Wells Blog S',
              head: 'Elit at imperdiet',
              id: 4,
              imgSrc: post4
            },
            {
              alt: 'post5',
              body: 'Est placerat in egestas erat imperdiet. Consequat interdum Wells Blog Senectus et netus et males',
              head: 'Eros donec',
              id: 5,
              imgSrc: post5
            },
            {
              alt: 'post6',
              body: 'Arcu ac tortor dignissim convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam',
              head: 'facilisis. Nisi scelerisque eu ultrices vitae',
              id: 6,
              imgSrc: post6
            },
            {
              alt: 'post7',
              body: 'accumsan tortor posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas maecenas. Bibendum ne',
              head: 'nullam ac tortor',
              id: 7,
              imgSrc: post7
            },
            {
              alt: 'post8',
              body: 'Etiam erat velit scelerisque in dictum non consectetur a erat. Enim nulla aliquet porttitor lacus',
              head: 'est ultricies. Arcu ac tortor dignissim',
              id: 8,
              imgSrc: post8
            },
            {
              alt: 'post9',
              body: 'Elit at imperdietplatea dictumst quisque sagittis purus. Pulvinar elementum integer Wells Blog S',
              head: 'Elit at imperdiet',
              id: 9,
              imgSrc: post9
            },
            {
              alt: 'post10',
              body: 'platea dictumst quisque sagittis purus. Pulvinar elementum integer Wells Blog Senectus et netus',
              head: 'Elit at imperdiet',
              id: 10,
              imgSrc: post10
            },
            {
              alt: 'post11',
              body: 'erat imperdiet. Consequat interdum   Wells Blog Senectus et netus et malesuada. Nunc pulvinar sapi',
              head: 'Est placerat in egestas',
              id: 11,
              imgSrc: post11
            },
            {
              alt: 'post12',
              body: 'risque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper s',
              head: 'tempor id. A lacus',
              id: 12,
              imgSrc: post12
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};
