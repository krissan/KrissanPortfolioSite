import {defineArrayMember, defineField, defineType} from 'sanity'

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
      name: 'item',
      title: 'Item',
      type: "array",
      of: [
        defineArrayMember({
          type: 'object',
          name: 'icon',
          fields: [
            {type: 'string', name: 'label'},
            {type: "iconPicker", name: 'value'},
            {type: 'image', name: "alternative"}
          ]})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
