import type { CollectionConfig } from 'payload'

export const Galleries: CollectionConfig = {
  slug: 'galleries',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'sourceType',
      type: 'select',
      required: true,
      defaultValue: 'manual',
      options: [
        {
          label: 'Manual',
          value: 'manual',
        },
        {
          label: 'From post',
          value: 'post',
        },
      ],
    },
    {
      name: 'sourcePost',
      type: 'relationship',
      relationTo: 'posts',
      admin: {
        condition: (_, siblingData) => siblingData?.sourceType === 'post',
      },
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
  ],
}