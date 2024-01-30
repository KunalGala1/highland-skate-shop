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
        "cardSubtitle": "",
        "cardDetailedText": description,
        "media": {
          "type": "IMAGE",
          "source":{
            "url": image.asset->url,
          }
        } 
    }`
  );
};
