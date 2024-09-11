import {defineCliConfig} from 'sanity/cli'
import {environment} from '../src/environments/environment.prod'

export default defineCliConfig({
  api: {
    projectId: environment.sanityProjectId,
    dataset: environment.dataset
  }
})
