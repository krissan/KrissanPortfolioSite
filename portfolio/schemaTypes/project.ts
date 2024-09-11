import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      title: 'ProjectTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectImage',
      title: 'ProjectImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'StartDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'EndDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'site',
      title: 'Site',
      type: 'url',
    }),
    defineField({
      name: 'repo',
      title: 'Repo',
      type: 'url',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: "array",
      of: [
        defineArrayMember({
          type: 'string',
          name: 'icon',
          })],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
