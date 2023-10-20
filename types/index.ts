import { PortableTextBlock } from 'sanity';

export type AboutType = {
  _id: string;
  about: PortableTextBlock[];
  image: {
    alt: string;
    image: string;
  };
};

export type TestimonialType = {
  _id: string;
  quote: string;
  author: string;
};

export type ProfileType = {
  _id: string;
  name: string;
  about: PortableTextBlock[];
  image: {
    alt: string;
    image: string;
  };
};

export type CarouselType = {
  _id: string;
  description: string;
  images: {
    alt: string;
    image: string;
  }[];
};
