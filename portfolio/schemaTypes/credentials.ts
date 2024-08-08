import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'credentials',
  title: 'Credentials',
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
      name: 'description',
      title: 'Description',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
