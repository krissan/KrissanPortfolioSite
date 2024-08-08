import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
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
      name: 'skills',
      title: 'Skills',
      type: "array",
      of: [
        defineArrayMember({
          type: 'object',
          name: 'icon',
          fields: [
            {type: 'string', name: 'label'},
            {type: 'string', name: 'value'},
            {type: 'string', name: 'lib'},
            {type: 'image', name: "alternative"}
          ]})],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
