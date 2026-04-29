import { formatSlug } from "@/utils";
import type { CollectionConfig } from "payload";

export const Biograms: CollectionConfig = {
  slug: "biograms",
  labels: {
    singular: "biogram",
    plural: "Biogramy",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Imię i nazwisko",
      required: true,
    },
    {
      name: "pseudonym",
      type: "text",
      label: "Pseudonim",
    },
    {
      name: "birthDate",
      type: "date",
      label: "Data urodzenia",
    },
    {
      name: "deathDate",
      type: "date",
      label: "Data śmierci",
    },
    {
      name: "burialPlace",
      type: "text",
      label: "Miejsce pochówku",
    },
    {
      name: "biography",
      type: "textarea",
      label: "Biografia",
    },
    {
      name: "portrait",
      type: "upload",
      label: "Portret",
      relationTo: "media",
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      admin: {
        description:
          "Generowany automatycznie na podstawie imienia i nazwiska.",
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => formatSlug(value, siblingData?.name),
        ],
      },
      unique: true,
    },
  ],
};
