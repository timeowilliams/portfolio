// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
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
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    slug: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "nested", of: Image, required: false },
    featured: { type: "boolean", of: Image, required: false }
  }
}));
var rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  tokensMap: {
    fn: "entity.name.function",
    objKey: "meta.object-literal.key"
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
    node.properties.className = [""];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Posts],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]]
  }
});
export {
  Posts,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-BXYYQZ7X.mjs.map
