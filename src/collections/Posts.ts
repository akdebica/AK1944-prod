import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
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
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'legacyId',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'createGallery',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'galleryTitle',
      type: 'text',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
    },
    {
      name: 'gallerySlug',
      type: 'text',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
    },
    {
      name: 'galleryImages',
      type: 'array',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
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
      name: 'linkedGallery',
      type: 'relationship',
      relationTo: 'galleries',
      admin: {
        readOnly: true,
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
    },
  ],
}