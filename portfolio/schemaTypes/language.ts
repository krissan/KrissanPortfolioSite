import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [defineField({
    name: 'language',
      title: 'Language',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'langCharacter',
      title: 'LangCharacter',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'speaking',
      title: 'Speaking',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reading',
      title: 'Reading',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'writing',
      title: 'Writing',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
