import { Client } from "@notionhq/client";
import { Document, DocumentDetail } from "../@types/schema";
import { NotionToMarkdown } from "notion-to-md";

export default class NotionService {
  client: Client;
  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({
      auth: process.env.NOTION_ACCESS_TOKEN,
    });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async getDocuments(
    db_id: string | undefined,
    searchKeyword?: string
  ): Promise<Document[]> {
    // make string type only

    let response;
    const database = db_id ?? "";

    if (searchKeyword && searchKeyword !== "") {
      response = await this.client.databases.query({
        database_id: database,
        filter: {
          and: [
            {
              property: "Published",
              checkbox: {
                equals: true,
              },
            },
          ],
          or: [
            {
              property: "이름",
              rich_text: {
                contains: searchKeyword,
              },
            },
            {
              property: "Description",
              rich_text: {
                contains: searchKeyword,
              },
            },
          ],
        },
        sorts: [
          {
            property: "Updated",
            direction: "descending",
          },
        ],
      });
    } else {
      response = await this.client.databases.query({
        database_id: database,
        filter: {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            property: "Updated",
            direction: "descending",
          },
        ],
      });
    }

    // list blog posts

    return response.results.map((res) => {
      return NotionService.documentFormatter(res);
    });
  }

  async getDocumentDeatail(
    db_id: string | undefined,
    slug: any
  ): Promise<DocumentDetail> {
    let documentDetail, markdown;

    // make string type only
    const database = db_id ?? "";

    // list of blog posts
    const response = await this.client.databases.query({
      database_id: database,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug, // slug
          },
        },
        // add option for tags in the future
      },
      sorts: [
        {
          property: "Updated",
          direction: "descending",
        },
      ],
    });

    if (!response.results[0]) {
      throw "No results available";
    }

    // grab page from notion
    const document = response.results[0];
    const mdBlocks = await this.n2m.pageToMarkdown(document.id);

    markdown = this.n2m.toMarkdownString(mdBlocks);
    documentDetail = NotionService.documentFormatter(document);
    return {
      information: documentDetail,
      markdown,
    };
  }

  private static documentFormatter(page: any): Document {
    let cover = page.cover;
    switch (cover.type) {
      case "file":
        cover = page.cover.file;
        break;
      case "external":
        cover = page.cover.external.url;
        break;
      default:
        // Add default cover image if you want...
        cover = "";
    }
    return {
      id: page.id,
      cover: cover,
      url: page.url,
      title: page.properties.이름.title[0].plain_text,
      tags: page.properties.Tags.multi_select,
      description: page.properties.Description.rich_text[0].plain_text,
      date: page.properties.Updated.last_edited_time,
      slug: page.properties.Slug.formula.string,
    };
  }
}
