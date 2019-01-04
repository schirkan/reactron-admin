import { IFieldDefinition } from '@schirkan/reactron-interfaces';

export const pageOptionsFields: IFieldDefinition[] = [{
  description: 'Path',
  defaultValue: '/',
  displayName: 'Path',
  name: 'path',
  valueType: 'string'
}, {
  description: 'Title',
  defaultValue: 'New Page',
  displayName: 'Title',
  name: 'title',
  valueType: 'string'
}, {
  description: 'Content',
  displayName: 'Content',
  name: 'webComponentId',
  valueType: 'webComponent'
}, {
  description: 'Page Style',
  displayName: 'Page Style',
  name: 'style',
  valueType: 'style'
}];