import { FaTimeline } from "react-icons/fa6";

const timeline = {
  name: "timeline",
  title: "Timeline",
  type: "document",
  icon: FaTimeline,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
  orderings: [
    {
      title: "Date",
      name: "date",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
};

export default timeline;
