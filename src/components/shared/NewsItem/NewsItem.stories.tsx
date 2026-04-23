import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { NewsItem } from "./NewsItem";

type NewsItemStoryProps = ComponentProps<typeof NewsItem>;

const meta: Meta<typeof NewsItem> = {
  title: "Components/shared/NewsItem",
  component: NewsItem,
  argTypes: {
    newsItem: {
      control: "object",
      description: "Obiekt zawierający dane artykułu",
    },
  },
};

export default meta;

type Story = StoryObj<typeof NewsItem>;

const storyNewsItem: NewsItemStoryProps["newsItem"] = {
  id: "1",
  title: "Lorem ipsum",
  publishedAt: "2024-12-12",
  content: {
    root: {
      type: "root",
      children: [
        {
          type: "paragraph",
          version: 1,
          children: [
            {
              type: "text",
              text: "Lorem ipsum dolor sit amet consectetur. Imperdiet est libero faucibus sed nullam nibh tempus massa ipsum.",
              version: 1,
            },
          ],
        },
      ],
      direction: "ltr",
      format: "left",
      indent: 0,
      version: 1,
    },
  },
  slug: "lorem-ipsum",
  createdAt: "2024-12-12T00:00:00.000Z",
  updatedAt: "2024-12-12T00:00:00.000Z",
};

export const Default: Story = {
  args: {
    newsItem: storyNewsItem,
  },
};
