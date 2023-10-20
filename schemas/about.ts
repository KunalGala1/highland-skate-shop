import { BiSolidBook } from 'react-icons/bi';

const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  icon: BiSolidBook,
  fields: [
    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
  ],
};

export default about;
