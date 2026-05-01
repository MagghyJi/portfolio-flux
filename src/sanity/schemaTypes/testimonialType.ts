import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role/Position',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      type: 'number',
    }),
  ],
})
