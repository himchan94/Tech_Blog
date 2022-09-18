export type Tag = {
  color: string;
  id: string;
  name: string;
};

export type Document = {
  id: string;
  url: string;
  slug: string;
  cover: string;
  title: string;
  tags: Tag[];
  description: string;
  date: string;
};

export type DocumentDetail = {
  information: Document;
  markdown: string;
};
