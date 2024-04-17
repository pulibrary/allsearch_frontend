import { SearchScope } from '../enums/SearchScope';

const map: { [key in SearchScope]: string[] } = {
  article: ['format', 'creator'],
  artmuseum: [],
  catalog: ['format', 'creator', 'publisher'],
  database: ['description'],
  dpul: ['format', 'creator'],
  findingaids: ['format'],
  journals: ['format', 'creator', 'publisher'],
  libanswers: ['creator'],
  libguides: ['description'],
  pulmap: ['format', 'creator', 'publisher'],
  staff: [],
  website: ['description']
};
export default map;
