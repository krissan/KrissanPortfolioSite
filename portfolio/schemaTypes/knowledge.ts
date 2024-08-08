import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'knowledge',
  title: 'Knowledge',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
    defineField({
      name: 'iconLib',
      title: 'IconLib',
      type: 'string',
    }),
    defineField({
      name: 'iconImg',
      title: 'IconImg',
      type: 'image',
    }),
  ],
})
