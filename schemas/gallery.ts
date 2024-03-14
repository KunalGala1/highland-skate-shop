import { BiImage } from "react-icons/bi";

const gallery = {
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: BiImage,
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alternative text",
              type: "string",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};

export default gallery;
