import { SearchScope } from '../enums/SearchScope';

const map: { [key in SearchScope]: string[] } = {
  article: ['format', 'creator'],
  artmuseum: [],
  'best-bet': [],
  catalog: ['format', 'creator', 'publisher'],
  database: ['description'],
  dpul: ['format', 'creator'],
  findingaids: ['format'],
  libanswers: [],
  libguides: ['description'],
  pulmap: ['format', 'creator', 'publisher']
};
export default map;
