import { GalleryData } from "../Gallery";

export const mockGalleries: GalleryData[] = [
  {
    id: 1,
    subtitle: "Zjazd lorem ipsum",
    date: "18 sierpnia, 2020",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Zjazd 1 - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 2,
    subtitle: "Uroczystość rocznicowa",
    date: "15 lipca, 2020",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Uroczystość - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 3,
    subtitle: "Spotkanie kombatantów",
    date: "10 czerwca, 2020",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Spotkanie - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 4,
    subtitle: "Wizyta delegacji",
    date: "5 maja, 2020",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Wizyta - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 5,
    subtitle: "Konferencja historyczna",
    date: "20 kwietnia, 2020",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Konferencja - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 6,
    subtitle: "Wydarzenie specjalne",
    date: "12 marca, 2020",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Wydarzenie - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 7,
    subtitle: "Obchody święta",
    date: "28 lutego, 2020",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Obchody - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 8,
    subtitle: "Ceremonia pamięci",
    date: "15 stycznia, 2020",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Ceremonia - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 9,
    subtitle: "Gala rocznicowa",
    date: "5 grudnia, 2019",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Gala - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 10,
    subtitle: "Spotkanie pokoleniowe",
    date: "20 listopada, 2019",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Spotkanie pokoleniowe - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 11,
    subtitle: "Warsztat edukacyjny",
    date: "10 października, 2019",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Warsztat - Zdjęcie ${i + 1}`,
    })),
  },
  {
    id: 12,
    subtitle: "Wyjazd studyjny",
    date: "1 września, 2019",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: "/images/placeholder_image.webp",
      alt: `Wyjazd - Zdjęcie ${i + 1}`,
    })),
  },
];
