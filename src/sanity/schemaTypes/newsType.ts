import {defineField, defineType} from 'sanity'

export const newsType = defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      type: 'string',
      description: 'Format: 01 JUN',
    }),
    defineField({
      name: 'category',
      type: 'string',
      initialValue: 'INSIGHTS',
      options: {
        list: [
          {title: 'Insights', value: 'INSIGHTS'},
          {title: 'Projects', value: 'PROJECTS'},
          {title: 'Studio', value: 'STUDIO'},
        ]
      }
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'A brief summary for the news feed.'
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The main content of the article.'
    }),
    defineField({
      name: 'order',
      type: 'number',
    }),
  ],
})
