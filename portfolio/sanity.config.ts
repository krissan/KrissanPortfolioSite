import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { iconPicker } from 'sanity-plugin-icon-picker';
import { environment } from '../src/environments/environment.prod';

export default defineConfig({
  name: 'default',
  projectId: environment.sanityProjectId,
  dataset: environment.dataset,
  plugins: [structureTool(), visionTool(), iconPicker()],

  schema: {
    types: schemaTypes,
  },
})
