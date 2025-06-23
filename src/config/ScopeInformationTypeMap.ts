import { SearchScope } from '../enums/SearchScope';

export type InformationType = 'materials' | 'help';

export const informationTypeMap: { [key in SearchScope]: InformationType } = {
  article: 'materials',
  artmuseum: 'materials',
  catalog: 'materials',
  database: 'materials',
  dpul: 'materials',
  findingaids: 'materials',
  journals: 'materials',
  libanswers: 'help',
  libguides: 'help',
  pulmap: 'materials',
  staff: 'help',
  website: 'help'
};
