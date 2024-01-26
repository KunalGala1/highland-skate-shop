import { groq } from "next-sanity";
import client from "./sanity.client";

export const getAbout = async () => {
  return client.fetch(
    groq`*[_type == 'about'][0]{
        _id,
            about,
            image {alt, "image": asset->url}
        }`
  );
};

export const getTestimonials = async () => {
  return client.fetch(
    groq`*[_type == 'testimonial']{
        _id,
            quote,
            author
        }`
  );
};

export const getProfiles = async () => {
  return client.fetch(
    groq`*[_type == 'profile']{
        _id,
            name,
            about,
            image {alt, "image": asset->url}
        }`
  );
};

export const getRetroImages = async () => {
  return client.fetch(
    groq`*[_type == 'carousel' && title == 'Retro Images'][0]{
        _id,
        description,
        images[] {
            alt,
            "image": asset->url
        }            
        }`
  );
};

export const getTimeline = async () => {
  return client.fetch(
    groq`*[_type == 'timeline'] | order(date asc){
        _id,
        "title": date,
        "cardTitle": title,
        "url": "#",
        "cardSubtitle": description,
        "cardDetailedText": description,
        "media": {
          "type": "IMAGE",
          "source":{
            "url": "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I="
          }
        } 
    }`
  );
};
