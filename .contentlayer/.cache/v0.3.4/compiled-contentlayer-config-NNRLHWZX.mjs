// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
var Image = defineNestedType(() => ({
  name: "Image",
  fields: {
    width: { type: "number", required: true },
    height: { type: "number", required: true },
    src: { type: "string", required: true }
  }
}));
var Posts = defineDocumentType(() => ({
  name: "Posts",
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    slug: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "nested", of: Image, required: false },
    featured: { type: "boolean", of: Image, required: false }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Posts]
});
export {
  Posts,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-NNRLHWZX.mjs.map
