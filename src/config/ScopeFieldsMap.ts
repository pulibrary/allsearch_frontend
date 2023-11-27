import { SearchScope } from '../enums/SearchScope';

const map: { [key in SearchScope]: string[] } = {
  article: ['format', 'creator'],
  artmuseum: [],
  'best-bet': ['description'],
  catalog: ['format', 'creator', 'publisher'],
  database: ['description'],
  dpul: ['format', 'creator'],
  findingaids: ['format'],
  libanswers: ['creator'],
  libguides: ['description'],
  pulmap: ['format', 'creator', 'publisher'],
  website: ['description']
};
export default map;
