import { BiSolidCarousel } from 'react-icons/bi';

const carousel = {
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  icon: BiSolidCarousel,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
};

export default carousel;
