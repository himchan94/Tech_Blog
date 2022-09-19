export type Tag = {
  color: string;
  id: string;
  name: string;
};

export type Cover = {
  url: string;
};

export type Document = {
  id: string;
  url: string;
  slug: string;
  cover: Cover;
  title: string;
  tags: Tag[];
  description: string;
  date: string;
};

export type DocumentDetail = {
  information: Document;
  markdown: string;
};
