import fs from 'node:fs';

import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import rehypePrettyCode, { type Options } from 'rehype-pretty-code';

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    width: { type: 'number', required: true },
    height: { type: 'number', required: true },
    src: { type: 'string', required: true },
  },
}));

export const Posts = defineDocumentType(() => ({
  name: 'Posts',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'nested', of: Image, required: false },
    featured: { type: 'boolean', of: Image, required: false },
  },
}));
/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'one-dark-pro',
  tokensMap: {
    fn: 'entity.name.function',
    objKey: 'meta.object-literal.key',
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
    node.properties.className = [''];
  },
};

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Posts],
  mdx: {
    esbuildOptions(options) {
      options.target = 'esnext';
      return options;
    },

    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
