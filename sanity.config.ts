import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'highland-skate-shop',
  title: `Highland Skate Shop`,
  projectId: 'gk0b5doi',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
