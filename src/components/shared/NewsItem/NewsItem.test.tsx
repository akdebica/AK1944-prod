import React from "react";
import { render, screen } from "@testing-library/react";
import { NewsItem } from "./NewsItem";

type NewsItemProps = React.ComponentProps<typeof NewsItem>;

jest.mock("@/utils", () => ({
  formatDate: jest.fn((text: string) => text),
  extractTextFromRichText: jest.fn(() => "Test text content"),
  getExcerpt: jest.fn((text: string) => text),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: React.PropsWithChildren<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
  >) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <div data-alt={alt} data-src={src} />
  ),
}));

describe("NewsItem", () => {
  const testNewsItem: NewsItemProps["newsItem"] = {
    id: "1",
    title: "Test title",
    content: {
      root: {
        type: "root",
        children: [
          {
            type: "paragraph",
            version: 1,
            children: [{ type: "text", text: "Test content", version: 1 }],
          },
        ],
        direction: "ltr" as const,
        format: "left" as const,
        indent: 0,
        version: 1,
      },
    },
    publishedAt: "2023-10-01",
    slug: "test-title",
    createdAt: "2023-10-01T00:00:00.000Z",
    updatedAt: "2023-10-01T00:00:00.000Z",
    image: {
      id: "image-1",
      alt: "Test image",
      url: "/image-url",
      createdAt: "2023-10-01T00:00:00.000Z",
      updatedAt: "2023-10-01T00:00:00.000Z",
    },
  };

  it("renders the date", () => {
    render(<NewsItem newsItem={testNewsItem} />);

    const dateElement = screen.getByText("2023-10-01");

    expect(dateElement).toBeInTheDocument();
  });

  it("renders the excerpt and read more link", () => {
    render(<NewsItem newsItem={testNewsItem} />);

    expect(screen.getByText("Test text content")).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Czytaj więcej o aktualności: Test title",
      }),
    ).toHaveAttribute("href", "/archiwum/test-title");
  });
});
