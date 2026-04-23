import type { CollectionConfig } from "payload";

import { slugify } from "@/utils";

const formatSlug = (value?: string, fallback?: string) => {
  if (value) return slugify(value);
  if (fallback) return slugify(fallback);
  return undefined;
};

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: "Aktualność",
    plural: "Aktualności",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Tytuł",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Treść",
      required: true,
    },
    {
      name: "featuredImage",
      type: "upload",
      label: "Obraz tytułowy",
      relationTo: "media",
    },
    {
      name: "publishedAt",
      type: "date",
      label: "Data publikacji",
      defaultValue: () => new Date(),
    },

    {
      name: "slug",
      type: "text",
      label: "Slug",
      admin: {
        description: "Generowany automatycznie na podstawie tytułu.",
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => formatSlug(value, siblingData?.title),
        ],
      },
      unique: true,
    },
    {
      name: "createGallery",
      type: "checkbox",
      label: "Utwórz galerię",
      defaultValue: false,
    },
    {
      name: "galleryTitle",
      type: "text",
      label: "Tytuł galerii",
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
    },
    {
      name: "gallerySlug",
      type: "text",
      label: "Slug galerii",
      admin: {
        description: "Generowany automatycznie na podstawie tytułu galerii.",
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) =>
            formatSlug(value, siblingData?.galleryTitle),
        ],
      },
    },
    {
      name: "galleryImages",
      type: "array",
      labels: {
        singular: "Zdjęcie galerii",
        plural: "Zdjęcia galerii",
      },
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Zdjęcie",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
          label: "Podpis",
        },
      ],
    },
    {
      name: "linkedGallery",
      type: "relationship",
      label: "Powiązana galeria",
      relationTo: "galleries",
      admin: {
        readOnly: true,
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
    },
  ],
};
