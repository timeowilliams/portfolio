import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';

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
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'nested', of: Image, required: false },
    featured: { type: 'boolean', of: Image, required: false },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Posts],
});
