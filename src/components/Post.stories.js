import Post from "./Post";

// Images
import post1 from '../assets/images/post1.png';

export default {
  component: Post,
  title: "Post",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    post: {
      id: "1",
      imgSrc: post1,
      alt: "post1",
      head: "Est placerat in egestas erat imperdiet",
      body: "Est placerat in egestas erat imperdietNisi scelerisque eu ultrices vitae auctor eu augue ut lectus",
    },
  },
};