import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { newsType } from './newsType'
import { testimonialType } from './testimonialType'
import { serviceType } from './serviceType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, newsType, testimonialType, serviceType],
}
