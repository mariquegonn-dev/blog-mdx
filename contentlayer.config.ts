import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.{md,mdx}",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } },
    image: { type: "string", required: true },
  },
  computedFields: {
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, "")
    }
  }
}));

export default makeSource({
  contentDirPath: "./posts",
  documentTypes: [Post],
});
