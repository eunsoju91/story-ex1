
import React from 'react';

import PostList from './PostList';
// import * as PostStories from './Post.stories';

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

export default {
  component: PostList,
  title: 'PostList',
  tags: ["autodocs"],
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <PostList {...args} />;

export const Default = Template.bind({});

Default.args = {
  post: [
    { id: 1, imgSrc: post1, alt: 'post1', head: 'Est placerat in egestas erat imperdiet', body: 'Est placerat in egestas erat imperdietNisi scelerisque eu ultrices vitae auctor eu augue ut lectus' },
    { id: 2, imgSrc: post2, alt: 'post2', head: 'Nisi scelerisque eu', body: 'Nisi scelerisque euquisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac. We' },
    { id: 3, imgSrc: post3, alt: 'post3', head: 'Elit at imperdiet', body: 'platea dictumst quisque sagittis purus. Pulvinar elementum integer Wells Blog Senectus et netus' },
    { id: 4, imgSrc: post4, alt: 'post4', head: 'Elit at imperdiet', body: 'Elit at imperdietplatea dictumst quisque sagittis purus. Pulvinar elementum integer Wells Blog S' },
    { id: 5, imgSrc: post5, alt: 'post5', head: 'Eros donec', body: 'Est placerat in egestas erat imperdiet. Consequat interdum Wells Blog Senectus et netus et males' },
    { id: 6, imgSrc: post6, alt: 'post6', head: 'facilisis. Nisi scelerisque eu ultrices vitae', body: 'Arcu ac tortor dignissim convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam' },
    { id: 7, imgSrc: post7, alt: 'post7', head: 'nullam ac tortor', body: 'accumsan tortor posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas maecenas. Bibendum ne' },
    { id: 8, imgSrc: post8, alt: 'post8', head: 'est ultricies. Arcu ac tortor dignissim', body: 'Etiam erat velit scelerisque in dictum non consectetur a erat. Enim nulla aliquet porttitor lacus' },
    { id: 9, imgSrc: post9, alt: 'post9', head: 'Elit at imperdiet', body: 'Elit at imperdietplatea dictumst quisque sagittis purus. Pulvinar elementum integer Wells Blog S' },
    { id: 10, imgSrc: post10, alt: 'post10', head: 'Elit at imperdiet', body: 'platea dictumst quisque sagittis purus. Pulvinar elementum integer Wells Blog Senectus et netus' },
    { id: 11, imgSrc: post11, alt: 'post11', head: 'Est placerat in egestas', body: 'erat imperdiet. Consequat interdum   Wells Blog Senectus et netus et malesuada. Nunc pulvinar sapi' },
    { id: 12, imgSrc: post12, alt: 'post12', head: 'tempor id. A lacus', body: 'risque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper s' },
  ],
};
